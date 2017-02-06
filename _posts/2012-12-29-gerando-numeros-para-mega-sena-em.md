---
layout: post
title: "Gerando Números para Mega-Sena em Linguagem C"
date: '2012-12-29T05:58:00.000-08:00'
image: "http://1.bp.blogspot.com/-UTDVzXu_jvQ/UN72IVEfpfI/AAAAAAAAA6g/usJ3CAiigOs/s72-c/btnmegasena4512463.jpg"
description: "Analise o código"
main-class: 'C'
color: '#3465a4'
author: The Bang Bash
tags:
- Linguagem C
modified_time: '2013-05-03T07:16:05.754-07:00'
thumbnail: http://1.bp.blogspot.com/-UTDVzXu_jvQ/UN72IVEfpfI/AAAAAAAAA6g/usJ3CAiigOs/s72-c/btnmegasena4512463.jpg
twitter_text: "Gerando Números para Mega-Sena em Linguagem C"
introduction: "Analise o código"
---

![Mega Sena Linguagem C](http://1.bp.blogspot.com/-3ChE1_pZc7k/UN72M3BJ_oI/AAAAAAAAA6s/cmhjhdN8DQU/s400/megasena%2Bna%2Blinguagem%2BC.png)

# Analise o Código abaixo

{% highlight bash %}
#include 
int main(){ 
 int i, numero; //declaração de variáveis 
 srand(time(NULL)); //faz com que os números não se repitam 
 printf("\033[34m %s \033[0m", "Números gerados:\n");//cor azul  
 for(i=1; i<=6; i++){
  numero = rand() % 61;
  megasena(numero);
 } 
 printf("\n"); 
 return(0);  
}

int megasena(int num){ 
 printf("\033[42m \033[37m %d \033[0m | ",num);//cor fundo verde
} 
{% endhighlight %}
