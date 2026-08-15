// 歌学日语 代理 Worker —— 部署到 Cloudflare Workers 后，手机浏览器即可：
//  1) 直连 utaten 抓取官方注音（解决 CORS 拦截）
//  2) 直连 opencode-go API（解决 CORS 拦截）
//
// 部署步骤（约 5 分钟，免费）：
// 1. 打开 https://dash.cloudflare.com 注册免费账号
// 2. 左侧 Workers & Pages → 创建 Worker → 把本文件全部内容粘贴进去 → 部署
// 3. 得到形如 https://xxx.workers.dev 的地址（记下来）
// 4. 可选：设置 → 变量 → 新增 GO_API_KEY = 你的 opencode-go Key（仅 opencode-go 需要）
// 5. 在「歌学日语」导入页的 AI 设置里：
//    - 服务商选 opencode-go 时：API 地址填 https://xxx.workers.dev/v1，Key 随意
//    - 任意服务商：把 https://xxx.workers.dev 填入「代理地址」→ utaten 注音即可正常抓取
//
// 也支持其他 OpenAI 兼容服务：修改 UPSTREAM_BASE 与 UPSTREAM_KEY 即可。

const UPSTREAM_BASE = "https://opencode.ai/zen/go/v1";
const UPSTREAM_KEY = ""; // 留空则使用 Worker 变量 GO_API_KEY

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, content-type"
};

function jsonResponse(body, status) {
  return new Response(body, {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS }
  });
}

function htmlResponse(body, status) {
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", ...CORS_HEADERS }
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    const url = new URL(request.url);
    const apiKey = UPSTREAM_KEY || env.GO_API_KEY || "";

    // utaten 代理：/utaten?url=https://utaten.com/...
    if (url.pathname === "/utaten") {
      const target = url.searchParams.get("url") || "";
      if (!target.startsWith("https://utaten.com/")) {
        return jsonResponse(JSON.stringify({ error: "仅允许 utaten.com 地址" }), 400);
      }
      const upstream = await fetch(target, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
          "Accept-Language": "ja,zh-CN;q=0.8"
        }
      });
      const text = await upstream.text();
      return htmlResponse(text, upstream.status);
    }

    // AI 模型列表
    if (url.pathname === "/v1/models") {
      const upstream = await fetch(`${UPSTREAM_BASE}/models`, {
        headers: { "Authorization": `Bearer ${apiKey}` }
      });
      const text = await upstream.text();
      return jsonResponse(text, upstream.status);
    }

    // AI 对话
    if (url.pathname === "/v1/chat/completions" && request.method === "POST") {
      const body = await request.text();
      const upstream = await fetch(`${UPSTREAM_BASE}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
        },
        body
      });
      const text = await upstream.text();
      return jsonResponse(text, upstream.status);
    }

    return new Response("Not found", { status: 404, headers: CORS_HEADERS });
  }
};
