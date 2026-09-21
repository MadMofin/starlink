#!/bin/bash

if [ -z "$*" ]; then
  echo '❌ Uso: yarn upload "mensaje"'
  exit 1
fi

git add -A &&
git commit -m "$*" &&
git push