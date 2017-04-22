#!/bin/bash

echo "starting frontend server..."

set -x
cd /vagrant
ng serve --host 0.0.0.0
set +x
