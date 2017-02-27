---
layout: post
title: Habilitar o mod_rewite no Apache (.htacces)
date: '2012-12-30T07:18:00.000-08:00'
description: Habilitar o mod_rewite no Apache (.htacces)
main-class: 'linux'
tags:
- Debian
- Linux
- Apache
- PHP
image: http://3.bp.blogspot.com/-Ho91t2BJ79M/UOBbOFdgNMI/AAAAAAAAA7U/v-Fh0T1B7wU/s72-c/Apache-Server.jpg
twitter_text: Habilitar o mod_rewite no Apache (.htacces)
introduction: Habilitar o mod_rewite no Apache (.htacces)
---
![Blog Linux](http://3.bp.blogspot.com/-Ho91t2BJ79M/UOBbOFdgNMI/AAAAAAAAA7U/v-Fh0T1B7wU/s320/Apache-Server.jpg "Blog Linux")
 Pra quem vai trabalhar com MVC no PHP (por exemplo) precisa habilitar o mod_rewrite no Apache pra que funcione, segue os passos pra fazer isso:
1-Logue como root: 
{% highlight bash %}
$ su
{% endhighlight %}
2-Abra o arquivo default do Apache: 
{% highlight bash %}
# vi /etc/apache2/sites-available/default
{% endhighlight %}
3-Edite o arquivo da seguinte forma: <span style= "Blog Linux")
 substituindo por "AllowOverride AuthConfig" e altere a linha "AllowOverride None" dentro de  substituindo por "AllowOverride All". 
Ex.:{% highlight bash %}
DocumentRoot /var/www/     Options FollowSymLinks Indexes    AllowOverride AuthConfig      Options Indexes FollowSymLinks MultiViews    AllowOverride All    Order allow,deny    allow from all 
{% endhighlight %}
4- Não esqueça de habilitar o mod_rewrite: 
{% highlight bash %}
# a2enmod rewrite
{% endhighlight %}
5-Reinicie o apache:
{% highlight bash %}
# /etc/init.d/apache2 restart
{% endhighlight %}
Agora vamos testar 
6-Crie um arquivo .htacces dentro do diretório /var/www/: 
{% highlight bash %}
vi /var/www/.htaccess
{% endhighlight %}
7-Escreva isso dentro do Arquivo, salve e feche-o(em outro post explicarei isso): 
{% highlight bash %}
RewriteEngine On
RewriteCond %{SCRIPT_FILENAME} !-f
RewriteCond %{SCRIPT_FILENAME} !-d
RewriteRule ^(.*)$ index.php?chave=$1 
{% endhighlight %}
8-Agora crie um arquivo index.php e cole o conteúdo logo abaixo: {% highlight bash %}
vi /var/www/index.php
{% endhighlight %}
Conteúdo: 
{% highlight bash %}
 
{% endhighlight %}
9-Acesse o endereço http://localhost/nomequalquer/outronome/:
Se imprimir na tela: nomequalquer/outronome/ (ou o nome que você escolheu), está tudo certo.Você já pode escrever seu Framework!   
