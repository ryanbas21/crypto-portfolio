### Git
Git is used for version control.

## Git basics
* `git status`: gets the status of untracked and tracked files, see what changes you have made
* `git add <file>`: adds the file to the stage
* `git add .`: adds all tracked / untracked files
* `git commit`: opens up vim so you can add a commit message
* `git pull origin`: <branch> pulls code from branch
* `git push origin <branch>`: pushes code to a branch
* `git checkout -b <name>`: creates a new branch name
* `git branch`: shows all branches
* `git rebase master`: would unwind changes on your current branch, apply masters changes and put your changes from your branch on top


## Good Practice
Before you start coding it is good to go to master and run `git pull upstream master`
this should pull your code from github, to your local master branch
* Then you can `git checkout <your branch>` and move to your local branch.
* Then `git rebase master` if you have changes on this branch, otherwise its a new branch and you carry those changes with you already
* Now you should have the latest code on your branch run `npm install` so you can install incase of any new packages
