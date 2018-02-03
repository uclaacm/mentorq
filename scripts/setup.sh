# Installs ESLint locally
npm install

# Creates symbolic link to run ESLint check before commits.
ln -s -f ../../scripts/pre-commit .git/hooks/pre-commit