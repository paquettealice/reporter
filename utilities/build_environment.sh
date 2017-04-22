#!/bin/bash

echo "building environment..."

set -x
cd /vagrant/ticket-surge-frontend
sudo npm install
set +x
