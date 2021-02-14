#!/bin/bash

set -e

RELEASE_TYPE=$1
[ -z $RELEASE_TYPE ] && \
    echo "Usage: ./release.sh major|minor|patch" && \
    exit 1

npm i
npm run test
npm run build
npm version $RELEASE_TYPE

node ./release-change-extension-version.js
cd vs-code-dashvar-snippets
vsce package
vsce publish

cd ..
npm publish
git push
git push origin --tags