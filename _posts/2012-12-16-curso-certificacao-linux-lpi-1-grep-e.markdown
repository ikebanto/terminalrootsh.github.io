---
layout: post
title: "'Curso Certificação Linux LPI-1: grep e sed'"
date: '2012-12-16T05:47:00.000-08:00'
description: "'Curso Certificação Linux LPI-1: grep e sed'"
main-class: 'linux'
tags:
- Linux
- LPI
- SED
image: "http://3.bp.blogspot.com/-7G8VjGa18Q8/UM3P5V3OrrI/AAAAAAAAA2g/zDQntl4STqA/s72-c/sed%2Be%2Bgrep.gif"
twitter_text: "'Curso Certificação Linux LPI-1: grep e sed'"
introduction: "'Curso Certificação Linux LPI-1: grep e sed'"
---
![Blog Linux](http://3.bp.blogspot.com/-7G8VjGa18Q8/UM3P5V3OrrI/AAAAAAAAA2g/zDQntl4STqA/s320/sed%2Be%2Bgrep.gif "Blog Linux")
O comando grep
grep é um utilitário de linha de comando para procurar conjuntos de dados de texto simples para as linhas que correspondem a uma expressão regular.
{% highlight bash %}
grep [OPÇÕES] expressão_regular arquivo
{% endhighlight %}
Exs.:
1-Procura a palavra marcos no arquivo /etc/passwd:
{% highlight bash %}
$ grep marcos /et/passwd
{% endhighlight %}
2-Procura todas as linhas começadas pela letra u no arquivo /etc/passwd:
{% highlight bash %}
$ grep '^u' /et/passwd
{% endhighlight %}
3-Procura todas as linhas terminadas pela palavra false no arquivo /etc/passwd:
{% highlight bash %}
$ grep 'false$' /et/passwd
{% endhighlight %}
4-Procura todas as linhas começadas pelas vogais no arquivo /etc/passwd:
{% highlight bash %}
$ grep '^[aeiou]' /et/passwd
{% endhighlight %}
5-Procura todas as linhas começadas por qualquer caracter e segundo caracter seja qualquer vogal no arquivo /etc/passwd:
{% highlight bash %}
$ grep '^.[aeiou]' /et/passwd
{% endhighlight %}
6-Procura todas as linhas que contenham uma sequência de 4 números consecutivos:
{% highlight bash %}
$ grep '[0-9][0-9][0-9][0-9]' /et/passwd
{% endhighlight %}
O comando sed
sed é um editor de textos simples utilizado para fazer pequenas transformações no conteúdo dos arquivos.
{% highlight bash %}
$ sed [opções] {script} [arquivo]
{% endhighlight %}
Exs.:
1-Troca todas ocorrências da palavra marcos pela palavra pinguim:
{% highlight bash %}
$ sed 's/marcos/pinguim/' arquivo.txt
{% endhighlight %}
2-Troca todas ocorrências da palavra marcos pela palavra pinguim e envia as mudanças para um novo arquivo:
{% highlight bash %}
$ sed 's/marcos/pinguim/' arquivo.txt > novoarquivo.txt
{% endhighlight %}
Sugestões para estudos avançados: 
Regex(grep, egrep...)
Sed
