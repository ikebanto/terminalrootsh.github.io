---
layout: post
title: "Criando um tabuleiro de xadrez com Shell Script"
date: '2015-05-25T18:21:00.000-07:00'
description: "Criando um tabuleiro de xadrez com Shell Script"
main-class: 'bash'
tags:
- Shell Script
image: "http://4.bp.blogspot.com/-HnqMwN3-jJo/VWUcJiFhphI/AAAAAAAABTk/lgZAqv2NFPw/s72-c/chess-shell.png"
twitter_text: "Criando um tabuleiro de xadrez com Shell Script"
introduction: "Criando um tabuleiro de xadrez com Shell Script"
---
![Blog Linux](http://4.bp.blogspot.com/-HnqMwN3-jJo/VWUcJiFhphI/AAAAAAAABTk/lgZAqv2NFPw/s320/chess-shell.png "Blog Linux")
Programação Shell Script de muita diversão. O script a seguir imprime um tabuleiro de xadrez com 8 × 8 quadrados intercalação preto e branco. Usando simples loops de O (n ^ 2) e uma matemática simples produz a impressão de tabuleiro de xadrez.
 Código:
{% highlight bash %}
#!/bin/sh
# Criando um tabuleiro de xadrez com Shell Script
# http://www.terminalroot.com.br/ 
for i in $(seq 1 8)
do
 for j in $(seq 1 8)
 do
 S=$(((i+j)%2))
 if [ $S -eq 0 ]
 then
 echo -n "33[47m " # white
 else
 echo -n "33[40m " # black
 fi
 done
 echo -n "33[40m" # black, ensure it exists normally
 echo "" # new line
done
{% endhighlight %}
 #!/bin/sh
# Criando um tabuleiro de xadrez com Shell Script
# http://www.terminalroot.com.br/ 
for i in $(seq 1 8)
do
 for j in $(seq 1 8)
 do
 S=$(((i+j)%2))
 if [ $S -eq 0 ]
 then
 echo -n “33[47m ” # white
 else
 echo -n “33[40m ” # black
 fi
 done
 echo -n “33[40m” # black, ensure it exists normally
 echo “” # new line
done
 Via: https://helloacm.com/
