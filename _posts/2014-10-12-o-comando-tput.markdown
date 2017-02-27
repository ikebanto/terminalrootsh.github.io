---
layout: post
title: O comando tput
date: '2014-10-12T18:01:00.000-07:00'
description: O comando tput
main-class: 'bash'
tags:
- Shell Script
- Comandos
twitter_text: O comando tput
introduction: O comando tput
---
<!-- 
![Blog Linux](http://3.bp.blogspot.com/-2wWL6unZCAk/VDsj1V2AYwI/AAAAAAAAA2c/OBRDwRgIgUU/s1600/new-logo-tr.png "Blog Linux")
-->O comando tputO maior uso deste comando é para posicionar o cursor na tela, mas  também é muito usado para apagar dados da tela, saber a quantidade de  linhas e colunas para poder posicionar corretamente um campo, apagar um  campo cuja crítica detectou como errado. Enfim, quase toda a formatação  da tela é feita por este comando.
Uns poucos atributos do comando {% highlight bash %}
tput
{% endhighlight %} podem eventualmente não funcionar se o modelo de terminal definido pela variável $TERM não tiver esta facilidade incorporada.
Na tabela a seguir, apresenta os principais atributos do comando e os  efeitos executados sobre o terminal, mas veja bem existem muito mais do  que esses, veja só:
$ tput it
8Neste exemplo eu recebi o tamanho inicial da  ( Initial T ab), mas me diga: para que eu quero saber isso? Se você quiser saber  tudo sobre o comando tput (e olha que é coisa que não acaba mais), veja  em: http://www.cs.utah.edu/dept/old/texinfo/tput/tput.html#SEC4.
Principais Opções do Comando tputOpções do {% highlight bash %}
tput
{% endhighlight %} Efeito{% highlight bash %}
cup lin col
{% endhighlight %}CUrsor Position – Posiciona o cursor na linha lin e coluna col. A origem é zero{% highlight bash %}
bold
{% endhighlight %}Coloca a tela em modo de ênfase{% highlight bash %}
rev
{% endhighlight %}Coloca a tela em modo de vídeo reverso{% highlight bash %}
smso
{% endhighlight %}Idêntico ao anterior{% highlight bash %}
smul
{% endhighlight %}A partir desta instrução, os caracteres teclados aparecerão sublinhados na tela{% highlight bash %}
blink
{% endhighlight %}Os caracteres teclados aparecerão piscando{% highlight bash %}
sgr0
{% endhighlight %}Após usar um dos atributos acima, use este para restaurar a tela ao seu modo normal{% highlight bash %}
reset
{% endhighlight %}Limpa o terminal e restaura suas definições de acordo com o {% highlight bash %}
terminfo
{% endhighlight %} ou seja, o terminal volta ao padrão definido pela variável {% highlight bash %}
$TERM
{% endhighlight %}{% highlight bash %}
lines
{% endhighlight %}Devolve a quantidade de linhas da tela no momento da instrução{% highlight bash %}
cols
{% endhighlight %}Devolve a quantidade de colunas da tela no momento da instrução{% highlight bash %}
el
{% endhighlight %}Erase Line – Apaga a linha a partir da posição do cursor{% highlight bash %}
ed
{% endhighlight %}Erase Display – Apaga a tela a partir da posição do cursor{% highlight bash %}
il n
{% endhighlight %}Insert Lines – Insere {% highlight bash %}
n
{% endhighlight %} linhas a partir da posição do cursor{% highlight bash %}
dl n
{% endhighlight %}Delete Lines – Remove {% highlight bash %}
n
{% endhighlight %} linhas a partir da posição do cursor{% highlight bash %}
ech n
{% endhighlight %}Erase CHaracters – Apaga {% highlight bash %}
n
{% endhighlight %} caracteres a partir da posição do cursor{% highlight bash %}
sc
{% endhighlight %}Save Cursor position – Salva a posição do cursor{% highlight bash %}
rc
{% endhighlight %}Restore Cursor position – Coloca o cursor na posição marcada pelo último {% highlight bash %}
sc
{% endhighlight %}Vamos fazer um programa bem besta (e portanto fácil) para mostrar  alguns atributos deste comando. É o famoso e famigerado Alô Mundo só que  esta frase será escrita no centro da tela e em vídeo reverso e após  isso, o cursor voltará para a posição em que estava antes de escrever  esta tão criativa frase. Veja:
$ cat alo.sh
#!/bin/bash
# Script bobo para testar
# o comando tput (versao 1)
Colunas=`tput cols`     #  Salvando quantidade colunas
Linhas=`tput lines`     #  Salvando quantidade linhas
Linha=$((Linhas / 2))   #  Qual eh a linha do meio da tela?
Coluna=$(((Colunas – 9) / 2)) # Centrando a mensagem na tela
tput sc                 #  Salvando posicao do cursor
tput cup $Linha $Coluna #  Posicionando para escrever
tput rev                #  Video reverso
echo Alô Mundo
tput sgr0               #  Restaura video ao normal
tput rc                 #  Restaura cursor aa posição originalComo o programa já está todo comentado, acho que a única explicação necessária seria para a linha em que é criada a variável {% highlight bash %}
Coluna
{% endhighlight %} e o estranho ali é aquele número {% highlight bash %}
9
{% endhighlight %}, mas ele é o tamanho da cadeia que pretendo escrever (Alô Mundo).
Desta forma este programa somente conseguiria centrar cadeias de 9 caracteres, mas veja isso:
$ var=Papo
$ echo ${#var}
4
$ var=”Papo de Botequim”
$ echo ${#var}
16Ahhh, melhorou! Então agora sabemos que a construção {% highlight bash %}
${#variavel}
{% endhighlight %} devolve a quantidade de caracteres de {% highlight bash %}
variavel
{% endhighlight %}.  Assim sendo, vamos otimizar o nosso programa para que ele escreva em  vídeo reverso, no centro da tela a cadeia passada como parâmetro e  depois o cursor volte à posição que estava antes da execução do script.
$ cat alo.sh
#!/bin/bash
# Script bobo para testar
# o comando tput (versao 2)
Colunas=`tput cols`      #  Salvando quantidade colunas
Linhas=`tput lines`      #  Salvando quantidade linhas
Linha=$((Linhas / 2))    # Qual eh a linha do meio da tela?
Coluna=$(((Colunas – ${#1}) / 2)) #Centrando a mensagem na tela
tput sc                  # Salvando posicao do cursor
tput cup $Linha $Coluna  #  Posicionando para escrever
tput rev                 #  Video reverso
echo $1
tput sgr0                #  Restaura video ao normal
tput rc                  #  Restaura cursor aa posição originalEste script é igual ao anterior, só que trocamos o valor fixo da versão anterior ({% highlight bash %}
9
{% endhighlight %}), por {% highlight bash %}
${#1}
{% endhighlight %}, onde este {% highlight bash %}
1
{% endhighlight %} é o {% highlight bash %}
$1
{% endhighlight %} ou seja, esta construção devolve o tamanho do primeiro parâmetro  passado para o programa. Se o parâmetro que eu quiser passar tiver  espaços em branco, teria que colocá-lo todo entre aspas, senão o {% highlight bash %}
$1
{% endhighlight %} seria somente o primeiro pedaço. Para evitar este aborrecimento, é só substituir o {% highlight bash %}
$1
{% endhighlight %} por {% highlight bash %}
$*
{% endhighlight %}, que como sabemos é o conjunto de todos os parâmetros. Então aquela linha ficaria assim:
    Coluna=`$(((Colunas - ${#*}) / 2))` #Centrando a mensagem na telae a linha {% highlight bash %}
echo $1
{% endhighlight %} passaria a ser {% highlight bash %}
echo $*
{% endhighlight %}. Mas não esqueça de qdo executar, passar a frase que vc desja centrar como parâmetro.
Via: http://jneves.wordpress.com
