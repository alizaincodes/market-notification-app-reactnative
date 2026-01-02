# market-notification-app-reactnative

This repository contains a React Native skeleton for the Market Notification app (Android target).

What I added:

- A minimal React Native project scaffolding (entry files, App.js)
- `src/screens/RemindersList.js` - shows sample reminders and live prices via Binance websocket skeleton
- `src/screens/Settings.js` - placeholder for ringtone/volume settings
- `src/services/binance.js` - a small Binance combined-stream WebSocket wrapper (skeleton)
- `.gitignore` ignoring node_modules and common build outputs
- `package.json` with basic dependencies and run scripts

IMPORTANT: This repo now contains code files but dependencies are not installed yet. Follow the instructions below to install React Native and run the app on Android.

Quick start (Linux) — install prerequisites first:

1. Install Node.js (16+), watchman, and Java JDK 11+, Android SDK, and Android Studio. Follow the official React Native environment docs: https://reactnative.dev/docs/environment-setup

2. Install React Native CLI globally (optional) or use npx:

```bash
# using npx (recommended):
npx react-native --version

# or install CLI globally:
# npm install -g react-native-cli
```

3. Install project dependencies (run from repo root):

```bash
npm install
```

4. Start Metro bundler:

```bash
npm run start
```

5. Run on Android (make sure an emulator or device is connected):

```bash
npm run android
```

Notes and next steps:
- The Binance websocket code uses the React Native global WebSocket and a combined stream URL. It's a small skeleton and needs reconnection logic, error handling, and persistent reminders storage (AsyncStorage).
- The UI is minimal. Next tasks: add add/edit/delete reminder flows, persistent storage, notification/ringtone handling (Android native code or libraries), background service to keep running, and reconnection/backoff logic for sockets.
# market-notification-app-reactnative