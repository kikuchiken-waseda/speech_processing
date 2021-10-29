set -e
cd ./build/html
git init
git add -A
git commit -m 'deploy-page'
git push -f https://github.com/kikuchiken-waseda/speech_processing.git master:gh-pages
cd -
