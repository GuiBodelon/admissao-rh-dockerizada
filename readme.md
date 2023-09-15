Etapas do container mysql-app:
docker exec -it mysql-app bash

mysql -u root -p
Password: qBLCW1O

CREATE DATABASE app_gruporeport;
GRANT ALL PRIVILEGES ON app_gruporeport.* TO 'root'@'%';
FLUSH PRIVILEGES;
exit;
exit


Etapas do container apache-backend-app:
docker exec -it apache-backend-app /bin/bash

#Atualizar as configurações do Apache

apache2.conf:
ServerName api.gruporeport.com.br
DocumentRoot /var/www/html/public

<Directory /var/www/html/public>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        <IfModule mod_headers.c>
                Header always set Access-Control-Allow-Headers "*"
        </IfModule>
</Directory>

/sites-available/000-default.conf:
<VirtualHost *:80>
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request's Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.
        ServerName api.gruporeport.com.br
        DocumentRoot /var/www/html/public

        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        #LogLevel info ssl:warn
		
		Header set Access-Control-Allow-Origin "*"
        Header set Access-Control-Allow-Methods "*"
        Header set Access-Control-Allow-Headers "*"

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        # For most configuration files from conf-available/, which are
        # enabled or disabled at a global level, it is possible to
        # include a line for only one particular virtual host. For example the
        # following line enables the CGI configuration for this host only
        # after it has been globally disabled with "a2disconf".
        #Include conf-available/serve-cgi-bin.conf
</VirtualHost>

#Ativar os Módulos Header e Rewrite:
a2enmod rewrite
a2enmod headers

#Alterar o proprietário dos diretórios para o usuário do Apache (www-data)
chown -R www-data:www-data storage bootstrap/cache

#Garantir que as permissões nos diretórios sejam adequadas
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data /var/www/html/storage
chown -R www-data:www-data /var/www/html/public

#Rodar as migrations e as seeds
php artisan migrate:fresh
php artisan db:seed

#Limpar o cache
php artisan optimize:clear

#Reinicar servico do apache
service apache2 restart

#Reinicar o container
docker restart apache-backend-app