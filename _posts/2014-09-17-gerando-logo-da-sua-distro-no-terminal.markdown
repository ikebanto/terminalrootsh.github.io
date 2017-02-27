---
layout: post
title: Gerando logo da sua distro no Terminal
date: '2014-09-17T17:59:00.005-07:00'
description: Gerando logo da sua distro no Terminal
main-class: 'bash'
tags:
- Shell Script
- Terminal
- Comandos
image: http://1.bp.blogspot.com/-kKGJ4LwbfJc/VBotfiDcd2I/AAAAAAAAAv4/RQwP5uoA9W4/s72-c/screenfetch.png
twitter_text: Gerando logo da sua distro no Terminal
introduction: Gerando logo da sua distro no Terminal
---
![Blog Linux](http://1.bp.blogspot.com/-kKGJ4LwbfJc/VBotfiDcd2I/AAAAAAAAAv4/RQwP5uoA9W4/s1600/screenfetch.png "Blog Linux")
Estamos falando do Screen Fetch:
Baixe o pacote(renomeando):
$ wget https://codeload.github.com/KittyKatt/screenFetch/zip/master &amp;&amp; mv master screenfetch.zip
Descompacte-o e entre na pasta:
$ unzip screenfetch.zip &amp;&amp; cd screenFetch-master
Dê permissão de execução:
$ chmod +x screenfetch-dev
Rode o programa:
$ ./screenfetch-dev
Para saber sobre as opções, rode com a opção -h:
$ ./screenfetch-dev -h
A opção -D [nome da distro] , gera de outras distros! 
Caso queira torná-lo do sistema, para ao digitar no shell o nome já executá-lo, tem de mover com direitos de superuser pra pasta: $ mv screenfetch-dev /usr/bin/screenfetch note que move alterando o nome.
Na imagem abaixo tem detalhes do -h
![Blog Linux](http://1.bp.blogspot.com/-mes5u69PHRE/VBotf48_fJI/AAAAAAAAAv8/qvWbNZfxbTA/s1600/screefetch2.png "Blog Linux")
