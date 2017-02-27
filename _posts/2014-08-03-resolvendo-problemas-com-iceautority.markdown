---
layout: post
title: Resolvendo problemas com .ICEautority
date: '2014-08-02T21:11:00.002-07:00'
description: Resolvendo problemas com .ICEautority
main-class: 'linux'
tags:
- Linux
- GNU
- Imagens
image: http://1.bp.blogspot.com/-7nOHOBsAb_4/U9218gZ8TSI/AAAAAAAAAdQ/P6PkIZbw0QY/s72-c/ICEautority.jpg
twitter_text: Resolvendo problemas com .ICEautority
introduction: Resolvendo problemas com .ICEautority
---
![Blog Linux](http://1.bp.blogspot.com/-7nOHOBsAb_4/U9218gZ8TSI/AAAAAAAAAdQ/P6PkIZbw0QY/s1600/ICEautority.jpg "Blog Linux")
Caso vc tenha problemas ao iniciar o sistema com a mensagem de problema com o ICEauthority
1 - use um cd de boot, ou o modo recovery ou use um outro tty
2 - entre na pasta raíz do usuário como root
$ sudo
# cd /home/usuário/
3 - Mude as permissões do arquivo .ICEauthority
# chown usuário:usuário /home/usuário/.ICEauthority
# chmod 644 /home/usuário/.ICEauthority
Se vc montou não esqueça de desmontar para evitar problemas no seu HD, depois reinicie o sistema
# reboot
Pronto!
