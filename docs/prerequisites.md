React Native Playground :: Prerequisites & Setup
===

Common Prerequisites & Setup (iOS & Android)
---

Minimal system dependencies to run the project:

 - [Brew](https://brew.sh/)
 - [Node & NPM](https://nodejs.org/en/) : ``brew install node`` or [install with NVM](https://github.com/creationix/nvm)
 - [Watchman](https://facebook.github.io/watchman/) : ``brew install watchman``

Install Ruby dependencies:

 - ``gem install bundler``
 - ``bundle install``

iOS Prerequisites & Setup
---

### Setup

[Install XCode](https://developer.apple.com/xcode/)

### Install extensions

##### Install Pods

```bash
cd ios
gem install bundler # This may require sudo depending on your Ruby setup
bundle install
bundle exec pod install
```

### Physical device setup
   
1. In the ``/ios`` directory, run ``fastlane certificates`` to install certificates
2. To run the api on a physical device:
   1. setup a [ngrok](https://dashboard.ngrok.com/user/signup) account and get your ngrok auth token.
   2. Paste your auth token in ngrok.yml(please note you will might need to run ``npm run init`` again).
   3. Then run ``npm run start:ngrok:local`` which will start the bundler with the ngrok api url

### Adding a physical device

> NOTE: to be able to run the app in development mode on iOS you need a valid certificate.

1. Get the UDID for your phone. [Use iTunes](https://www.imore.com/how-find-your-iphones-serial-number-udid-or-other-information)
2. Add your device to the ``devices`` variable in (``ios/fastlane/Fastfile``)
3. Run ``fastlane register_new_devices`` in the `/ios` directory

#### Use legacy build

App requires xcode to use legacy build. In order to set this up:
File < Workspace settings  < Build settings: Set as Legacy build system.

### Link extensions

```bash
react-native link <EXTENSION NAME>
```

Android Prerequisites & Setup
---

### Setup

1. [Install Android Studio](https://developer.android.com/studio/index.html)

   Including:
   - Android SDK
   - Android SDK Platform
   - Performance (Intel ® HAXM)
   - Android Virtual Device
   - Android NDK (for node integration)

2. [Install ninja](https://github.com/ninja-build/ninja/wiki/Pre-built-Ninja-packages)

3. Export android environment variables:

    ```bash
    export ANDROID_HOME=/Users/<username>/Library/Android/sdk/
    export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
    ```

4. Setup Emulator

 - Open Android Studio and open this project or start a new project
 - Once Android Studio has finished it's initialization, ``AVD Manager`` should be available under ``Tools``
 - Open ``AVD Manager``
 - Click ``create new virtual device``
 - Select target device
 - Download required images
 - ``Finish`` (you should now be able to start the app on the emulator using ``npm run start:android``)

[reference](https://developer.android.com/studio/run/emulator)
