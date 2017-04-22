#!/usr/bin/env bash

apt-get update
apt-get install -y build-essential
apt-get install -y curl
apt-get install -y git
apt-get install -y tmux
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
apt-get install -y nodejs
npm install -g @angular/cli
