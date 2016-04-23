<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

include '.env.php';

return array(
    '*' => array(
        'devMode' => $devMode,
        'omitScriptNameInUrls' => true,
        'defaultSearchTermOptions' => array(
            'subLeft' => true,
            'subRight' => true,
        ),
    ),
    'harlot.media' => array(
        'siteUrl' => 'http://harlot.media',
    ),
    'localhost' => array(
        'siteUrl' => 'http://localhost',
    ),
);
