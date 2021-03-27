#!/usr/bin/env bash
now=$(date -u)
sed -i "s/DATE_TIME/$now/g" ./build/index.html
cat ./build/index.html