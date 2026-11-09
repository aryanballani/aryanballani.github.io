// Railtracks case study on /projects/. Numbers are a snapshot; update `asOf` when refreshing them.
const repo = 'https://github.com/RailtownAI/railtracks';

export const railtracks = {
  asOf: 'Nov 2026',
  role: 'Top contributor · Railtown AI',
  summary:
    'An open-source framework for building resilient agentic systems. I wrote much of it from the ground up, from the LLM layer and tool calling to streaming, and I still help maintain it.',
  stats: [
    { value: '235', label: 'GitHub stars' },
    { value: '~1.6k', label: 'PyPI downloads / month' },
    { value: '#1', label: 'of 43 contributors' },
    { value: '248', label: 'commits' },
    { value: '56', label: 'merged PRs' },
    { value: '98', label: 'PRs reviewed' },
  ],
  prs: [
    { number: 150, title: 'Decoupled the LLM layer from LlamaIndex', detail: '47 files, migrated with no service interruption' },
    { number: 651, title: 'Streaming support', detail: '+2.2k lines across 37 files' },
    { number: 233, title: 'Unified tool-calling LLM with configurable call limits', detail: 'net −1.1k lines' },
    { number: 358, title: 'Union and Optional types in the tool system', detail: '25 files' },
    { number: 83, title: 'Structured output for tool-calling LLMs', detail: '14 files' },
    { number: 501, title: 'Hugging Face integration', detail: 'new model backend' },
  ].map((pr) => ({ ...pr, href: `${repo}/pull/${pr.number}` })),
  links: [
    { label: 'Repo', href: repo, icon: 'simple-icons:github' },
    { label: 'Docs', href: 'https://docs.railtracks.org/', icon: 'lucide:book-open' },
    { label: 'PyPI', href: 'https://pypi.org/project/railtracks/', icon: 'simple-icons:pypi' },
    { label: 'My merged PRs', href: `${repo}/pulls?q=is%3Apr+author%3AAryan-Railtown+is%3Amerged`, icon: 'lucide:git-pull-request' },
  ],
};
