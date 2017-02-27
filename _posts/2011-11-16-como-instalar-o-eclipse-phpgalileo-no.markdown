---
layout: post
title: Como Instalar o Eclipse-PHP(Galileo) no Debian Linux
date: '2011-11-16T17:14:00.000-08:00'
description: Como Instalar o Eclipse-PHP(Galileo) no Debian Linux
main-class: 'linux'
tags:
- Debian
- Linux
image: http://4.bp.blogspot.com/-Uf_YHn7Lnz0/TsRfRpQ0hCI/AAAAAAAAAPw/fGpfv-KxfkA/s72-c/eclipse-galileo-splash-for-linux.jpg
twitter_text: Como Instalar o Eclipse-PHP(Galileo) no Debian Linux
introduction: Como Instalar o Eclipse-PHP(Galileo) no Debian Linux
---
![Blog Linux](http://4.bp.blogspot.com/-Uf_YHn7Lnz0/TsRfRpQ0hCI/AAAAAAAAAPw/fGpfv-KxfkA/s320/eclipse-galileo-splash-for-linux.jpg "Blog Linux")
O Eclipse-PHP Galileo é voltado para desenvolvimento em PHP, a idéia da instalação é a mesma de sempre,
ou seja, não tem segredo, novamente utilizaremos o diretório /opt do Linux, pois ele
é usado para aplicação não-oficiais(opt - optionals - opcionais), vamos lá:
1- Baixe o Eclipe-PHP Galileo do Site Oficial (Eclipse for PHP Developers)
Clique aqui para ir para a página de Download
2-Baixe o usuário root e copie o tarball(o arquivo compactado em TAR.GZ) para a pasta /opt
{% highlight bash %}
# su
# cp /Downloads/eclipse*.tar.gz /opt
{% endhighlight %}
3-Entre na pasta /opt , descompacte o arquivo e atribua as permissões.
{% highlight bash %}
# cd /opt
# tar -xzvf eclipse*.tar.gz
# chmod -R 775 eclipse/
# chmod +x eclipse/eclipse
{% endhighlight %}
4-Crie o arquivo eclipse na pasta binária.
{% highlight bash %}
# gedit /usr/bin/eclipse
{% endhighlight %}
5-No arquivo que se abriu em branco, cole o código abaixo e salve:
{% highlight bash %}
!/bin/sh
#export MOZILLA_FIVE_HOME="/usr/bib/mozilla
export ECLIPSE_HOME="/opt/eclipse"
export GDK_NATIVE_WINDOWS=1
$ECLIPSE_HOME/eclipse $*
{% endhighlight %}
6-Atribua as permissões para este arquivo.
{% highlight bash %}
# chmod 775 /usr/bin/eclipse
{% endhighlight %}
7-Agora crie um icone no painel do GNOME  em Aplicações >> Desenvolvimento, copie o código abaixo e cole no arquivo
que se abriu do gedit e salve:
{% highlight bash %}
# gedit /usr/share/applications/eclipse.desktop
{% endhighlight %}
COPIE E COLE ESSE ARQUIVO NELE:
{% highlight bash %}
[Desktop Entry]
Encoding=UTF-8
Name=Eclipse
Comment=Eclipse IDE
Exec=eclipse
Icon=/opt/eclipse/icon.xpm
Terminal=false
Type=Application
Categories=GNOME;Application;Development;
StartupNotify=true
{% endhighlight %}
Pronto, agora é só usar o Eclipse!
