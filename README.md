eduZOO
======

  A zoo of learning resources
  
Offline Editing
===============

The fastest way to create new eduZOOs is using Vagrant. 

- download and install Vagrant from vagrant.com/downloads.html

- clone the eduZoo repository

- change to the root folder of the cloned repository

- type `vagrant up`

Vagrant will do a lot of things to provide you everything you need, which could take a while. Don't worry, it will start faster next time :)

After finish you can now browse to http://127.0.0.1:8083/eduZOO to enjoy your local eduZOOs. Try to change something and refresh the browser! 

When you are finished stop your machine with `vagrant hold`.

To update your machine, eg when a new version of the eduZOO-components where released just type `vagrant destroy` and then `vagrant up` to restart zour machine

