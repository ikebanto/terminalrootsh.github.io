---
layout: post
title: 'Shell: Somar uma lista de números'
date: '2014-10-05T06:00:00.000-07:00'
description: 'Shell: Somar uma lista de números'
main-class: 'bash'
tags:
- Shell Script
- Dicas
image: http://4.bp.blogspot.com/-0-g4Dd_lBIo/U_52O4ZccAI/AAAAAAAAAnU/g_LhofLRK6c/s72-c/10574302_1493727024198652_2721287585774935056_n.png
twitter_text: 'Shell: Somar uma lista de números'
introduction: 'Shell: Somar uma lista de números'
---
![Blog Linux](http://4.bp.blogspot.com/-0-g4Dd_lBIo/U_52O4ZccAI/AAAAAAAAAnU/g_LhofLRK6c/s1600/10574302_1493727024198652_2721287585774935056_n.png "Blog Linux")
Você tem uma lista de números, um por linha, e precisa somá-los:
$ cat numeros.txt 3 5 7 9 11 13 15
Primeiro, coloque todos em uma única linha:
$ paste -s numeros.txt 3 5 7 9 11 13 15
Agora mude o delimitador (-d) de TAB para “+”, para compor a expressão aritmética de soma:
$ paste -s -d + numeros.txt 3+5+7+9+11+13+15
Agora sim, basta passar a expressão resultante para a calculadora do shell:
$ paste -s -d + numeros.txt | bc 63Via: http://codare.net
