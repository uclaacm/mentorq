# Installs ESLint locally
npm install --save-dev eslint
npm install --save-dev eslint-plugin-react

# Creates symbolic link to run ESLint check before commits.
ln -s -f ../../scripts/pre-commit .git/hooks/pre-commit