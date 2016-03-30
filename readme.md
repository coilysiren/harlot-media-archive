Code setup (command line)

    bash <(curl -s https://raw.githubusercontent.com/mattstauffer/makeItCraft/master/makeItCraft.sh)
    git clone git@gitlab.com:cyrin/harlot-media.git tmp
    mv tmp/.git .git
    git checkout .

    cp craft/config/env-example.php craft/config/.env.php
    # edit craft/config/.env.php

    ln -s /home/apps/harlot-media/bin/harlot-media-apache.conf /etc/apache2/sites-enabled/
    # edit apache2.conf

Database setup

    # in mysql console

    CREATE DATABASE admin_harlot_craftdb
      DEFAULT CHARACTER SET utf8
      DEFAULT COLLATE utf8_general_ci;

    CREATE USER 'craftcms' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON admin_harlot_craftdb.* To 'craftcms' IDENTIFIED BY 'password';
    FLUSH PRIVILEGES;

    # on command line

    bash bin/copy-remote-database.bash

Finished the installation (in a web browser) by going to:

    http://localhost/index.php?p=admin/install
