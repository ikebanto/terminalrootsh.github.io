---
layout: post
title: "Removendo o iceweasel e instalando o Firefox ao Debian"
date: '2011-10-30T12:44:00.000-07:00'
description: "Removendo o iceweasel e instalando o Firefox ao Debian"
main-class: 'linux'
tags:
- Debian
- Linux
- Firefox
twitter_text: "Removendo o iceweasel e instalando o Firefox ao Debian"
introduction: "Removendo o iceweasel e instalando o Firefox ao Debian"
---
Também tive a necessidade de substituir o Iceweasel pelo Firefox. A razão principal foi de que o Mozilla Firefox 3.5.6 já traz o suporte ao formato HTML5, linguagem que promete revolucionar a web e arquivos de mídia vinculados a ela. Descrevo aqui como fiz isso, estando instalado o gerenciador de janelas GNOME.
1) Baixe o Firefox para uma pasta local do usuário. No caso, o arquivo que baixei tinha nome firefox-3.6.3.tar.bz2. Tem diversas versões, uma para cada língua. Baixe a de sua preferência
2) Abra uma janela no terminal e, como root, digite os seguintes comandos:
2.1) Para desinstalar o iceweasel: apt-get remove iceweasel
2.2) Copie o firefox: mv firefox-3.6.3.tar.bz2 /usr/lib/
2.3) Coloque-se na pasta lib: cd /usr/lib
2.4) Desempacote o firefox: tar -jxvf firefox-3.6.3.tar.bz2
2.5) Crie um link simbólico: ln -s /usr/lib/firefox/firefox /usr/bin/firefox
3) Para que os plugins do browser Iceweasel que já foram instalados passem a funcionar no Firefox, deve ser criado um link simbólico da seguinte forma (com permissão de root):
3.1) Remova o link anterior: rm -rf /usr/lib/firefox/plugins
3.2) Redirecione a pasta de plugin: ln -s /usr/lib/mozilla/plugins /usr/lib/firefox/plugins
4) Crie uma entrada no menu do Gnome para o Firefox, criando um arquivo ‘firefox.desktop’ na pasta /usr/share/applications.
Seu conteúdo deve ser:
{% highlight bash %}
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
Terminal=false
Name=Firefox
Name[en_US]=Firefox
Name[pt_BR]=Firefox
Comment=Navegador web
Exec=/usr/bin/firefox
Icon=/usr/lib/firefox/icons/mozicon128.png
Categories=Network;WebBrowser;
StartupNotify=true
{% endhighlight %}
fonte: http://www.concani3.wordpress.com
