---
layout: post
title: 30 exemplos do comando sed ( com regex )
date: '2015-07-25T11:11:00.000-07:00'
description: 30 exemplos do comando sed ( com regex )
main-class: 'misc'
tags:
- SED
image: http://3.bp.blogspot.com/-zeuWvpMP3uY/VbPMlEy4loI/AAAAAAAABho/BCGNreo0ceA/s72-c/sed-regex.jpg
twitter_text: 30 exemplos do comando sed ( com regex )
introduction: 30 exemplos do comando sed ( com regex )
---
![Blog Linux](http://3.bp.blogspot.com/-zeuWvpMP3uY/VbPMlEy4loI/AAAAAAAABho/BCGNreo0ceA/s1600/sed-regex.jpg "Blog Linux")
30 EXEMPLOS DO COMANDO SED (REGEX)
O Sed é um editor de textos não interativo.Vem do inglês "Stream EDitor", ou seja, editor de fluxos (de texto). O Sed da GNU, atualmente é o utilizado pela maioria das distribuições de Linux e é o que tem mais funcionalidades novas, mas se por algum caso não tenha:
Download do sed: ftp://ftp.unicamp.br/pub/gnu/sed/
Instalação via gerenciador de pacotes: [gerenciador] install sed
Exemplo de instalação no Debian GNU/Linux: apt-get install sed
é case sentive-i altera o arquivo-e imprime na tela sem alterar o arquivo-n faz a supressão, mostra só o resutado do comandos substitui um trecho de texto por outro! inverte a lógica do comando; separador de comandos| separador de stringsd no final deletap no final imprimeg no final (como se usa o d e p) altera todas as ocorrênciasq sai do sed , não continua o comando
Lista completa das classes de caracteres do GNU sed:
[[:alnum:]] Alfabéticos e númericos [a-z A-Z 0-9]
[[:alpha:]] Alfabéticos [a-z A-Z]
[[:blank:]] Caractere em branco, espaço ou tab [ \t]
[[:cntrl:]] Caracteres de controle [\x00-\x1F\x7F]
[[:digit:]] Números [0-9]
[[:graph:]] Qualquer caractere visível(ou seja, exceto em branco) [\x20-\x7E]
[[:lower:]] Letras minúsculas [a-z]
[[:upper:]] Letras maiúsculas [A-Z]
[[:print:]] Caracteres visíveis (ou seja, exceto os de controle) [\x20-\x7E]
[[:punct:]] Pontuação [-!"#$%&amp;'()*+,./:;?@[\\\]_`{|}~].
[[:space:]] Espaço em branco [ \t\r\n\v\f]
[[:xdigit:]] Número hexadecimais [0-9 a-f A-F]
1 - Troca todas as palavras em um arquivo por outra
{% highlight bash %}
sed -i 's/palavra/outra/' arquivo.txt
{% endhighlight %}
2 - Imprime só a nona linha
{% highlight bash %}
sed -n '9p' arquivo.txt
{% endhighlight %}
3 - Imprime da sexta linha até a nona linha
{% highlight bash %}
sed -n '6,9p' arquivo.txt
{% endhighlight %}
4 - Deleta todas as lihas que contém a palavra string no arquivo
{% highlight bash %}
sed -i '/dmx/d' arquivo.txt
{% endhighlight %}
5 - Coloca uma palavra no INÍCIO de cada linha
{% highlight bash %}
sed 's/^/palavra/' arquivo.txt
{% endhighlight %}
6 - Coloca uma palavra no final de cada linha
{% highlight bash %}
sed 's/$/palavra/' arquivo.txt
{% endhighlight %}
7 - Imprime só as linhas que COMEÇAM com a string 'http'
{% highlight bash %}
sed -n '/^http/p' arquivo.txt
{% endhighlight %}
8 - Deleta só as linhas que COMEÇAM com a string 'http'
{% highlight bash %}
sed -n '/^http/d' arquivo.txt
{% endhighlight %}
9 - Troca TODAS ocorrências da palavra "marcos", "eric", "camila" pela palavra "pinguim"
{% highlight bash %}
sed 's/marcos\|eric\|camila/pinguim/g' arquivo.txt
{% endhighlight %}
10 - Troca tudo que estiver ENTRE as palavras "Marcos" e "Eric" pela palavra "eles", exemplo, o texto é:
"No sábado Marcos saiu de pra brincar de bicicleta com o Eric, mas não ficaram até tarde."
e ficará assim:
"No sábado eles, mas não ficaram até tarde."
{% highlight bash %}
sed 's/Marcos.*Eric/eles/' arquivo.txt
{% endhighlight %}
11 - Deleta linha em branco e altera o arquivo
{% highlight bash %}
sed -i '/^$/d' arquivo.txt
{% endhighlight %}
12 - Substitui "foo" por "bar" somente as linhas que contém "plop"
{% highlight bash %}
sed '/plop/ s/foo/bar/g' arquivo.txt
{% endhighlight %}
13 - Substitui "foo" por "bar" exceto as linhas que contém "plop"
{% highlight bash %}
sed '/plop/! s/foo/bar/g' arquivo.txt
{% endhighlight %}
14 - Insere da Linha 2 a linha 7 o "#" no início de cada linha
{% highlight bash %}
sed '2,7s/^/#/' arquivo.txt
{% endhighlight %}
15 - Insere a palavra 'NEW' no início de cada linha, da linha 21 até a linha 28
{% highlight bash %}
sed -i '21,28s/^/NEW/' arquivo.txt
{% endhighlight %}
16 - Troca tudo entre as tags "" e "" pela palavra "CODIGO" , exemplo de código html:
É assim:
  São os homens os produtores das suas representações, das suas ideias, etc.; mas os homens reais agentes, tais como são condicionados por um desenvolvimento determinado das suas forças produtivas e da...
Depois fica assim:
  CODIGO
{% highlight bash %}
sed 's/.*/CODIGO/' arquivo.txt
{% endhighlight %}
17 - Imprime somente a primeira ocorrência da linha com determinada string
{% highlight bash %}
sed -n '/dia/{p;q;}' arquivo.txt
{% endhighlight %}
18 - Inclue texto no final da linha 9
{% highlight bash %}
sed '9s/$/final da linha/' arquivo.txt
{% endhighlight %}
19 - Coloca todas as linhas em uma só
{% highlight bash %}
sed ':a;$!N;s/\n//;ta;' arquivo.txt
{% endhighlight %}
20 - Substitui a palavra "BELEZA" por "SIM" somente entre determinadas linhas
{% highlight bash %}
sed '3,6s/BELEZA/SIM/' arquivo.txt
{% endhighlight %}
21 - Apaga o que está entre a palavra "falou" e "segundo" ( delimitadores )
{% highlight bash %}
sed '/segundo/{/falou/{s/segundo.*falou//;t};:a;/falou/!{N;s/\n//;ta;};s/segundo.*falou/\n/;}' arquivo.txt
{% endhighlight %}
22 - Retira comandos HTML (tudo entre )
{% highlight bash %}
sed 's/]*>//g' arquivo.txt
{% endhighlight %}
23 - Apaga o 1o caracter da frase
{% highlight bash %}
sed 's/.//' arquivo.txt
{% endhighlight %}
24 - Apaga o 4o caractere da frase
{% highlight bash %}
sed 's/.//4' arquivo.txt
{% endhighlight %}
25 - Apaga os 4 primeiros caracteres
{% highlight bash %}
sed 's/.\{4\}//' arquivo.txt
{% endhighlight %} 
26 - Apaga no mínimo 4 caracteres
{% highlight bash %}
sed 's/.\{4,\}//' arquivo.txt
{% endhighlight %}
27 - Apaga de 2 a 4 caracteres (o máx. que tiver)
{% highlight bash %}
sed 's/.\{2,4\}//' arquivo.txt
{% endhighlight %}
28 - Exemplos de intervalo
{% highlight bash %}
echo "aáeéiíoóuú" | sed "s/[a-u]//g"
áéíóú
{% endhighlight %}
{% highlight bash %}
echo "aáeéiíoóuú" | sed "s/[á-ú]//g"
aeiou
{% endhighlight %}
29 - Transforma texto (URL) em tags HTML de links.
Era : http://www.com
Fica: http://www.com
{% highlight bash %}
sed 's_\&amp;_' arquivo.txt
{% endhighlight %}
30 - Expressões Regulares com SED ( sed regex )
Este sed lê dados do arquivo.txt e apaga (comando d) desde a primeira linha, até a linha que contenha 3 números seguidos, jogando o resultado na tela. Se quiser gravar o resultado, redirecione-o para outro arquivo, não o próprio arquivo.txt .
{% highlight bash %}
sed '1,/[0-9]\{3\}/d' arquivo.txt
{% endhighlight %}
Apagar números
{% highlight bash %}
s/[0-9]\+//g' arquivo.txt
{% endhighlight %}
Imprime só linhas que contém PONTUAÇÃO:
{% highlight bash %}
sed -n '/[[:punct:]]/p' arquivo.txt
{% endhighlight %}
Imprime só linhas que começam com Números:
{% highlight bash %}
sed -n '/^[[:digit:]]/p' arquivo.txt
{% endhighlight %}
Formatando numero de telefone:
temos um arquivo com os números de telefone assim:
7184325689
4333285236
1140014004
3633554488
Executando alguns desse modos de comando em SED:
Modo Neandertal:
Substitui 2 caracteres ".." por "&amp;" que é a saída da solicitaçãoExecuta outro sed pra substituir 8 caracteres de novo pelo "&amp;"Obs.: Precisa sempre escapar os parênteses "\(" e "\)"
{% highlight bash %}
sed 's/../\(&amp;\)/' arquivo.txt | sed 's/......../&amp;-/' arquivo.txt
{% endhighlight %}
Modo Medieval:
O mesmo do de cima, só pus o "{8}" pra marcar 8 caracteres "."Também precisa, SEMPRE, escapar as chaves "\{" e "/}" 
{% highlight bash %}
sed 's/../\(&amp;\)/' arquivo.txt | sed 's/.\{8\}/&amp;-/' arquivo.txt
{% endhighlight %}
Modo Moderno:
Ao invés de jogar a saída, separei o comando com ponto-vírgula ";" e lancei outro sed "s"
{% highlight bash %}
sed 's/../\(&amp;\)/;s/.\{8\}/&amp;-/' arquivo.txt
{% endhighlight %}
Modo Pós-Moderno:
Esse modo é pra entender o seguinte:
 O primeiro comando entre parênteses "\(..\)" Depois separado por barra "\", lancei ou comando entre parênteses "\(.\{4\}\)" A saída do primeiro comando vai pro barra 1 "\1" E a do segundo comando pro barra 2 "\2" , poderia ter também o barra 3, n, ...
{% highlight bash %}
sed 's/\(..\)\(.\{4\}\)/(\1)\2-/g' arquivo.txt
{% endhighlight %}
Fica assim:
(71)8432-5689
(43)3328-5236
(11)4001-4004
(36)3355-4488
Links úteis para mais informações:
http://goo.gl/U0Pbc9
thobias.org/doc/sosed.html
http://aurelio.net/sed
http://aurelio.net/sed/alfabeto.html
http://www.gnu.org/software/sed/
http://aurelio.net/sed/sed-dicas.txt
http://aurelio.net/sed/sed-HOWTO
http://goo.gl/gR59Fw
http://sed.sourceforge.net/
