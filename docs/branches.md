React Native Playground :: Branches
===

> A hierarchy of current and planned branches.
> Documentation about each branch should be added the to docs directory in the docs branch.

The ``*`` indicates the branch does not yet exist and is planned.
When a branch is implemented the ``*`` should be removed from the docs branch and merged in ``develop``. 

### Isolated patterns, libraries and technologies

> Should demonstrate the specific pattern, library and technology in the simplest most isolated way possible
> or clearly demonstrate how it builds on the parent.

```
develop
+-- official_init
+-- docs
+-- devops *
|   +-- devops__ci *
|   +-- devops__scripts *
|   +-- devops__makefile *
+-- nav *
+-- redux *
|   +-- redux__reselect *
|   +-- redux__middleware *
|   +-- redux__epics *
```

### Example feature implementations

> Can combine any of the above branches to achieve the example feature implementation

```
develop
+-- crypto-wallets *
```
