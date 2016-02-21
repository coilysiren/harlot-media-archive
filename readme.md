mysql

    #

php + addons

    #

get craft

    #

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
