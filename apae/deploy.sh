#!/bin/bash

ng build --prod=true --output-path dist --base-href /site-apae/;
npx angular-cli-ghpages --dir="dist";