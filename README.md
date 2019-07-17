# Adding blur using react-native-community/blur

## Error

Invariant Violation: requireNativeComponent: "BlurView" was not found in the UIManager


### Troubleshooting

- Follow official docs for installation: https://github.com/react-native-community/react-native-blur
- Manually link: https://github.com/react-native-community/react-native-blur/issues/249

### Solution

- Deleted the app
- Cloned fresh from repo
- Ran following commands:
  - `npm i`
  - `cd ios`, `pod install` (linking doesn't work)
  - `react-native unlink @react-native-community/blur` (RN 60+ don't need to be linked)
  - `react-native run-ios` (Didn't test on android)
  

 
  
