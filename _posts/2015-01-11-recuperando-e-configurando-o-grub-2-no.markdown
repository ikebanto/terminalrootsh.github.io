---
layout: post
title: Recuperando e configurando o Grub 2 no Debian Wheezy
date: '2015-01-11T04:05:00.005-08:00'
description: Recuperando e configurando o Grub 2 no Debian Wheezy
main-class: 'debian'
tags:
- Debian
twitter_text: Recuperando e configurando o Grub 2 no Debian Wheezy
introduction: Recuperando e configurando o Grub 2 no Debian Wheezy
---
![Blog Linux](http://fresnolibre.fresnodigital.info/wp-content/uploads/2010/08/grub-debian-kubuntu.jpg "Blog Linux")
Passos:
1 - Verifique os números de suas partições(crie uma conta root se não já estiver nela):
# fdisk -l 
1 - Entre com a mídia de qualquer Distro Linux live e monte a partição de boot:
# mount /dev/sda1 /mnt/ 2 - Perceba que você montou uma partição,mas o GRUB precisa ser instalado no HD (sda ≠ sda1, logo instale em sda):
# grub-install --root-directory=/mnt/ /dev/sda Se quiser, atualize o GRUB:
# update-grub E não esqueça de desmontar a partição:
# umount /mnt/ 
Reinicie e pronto!
