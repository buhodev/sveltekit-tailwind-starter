# PR Workflow

## Branch naming

```text
feat/<short-slug>           feat/services-page
fix/<short-slug>             fix/header-overlap-on-mobile
chore/<short-slug>           chore/bump-deps
refactor/<short-slug>        refactor/extract-hero-section
docs/<short-slug>            docs/update-agent-rules
```

## Steps

1. `git checkout master && git pull`.
2. `git checkout -b <prefix>/<slug>`.
3. Make focused changes — one concern per branch.
4. `npm run check && npm run lint && npm run build`.
5. Commit with a short, imperative message: `Add services page`, not `services_page_done`.
6. `git push -u origin <branch>`.
7. Open PR with the template below.
8. Mark draft if `npm run build` was not run yet.

## PR description template

```markdown
## Summary

- One sentence on what changed and why.
- Note any opt-outs from prerender or new dependencies.

## Test plan

- [ ] `npm run check` passes.
- [ ] `npm run build` succeeds.
- [ ] Manual: visited / and any new route in dev preview.
- [ ] Responsive: 375 / 768 / 1280 px checked.
- [ ] Dark mode toggled and verified.

## Screenshots (if visual)

<!-- desktop + mobile -->
```

## Don'ts

- Don't push directly to `master`.
- Don't bundle unrelated changes ("while I was here…"). Open a second PR.
- Don't bypass hooks (`--no-verify`). If a hook fails, fix the issue.
- Don't force-push shared branches without coordination.
