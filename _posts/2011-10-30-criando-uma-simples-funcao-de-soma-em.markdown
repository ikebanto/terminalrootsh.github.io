---
layout: post
title: "Criando uma simples função de soma em Linguagem C"
date: '2011-10-30T13:50:00.000-07:00'
description: "Criando uma simples função de soma em Linguagem C"
main-class: 'misc'
tags:
- Linguagem C
twitter_text: "Criando uma simples função de soma em Linguagem C"
introduction: "Criando uma simples função de soma em Linguagem C"
---
 Bom, esse é o básico do entendimento, para quem já trabalha com PHP encontrará diversas similiaridades.
Uma simples função de soma para entendimento, um pouco mais acima do código da postagem anterior.Eu comentei as linhas para tentar explicar mais ou menos o que cada linha faz.Segue o código:
{% highlight bash %}
#include //inclusao do cabeçalho standart I/O
//criamos a função soma() e definimos as variaveis com inteiras(int)
int soma(int x,int y)
{
 //efetuamos a operação
 return (x+y);
}
//chamamos a função main() para a execução e impressão
int main()
{
 //definimos a variável saida
 int saida;
 //setamos os valores que queremos
 saida=soma(4,8);
 //imprimimos na tela o resultado
 printf ("O resultado da soma e: %d\n",saida);
 //finalizamos o código
 return(0);
}
{% endhighlight %}
Agora basta salvar com qualquer_nome.c, no meu caso denominei como soma.c, depois compilá-lo e executá-lo:
{% highlight bash %}
gcc soma.c -o soma
./soma
O resultado da soma e: 12
{% endhighlight %}
Por enquanto é só, até a próxima!
