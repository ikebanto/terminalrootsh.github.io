---
layout: post
title: "# Game Shell - Movimentos básicos [outra forma | Aula 1#2]"
date: '2014-08-17T15:10:00.000-07:00'
description: "# Game Shell - Movimentos básicos [outra forma | Aula 1#2]"
main-class: 'bash'
tags:
- Shell Script
- Games
image: http://4.bp.blogspot.com/-U4alnTRqSOw/U_EnPW1xUyI/AAAAAAAAAkE/-pjIWFJzsW8/s72-c/mesa.jpg
twitter_text: "# Game Shell - Movimentos básicos [outra forma | Aula 1#2]"
introduction: "# Game Shell - Movimentos básicos [outra forma | Aula 1#2]"
---
![Blog Linux](http://4.bp.blogspot.com/-U4alnTRqSOw/U_EnPW1xUyI/AAAAAAAAAkE/-pjIWFJzsW8/s320/mesa.jpg "Blog Linux")
Segue outra forma de criar movimentos ao longo do terminal, leia os comentários para entender o funcionamento. 
Código no Paste Bin: 
<iframe src="http://pastebin.com/raw/jruKpeSi" style="border:none;width:100%;"><iframe> 
Código no Blog: 
#!/bin/bash
# Game Shell - Movimentos básicos [outra forma | Aula 1#2]
# baseado em lendscripts.blogspot.com.br
setterm -cursor off # desliga o cursor, fica invisível, on liga
clear # limpa a tela
x=0;y=0;a=0; # seta variáveis que serão utilizadas, x e y p/ representar coordenadas cartesianas no clear. e a tecla para movimento
echo -n "o" # exibe o "o"
until [ $a = q ];do # until é um inverso do while, ele loopa uma condição falsa.
  read -sn 1 a # a opção -s(deixa o digitado invisível) e a -n(conta n°s (1) digitados para executar sem precisar dá enter)
  clear
  ######## Leitura do Teclado ####
  case $a in
   a) let "x = x - 1";; # esquerda
   d) let "x = x + 1";; # direita
   w) let "y = y - 1";; # cima
   s) let "y = y + 1";; # baixo
  esac
  ################################
  ##### Movimento da Bolinha #####
  f=0 # variável pra movimento
  while [ $y -gt $f ];do # se y for maior que f, empurra pra baixo, como o clear está no loop, se y for negativo, sobe
   echo # empurra a bolinha pra baixo
   let "f = f + 1"
  done
  f=0
  while [ $x -gt $f ];do # se x for maior que f, empurra pro lado direito, como o clear está no loop se x for negativo, esquerdo
   echo -n " " # empurra a bolinha pro lado
   let "f = f + 1"
  done
  echo -n o; # exibe o "o" no loop
done
###############################
clear; setterm -cursor on; echo FIM;
exit 0
