#!/usr/bin/env bash
now=$(date -u)
sed -i "s/DATE_TIME/$now/g" ./build/index.html

ciProvider="GitHub Actions"
sed -i "s/CI_PROVIDER/$ciProvider/g" ./build/index.html