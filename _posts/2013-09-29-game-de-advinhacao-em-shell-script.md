---
layout: post
title: "Game de advinhação em Shell Script"
date: '2013-09-29T18:18:00.001-07:00'
image: '/assets/img/shell-script/terminal57.png'
description: "Game simples para estudo básico"
main-class: 'bash'
tags:
- Shell Script
- Games
---

![Game de advinhação em Shell Script](/assets/img/shell-script/terminal57.png "Game de advinhação em Shell Script")

# Segue Script do Jogo

{% highlight bash %}
#!/bin/bash
gameGuess(){
sorteio=$((RANDOM % 20 + 1))
echo "Estou pensando em um número de 1 a 20."
for ((chances=5;chances>=1;chances--));
do
	echo "Que número estou pensando? Você tem $chances tentativas."
	read resposta
		if [ $sorteio -eq $resposta ]
		then
			echo "Parabéns acertou"
			exit 0
		else
			echo "Você errou."
		fi
done
echo "Você não conseguiu adivinhar =["
echo "Eu havia escolhido o número $sorteio"
}
gameGuess
{% endhighlight %}
