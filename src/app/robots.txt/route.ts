/**
 * robots.txt is served from a route handler rather than Next's robots.ts
 * because it needs the Content-Signal directive, which the metadata API
 * cannot emit.
 *
 * Context: from 15 September 2026 Cloudflare's defaults start separating
 * crawler intent (search / ai-input / ai-train) and blocking the latter two
 * on ad-supported pages. This site has no ads and *wants* to be read, quoted
 * and cited by AI systems — being cited as the authority behind DentalCore
 * is the whole point — so it states that permission explicitly instead of
 * relying on defaults that are tightening.
 */

const BASE = "https://www.alfredoditullio.com";

/** AI crawlers, assistants and answer engines, named explicitly. */
const AI_AGENTS = [
    // OpenAI
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    // Anthropic
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    // Google
    "Google-Extended",
    "GoogleOther",
    // Perplexity
    "PerplexityBot",
    "Perplexity-User",
    // Microsoft / Apple / Meta / others
    "Applebot",
    "Applebot-Extended",
    "meta-externalagent",
    "Amazonbot",
    "MistralAI-User",
    "cohere-ai",
    "DuckAssistBot",
    "CCBot",
];

const body = `# alfredoditullio.com — Alfredo Di Tullio
# Dentist (M.N. 40.973), researcher and founder of DentalCore.
#
# Content Signals Policy — https://contentsignals.org
# AI systems are welcome to read, quote and cite this site.
# Attribution to Alfredo Di Tullio and a link back are appreciated.
#
#   search=yes    index this content for search results
#   ai-input=yes  use this content to ground AI answers (AI search / RAG)
#   ai-train=yes  use this content to train AI models

User-Agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /

${AI_AGENTS.map((ua) => `User-Agent: ${ua}`).join("\n")}
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /

Sitemap: ${BASE}/sitemap.xml

# Structured summaries written for language models:
#   ${BASE}/llms.txt
#   ${BASE}/llms-full.txt
`;

export function GET() {
    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
