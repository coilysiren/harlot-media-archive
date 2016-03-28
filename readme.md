mysql

    #

php + addons

    #

get craft

    bash <(curl -s https://raw.githubusercontent.com/mattstauffer/makeItCraft/master/makeItCraft.sh)
    git clone git@gitlab.com:cyrin/harlot-media.git tmp
    mv tmp/.git .git
    git checkout .

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
