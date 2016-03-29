Source code setup

    bash <(curl -s https://raw.githubusercontent.com/mattstauffer/makeItCraft/master/makeItCraft.sh)
    git clone git@gitlab.com:cyrin/harlot-media.git tmp
    mv tmp/.git .git
    git checkout .

Database setup

    CREATE DATABASE admin_harlot_craftdb
      DEFAULT CHARACTER SET utf8
      DEFAULT COLLATE utf8_general_ci;

    CREATE USER 'craftcms' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON admin_harlot_craftdb.* To 'craftcms' IDENTIFIED BY 'password';
    FLUSH PRIVILEGES;

Apache setup

    ln -s /home/apps/harlot-media/bin/harlot-media-apache.conf /etc/apache2/sites-enabled/
    # apache2.conf

sync database

    bash bin/copy-remote-database.bash

sync uploads

    bash bin/copy-remote-uploads.bash

setup environment variables

    cp craft/config/env-example.php craft/config/.env.php
    $EDITOR craft/config/.env.php

install craft

    # localhost/index.php?p=admin/install
