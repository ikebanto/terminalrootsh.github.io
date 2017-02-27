---
layout: post
title: "Transformando múltiplos arquivos FLV para MP3 com Shell Script"
date: '2014-09-06T21:40:00.000-07:00'
description: "Transformando múltiplos arquivos FLV para MP3 com Shell Script"
main-class: 'bash'
tags:
- Shell Script
image: "http://1.bp.blogspot.com/-_gUy0yQTqZM/UkjQtOlbfaI/AAAAAAAACbc/bn9SFHwydy8/s72-c/shell+script2.png"
twitter_text: "Transformando múltiplos arquivos FLV para MP3 com Shell Script"
introduction: "Transformando múltiplos arquivos FLV para MP3 com Shell Script"
---
![Blog Linux](http://1.bp.blogspot.com/-_gUy0yQTqZM/UkjQtOlbfaI/AAAAAAAACbc/bn9SFHwydy8/s320/shell+script2.png "Blog Linux")
Segue Script baixo: 
PasteBin:
<iframe src="http://pastebin.com/raw/5EhK3MSZ" style="border:none;width:100%;"><iframe> 
CodeBlog:
#!/bin/bash
# --------------------------------------
# ./flv2mp3.sh
#
# Transformando múltiplos arquivos FLV para MP3 com Shell Script
#
# Uso: ./flv2mp3.sh
#
#
# Autor: Marcos da B. M. Oliveira , http://www.terminalroot.com.br/
# Desde: Dom 20 Out 2013 12:08:04 BRST 
# Licença: GPL
# --------------------------------------
preparando(){
 reset
 echo
 printf "\33[1;31m[+]Preparando para transformar: \33[0m" &amp;&amp;
 a=1;
 sp="/-\|";
 echo -n ' ';
 while [ $a -le 50000 ];
 do
  printf "\b${sp:a++%${#sp}:1}"     
 done 
 echo
 echo
 
}
transformando(){
for i in *.flv; do 
 printf "\33[1;33m[+]Transformando...: \33[4;34m$i\33[0m";
 echo
 NOVA=$(echo "$i" | rev | cut -c5- | rev)
 ffmpeg -i "$i" -acodec libmp3lame -ar 44100 -ac 2 -ab 128 -vn -y "$NOVA".mp3 2>/dev/null
done;
}
final(){
if [ "$(ls *.flv | wc -l)" -le "$(ls *.mp3 2>/dev/null | wc -l)" ]; then
 echo
 printf "\33[1;32m[+]Transformadas! :)\33[0m";
 echo
 echo
else
 echo
 printf "\33[1;31m[-]Alguma coisa deu errada.\n:(\33[0m";
 echo
fi
 
 
}
preparando
transformando
final
