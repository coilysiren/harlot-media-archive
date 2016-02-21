mysql

    #

php + addons

    #

get craft

    curl -L http://craftcms.com/latest.tar.gz?accept_license=yes -o craft_install.tar.gz
    tar -xvzf craft_install.tar.gz
    rm -f craft_install.tar.gz readme.txt
    mv public public_html
    sudo chmod 0777 -R craft/

sync source code

    git pull git@gitlab.com:cyrin/harlot-media.git

sync database

    bash bin/copy-remote-database.bash

sync uploads

    bash bin/copy-remote-uploads.bash

setup environment variables

    cp craft/config/env-example.php craft/config/.env.php
    $EDITOR craft/config/.env.php

setup web server

    # set web root to the harlot-media/public_html

install craft

    # localhost/index.php?p=admin/install
