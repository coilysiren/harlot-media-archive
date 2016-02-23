mkdir public_html/uploads
scp -r root@harlot.media:/var/www/vhosts/harlot.media/httpdocs/public_html/uploads/* public_html/uploads
mkdir craft/storage/userphotos
scp -r root@harlot.media:/var/www/vhosts/harlot.media/httpdocs/craft/storage/userphotos/* craft/storage/userphotos
