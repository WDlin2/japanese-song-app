// AI 代理 Worker —— 部署到 Cloudflare Workers 后，可让浏览器直连 opencode-go API
//
// 部署步骤（约 5 分钟，免费）：
// 1. 打开 https://dash.cloudflare.com 注册免费账号
// 2. 左侧 Workers & Pages → 创建 Worker → 把本文件全部内容粘贴进去
// 3. 设置 → 变量：新增 GO_API_KEY = 你的 opencode-go API Key
// 4. 部署，得到形如 https://xxx.workers.dev 的地址
// 5. 在「歌学日语」导入页的 AI 设置里：服务商选 opencode-go，
//    API 地址填 https://xxx.workers.dev（可留空则默认 go 直连，直连需支持 CORS），
//    API Key 随便填（代理已内置 key），模型 deepseek-v4-flash
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

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    const url = new URL(request.url);
    const apiKey = UPSTREAM_KEY || env.GO_API_KEY || "";

    if (url.pathname === "/v1/models") {
      const upstream = await fetch(`${UPSTREAM_BASE}/models`, {
        headers: { "Authorization": `Bearer ${apiKey}` }
      });
      const text = await upstream.text();
      return jsonResponse(text, upstream.status);
    }

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
