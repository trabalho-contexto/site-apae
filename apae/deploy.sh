#!/bin/bash

ng build --prod=true --output-path dist --base-href /apae/;
npx angular-cli-ghpages --dir="dist";