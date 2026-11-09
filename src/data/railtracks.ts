// Railtracks case study on /projects/. Numbers come from the Nov 2026 research pass over git
// history and the GitHub API; update `asOf` when refreshing them.
// Note: GitHub's contributor graph shows Aryan as #1, but that's because another maintainer's
// commits are split across emails. Merged, he's #2, so don't change this to #1.
const repo = 'https://github.com/RailtownAI/railtracks';

export const railtracks = {
  asOf: 'Nov 2026',
  role: 'Core contributor since v0.1 · Railtown AI',
  summary:
    "Railtown AI's open-source Python framework for building AI agents. I've worked on it since before v1.0: I led the LLM layer's move off LlamaIndex, added streaming, built the human-in-the-loop verifiers and designed the new decision-model primitive.",
  stats: [
    { value: '235', label: 'GitHub stars' },
    { value: '~1.6k', label: 'PyPI downloads / month' },
    { value: '#2', label: 'contributor by commits' },
    { value: '56', label: 'merged PRs' },
    { value: '24', label: 'releases with my code' },
    { value: '65', label: "teammates' PRs reviewed" },
  ],
  prs: [
    { number: 1644, title: 'Decision models: rt.decision_node and rt.decisions', detail: 'new primitive, +4.9k lines, 152 tests' },
    { number: 150, title: 'Decoupled the LLM layer from LlamaIndex', detail: 'removed 4 dependencies, 47 files' },
    { number: 651, title: 'Token-by-token streaming, sync and async', detail: 'every node type, +2.2k lines' },
    { number: 1489, title: 'Human-in-the-loop pre- and post-verifiers', detail: 'with #1401, #1569 and #1530' },
    { number: 233, title: 'Unified tool-calling agent with call limits', detail: 'net −1.1k lines' },
    { number: 252, title: 'Test suite reorganization', detail: 'unit tests ~10× faster (76s → 7.6s)' },
  ].map((pr) => ({ ...pr, href: `${repo}/pull/${pr.number}` })),
  links: [
    { label: 'Repo', href: repo, icon: 'simple-icons:github' },
    { label: 'Docs', href: 'https://docs.railtracks.org/', icon: 'lucide:book-open' },
    { label: 'PyPI', href: 'https://pypi.org/project/railtracks/', icon: 'simple-icons:pypi' },
    { label: 'My merged PRs', href: `${repo}/pulls?q=is%3Apr+author%3AAryan-Railtown+is%3Amerged`, icon: 'lucide:git-pull-request' },
  ],
};
