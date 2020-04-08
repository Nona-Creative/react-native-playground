React Native Playground
===

> A minimal React Native project for experimenting and refining templates / deployment pipelines

Available commands
--- 

to see a list of available commands run:
```bash
npm run help
```

to see a list of available Make commands run:
```bash
make
```

Quick Start (iOS)
---

 1. go through all the iOS Prerequisites in [Prerequisites](docs/prerequisites.md)
 2. ``npm i`` install NPM dependencies
 3. ``npm run bundler:start`` start bundler
 4. ``npm run start:ios`` start app

### Restart with cache clear

 1. ``npm run bundler:start:reset`` restart bundler with cache reset
 2. ``npm run start:ios`` start app

Contributing
---

Before contributing please read through everything in [Contributing](docs/contributing.md)

Testing
---

```bash
npm run test
npm run test:watch
```

Additional Docs
---

 1. [Prerequisites](docs/prerequisites.md)
 2. [Contributing](docs/contributing.md)
 3. [Debugging](docs/debugging.md)
 4. [Gotchas](docs/gotchas.md)
 5. [Deployment](docs/deployment.md)
 6. [Node Version](docs/node-version.md)
 7. [Branches](docs/branches.md)
