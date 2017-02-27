---
layout: post
title: "Como criar uma leitura pausada em Shell Script"
date: '2015-07-27T18:56:00.000-07:00'
description: "Como criar uma leitura pausada em Shell Script"
main-class: 'bash'
tags:
- Shell Script
image: "http://2.bp.blogspot.com/-9Bmb1Mr5B1g/Vbbf9Ij2suI/AAAAAAAABjI/l0d3HoryoUU/s72-c/leitura.png"
twitter_text: "Como criar uma leitura pausada em Shell Script"
introduction: "Como criar uma leitura pausada em Shell Script"
---
![Blog Linux](http://2.bp.blogspot.com/-9Bmb1Mr5B1g/Vbbf9Ij2suI/AAAAAAAABjI/l0d3HoryoUU/s400/leitura.png "Blog Linux")
 
COMO CRIAR UMA LEITURA PAUSADA EM SHELL SCRIPT
Acabei de fazer esse script só pra estudar comandos e quis compartilhá-lo com vocês. Basicamente ele lê um texto como na imagem do GIF abaixo, serve como aprendizado e exercício.
Ver resultado em GIF
No próprio script possui as explicações nos #comentários. Tente melhorar alguma coisa, ou adicionar mais funcionalidades. :)
Por enquanto é só!
  <iframe src="http://pastebin.com/raw/HA2nmU3H" style="border:none;width:100%;"><iframe>
 {% highlight bash %}
#!/bin/bash
# Como criar uma leitura pausada em Shell Script
# http://www.terminalroot.com.br/
# limpamos a tela resetando os comandos
reset
# frase que iremos ler, pode usar tb: frase="$(cat texto.txt)" , para ler um arquivo .txt ou outro
frase="O primeiro shell Unix, o sh criado por Ken Thompson, foi modelado depois do shell Multics, em si modelado com base no programa RUNCOM de Louis Pouzin.";
# Contamos quantos caracteres tem a string/frase/texto
tam="${#frase}";
# desligamos o cursor
setterm -cursor off;
# escolhemos a posição de início da leitura na tela
tput cup 2 4;
# iniciamos o loop com seq de 0 até o máximo que é o tamanho da string
for i in $(seq 0 $tam)
do
 # lêmos 1 caracter na posição i da variável "frase"
 echo -en "${frase:$i:1}"
 
 # pausamos de acordo com o tempo q desejamos
 sleep 0.1
done
# só pulamos mais uma linha
echo -e "\n";
# religamos o cursor
setterm -cursor on;
exit 0
{% endhighlight %}
<div class= "Blog Linux")
