#!/bin/sh

REPO_NAME=$(node -p -e "require('./package.json').name")
REPO_VERSION=$(node -p -e "require('./package.json').version")
REPO_TAG=v${REPO_VERSION}

if [ $(git tag -l "REPO_TAG") ]; then
  echo Tag exists: REPO_TAG
else
  REPO_TAG_MESSAGE="${REPO_TAG}: PR #${PR_NUMBER} ${PR_TITLE}"
  git tag -a ${REPO_TAG} -m "${PACKAGE_MESSAGE}"
  git push origin ${REPO_TAG}
fi

for DIRECTORY in ./packages/*/
do
  PACKAGE_NAME=$(echo ${DIRECTORY} | cut -d/ -f3)
  PACKAGE_VERSION=$(node -p -e "require('${DIRECTORY}/package.json').version")
  PACKAGE_TAG=@${REPO_NAME}/${PACKAGE_NAME}@${PACKAGE_VERSION}

  if [ $(git tag -l "$PACKAGE_TAG") ]; then
    echo Tag exists: $PACKAGE_TAG
  else
    PACKAGE_MESSAGE="${PACKAGE_TAG}: PR #${PR_NUMBER} ${PR_TITLE}"
    git tag -a ${PACKAGE_TAG} -m "${PACKAGE_MESSAGE}"
    git push origin ${PACKAGE_TAG}
  fi
done
