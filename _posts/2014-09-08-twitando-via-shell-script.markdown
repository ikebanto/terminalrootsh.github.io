---
layout: post
title: "Twitando via Shell Script"
date: '2014-09-07T20:47:00.000-07:00'
description: "Twitando via Shell Script"
main-class: 'bash'
tags:
- Shell Script
image: "http://2.bp.blogspot.com/-11ONopObRZc/UdBtphDeo6I/AAAAAAAACFY/JENwYIj-P68/s72-c/shell+scripting+bash+twitter.png"
twitter_text: "Twitando via Shell Script"
introduction: "Twitando via Shell Script"
---
![Blog Linux](http://2.bp.blogspot.com/-11ONopObRZc/UdBtphDeo6I/AAAAAAAACFY/JENwYIj-P68/s320/shell+scripting+bash+twitter.png "Blog Linux")
Galera adaptei esse script que vi na internet no site 360 percents para Twittar via Shell Script. Ele usa o comando curl , para mais informações sobre CURL , acesse CURL , segue o código abaixo , vejam utilização no cabeçalho do script , como não criei , só adaptei , não vou explicar , pois ainda estou estudando CURL. Precisa alterar o nome de usuário e senha no arquivo para poder utilizá-lo e funcionar.
Código PasteBin: 
<iframe src="http://pastebin.com/raw/ZYvPmy7i" style="border:none;width:100%;"><iframe> 
Código Blog: 
#!/bin/bash
# ---------------------------------------------------------------
# ./tweet.sh
#
# Twitando via Shell Script
#
# Uso: troque no arquivo a palavra 'user' por seu usuario no Twitter
#   troque no arquivo a palavra 'pass' por sua senha no Twitter
# ./tweet.sh [post]
#
# Ex.: ./tweet.sh Fui ao banheiro
#
# Autor: Marcos da B. M. Oliveira, http://www.terminalroot.com.br/
# Desde: Seg 08 Set 2014 00:30:34 BRT
# Versão: adaptado de http://360percents.com/
# Licença: GPL
# ----------------------------------------------------------------
usuario="user"
senha="pass"
cookie="/tmp/cookie.txt"
useragent="Mozilla/5.0"
tweet="$*"
# Buscando twitter
echo "⌚ Entrando no Twitter..."
paginainicial=$(curl -s -b "$cookie" -c "$cookie" -L --sslv3 -A "$useragent" "https://mobile.twitter.com/session/new")
token=$(echo "$paginainicial" | grep "authenticity_token" | sed -e 's/.*value="//' | sed -e 's/" \/>.*//')
# Logando no twitter
echo "⌚ Logando..."
paginadelogin=$(curl -s -b "$cookie" -c "$cookie" -L --sslv3 -A "$useragent" -d "authenticity_token=$token&amp;username=$usuario&amp;password=$senha" "https://mobile.twitter.com/session")
# Pagina de tweetar
echo "⌚ Indo para página de composição..."
paginacompose=$(curl -s -b "$cookie" -c "$cookie" -L -A "$useragent" "https://mobile.twitter.com/compose/tweet")
# Twitando
echo "⌚ Twitando: $tweet "
tweettoken=$(echo "$paginacompose" | grep "authenticity_token" | sed -e 's/.*value="//' | sed -e 's/" \/>.*//' | tail -n 1)
update=$(curl -s -b "$cookie" -c "$cookie" -L --sslv3 -A "$useragent" -d "authenticity_token=$tweettoken&amp;tweet[text]=$tweet&amp;tweet[display_coordinates]=false" "https://mobile.twitter.com/")
# Indo pra página de deslogar
deslogarpage=$(curl -s -b "$cookie" -c "$cookie" -L --sslv3 -A "$useragent" "https://mobile.twitter.com/account")
# Deslogando
echo "⌚ deslogando..."
deslogartoken=$(echo "$deslogarpage" | grep "authenticity_token" | sed -e 's/.*value="//' | sed -e 's/" \/>.*//' | tail -n 1)
deslogar=$(curl -s -b "$cookie" -c "$cookie" -L --sslv3 -A "$useragent" -d "authenticity_token=$deslogartoken" "https://mobile.twitter.com/session/destroy")
rm "$cookie"
Fonte: 360 percents
