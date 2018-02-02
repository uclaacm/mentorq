# MentorQ

## Setting up environment for the first time
* For Mac users:
  1. Install [Homebrew](https://brew.sh/) if you haven't already. 
  2. `brew install docker`
  3. `brew install docker-compose`
* For windows users:
  1. Go to https://docs.docker.com/docker-for-windows/install/ to install Docker.
  2. Go to https://docs.docker.com/compose/install/#install-compose to install Docker Compose.
### Preferred IDE: [VS Code](https://code.visualstudio.com/)


## Overall Development Workflow
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