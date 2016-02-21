ssh root@harlot.media -t "mysqldump --user="harlot_dbuser" --password="VMrTFP3cagdh7*FDuhVgA'!'JkU3bRs2AMPeTDnxQ2YAxXRVtJkRQYdqgY6" -A > harlot_media_dump.sql ;"
scp root@harlot.media:harlot_media_dump.sql /tmp/harlot_media_dump.sql
ssh root@harlot.media -t "rm -f harlot_media_dump.sql ;"
mysql --user="root" --password="lynn" < /tmp/harlot_media_dump.sql
