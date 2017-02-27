---
layout: post
title: 'Dica rápida: Dividinho e juntando arquivos'
date: '2013-05-30T14:49:00.001-07:00'
description: 'Dica rápida: Dividinho e juntando arquivos'
main-class: 'linux'
tags:
- Linux
- Dicas
image: http://2.bp.blogspot.com/-pTkY7cyUcCw/Uaah_mzgO1I/AAAAAAAABqg/8NaURrxnG08/s72-c/Screenshot.png
twitter_text: 'Dica rápida: Dividinho e juntando arquivos'
introduction: 'Dica rápida: Dividinho e juntando arquivos'
---
![Blog Linux](http://2.bp.blogspot.com/-pTkY7cyUcCw/Uaah_mzgO1I/AAAAAAAABqg/8NaURrxnG08/s200/Screenshot.png "Blog Linux")
1.0 - Dividinho com o comando split (divide um arquivo em partes)
-b ou --bytes » divide em quantidade de bytes(se a divisão não for exata, o último arquivo terá a quantidade restante)-l ou --lines » cada arquivo com 50 linhas(se a divisão não for exata, o último arquivo terá a quantidade restante)
10k » para 10 kilobytes
10m » para 10 megabytes
Dividir em 10k um arquivo (usei exemplo mpeg, mas serve para qualquer extensão e até mesmo sem extensão):
{% highlight bash %}
$ split -b 10k arquivo.mpeg PARTE
{% endhighlight %}
resultará em:
{% highlight bash %}
$ PARTEab PARTEac PARTEad PARTEae PARTEaf PARTEag PARTEah PARTEai PARTEaj PARTEak PARTEal PARTEam
{% endhighlight %}
Caso não use o prefixo PARTE(ou qualquer outro nome que vc deseja), resultará em:
{% highlight bash %}
$ ab ac ad ae af ag ah ai aj ak al am
{% endhighlight %}
Também pode-se usar outros caracteres, exemplo:
{% highlight bash %}
$ split -b 10k arquivo.mpeg PARTE-
{% endhighlight %}
resultará em:
{% highlight bash %}
$ PARTE-ab PARTE-ac PARTE-ad PARTE-ae PARTE-af PARTE-ag PARTE-ah PARTE-ai PARTE-aj PARTE-ak PARTE-al PARTE-am
{% endhighlight %}
-l » divide em quantidade de linhas
Exemplo(pode-se usar também prefixo com ou sem caracteres):
{% highlight bash %}
$ split -l 10 /etc/passwd pas-
{% endhighlight %}
resultará em:
{% highlight bash %}
$ pas-aa pas-ab pas-ac pas-ad pas-ae pas-af pas-ag pas-ah
{% endhighlight %}
2.0 - Juntando com o comando cat
Se houver prefixo:
{% highlight bash %}
$ cat PARTE* > arquivo.mpeg
{% endhighlight %}
Se NÃO houver prefixo:
{% highlight bash %}
$ cat * > arquivo.mpeg
{% endhighlight %}
