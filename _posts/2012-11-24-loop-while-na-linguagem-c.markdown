---
layout: post
title: Loop while na Linguagem C
date: '2012-11-24T15:30:00.000-08:00'
description: Loop while na Linguagem C
main-class: 'misc'
tags:
- Linguagem C
image: http://1.bp.blogspot.com/-LnYjUurrDJc/ULFYJhOHdRI/AAAAAAAAAtc/AIWrdOS3ySk/s72-c/while_c.png
twitter_text: Loop while na Linguagem C
introduction: Loop while na Linguagem C
---
![Blog Linux](http://1.bp.blogspot.com/-LnYjUurrDJc/ULFYJhOHdRI/AAAAAAAAAtc/AIWrdOS3ySk/s320/while_c.png "Blog Linux")
Mais um ensinamento básico para fixação, mais detalhes na apostila do post Apostila de Introdução a Linguagem C
PasteBin: 
<iframe src="http://pastebin.com/raw/SQ5Xjasi" style="border:none;width:100%;"><iframe> 
CodigoNoBlog: 
{% highlight bash %}
#include 
//while básico.
int main(){
 int i = 0;
 
 while(i<=22){
  printf("%d\n",i);
  i++;
 }
 
//Enquanto vc não digitar a letra 'p' e pressionar ENTER o loop não para.
 char Ch; 
 Ch='\0';
 while(Ch != 'p'){
  scanf("%c", &amp;Ch);
 }
 return(0);
}
{% endhighlight %}
