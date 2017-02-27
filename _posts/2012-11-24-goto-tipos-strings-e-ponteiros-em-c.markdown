---
layout: post
title: goto, tipos, strings e ponteiros em C
date: '2012-11-24T16:20:00.000-08:00'
description: goto, tipos, strings e ponteiros em C
main-class: 'misc'
tags:
- Linguagem C
image: http://3.bp.blogspot.com/-MQhmsm8Iagk/ULFi9jpNuJI/AAAAAAAAAt4/-HhwNS877bU/s72-c/barra+invertida.png
twitter_text: goto, tipos, strings e ponteiros em C
introduction: goto, tipos, strings e ponteiros em C
---
![Blog Linux](http://3.bp.blogspot.com/-MQhmsm8Iagk/ULFi9jpNuJI/AAAAAAAAAt4/-HhwNS877bU/s400/barra+invertida.png "Blog Linux")
![Blog Linux](http://4.bp.blogspot.com/-2g8Nnc9lhMk/ULFi-MudE-I/AAAAAAAAAuA/umJykZ-YRgM/s400/operadores+l%C3%B3gicos.png "Blog Linux")
![Blog Linux](http://3.bp.blogspot.com/-SpRIYzK3txg/ULFi-20RxmI/AAAAAAAAAuI/Q8UQjwt30A4/s400/tipos.png "Blog Linux")
...
Strings C
Strings são vetores de chars. Nada mais e nada menos. As strings são o uso mais comum para os vetores. Devemos apenas ficar atentos para o fato de que as strings têm o seu último elemento como um '\0'. A declaração geral para uma string é:
 char nome_da_string [tamanho];
Devemos lembrar que o tamanho da string deve incluir o '\0' final. A biblioteca padrão do C possui diversas funções que manipulam strings. Estas funções são úteis pois não se pode, por exemplo, igualar duas strings:
 string1=string2; /* NAO faca isto */
Fazer isto é um desastre. Quando você terminar de ler a seção que trata de ponteiros você entenderá porquê. As strings devem ser igualadas elemento a elemento.
Quando vamos fazer programas que tratam de string muitas vezes podemos fazer bom proveito do fato de que uma string termina com '\0' (isto é, o número inteiro 0). Veja, por exemplo, o programa abaixo que serve para igualar duas strings (isto é, copia os caracteres de uma string para o vetor da outra):
strcpy
Sua forma geral é:
strcpy (string_destino,string_origem);
A função strcpy() copia a string-origem para a string- destino. Seu funcionamento é semelhante ao da rotina apresentada na seção anterior. As funções apresentadas nestas seções estão no arquivo cabeçalho string.h. A seguir apresentamos um exemplo de uso da função strcpy():
{% highlight bash %}
#include 
#include 
int main ()
{
 char str1[100],str2[100],str3[100];
 printf ("Entre com uma string: ");
 gets (str1);
 strcpy (str2,str1); /* Copia str1 em str2 */
 strcpy (str3,"Voce digitou a string "); /* Copia "Voce digitou a string" em str3 */
 printf ("\n\n%s%s",str3,str2);
 return(0);
}
{% endhighlight %}
strcat
A função strcat() tem a seguinte forma geral:
strcat (string_destino,string_origem);
A string de origem permanecerá inalterada e será anexada ao fim da string de destino. Um exemplo:
{% highlight bash %}
#include 
#include 
int main ()
{
 char str1[100],str2[100];
 printf ("Entre com uma string: ");
 gets (str1);
 strcpy (str2,"Voce digitou a string ");
 strcat (str2,str1); /* str2 armazenara' Voce digitou a string + o conteudo de str1 */
 printf ("\n\n%s",str2);
 return(0);
}
{% endhighlight %}
strlen
Sua forma geral é:
strlen (string);
A função strlen() retorna o comprimento da string fornecida. O terminador nulo não é contado. Isto quer dizer que, de fato, o comprimento do vetor da string deve ser um a mais que o inteiro retornado por strlen(). Um exemplo do seu uso:
{% highlight bash %}
#include 
#include 
int main ()
{
 int size;
 char str[100];
 printf ("Entre com uma string: ");
 gets (str);
 size=strlen (str);
 printf ("\n\nA string que voce digitou tem tamanho %d",size);
 return(0);
}
{% endhighlight %}
strcmp
Sua forma geral é:
strcmp (string1,string2);
A função strcmp() compara a string 1 com a string 2. Se as duas forem idênticas a função retorna zero. Se elas forem diferentes a função retorna não-zero. Um exemplo da sua utilização:
{% highlight bash %}
#include 
#include 
int main ()
{
 char str1[100],str2[100];
 printf ("Entre com uma string: ");
 gets (str1);
 printf ("\n\nEntre com outra string: ");
 gets (str2);
 if (strcmp(str1,str2))
 printf ("\n\nAs duas strings são diferentes.");
 else printf ("\n\nAs duas strings são iguais.");
 return(0);
}
{% endhighlight %}
Declarando e Utilizando Ponteiros
Para declarar um ponteiro temos a seguinte forma geral:
tipo_do_ponteiro *nome_da_variável;
É o asterisco (*) que faz o compilador saber que aquela variável não vai guardar um valor mas sim um endereço para aquele tipo especificado. Vamos ver exemplos de declarações:
 int *pt;
 char *temp,*pt2;
O primeiro exemplo declara um ponteiro para um inteiro. O segundo declara dois ponteiros para caracteres. Eles ainda não foram inicializados (como toda variável do C que é apenas declarada). Isto significa que eles apontam para um lugar indefinido. Este lugar pode estar, por exemplo, na porção da memória reservada ao sistema operacional do computador.
Cuidados a Serem Tomados ao se Usar Ponteiros
O principal cuidado ao se usar um ponteiro deve ser: saiba sempre para onde o ponteiro está apontando. Isto inclui: nunca use um ponteiro que não foi inicializado. Um pequeno programa que demonstra como não usar um ponteiro:
{% highlight bash %}
int main () /* Errado - Nao Execute */
{
 int x,*p;
 x=13;
 *p=x;
 return(0);
}
{% endhighlight %}
Este programa compilará e rodará. O que acontecerá? Ninguém sabe. O ponteiro p pode estar apontando para qualquer lugar. Você estará gravando o número 13 em um lugar desconhecido. Com um número apenas, você provavelmente não vai ver nenhum defeito. Agora, se você começar a gravar números em posições aleatórias no seu computador, não vai demorar muito para travar o micro (se não acontecer coisa pior).
Obs.: É importante ressaltar a necessidade de se colocar um &amp; antes do nome da variável a ser lida quando se usa a função scanf().
