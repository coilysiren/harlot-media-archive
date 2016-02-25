ssh root@harlot.media -t "mysqldump --user='harlot_dbuser' -p -A > harlot_media_dump.sql ;"
scp root@harlot.media:harlot_media_dump.sql /tmp/harlot_media_dump.sql
ssh root@harlot.media -t "rm -f harlot_media_dump.sql ;"
mysql --user="root" -p < /tmp/harlot_media_dump.sql
