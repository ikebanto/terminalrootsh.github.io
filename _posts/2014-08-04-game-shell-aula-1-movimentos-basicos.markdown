---
layout: post
title: Game Shell [AULA 1] Movimentos básicos
date: '2014-08-04T16:45:00.004-07:00'
description: Game Shell [AULA 1] Movimentos básicos
main-class: 'bash'
tags:
- Shell Script
- Games
- Comandos
image: http://2.bp.blogspot.com/-VEIOYJCU3zU/U-Aawt5NmOI/AAAAAAAAAe8/b6BIdIGfAi8/s72-c/nSnake_Linux_terminal_game.jpeg
twitter_text: Game Shell [AULA 1] Movimentos básicos
introduction: Game Shell [AULA 1] Movimentos básicos
---
![Blog Linux](http://2.bp.blogspot.com/-VEIOYJCU3zU/U-Aawt5NmOI/AAAAAAAAAe8/b6BIdIGfAi8/s320/nSnake_Linux_terminal_game.jpeg "Blog Linux")
Leia os comentários para entender o código. 
Código no PasteBin:
<iframe src="http://pastebin.com/raw/SQE2G61k" style="border:none;width:100%;"><iframe> 
Código no Blogger:
#!/bin/bash
#
# Game Shell-[AULA 1]:Movimentos básicos
# script para mover imagem pelo terminal
# início do entendimento a jogos em shell
#
tput clear; # limpa o terminal, mesmo que reset
tput civis; # cursor invisivel
Lin=$(($(tput lines) / 2)) # linha do meio
Col=$(($(tput cols) / 2)) # coluna do meio
tput cup $Lin $Col; echo ♛ # coloca o cursor no meio
# começa o laço/loop
while true 
do
 # ler a variável chave, a opção -s é para deixa a resposta invisível, usado geralmente para senhas no terminal
 # a opção -n com 1 diz que ao apertar a letra uma(1) vez já execute o echo
 # chave é a váriavel pro comando a ser executado
 # esse read tem que ficar dentro do laço/loop
 read -sn 1 Chave
 tput cup $Lin $((Col > 0 ? Col - 1 : 0)); echo -n " " # apaga
 case $Chave in
 [Aa]) ((Col > 0)) &amp;&amp; let Col-- ;; # Move para Esquerda, pressionando a letra A ou a
 [Ss]) ((Col < $(tput cols))) &amp;&amp; let Col++ ;; # Move para Direita, pressionando a letra S ou s
 [Zz]) ((Lin < $(tput lines))) &amp;&amp; let Lin++ ;; # Move para Baixo, pressionando a letra W ou w
 [Ww]) ((Lin > 0)) &amp;&amp; let Lin-- ;; # Move para Cima, pressionando a letra Q ou q
 [Qq]) tput reset; echo; exit
 esac
 # apaga caracteres, veja aqui https://www.gnu.org/software/termutils/manual/termutils-2.0/html_chapter/tput_1.html
 tput ech 1
 
 # comando
 tput cup $Lin $Col
 
 # exibe durante movimento
 echo -n ▲
 
# finaliza o laço/loop
done
