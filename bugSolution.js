After extensive investigation, I discovered the root cause was an incompatibility between a specific native module (in this example, let's assume it's 'react-native-camera') and the current version of Expo.  The prebuild process was failing silently due to a conflict during the native module linking phase.  The solution was to either downgrade the native module to a version known to be compatible with the current Expo SDK, or upgrade Expo to a version that explicitly supports the specific native module version.

**Example (Downgrading the module):**
```javascript
npm install react-native-camera@<compatible-version>
```

**Example (Upgrading Expo):**
```bash
expo upgrade
```

It's crucial to carefully review the error logs (even if they seem unhelpful) and check for compatibility issues between Expo SDK versions and installed native modules.