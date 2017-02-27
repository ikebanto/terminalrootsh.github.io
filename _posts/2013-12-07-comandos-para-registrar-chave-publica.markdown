---
layout: post
title: Comandos para registrar chave pública do APT
date: '2013-12-07T05:42:00.000-08:00'
description: Comandos para registrar chave pública do APT
main-class: 'linux'
tags:
- Debian
- Linux
- Dicas
twitter_text: Comandos para registrar chave pública do APT
introduction: Comandos para registrar chave pública do APT
---
![Blog Linux](http://wri-irg.org/system/files/images/Gpg-logo.png "Blog Linux")
O erro é assim:
W: GPG error: http://ftp.br.debian.org etch Release:  The following signatures couldn't be verified  because the public key is not available:  NO_PUBKEY 9AA38DCD55BE302B  W: There is no public key available for the following key IDs: 9AA38DCD55BE302B W: You may want to run apt-get update to correct these problems
Estes são os comandos p/ registrar a chave pública do apt:
# gpg --keyserver pgpkeys.mit.edu --recv-key 
# gpg -a --export  | sudo apt-key add - Onde  é o id que aparece na hora de instalar um pacote. Exemplo:  9AA38DCD55BE302B.
Fonte: http://blog.marceloakira.com/?p=73
