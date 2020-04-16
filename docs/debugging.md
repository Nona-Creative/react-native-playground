Debugging
===

React Native Debugger
---

> Standalone app which provides a chrome dev tools style debugger

1. install ``react-native-debugger``:
    ```bash
    brew update && brew cask install react-native-debugger
    ```

2. start debugger ``npm run debug``

3. start app eg.
    ```bash
    npm run start:ios
    ```


Reactotron
---

> Standalone app which provides some features missing from React Native Debugger,
> ie. Network requests and Async Storage interaction

1. install on Mac using:
    ```bash
    brew cask install reactotron
    ```
    or follow the [installation guide](https://github.com/infinitered/reactotron/blob/master/docs/installing.md)

2. open app

3. start app eg.
    ```bash
    npm run start:ios
    ```


IDE Debugging
---

Debugging can be enabled in the emulator/simulator.

The debugging window will open in your browser by default when you choose the option in the emulator.

You can also listen (on ``http://localhost:8081``) to this in your IDE of choice.


Javascript Stack traces
---

Javascript stack traces will be caught on production versions as non-fatal events in Crashlytics. The stack trace is of the minified bundle. To understand where in the code this happens to be you need to use a tool such as `source-map` to un-minify the crash. 

1. ```npm i -G source-map-cli``` # to install source map
1. Get the appropriate map file for the version from CI
1. Get the line and column number from the stack trace e.g. the stack trace may read `.onPress (index.android.bundle:885:559:885)` The numbers are 885 and 559.
1. `source-map resolve index.android.js.map 885 559` # this will give the source code file and line numbers 
e.g.
```
react-native-playground/src/modules/Home/Home.js:27:24

        throw new Error('This is a test crash! Hello world')}}
```
