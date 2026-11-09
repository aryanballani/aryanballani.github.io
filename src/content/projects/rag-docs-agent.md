---
title: Railtracks Docs Agent
summary: A retrieval-augmented assistant that answers developer questions about Railtracks, grounded only in the official docs and citing its sources. Designed and built solo in about two weeks.
highlights:
  - pgvector index with incremental ingestion, re-indexed on each release by a signed GitHub webhook
  - Retrieval-first Railtracks agent with prompt-injection guardrails and a sandboxed snippet tool
  - LLM-as-judge evals; the latest run scored 6/6 grounded and helpful at ~$0.003 per answer
tech: [Python, Railtracks, Postgres, pgvector, FastAPI, Streamlit]
order: 20
group: railtown
internal: true
---
