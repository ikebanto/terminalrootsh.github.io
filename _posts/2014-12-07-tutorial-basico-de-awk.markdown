---
layout: post
title: "Tutorial básico de AWK"
date: '2014-12-07T05:38:00.003-08:00'
description: "Tutorial básico de AWK"
main-class: 'misc'
tags:
- AWK
image: "http://2.bp.blogspot.com/-udDOCGatbhA/UdDSJZSefbI/AAAAAAAACFo/S9HDtGEQUcc/s72-c/Passaro_Thiele.png"
twitter_text: "Tutorial básico de AWK"
introduction: "Tutorial básico de AWK"
---
![Blog Linux](http://2.bp.blogspot.com/-udDOCGatbhA/UdDSJZSefbI/AAAAAAAACFo/S9HDtGEQUcc/s250/Passaro_Thiele.png "Blog Linux")
AWK tem a mesma pronúncia de Auk,
 uma espécie de pássaro.
Introdução
AWK é uma linguagem de programação interpretada que é, geralmente, usada para deixar os scripts de shell mais poderosos e com mais recursos. É usada mais para processar dados nos textos e operações com arquivos. 
O nome tem origem na primeira letra do sobrenome de cada um dos criadores:
 Alfred Aho Peter Weinberger Brian Kernighan 
Esta linguagem, é considerada por muitos, um importante marco para história da programação, tendo tido bastante influência na criação de outras linguagens de programação, como, por exemplo, Perl e Python.
 
Variantes do AWK: 
BWK: conhecido também AWK ou NAWK se refere à versão por Brian Kernighan .GAWK:(GNU AWK) é outra implementação do software livre (OPEN SOURCE)MAWK:é uma versão muito mais rápida implementação AWK por Mike Brennan(...)
Exemplo 1:
$ awk '{ print "Hello, World" }'
$ awk -f hello.awk
A flag "-f" diz que o comando a seguir é um programa a ser executado.
Para um programa executável, usar o /usr/bin/awk.
Exemplo, crie um arquivo "world.awk" com o conteúdo:
# !/usr/bin/awk -f
# My first awk script
{ print "Hello, World!" }
Tornando este arquivo executável:
{% highlight bash %}
$ chmod +x world.awk
{% endhighlight %}
Executando:
{% highlight bash %}
$ ./world.awk
{% endhighlight %}
Variáveis da Linguagem
Salve o arquivo: caes.txt
rex marelo calmo magro
branco branco zangado magro
lennon branco brincalhao gordo
fred branco zangado gordo
Imprime o arquivo inteiro
{% highlight bash %}
awk '{print $0}'
{% endhighlight %}
 $1 imprime o nome do cachorro,
 $2 a cor,
 $3 seu humor,
 $4 seu condicionamento físico. 
Podemos usar essas variáveis dentro do comando print. Nele, sempre que colocamos uma vírgula, estamos espaçando:
{% highlight bash %}
$ awk '{print "O",$1,"é",$4}' caes.txt
{% endhighlight %}
 o rex é magro
 o branco é magro
 o lennon é gordo
 o fred é gordo 
{% highlight bash %}
$ awk '{print "O"$1"é"$4}' caes.txt
{% endhighlight %}
 o rexémagro
 o brancoémagro
 o lennonégordo
 o fredégordo 
BEGINCom o begin, o AWK não espera por uma entrada (como digitar ENTER duas vezes), ele executa tudo daquele bloco:
{% highlight bash %}
$ awk 'BEGIN {print "Vai ser tudo \n imprimido \n de uma vez só\n"}'
{% endhighlight %}
 Vai ser tudo
 imprimido
 de uma vez só
Dicas
 
  Usamos a flag "-F" pra informar ao AWK que iremos usar a CSV (comma separeted values, valores separados por vírgula).  Assim como na linguagem C, AWK também possui o comado "printf", que é bem mais flexível que o "print". A única coisa que o print faz que o printf não faz, é colocar automaticamente uma nova linha ao final da string (\n).{% highlight bash %}
$ awk '{ printf "Cor do cachorro %s: %s\n", $1, $2}' caes.txt 
{% endhighlight %}  sprintf: Ela age e tem a mesma sintaxe da "printf". A diferença é que sua saída é armazenada em uma variável, ao invés de ser exibida na tela.  
Variáveis definidas pelo usuário
Não pode começar variáveis por dígitos, elas são case sensitivo, não devem ter o mesmo nome das variáveis do AWK, nem de outros comandos e não precisam ser inicializadas ou declaradas.
Ao usar pela primeira uma variável, ela é tanto uma string vazia("") como "0", mas não é muito bom confiar seu script nesses valores iniciais.
AWK é fracamente tipado, ou seja, você pode atribuir um número a uma variável e sem seguida atribuir uma string, por exemplo.
Ex.: Salvar como "caes2.awk"
BEGIN { nomecor="%-15s %20s\n"; printf nomecor, "Nome", "Cor\n"}
 { printf nomecor, $1, $2}
if e operadores de comparação
São as instruções de controle que controlam o fluxo da execução dos programas em AWK. Em AWK, elas são similares as de C, além de possuírem os mesmos loopings e interações do padrão Shell.
Elas são: if, while, for, do e similares.
Arquivo: gnu.txt
Eric    59 3 2112
Linus    30 5 578
Richard   40 3 2789
Marcos   24 1 134
{% highlight bash %}
$ awk '{ if($4 > 2000) print $1 }' gnu.txt
{% endhighlight %}
Direcionando a saída
{% highlight bash %}
$ awk 'BEGIN {print 1+1 > "resultado" }'
{% endhighlight %}
else e else if
#!/usr/bin/awk -f
{
 if( $1 == "Eric" )
 printf "O primeiro\n"
 else if( $1 == "Linus" )
 printf "o segundo\n"
 else
 printf "Ouro cara\n"
}
Referências:
https://pt.wikipedia.org/wiki/Awk
http://www.vivaolinux.com.br/artigo/AWK-Introducao
Outros links:
http://www.zago.eti.br/script/awk.html
http://www.lpic.com.br/shell/comandos/awk/print/print.pdf
http://www.staff.science.uu.nl/~oostr102/docs/nawk/nawkA4.pdf
http://www.faqs.org/faqs/computer-lang/awk/faq/
http://www.gnu.org/software/gawk/manual/gawk.html
