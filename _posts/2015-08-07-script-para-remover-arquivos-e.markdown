---
layout: post
title: "Script para remover arquivos e diretórios com segurança"
date: '2015-08-06T22:49:00.000-07:00'
description: "Script para remover arquivos e diretórios com segurança"
main-class: 'bash'
tags:
- Shell Script
- Dicas
- Terminal
- Comandos
image: "http://2.bp.blogspot.com/-aUKpJK7kMiQ/VcREUraJU1I/AAAAAAAABng/iIL_yMZUcHk/s72-c/remove.jpg"
twitter_text: "Script para remover arquivos e diretórios com segurança"
introduction: "Script para remover arquivos e diretórios com segurança"
---
![Blog Linux](http://2.bp.blogspot.com/-aUKpJK7kMiQ/VcREUraJU1I/AAAAAAAABng/iIL_yMZUcHk/s1600/remove.jpg "Blog Linux")
Script para remover arquivos e diretórios com segurança
Muitas vezes perdemos arquivos ou diretórios que não queríamos excluir com o comando rm . Muitos tem a ideia de usar um alias para o rm e o rm -rf ou só rm -f para rm -i , no entanto , mesmo depois de dizer sim , nos arrependemos de excluir . Logo , criei essa outra solução de mover para lixeira , aumentado ainda mais a possibilidade da desistência . Você pode criar um script com esse código , ou mesmo editar seu .bashrc e incluir essa função junto com o alias . Lembrando que quando criamos uma função dentro do .bashrc , automaticamente ela virará também um comando , desta forma você pode usar , caso deseje , o comando remover em vez de rm também.
Primeiramente vou explicar cada linha:
No primeiro comando da função remover(), temos uma validação no caso do usuário ter usado qualquer opção: -rf , -r , -f ,... Limpando a opção e pegando somente o arquivo , para isso usei o comando shift , ou seja , o $2 (que é o arquivo ou o diretório , nesse caso) e passando para o $1.
{% highlight bash %}
if [ ! -f "$1" ] &amp;&amp; [ ! -d "$1" ]; then
 shift
fi
{% endhighlight %}
 
Logo depois temos declarações de variáveis , onde a origem será o arquivo "$1" e o destino o caminho da lixeira /home/$USER/.local/share/Trash/files/ e então movemos o arquivo para lixeira , caso posteriormente , deseje realmente excluir , esvaziar a lixeira ou só os arquivos/diretórios que deseje.
{% highlight bash %}
origem="$1";
destino="/home/$USER/.local/share/Trash/files/"; 
mv "$origem" "$destino";
echo "Movido para lixeira!";
{% endhighlight %}
No final uma mensagem de interação só para lembrar de que não foi excluído!
Como disse , você pode editar seu ~/.bashrc e incluir no final do arquivo o código abaixo:
  
Só isso!
