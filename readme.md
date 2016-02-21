mysql

    #

php + addons

    #

get craft

    curl -L http://craftcms.com/latest.tar.gz?accept_license=yes -o craft_install.tar.gz
    sudo tar -xvzf craft_install.tar.gz
    sudo rm -f craft_install.tar.gz readme.txt
    sudo mv public public_html

sync source code

    git pull git@gitlab.com:cyrin/harlot-media.git

sync database

    bash bin/copy-remote-database.bash

sync uploads

    bash bin/copy-remote-uploads.bash

setup environment variables

    cp craft/config/env-example.php craft/config/.env.php
    $EDITOR craft/config/.env.php

install craft

    #
