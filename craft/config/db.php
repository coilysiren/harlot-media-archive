<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

include '.env.php';

return array(
    '*' => array(
		'server' => 'localhost',
		'tablePrefix' => 'craft',
        'user' => $user,
        'password' => $password,
        'database' => $database,
	),
    'harlot.media' => array(
    ),
    'localhost' => array(
    ),
);
