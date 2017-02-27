---
layout: post
title: "O que é Código ASCII"
date: '2015-07-18T06:44:00.000-07:00'
description: "O que é Código ASCII"
main-class: 'misc'
tags:
- Tecnologia
- Artigos
- Desenvolvimento
image: "http://2.bp.blogspot.com/-_dEfF411RmU/VapX-spNEtI/AAAAAAAABgE/fx9GLxAc7S0/s72-c/linux_logo.png"
twitter_text: "O que é Código ASCII"
introduction: "O que é Código ASCII"
---
![Blog Linux](http://2.bp.blogspot.com/-_dEfF411RmU/VapX-spNEtI/AAAAAAAABgE/fx9GLxAc7S0/s1600/linux_logo.png "Blog Linux")
ASCII é uma sigla para “American Standard Code for Information Interchange”  (Código Padrão Norte-americado para Intercâmbio de Informações). Esse  código foi proposto por Robert W. Bemer, visando padronizar os códigos  para caracteres alfa-numéricos (letras, sinais, números e acentos).  Assim seria possível que computadores de diferentes fabricantes  conseguissem entender os códigos.
O ASCII é um código numérico  que representa os caracteres, usando uma escala decimal de 0 a 127.  Esses números decimais são então convertidos pelo computador para  binários e ele processa o comando. Sendo assim, cada uma das letras que  você digitar vai corresponder a um desses códigos.
Alguns dos caracteres não podem ser impressos (de código 0 a 31), pois eram na verdade comandos para computadores antigos.
Para entender melhor, veja um trecho de uma tabela ASCII:
Código DecimalCódigo BinárioCódigo HexadecimalCaractere970110 000161a980110 001062b990110 001163c1000110 010064d1010110 010165e1020110 011066f1030110 011167g1040110 100068h910101 10115B[920101 11005C\930101 11015D]940101 11105E^950101 11115F_1260111 11107E~
![Blog Linux](http://ibxk.com.br/materias/oqueecodigoascii_1.jpg?w=1040 "Blog Linux")
Você já ouviu falar em Arte ASCII?
A arte  ASCII é baseada justamente no uso de caracteres para criar desenhos e  mensagens. Ela é bastante antiga, pois sempre foi usada nos  computadores. A arte pode ser construída da maneira que o artista  quiser: tanto em preto-e-branco ou colorida. 
Como gerar os caracteres ASCII imprimíveis em diferentes linguagens de programação: 
Shell Script
{% highlight bash %}
#!/bin/bash
for i in $(seq 32 126)
do
 printf \\$(printf '%03o' "${i}")
done
{% endhighlight %}
C
{% highlight bash %}
#include 
int main(void)
{
 int i;
 for (i = 32; i <= 126; i++)
 {
 printf("%c [%d]\n", i, i);
 }
 return 0;
} 
{% endhighlight %}
C++
{% highlight bash %}
#include 
using namespace std;
int main(void)
{
 for (char i = 32; i <= 126; i++)
 {
 cout << i << "[" << (int) i << "]" << endl;
 }
 return 0;
} 
{% endhighlight %}
JavaScript
{% highlight bash %}
for ( var i = 32; i < 127; console.log( String.fromCharCode( i++ ) ) ); 
{% endhighlight %}
Perl
{% highlight bash %}
print chr for 32..126; 
{% endhighlight %}
Python
{% highlight bash %}
for x in range(32, 127): print (chr(x)) 
{% endhighlight %}
PHP
{% highlight bash %}
for ( $i=32; $i <= 126; $i++ ) {
 echo chr($i);
} 
{% endhighlight %}
Via: 
https://pt.wikipedia.org/wiki/ASCII
http://www.tecmundo.com.br/imagem/1518-o-que-e-codigo-ascii.htm
