set -e
cd ./build/html
git init
git add -A
git commit -m 'deploy-page'
<<<<<<< HEAD
git push -f git@github.com:kikuchiken-waseda/speech_processing.git master:gh-pages
=======
git push -f https://github.com/kikuchiken-waseda/speech_processing.git master:gh-pages
>>>>>>> f6dab7e537966c8323c54ca6a4f4615cfedac3ca
cd -
