---
title: AI matching agent for an enterprise client
summary: Redesigned the retrieval pipeline of a production agent that ranks best-fit vendors for incoming opportunities.
highlights:
  - HyDE query expansion, hybrid keyword + vector search, rank fusion and an LLM reranker, chosen by an offline comparison of 4 methods
  - Fixed silent failures (swallowed errors, truncated results and queries); recall of known-good matches 38% → 46% on a 30-item set
  - Moved scoring to calibrated Railtracks decisions and cut LLM calls per re-match from 5 to 2 with caching
tech: [Python, Railtracks, FastAPI, pgvector, Azure]
order: 21
group: railtown
internal: true
---
