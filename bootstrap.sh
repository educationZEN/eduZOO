#!/usr/bin/env bash

apt-get update
apt-get install -y apache2 git

cd /opt

git clone https://github.com/educationZEN/eduzoo-components.git

ln -sf /opt/eduzoo-components /var/www/eduzoo-components

ln -fs /vagrant /var/www/eduzoo