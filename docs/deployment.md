# Deployment Guide

## Platform
Firebase Hosting (Google)

## Project Info

| Key            | Value                              |
|----------------|------------------------------------|
| Project ID     | `thebeautyspot-3e54c`              |
| Live URL       | https://thebeautyspot-3e54c.web.app |
| Firebase Console | https://console.firebase.google.com/project/thebeautyspot-3e54c |

## First-Time Setup

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Project is already configured via `firebase.json` and `.firebaserc` — no `firebase init` needed.

## Deploy

```bash
# 1. Build the app
cd frontend && npm run build

# 2. Go back to root and deploy
cd .. && firebase deploy --only hosting
```

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
