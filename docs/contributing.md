Contributing
===

Naming conventions
---

### GIT Branch Names

Follow the guidelines outlined in [branches](branches.md)


Pull Requests & Merging
---

 1. Branch your task branch from any existing branch
 2. Once your work is done, create a Pull Request onto that branch
 3. Create a Pull Request, this will automatically request reviews from all code owners on your target branch 
 4. Once approved, squash merge into the target branch


GIT Commit Messages
---

We are using [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages).

Additionally we will include the context (feature module name) when only changes were made to it eg.
```
"feat(Users): display list of active users"
```
```
"style(UserCreateEmailVerify): change all blue colors to red"
```
```
"refactor(Transaction): make reducers more efficient"
```

> NOTE: chore refers to infrastructure, CI, scripts etc, so will never relate to a feature module, so you should never do ``"chore(SomeModule): some chore"``


Documentation
---

Add any documentation relevant to your branch to:
 - the root README (remember to keep this to a minimum)
 - any existing files in the ``docs`` directory

And add new files to ``docs`` directory as needed.
