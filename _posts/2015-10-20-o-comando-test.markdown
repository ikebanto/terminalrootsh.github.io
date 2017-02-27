---
layout: post
title: "O Comando test"
date: '2015-10-20T17:14:00.000-07:00'
description: "O Comando test"
main-class: 'bash'
tags:
- Shell Script
- Comandos
image: "http://3.bp.blogspot.com/-yy93EYBO_Wc/ViLzKE3J2FI/AAAAAAAAE0Y/028k-nv8KR4/s72-c/board-361516_640.jpg"
twitter_text: "O Comando test"
introduction: "O Comando test"
---
![Blog Linux](http://3.bp.blogspot.com/-yy93EYBO_Wc/ViLzKE3J2FI/AAAAAAAAE0Y/028k-nv8KR4/s400/board-361516_640.jpg "Blog Linux")
test é um utilitário de linha de comando encontrado em sistemas operacionais Unix-like, que avalia expressões condicionais.
Syntaxe
{% highlight bash %}
test expressão
{% endhighlight %}
ou
{% highlight bash %}
[ expressão ]
{% endhighlight %}
Exemplo de uso
Verificar dados de arquivo
Todos os argumentos retornam verdadeiro se o objeto (arquivo ou string ) existe, e a condição especificada é verdadeira.
Testes em arquivos{% highlight bash %}
-b
{% endhighlight %}É um dispositivo de bloco{% highlight bash %}
-c
{% endhighlight %}É um dispositivo de caractere{% highlight bash %}
-d
{% endhighlight %}É um diretório{% highlight bash %}
-e
{% endhighlight %}O arquivo existe{% highlight bash %}
-f
{% endhighlight %}É um arquivo normal{% highlight bash %}
-g
{% endhighlight %}O bit SGID está ativado{% highlight bash %}
-G
{% endhighlight %}O grupo do arquivo é o do usuário atual{% highlight bash %}
-k
{% endhighlight %}O sticky-bit está ativado{% highlight bash %}
-L
{% endhighlight %}O arquivo é um link simbólico{% highlight bash %}
-O
{% endhighlight %}O dono do arquivo é o usuário atual{% highlight bash %}
-p
{% endhighlight %}O arquivo é um named pipe{% highlight bash %}
-r
{% endhighlight %}O arquivo tem permissão de leitura{% highlight bash %}
-s
{% endhighlight %}O tamanho do arquivo é maior que zero{% highlight bash %}
-S
{% endhighlight %}O arquivo é um socket{% highlight bash %}
-t
{% endhighlight %}O descritor de arquivos N é um terminal{% highlight bash %}
-u
{% endhighlight %}O bit SUID está ativado{% highlight bash %}
-w
{% endhighlight %}O arquivo tem permissão de escrita{% highlight bash %}
-x
{% endhighlight %}O arquivo tem permissão de execução{% highlight bash %}
-nt
{% endhighlight %}O arquivo é mais recente (NewerThan){% highlight bash %}
-ot
{% endhighlight %}O arquivo é mais antigo (OlderThan){% highlight bash %}
-ef
{% endhighlight %}O arquivo é o mesmo (EqualFile)
Para mais informações, consulte:
{% highlight bash %}
man test
{% endhighlight %}
ou os links:
https://is.gd/dANYDs
https://en.wikipedia.org/wiki/Test_%28Unix%29
http://wiki.bash-hackers.org/commands/classictest
