#!/bin/bash

RELEASE_TYPE=$1
[ -z $RELEASE_TYPE ] && \
    echo "Usage: ./release.sh major|minor|patch" && \
    exit 1

npm run build
npm version $RELEASE_TYPE
npm publish
git push origin --tags