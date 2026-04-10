# Deploy & Release

Build the frontend, deploy to Firebase, update release notes, commit, tag, and push to git.

## Steps

1. **Build** — `cd frontend && npm run build`
2. **Deploy** — `cd .. && firebase deploy --only hosting`
3. **Update release notes** — Add a new entry at the top of `docs/RELEASE_NOTES.md` with the next semver version and today's date. Summarize all changes since the last release.
4. **Commit** — Stage all changed files and commit with a message summarizing the release. Do NOT add any `Co-Authored-By` lines.
5. **Tag** — `git tag vX.Y.Z` matching the release notes version
6. **Push** — `git push && git push --tags`

## Rules
- Never add `Co-Authored-By` to commit messages
- Version follows semver: patch for small fixes, minor for new features or content updates
- Always confirm the build succeeds before deploying
