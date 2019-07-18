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
  - `react-native run-ios` (Gives an error saying blur is linked manually but it still ran fine. Didn't test on android)
  
### Adding other modules gave similar error

- Close the bundler
- Install module
- Link it (Even though it says RN 60+ doesn't need to be linked)
- `cd ios`, `pod install` (The name of module should be in green)
- `react-native run-ios` (Gives the same error about linking manually but the app will still open)

### Interesting Notes

- The maximium blur amount for the module is 100 on iOS, for Android it is 32 (About 20 is sufficiently blurry for me personally)
- 
  
