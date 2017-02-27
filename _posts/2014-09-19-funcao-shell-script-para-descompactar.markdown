---
layout: post
title: Função Shell Script para descompactar diversos arquivos
date: '2014-09-19T16:05:00.002-07:00'
description: Função Shell Script para descompactar diversos arquivos
main-class: 'bash'
tags:
- Shell Script
- Terminal
- terminalroot
- Comandos
image: http://2.bp.blogspot.com/-u_Tr-hOVHgY/VBy2AzIGduI/AAAAAAAAAxM/T4sU7lj-Uhs/s72-c/targz.jpg
twitter_text: Função Shell Script para descompactar diversos arquivos
introduction: Função Shell Script para descompactar diversos arquivos
---
![Blog Linux](http://2.bp.blogspot.com/-u_Tr-hOVHgY/VBy2AzIGduI/AAAAAAAAAxM/T4sU7lj-Uhs/s1600/targz.jpg "Blog Linux")
Código no PasteBin:
<iframe src="http://pastebin.com/raw/BbAQJ108" style="border:none;width:100%;"><iframe> 
Código no Blog:
#!/bin/bash
# --------------------------------------
#
# extrair
#
# Função Shell Script para descompactar diversos arquivos
#
# Uso: extrair ."
#
#
# Autor: Marcos Oliveira , www.terminalroot.com.br
# Desde: Sex 19 Set 2014 18:52:16 BRT 
# Licença: GPL
# --------------------------------------
function extrair {
if [ -n "$1" ]; then
 if [ -f $1 ] ; then
 case $1 in
 *.tar.bz2) tar xvjf $1 ;;
 *.tar.gz) tar xvzf $1 ;;
 *.tar.xz) tar xvJf $1 ;;
 *.lzma) unlzma $1 ;;
 *.bz2) bunzip2 $1 ;;
 *.rar) rar x $1   ;;
 *.gz) gunzip $1 ;;
 *.tar) tar xvf $1 ;;
 *.tbz2) tar xvjf $1 ;;
 *.tgz) tar xvzf $1 ;;
 *.zip) unzip $1 ;;
 *.Z) uncompress $1 ;;
 *.7z) 7z x $1 ;;
 *.xz) unxz $1 ;;
 *.exe) cabextract $1 ;;
 *) echo "Extensão desconhecida." ;;
 esac
 else
 echo "$1 - Arquivo não existe!"
 fi
fi
}
extrair $1
