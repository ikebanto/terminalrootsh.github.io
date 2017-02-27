---
layout: post
title: Recuperando a SWAP
date: '2014-08-02T21:01:00.002-07:00'
description: Recuperando a SWAP
main-class: 'linux'
tags:
- Linux
- GNU
- Imagens
image: http://4.bp.blogspot.com/-pZpANo6QVwU/U92xlv5MsCI/AAAAAAAAAdE/T5IeJEPHtT4/s72-c/wv3SXGZ.jpg
twitter_text: Recuperando a SWAP
introduction: Recuperando a SWAP
---
![Blog Linux](http://4.bp.blogspot.com/-pZpANo6QVwU/U92xlv5MsCI/AAAAAAAAAdE/T5IeJEPHtT4/s1600/wv3SXGZ.jpg "Blog Linux")
Hoje tive um problema no meu DVD-R Drive e na tentativa de instalar perdi a swap, então tive que recuperar a swap usei o Utilitário de Unidades do Debian, mas poderia usar por comando também(*):
# dd if=/dev/zero of=/swapfile.img bs=1M count=2000
# mkswap /swapfile.img
Removi a partição swap, criei uma nova, tornei inicializável, listei o UUID pelo blkid e alterei o UUID no /etc/fstab:
Lista as partções do seu HD
# fdisk -l
Pra desativar, caso precise.
# swapoff /dev/sdaX -a
Descobre qual a UUID
# blkid /dev/sdX
Linha da swap no fstab
# vi /etc/fstab
UUID=92a13dca-600e-4858-abe2-c39cce91d32c none swap sw 0 0
Ativa a swap
# swapon /dev/sdaX -a
Pronto!
