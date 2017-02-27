---
layout: post
title: Jogos para o Terminal
date: '2014-10-27T16:19:00.000-07:00'
description: Jogos para o Terminal
main-class: 'bash'
tags:
- Shell Script
- Games
- Terminal
twitter_text: Jogos para o Terminal
introduction: Jogos para o Terminal
---
 
1.MyMan
![Blog Linux](https://farm6.staticflickr.com/5594/13863751363_dc7e225bfa_z.jpg "Blog Linux")
 O clone do Pac-Man, famoso arcade dos anos 80, MyMan.
Para instalar, você precisa de ncurses e groff presentes na sua máquina.
 No Ubuntu ou Debian:
$ sudo apt-get install libncurses5-dev groff
$ wget http://downloads.sourceforge.net/project/myman/myman-cvs/myman-cvs-2009-10-30/myman-wip-2009-10-30.tar.gz
$ tar xvfvz myman-wip-2009-10-30.tar.gz
$./configure
$ make
$ sudo make install
$ mymanNo Archlinux, o game é avaliável em AUR.
 
2. nInvaders
![Blog Linux](https://farm6.staticflickr.com/5318/13863722405_e14bbc91c8_z.jpg "Blog Linux")
 O Famoso Space Invaders, o clone nInvaders
$ sudo apt-get installNo Archlinux, o game é avaliável AUR .
 3. Moon-buggy
![Blog Linux](https://farm6.staticflickr.com/5522/13863751423_be17b73ace_z.jpg "Blog Linux")
 moon-buggy.Inspirado em Moon Patrol de 1982.
$ sudo apt-get installmoon-buggy (no Ubuntu/Debian) no AUR para Archlinux .  
 4. Bastet
![Blog Linux](https://farm4.staticflickr.com/3811/13863751683_d5f35204a0_z.jpg "Blog Linux")
 Clone do Tetris Bastet
$ sudo apt-get install bastet (on Ubuntu since Saucy) ou AUR.
 5. 2048.c
![Blog Linux](https://farm3.staticflickr.com/2822/13863722885_640bf7d0a5_z.jpg "Blog Linux")
 2048
Debian ou Ubuntu:
$ wget https://raw.githubusercontent.com/mevdschee/2048.c/master/2048.c
$ gcc -o 2048 2048.c
$ ./2048 Para Archlinux, AUR package .
 6. Greed
![Blog Linux](https://farm3.staticflickr.com/2838/13863722645_b5b131bae0_z.jpg "Blog Linux")
 
sudo apt-get install greed (para Ubuntu/Debian) ou AUR para Archlinux. 
 7. Ski
![Blog Linux](https://farm3.staticflickr.com/2880/13863751173_40fb357866_z.jpg "Blog Linux")
 Ski 
 Para Ubuntu/Debian, baixe aqui, extraia e rode:
./skiPara Archlinux, instale de AUR.
 8. NetHack
![Blog Linux](https://farm3.staticflickr.com/2832/13863751533_035ef21704_z.jpg "Blog Linux")
 NetHack. 
$ sudo apt-get install nethack-console (para Ubuntu/Debian)
$ sudo pacman -S nethack(para Archlinux) 9. cgames
![Blog Linux](https://farm4.staticflickr.com/3827/13863751553_d1f3d9e634_z.jpg "Blog Linux")
 cgames contém csokoban, cmines, e cblocks.
Debian ou Ubuntu
$ sudo apt-get install libgpm-dev libncurses5-dev
$ ./configure --with-ncurses
$ make
$ sudo make install
$ csokoban ou AUR para Archlinux. 
 10. BSD-Games
![Blog Linux](https://farm3.staticflickr.com/2907/13863722545_ec4cf17da5_z.jpg "Blog Linux")
 link instale e rode:
 $ sudo apt-get install bsdgames(no Ubuntu/Debian)
$ sudo pacman -S bsd-games(no Archlinux) Congratulações para o blog ttygames.wordpress.com 
Via: http://xmodulo.com
