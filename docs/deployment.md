# Deployment Guide

## Platform
Firebase Hosting (Google)

## Project Info

| Key              | Value                                                                      |
|------------------|----------------------------------------------------------------------------|
| Project ID       | `thebeautyspot-3e54c`                                                      |
| Live URL         | https://thebeautyspot-3e54c.web.app                                        |
| Firebase Console | https://console.firebase.google.com/project/thebeautyspot-3e54c            |
| GitHub           | https://github.com/okoleg/TheBeautySpot                                    |

---

## Deploy & Release (use `/deploy` skill)

```bash
# 1. Build
cd frontend && npm run build

# 2. Deploy
cd .. && firebase deploy --only hosting

# 3. Update docs/RELEASE_NOTES.md with new version entry

# 4. Commit (no Co-Authored-By lines)
git add <files>
git commit -m "vX.Y.Z — summary"

# 5. Tag and push
git tag vX.Y.Z
git push && git push --tags
```

---

## First-Time Setup

Original MOV videos use Git LFS. Install it before cloning, or run the following
inside an existing checkout to download the original assets:

```bash
git lfs install --local
git lfs pull
```

The frontend uses the compressed MP4 copies. Configure contact-form delivery
using [contact-form.md](contact-form.md) before building from a fresh checkout.

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Project is already configured via `firebase.json` and `.firebaserc` — no `firebase init` needed.

---

## Configuration Files

### `firebase.json`
```json
{
  "hosting": {
    "public": "frontend/dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

### `.firebaserc`
```json
{
  "projects": {
    "default": "thebeautyspot-3e54c"
  }
}
```
