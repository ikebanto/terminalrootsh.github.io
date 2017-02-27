---
layout: post
title: "20 exemplos do comando tput"
date: '2015-08-18T09:43:00.000-07:00'
description: "20 exemplos do comando tput"
main-class: 'bash'
tags:
- Shell Script
- Comandos
image: "http://3.bp.blogspot.com/-djcDKdR4NfI/Vce_WX5J53I/AAAAAAAABpE/atEEOqGszoI/s72-c/tput.jpg"
twitter_text: "20 exemplos do comando tput"
introduction: "20 exemplos do comando tput"
---
![Blog Linux](http://3.bp.blogspot.com/-djcDKdR4NfI/Vce_WX5J53I/AAAAAAAABpE/atEEOqGszoI/s640/tput.jpg "Blog Linux")
tput é um comando do sistema operacional Unix que faz uso de capacidades do terminal.Dependendo do sistema, tput usa o terminfo ou termcap.
1 - Mostrar quantidade de linhas do terminal(altera o resultado ao redimensionar o tamanho da janela do terminal)
{% highlight bash %}
tput lines
{% endhighlight %}
2 - Mostrar quantidade de colunas do terminal(altera o resultado ao redimensionar o tamanho da janela do terminal)
{% highlight bash %}
tput cols
{% endhighlight %}
3 - Posicionar o Cursor na linha 9 na coluna 6 (tput cup linha coluna) (cup = CUrsor Pointer)
{% highlight bash %}
tput cup 6 9
{% endhighlight %}
4 - Posicionar o cursor no meio da tela
{% highlight bash %}
Linhas=$(($(tput lines) / 2)); Colunas=$(($(tput cols) / 2)) ; tput cup $Linhas $Colunas
{% endhighlight %}
5 - Reseta as configurações do terminal (após usar: bold, rev,...)
{% highlight bash %}
tput reset
{% endhighlight %}
6 - Mostrar o terminal em negrito
{% highlight bash %}
tput bold
{% endhighlight %}
7 - Inverter as cores do terminal (se o fundo for preto e a cor for ver, inverte)
{% highlight bash %}
tput rev
{% endhighlight %}
8 - Escrever com sublinhado
{% highlight bash %}
tput smul
{% endhighlight %}
9 - Desligar sublinhado
{% highlight bash %}
tput rmul
{% endhighlight %}
Obs.: O comando tput smso também sublinha e para desligar(voltar ao normal), usa-se o tput rmso
10 - Voltar uma linha (Erase Line)
{% highlight bash %}
tput el
{% endhighlight %}
11 - Apaga a tela a partir da posição do cursor (Erase Display)
{% highlight bash %}
tput ed
{% endhighlight %}
Obs.: Os caracteres teclados aparecerão piscando
tput blink
12 - Apagar n caracteres (Erase CHaracter) , exemplo (apaga 1 caracter)
{% highlight bash %}
tput ech 1
{% endhighlight %}
Obs.: Há também os comandos tput cub N ; tput cuf N ; tput cub1 ; tput cuf1 ; tput ll ; tput cuu1
13 - Salvar posicao do cursor (Save Cursor)
{% highlight bash %}
tput sc
{% endhighlight %}
14 - Restaurar a posicao normal do cursor (Restore Cursor)
{% highlight bash %}
tput rc
{% endhighlight %}
Obs.: Restaura o video ao normal
{% highlight bash %}
tput sgr0
{% endhighlight %}
exemplo1:
      
15 - Mudar a cor FOREGROUND para vermelho (1=vermelho; 2=verde; 3=amarelo; 4=azul; 5=roxo; 6=azul claro; 7=branco; 9=limpa)
{% highlight bash %}
tput setaf 1
{% endhighlight %}
16 - Mudar a cor BACKGROUND para vermelho (1=vermelho; 2=verde; 3=amarelo; 4=azul; 5=roxo; 6=azul claro; 7=branco; 9=limpa)
{% highlight bash %}
tput setab 1
{% endhighlight %}
17 - Alterar o brilho
{% highlight bash %}
tput dim
{% endhighlight %}
18 - Limpar a tela
{% highlight bash %}
tput clear
{% endhighlight %}
19 - Deixar o cursor invisível
{% highlight bash %}
tput civis
{% endhighlight %}
Obs.: o tput cnorm deixa o cursor visível
20 - Toca o alarme
{% highlight bash %}
tput bel
{% endhighlight %}
    
Mais: 
O comando tput
http://linux.about.com/library/cmd/blcmdl1_setterm.htm
http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/x405.html
http://www.bashguru.com/2010/04/how-to-handle-cursor-movement-in-shell.html
https://www.ibm.com/developerworks/aix/library/au-learningtput/
http://www.gnu.org/software/termutils/manual/termutils-2.0/html_chapter/tput_1.html
https://en.wikipedia.org/wiki/Tput
http://linuxcommand.org/lc3_adv_tput.php
