---
layout: post
title: Repositório completo para Debian Squeeze
date: '2011-11-30T16:11:00.000-08:00'
description: Repositório completo para Debian Squeeze
main-class: 'linux'
tags:
- Debian
- Linux
- Dicas
twitter_text: Repositório completo para Debian Squeeze
introduction: Repositório completo para Debian Squeeze
---
Olá pessoal segue a lista de repositórios para se instalar tudo no Gnu/linux Debian 6 Squeeze, nessa lista consta:Webmin,Virtual Box, Codecs, Snort, TCPDump, Skype, Bimoid, Multimídia Completa(todos os codecs, inclusive versão opens dasversõespagar, ex.: w32codecs ), Opera, Wine...e muito mais, lembrando que você deve antes adicionar as chaves, mas tem todas as chaves inclusa, na opçao: Rode esse comando.
Copie toda a lista abaixo e cole no seu {% highlight bash %}
# gedit /etc/apt/source.list
{% endhighlight %} e instale tudo via apt-get !
Segue a lista:
{% highlight bash %}
#############################################################
############ Repositório Ofical do Debian ###################
#############################################################
###### Debian Main Repos
deb http://ftp.br.debian.org/debian/ squeeze main contrib non-free 
deb-src http://ftp.br.debian.org/debian/ squeeze main contrib non-free 
###### Debian Update Repos
deb http://security.debian.org/ squeeze/updates main contrib non-free 
deb http://ftp.br.debian.org/debian/ squeeze-proposed-updates main contrib non-free 
deb-src http://security.debian.org/ squeeze/updates main contrib non-free 
deb-src http://ftp.br.debian.org/debian/ squeeze-proposed-updates main contrib non-free 
##############################################################
##################### Repositórios Não Oficiais ##############
##############################################################
###### 3rd Party Binary Repos
#### Bimoid - http://bimoid.com/
## Rode esse comando antes: wget -O - http://www.bimoid.com/debian/apt.key | apt-key add -
deb http://www.bimoid.com/debian/ stable non-free
#### Debian Backports - http://backports.debian.org/
deb http://backports.debian.org/debian-backports squeeze-backports main 
#### Debian Multimedia - http://www.debian-multimedia.org/
## Rode esse comando antes: apt-get update &amp;&amp; apt-get install debian-multimedia-keyring &amp;&amp; apt-get update
deb http://www.debian-multimedia.org stable main non-free
#### Dotdeb - http://www.dotdeb.org
## Rode esse comando antes: wget -q -O - http://www.dotdeb.org/dotdeb.gpg | apt-key add -
deb http://packages.dotdeb.org oldstable all
#### Enlightenment - http://enlightenment.org
## Rode esse comando antes: wget -q http://packages.enlightenment.org/repo.key -O- | apt-key add -
deb http://packages.enlightenment.org/debian squeeze main extras
#### Esmska - http://code.google.com/p/esmska/
## Rode esse comando antes: wget -q -O - http://repo.palatinus.cz/repo.key | apt-key add -
deb http://repo.palatinus.cz/stable /
#### Google Linux Software Repositories - http://www.google.com
## Rode esse comando antes: wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
deb http://dl.google.com/linux/deb/ stable non-free main
#### Google Linux Software Repositorios (Testing) - http://www.google.com
## Rode esse comando antes: wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
deb http://dl.google.com/linux/deb/ testing non-free 
#### Opera .deb Repositorio - http://deb.opera.com/
## Rode esse comando antes: wget -O - http://deb.opera.com/archive.key | apt-key add - 
deb http://deb.opera.com/opera/ squeeze non-free
#### Opera .deb Repositorio (Beta Releases) - http://deb.opera.com/
## Rode esse comando antes: wget -O - http://deb.opera.com/archive.key | apt-key add - 
deb http://deb.opera.com/opera-beta/ squeeze non-free
#### Skype - http://www.skype.com
## Rode esse comando antes: gpg --keyserver pgp.mit.edu --recv-keys 0xd66b746e &amp;&amp; gpg --export --armor 0xd66b746e | apt-key add -
deb http://download.skype.com/linux/repos/debian/ stable non-free
#### Mantenedor Não Oficial - http://unofficial.debian-maintainers.org/
## Rode esse comando antes: wget -q -O - http://unofficial.debian-maintainers.org/project/openpgp/archive-key.asc | apt-key add -
deb http://unofficial.debian-maintainers.org/ squeeze main contrib non-free restricted 
#### VirtualBox - http://www.virtualbox.org
## Rode esse comando antes: wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | apt-key add -
deb http://download.virtualbox.org/virtualbox/debian squeeze contrib 
#### Webmin - http://webmin.com/
## Rode esse comando antes: wget -q http://www.webmin.com/jcameron-key.asc -O- | apt-key add -
deb http://download.webmin.com/download/repository sarge contrib
#### Wine - http://www.winehq.org/
## Rode esse comando antes: wget -O - http://www.lamaresh.net/apt/key.gpg | apt-key add -
deb http://www.lamaresh.net/apt squeeze main
####### 3rd Party Source Repos
#### Dotdeb (Source) - http://www.dotdeb.org
## Rode esse comando antes: wget -q -O - http://www.dotdeb.org/dotdeb.gpg | apt-key add -
deb-src http://packages.dotdeb.org oldstable all
#### Unofficial Maintainer (Source) - http://unofficial.debian-maintainers.org/
## Rode esse comando antes: wget -q -O - http://unofficial.debian-maintainers.org/project/openpgp/archive-key.asc | apt-key add -
deb-src http://unofficial.debian-maintainers.org/ squeeze main contrib non-free restricted
{% endhighlight %}
Caso sua distro seja outra que utiliza também o apt-get, ou você seja de outro país, consulte a fonte dessa informação Clicando Aqui.
Desfrutem!
