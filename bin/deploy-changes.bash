git push
ssh root@harlot.media -t "cd /var/www/vhosts/harlot.media/httpdocs/ ; git pull ; sass --update public_html/_assets/sass:public_html/_assets/css -t compressed"
