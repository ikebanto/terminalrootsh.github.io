---
layout: post
title: Game de advinhação em Shell Script
date: '2013-09-29T18:18:00.001-07:00'
description: Game de advinhação em Shell Script
main-class: 'bash'
tags:
- Shell Script
- Games
image: http://4.bp.blogspot.com/-_gUy0yQTqZM/UkjQtOlbfaI/AAAAAAAACbY/NaIi4dzZ2Xg/s72-c/shell+script2.png
twitter_text: Game de advinhação em Shell Script
introduction: Game de advinhação em Shell Script
---
Segue Script do Jogo
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
