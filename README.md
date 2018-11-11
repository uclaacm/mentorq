# MentorQ

## Setting up environment for the first time

* For Mac users:
  1. Install [Homebrew](https://brew.sh/) if you haven't already.
  2. `brew install docker`
  3. `brew install docker-compose`
  4. `brew install node`
  5. `brew install yarn`
* For windows users:
  1. Install Docker
			* Windows 10 Pro: https://docs.docker.com/docker-for-windows/install/
			* Windows 10 Home and below:
				https://docs.docker.com/toolbox/toolbox_install_windows/
	2. If you have Windows 10 Pro and don't have `docker-compose` yet, go to
		 https://docs.docker.com/compose/install/#install-compose to install Docker
		 Compose.
  3. Go to https://nodejs.org/en/download/ to install node.js
	4. Go to https://yarnpkg.com/lang/en/docs/install/#windows-stable to install
		 Yarn.

With those steps done:

1. Navigate to the root of this project directory and run `./scripts/setup.sh`
2. Run `yarn` in the root of this project directory.
3. Run `yarn` in `api/`.
4. Run `yarn` in `client/`.

Note: for steps 2-4 you only need to do that 1) when you first set up the
server and 2) whenever we update packages. If in doubt, do it again won't hurt.

## Overall Development Workflow

1. Navigate to the project directory
2. Make sure your Docker Daemon is running. For Mac, you'll see the whale icon
	 on the top right corner which is the daemon, so make sure that is running.
3. Run `docker-compose up --build`. You will need to restart the server every
	 time you change the backend code, through <kbd>Ctrl+C</kbd> and running that
	 command again.
4. In another terminal tab/window: `cd client` and then `yarn start`.
5. Go to http://localhost:3000/

## Git Development Workflow
1. `git checkout -b <your-name>/<feature-name>`
2. Code until you hit a good checkpoint. Make sure there are no errors/broken builds.
3. `git status` shows you what files you have changed.
4. Commit your files
    * If you want to commit all modified files:
      ```
      git add -A
      ```
    * Otherwise to add the particular files you want to commit:
      ```
      git add <file1> <file2> <...>
      ```
5. `git commit -m "some commit message"`
6. Push your branch
    * For brand new branches:
      ```
      git push -u origin <branch name>
      ```
    * For previously pushed branches:
      ```
      git push
      ```
    * you can find your branch names with `git branch`

## Pull Request Workflow
* Make a new branch formatted `<your-name>/<feature-name>` to submit a pull
	request to master.
* Notify team that a PR has been made :)
* After a pull request is approved, rebase and squash commits before merging
	into master
    1. Checkout to master

    ```shell
    git checkout master
    ```
    2. Pull the most recent changes from master

    ```shell
    git pull
    ```

    3. Check into the branch of the PR

    ```shell
    git checkout <your branch name>
    ```

    4. Rebase and squash commits:

    ```shell
    git rebase master
    ```

    5. Push changes to GitHub.

    ```shell
    git push -f
    ```
    **Do _NOT_ force push to other people's branches or shared branches**
