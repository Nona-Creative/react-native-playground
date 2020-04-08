React Native Playground :: Gotchas
===

App won't build
---

If the app won't rebuild follow this:
 1. Checkout a commit you know works
 2. Delete the entire contents of `ios/build`
 3. Delete the entire contents of `Pods` including `Manifest.lock`
 4. It may be necessary to delete the `Podfile.lock` if you get a version mismatch error on `bundle exec pod install`
 5. Run `npm run reset`
 6. Optional: if Cocoapods has been updated run `bundle install`
 7. Run`bundle exec pod install`
 8. Run `npm run start:ios`
 9. Try run `npm run start:ios` again (somethings the 2nd time is the charm)

XCode 10 Build failure
---

### Problem

Currently when trying to build on XCode 10 the build fails.

### Solution

use legacy build system:
 - XCode: ``File -> Project Settings`` and choose ``legacy build system`` on ``build system``.
