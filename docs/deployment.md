React Native Playground :: Deployment
===

Common
---

To use the production settings run the following command:
> NOTE: you will need to use the production settings in LastPass for this build and be signed in with an AWS IAM that has access to s3 on NoNa playground AWS.

Copy these production settings into .env
```bash
source .env
```

Android
---

To build the production app run the following commands:
```bash
cd android
bundle exec fastlane prod_build
```

This will create 2 APKs in the ``android/app/build/outputs/apk/release/`` folder. It will also upload these files to the s3 bucket.

A targeted APK for:
1. ARM architecture.
2. x86 architecture.

Upload both ARM APK and x86 APK. Google Play will install the appropriate one when people download the app.

iOS
---

To deploy the production app to App Store Connect run the following commands:
```bash
cd ios
bundle exec fastlane certificates #only needs to run once
bundle exec fastlane prod_deploy
```

...
