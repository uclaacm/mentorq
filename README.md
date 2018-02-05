# MentorQ

## Setting up environment for the first time
* For Mac users:
  1. Install [Homebrew](https://brew.sh/) if you haven't already. 
  2. `brew install docker`
  3. `brew install docker-compose`
  4. `brew install node`
  5. Navigate to the root of this project directory and run `./scripts/setup.sh`
  6. Run `docker-compose up --build`
* For windows users:
  1. Go to https://docs.docker.com/docker-for-windows/install/ to install Docker.
  2. Go to https://docs.docker.com/compose/install/#install-compose to install Docker Compose.
  3. Go to https://nodejs.org/en/download/ to install node.js
  4. Navigate to the root of this project directory and run `./scripts/setup.sh`
  5. Run `docker-compose up --build`
### Preferred IDE: [VS Code](https://code.visualstudio.com/)


## Overall Development Workflow
This workflow is for if you want to run the entire application using Docker.
1. Navigate to the project directory
2. Make sure your Docker Daemon is running. For Mac, you'll see the whale icon on the top right corner which is the daemon, so make sure that is running.
3. Run `docker-compose up --build` when you've made changes to the code. Or omit the `--build` flag if you have made no changes.
4. Go to http://localhost:3000/

## React.js Development Workflow
It is often slow to do front-end development in a Docker container and wait for code to build. If you are only working on the frontend, run only the backend services through docker-compose, and run the frontend locally.
#### Steps:
1. Comment out the `client` configs in `docker-compose.yml`.
2. `cd client`
3. `npm install` (do this only the first time or if you change `client/package.json`)
4. `npm start`

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
* Make a new branch formatted `<your-name>/<feature-name>` to submit a pull request to master.
* Notify team that a PR has been made :)
* After a pull request is approved, rebase and squash commits before merging into master
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

## Documentation
* We are using [documentation.js](https://github.com/documentationjs/documentation) to document code.