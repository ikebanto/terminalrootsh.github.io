---
layout: post
title: "Como remover ícones da Área de Trabalho no Gnome 2"
date: '2012-09-16T12:28:00.000-07:00'
description: "Como remover ícones da Área de Trabalho no Gnome 2"
main-class: 'misc'
tags:
- Dicas
image: "http://4.bp.blogspot.com/-jj9QmdT95mo/UFYnHq66Y8I/AAAAAAAAAgY/hdIGrhvZguA/s72-c/Captura_de_tela.png"
twitter_text: "Como remover ícones da Área de Trabalho no Gnome 2"
introduction: "Como remover ícones da Área de Trabalho no Gnome 2"
---
 
![Blog Linux](http://4.bp.blogspot.com/-jj9QmdT95mo/UFYnHq66Y8I/AAAAAAAAAgY/hdIGrhvZguA/s1600/Captura_de_tela.png "Blog Linux")
Olá rapazia, uma dica rápida para aqueles que desejam retirar o ícones: Computador, Pasta Pessoal e Lixeira do Desktop no Gnome 2, os ícones que já vem exibidos por padrão.Segue um básico passo-a-passo:
 1-aperte simultaneamente Atl+F22-escreva gconf-editor3-siga o endereço: apps/nautilus/desktop.4- os itens "computer_icon_visible" e "home_icon_visible" estarão marcados, dê um duplo-clique neles e altere o valor para "Falso" clicando em cima do nome "Verdadeiro".5-Basta fechar o Editor de Configurações(gconf-editor) e pronto!6-se quiser remover a lixeira é só fazer o mesmo no item "trash_icon_visible".
Isso eu descobri só, ou seja, muitas coisas são totalmente intuitivas, basta fuçar com cautela!
Até a próxima!
