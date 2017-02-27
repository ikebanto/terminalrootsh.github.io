---
layout: post
title: "Instalando o plugin do flash player no Iceweasel"
date: '2013-12-07T10:45:00.000-08:00'
description: "Instalando o plugin do flash player no Iceweasel"
main-class: 'debian'
tags:
- Debian
- Dicas
- Iceweasel
twitter_text: "Instalando o plugin do flash player no Iceweasel"
introduction: "Instalando o plugin do flash player no Iceweasel"
---
![Blog Linux](http://www.geticeweasel.org/iceweasel.gif "Blog Linux")
Passos:
Obs.: Perceba que usei # , logo, logue como root no terminal.
1 - Baixe o Plugin(esse é o 64 bits):
# wget http://fpdownload.macromedia.com/get/flashplayer/pdc/11.2.202.327/install_flash_player_11_linux.x86_64.tar.gz
2 - Extraia-o:
# tar xzvf install_flash_player_11_linux.x86_64.tar.gz
3 - Mova o plugin pra pasta de plugins do Iceweasel
# mv install_flash_player_11_linux.x86_64/libflashplayer.so /usr/lib/mozilla/plugins/
4 - Reinicie o Iceweasel!
Você também pode instalar pelo apt-get(para isso o repositorio nonfree deve estar no seu sources.list):
# apt-get install flashplugin-nonfree
Fui!
