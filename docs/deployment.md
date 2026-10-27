# Deployment Guide

## Platform
Firebase Hosting (Google)

## Project Info

| Key              | Value                                                                      |
|------------------|----------------------------------------------------------------------------|
| Production project | `thebeautyspotma-af603` |
| Production URL | https://thebeautyspotma.com |
| Production Firebase fallback URL | https://thebeautyspotma-af603.web.app |
| Production Firebase Console | https://console.firebase.google.com/project/thebeautyspotma-af603 |
| Development project | `thebeautyspot-3e54c` |
| Development URL | https://thebeautyspot-3e54c.web.app |
| GitHub           | https://github.com/okoleg/TheBeautySpot                                    |

---

## Deploy & Release

Use an explicit project alias for every deployment. The default remains development.
Deploy feature changes to development only. Deploy to production only when the
owner explicitly asks to publish to production; a generic request to deploy or
publish does not authorize a production deployment.
This is a static React site: Firebase Hosting serves the built app, including media
and service detail pages. Pricing and package links go to Square; the former
Prices page has been removed (see [booking-links.md](booking-links.md)).
It currently uses no Firebase database, Authentication, Storage SDK,
or Firebase Analytics SDK. Production analytics is loaded through the Google tag
with the measurement ID stored in `.env.production`; Firebase web configuration
is not required for Hosting.
Contact email continues through FormSubmit, configured separately; a new domain
may require inbox activation (see [contact-form.md](contact-form.md)).

```bash
# 1. Build
cd frontend && npm run build

# 2. Deploy
cd .. && firebase deploy --only hosting --project development

# Only when the owner explicitly requests production publication:
# npm --prefix frontend run build:production
# firebase deploy --only hosting --project production

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
Hosting ignores original MOV copies; these stay in Git LFS as source assets.
Avoid publishing them or keeping excessive old releases, which can exhaust the
Hosting storage quota.

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
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**", "**/*.mov", "**/*.MOV"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

### `.firebaserc`
```json
{
  "projects": {
    "default": "thebeautyspot-3e54c",
    "development": "thebeautyspot-3e54c",
    "production": "thebeautyspotma-af603"
  }
}
```
