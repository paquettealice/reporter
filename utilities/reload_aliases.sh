#!/bin/bash

echo "reloading aliases..."

set -x
cp /vagrant/utilities/.bash_aliases ~/.bash_aliases
. ~/.bash_aliases
set +x
