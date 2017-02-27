---
layout: post
title: "Funções, Arquivos-Cabeçalhos e o tipo void em C"
date: '2012-12-08T13:04:00.000-08:00'
description: "Funções, Arquivos-Cabeçalhos e o tipo void em C"
main-class: 'misc'
tags:
- Linguagem C
image: "http://2.bp.blogspot.com/-TS-Pw9R1gqs/UMOqSN3A_ZI/AAAAAAAAA0E/ytNc-x5aJdc/s72-c/funcoes_C.png"
twitter_text: "Funções, Arquivos-Cabeçalhos e o tipo void em C"
introduction: "Funções, Arquivos-Cabeçalhos e o tipo void em C"
---
![Blog Linux](http://2.bp.blogspot.com/-TS-Pw9R1gqs/UMOqSN3A_ZI/AAAAAAAAA0E/ytNc-x5aJdc/s400/funcoes_C.png "Blog Linux")
Arquivos-cabeçalhos são aqueles que temos mandado o compilador incluir no início de nossos exemplos e que sempre terminam em .h. A extensão .h vem de header (cabeçalho em inglês). Já vimos exemplos como stdio.h, conio.h, string.h. Estes arquivos, na verdade, não possuem os códigos completos das funções. Eles só contêm protótipos de funções. É o que basta. O compilador lê estes protótipos e, baseado nas informações lá contidas, gera o código correto. O corpo das funções cujos protótipos estão no arquivo-cabeçalho, no caso das funções do próprio C, já estão compiladas e normalmente são incluídas no programa no instante da "linkagem". Este é o instante em que todas as referências a funções cujos códigos não estão nos nossos arquivos fontes são resolvidas, buscando este código nos arquivos de bibliotecas.Se você criar algumas funções que queira aproveitar em vários programas futuros, ou módulos de programas, você pode escrever arquivos-cabeçalhos e incluí-los também.
Vamos a um exemplo, criaremos um arquivo chamado funcao.h e nela incluiremos:
{% highlight bash %}
#include 
int Square (int a){
 return (a*a);
}
{% endhighlight %}
E num outro arquivo criaremos o arquivo afuncaodois.c
{% highlight bash %}
#include 
#include "funcao.h"
int main(){
 int numero;
 printf("Informe o número que vc deseja o Square:");
 scanf("%d",&amp;numero);
 numero=Square(numero);
 printf("O Quadrado é: %d \n",numero);
 return 0;
}
{% endhighlight %}
compilamos:
{% highlight bash %}
$ gcc afuncaodois.c -o afuncaodois
{% endhighlight %}
E executamos:
{% highlight bash %}
$ ./afuncaodois
{% endhighlight %}
Ou seja ela chamará a função do arquivo funcao.h
O Tipo void
Agora vamos ver o único tipo da linguagem C que não detalhamos ainda: o void. Em inglês, void quer dizer vazio e é isto mesmo que o void é. Ele nos permite fazer funções que não retornam nada e funções que não têm parâmetros! Podemos agora escrever o protótipo de uma função que não retorna nada:
Um exemplo de funções que usam o tipo void:
{% highlight bash %}
#include 
void Mensagem (void);
int main ()
{
 Mensagem();
 printf ("\tDiga de novo:\n");
 Mensagem();
 return 0;
}
void Mensagem (void)
{
 printf ("Ola! Eu estou vivo.\n");
}
{% endhighlight %}
Se quisermos que a função retorne algo, devemos usar a declaração return. Se não quisermos, basta declarar a função como tendo tipo-de-retorno void. Devemos lembrar agora que a função main() é uma função e como tal devemos tratá-la. O compilador acha que a função main() deve retornar um inteiro. Isto pode ser interessante se quisermos que o sistema operacional receba um valor de retorno da função main(). Se assim o quisermos, devemos nos lembrar da seguinte convenção: se o programa retornar zero, significa que ele terminou normalmente, e, se o programa retornar um valor diferente de zero, significa que o programa teve um término anormal. Se não estivermos interessados neste tipo de coisa, basta declarar a função main como retornando void.
As duas funções main() abaixo são válidas:
{% highlight bash %}
main (void)
{
 ....
 return 0;
}
void main (void)
{
 ....
}
{% endhighlight %}
A primeira forma é válida porque, como já vimos, as funções em C têm, por padrão, retorno inteiro.. Alguns compiladores reclamarão da segunda forma de main, dizendo que main sempre deve retornar um inteiro. Se isto acontecer com o compilador que você está utilizando, basta fazer main retornar um inteiro.
