---
layout: post
title: Como instalar o Aptana Studio 3 no Debian
date: '2011-11-06T16:09:00.000-08:00'
description: Como instalar o Aptana Studio 3 no Debian
main-class: 'linux'
tags:
- Debian
- Linux
image: http://1.bp.blogspot.com/-d2D8q1z-k2s/Trcc3udQiRI/AAAAAAAAAIk/P4rD3_21Ae4/s72-c/ambienteaptana.gif
twitter_text: Como instalar o Aptana Studio 3 no Debian
introduction: Como instalar o Aptana Studio 3 no Debian
---
![Blog Linux](http://1.bp.blogspot.com/-d2D8q1z-k2s/Trcc3udQiRI/AAAAAAAAAIk/P4rD3_21Ae4/s320/ambienteaptana.gif "Blog Linux")
![Blog Linux](http://2.bp.blogspot.com/-P8o4PtUgcsg/Trcc4HHhQ9I/AAAAAAAAAIs/144KZPQiHgI/s320/logoaptana.gif "Blog Linux")
 Eu programei durante 2 anos em PHP, C, JavaScript...fiz marcação de XHTML, CSS, durante dois anos com o GEdit, mas percebi que estava demorando muito pra redigir os códigos e debugá-los, como eu sempre odiei o WINE e os produtos da Adobe, nunca quis usar o Dreamweaver, não uso Photoshop nem Fireworks, uso GIMP, então não os instalei.
 Já havia testado o NVU e até o Aptana antigamente e não tinha gostado muito então retornei ao meu GEdit, mas agora o Aptana tá "Monstro", o Dreamweaver nem chega aos pés dele, e o Eclipse come muita memória, então eu uso o Aptana.Chega de bla bla bla e vamos ao que interessa, como instalar esse ótimo IDE.
1- Baixe o arquivo original do site Clique aqui para baixar
2- copie o arquivo zipado para a pasta /opt (tem de ser o usuario root)
{% highlight bash %}
# mv Aptana*.zip /opt
{% endhighlight %}
3- Entre na pasta /opt e Descompacte o arquivo (se não tiver o descompactador zip, instale-o)
{% highlight bash %}
# unzip -x Aptana*.zip
{% endhighlight %}
4- Dê as permissões logo todas
{% highlight bash %}
# chmod -R 777 Aptana*/
{% endhighlight %}
5-Renomei a pasta para "aptana"
{% highlight bash %}
# mv Aptana*/ aptana
{% endhighlight %}
6- crie um arquivo binario dele na pasta /usr/bin
{% highlight bash %}
gedit /usr/bin/aptana
{% endhighlight %}
7- cole isso no GEdit e salve
{% highlight bash %}
#!/bin/sh
#export MOZILLA_FIVE_HOME="/usr/lib/mozilla/"
export APTANA_HOME="/opt/aptana"
$APTANA_HOME/AptanaStudio3 $*
{% endhighlight %}
8- depois deixe ambos links com executáveis
{% highlight bash %}
# chmod +x /usr/bin/aptana
# chmod +x /opt/aptana
{% endhighlight %}
9- Crie um icone no painel Aplicativos-Desenvlvimento
{% highlight bash %}
gedit /usr/share/applications/aptana.desktop
{% endhighlight %}
10- Cole isso dentro do arquivo que se abriu no GEdit e salve
{% highlight bash %}
[Desktop Entry]
Encoding=UTF-8
Name=Aptana Studio 3
Comment=IDE for Rails, Python, PHP
Exec=/opt/aptana/AptanaStudio3
Icon=/opt/aptana/icon.xpm
Terminal=false
Type=Application
Categories=GNOME;Application;Development;
StartupNotify=true
{% endhighlight %}
Obs.:No meu caso o sistema nao conseguiu ler o formato .xpm, então eu abrí essa imagem que ta na pasta /opt/aptana/icon.xpm e salvei como PNG no GIMP e alterei isso no código acima para icon.png
Pronto!
qualquer duvida é só comentar! 
Esse post é uma adaptação para meu jeito da fonte: Oraculum
