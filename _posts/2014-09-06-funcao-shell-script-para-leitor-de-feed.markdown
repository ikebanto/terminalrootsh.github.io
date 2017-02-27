---
layout: post
title: "Função Shell Script para Leitor de Feed"
date: '2014-09-06T13:46:00.001-07:00'
description: "Função Shell Script para Leitor de Feed"
main-class: 'bash'
tags:
- Shell Script
- SED
image: "http://1.bp.blogspot.com/-IHEj_79kCLo/VAtyUFIWYYI/AAAAAAAAAq0/J2edXEw6AB8/s72-c/leitorfeed-shell-sed.png"
twitter_text: "Função Shell Script para Leitor de Feed"
introduction: "Função Shell Script para Leitor de Feed"
---
![Blog Linux](http://1.bp.blogspot.com/-IHEj_79kCLo/VAtyUFIWYYI/AAAAAAAAAq0/J2edXEw6AB8/s320/leitorfeed-shell-sed.png "Blog Linux")
![Blog Linux](http://3.bp.blogspot.com/-ncmjb4Jb8Jo/VAtyUPNHlgI/AAAAAAAAAqw/ksxSJB0_VpQ/s320/feed-sed-shel-script.png "Blog Linux")
Galera criei essa função como melhoria do script anterior: Shell Scripting: Leitor Feed com SED e Lynx , no qual está uma bagunça geral, além de eu re-testar e não ter funcionado muito bem.
Desta forma criei essa função que talvez também passe por melhorias, no entanto, não a explicarei passo a passo, pois acredito a leitura além de desafio para entendimento, está bem simples.Veja também o cabeçalho que explica como utilizar o SCRIPT.Ou seja, um leitor feed pra alguns blog que gosto (do Brasil):
Terminal RootAurélioSeja LivreViva o TuxVideo Aulas Brasil 
Veja o código: 
PasteBin:
<iframe src="http://pastebin.com/raw/FTnMK2E5" style="border:none;width:100%;"><iframe>
CódigoBlog:
#!/bin/bash
#-------------------------------------------------------------------------
# feed.sh
# Mostra últimas notícias/posts de um blog/site desejado
# Função Shell Script para Leitor de Feed
# SED, Shell Script
# Uso: ./feed.sh [quantidade de noticias/posts]
# Digite o número correspondente no menu para escolher o feed desejado e pressione [ENTER].
# Exemplo: ./feed.sh 6
# Os ESCOLHA UM NÚMERO DAS OPÇÕES ABAIXO:
#❶ Terminal Root
#❷ Aurélio
#❸ Seja Livre
#❹ Viva o Tux
#❺ Video Aulas Brasil
# Se Não passar o 1° parâmetro (da quantidade de noticias/posts), exibirá 5 posts/noticias.
# Autor: Marcos Oliveira
# Desde: Dom 23 Jun 2013 23:14:54 BRT
# Versão: 2
# Licença: GPL
#-------------------------------------------------------------------------
leitorFeed(){
 [ -e $1 ] &amp;&amp; max=5 || max=$1
 
 echo -e "\e[45;37;1mOs ESCOLHA UM NÚMERO DAS OPÇÕES ABAIXO:\033[m\n"
 
 echo -e "❶ \e[44;37;1m Terminal Root\033[m"
 echo -e "❷ \e[44;37;1m Aurélio\033[m"
 echo -e "❸ \e[44;37;1m Seja Livre\033[m"
 echo -e "❹ \e[44;37;1m Viva o Tux\033[m"
 echo -e "❺ \e[44;37;1m Video Aulas Brasil\033[m"
 read OPCAO
 case "$OPCAO" in
 1) feed="http://goo.gl/jxw8M";;
 2) feed="http://goo.gl/OZIuq";;
 3) feed="http://goo.gl/Rgisz";;
 4) feed="http://goo.gl/gd6uBr";;
 5) feed="http://goo.gl/rBzCz";;
 *) exit 1;;
 esac
 feedxml=".feed"
 newfeed=".newfeed"
 qtde=$(($max + 1))
 lynx -source $feed > $feedxml
 sed -i 's/>/>\n/g' $feedxml
 sed -n '//p' $feedxml > $newfeed
 sed -i 's///' $newfeed
 sed -i '2,$s/^/ ➜ /' $newfeed
 titulo=$(sed -n 1p $newfeed)
 posts=$(sed -ne "2,$qtde p" $newfeed)
 
 reset
 
 echo -e "\n \e[33;1m ::::::::: $titulo ::::::::: \e[m \n"
 echo -e " \e[45;37;1m Os $max mais recentes posts são: \e[m"
 echo
 echo -e "\e[37;1m$posts\e[m"
 echo -e " ::::::::::::::::::::::::::::\n"
 rm -rf $feedxml $newfeed
}
reset
leitorFeed $1
Até a próxima!
