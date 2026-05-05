# Agent Docs

This folder contains rules and skills that AI agents (Claude, Codex, Cursor, etc.) read before working in this repository.

## Files

| File                  | Purpose                                            |
| --------------------- | -------------------------------------------------- |
| `AGENTS.md`           | Entry point — read first.                          |
| `README.md`           | This file.                                         |
| `repo-rules.md`       | Repository structure, asset rules, git workflow.   |
| `router.md`           | Which file to load for which task.                 |
| `build-page.md`       | Composing pages from sections.                     |
| `section_build.md`    | Creating a new section (component + data file).    |
| `assets.md`           | Image/icon naming, paths, Figma asset replacement. |
| `responsive_check.md` | Desktop/tablet/mobile QA checklist.                |
| `code_review.md`      | Reviewing branches and PRs.                        |
| `pr_workflow.md`      | Branch naming, PR description template.            |
| `qa-checklist.md`     | Final QA before merge.                             |
| `after_fork.md`       | Customization checklist for a fresh fork.          |

## Why these docs exist

This starter is meant to be **forked and reused** for many landing/multi-page projects. The agent docs encode the conventions that make every fork consistent — naming, structure, prerender contract, section composition. Without them every project drifts and AI agents make different decisions every time.

If you change a convention, update the doc in the same PR.
