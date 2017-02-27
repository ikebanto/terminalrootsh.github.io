---
layout: post
title: 'Shell Script : converte de Decimal para Binário e vice-versa'
date: '2013-05-06T18:32:00.000-07:00'
description: 'Shell Script : converte de Decimal para Binário e vice-versa'
main-class: 'bash'
tags:
- Shell Script
image: http://3.bp.blogspot.com/-h0-n7gIvia0/UYhYyzu2JVI/AAAAAAAABiQ/uzMI-c3WBQA/s72-c/converter.png
twitter_text: 'Shell Script : converte de Decimal para Binário e vice-versa'
introduction: 'Shell Script : converte de Decimal para Binário e vice-versa'
---
![Blog Linux](http://3.bp.blogspot.com/-h0-n7gIvia0/UYhYyzu2JVI/AAAAAAAABiQ/uzMI-c3WBQA/s400/converter.png "Blog Linux")
Download do código:
converter.sh
Código no PasteBin: 
<iframe src="http://pastebin.com/raw/b0ieQJR3" style="border:none;width:100%;"><iframe> 
Código no Blog:
{% highlight bash %}
#!/bin/bash
# converter.sh - Shell Script : converte de Decimal para Binário e vice-versa
# Autor: MBM
# Endereço Web - http://www.terminalroot.com.br
# Facebook - fb.com/terminalroot
echo "1 DECIMAL para BINARIO "
echo "2 BINARIO para DECIMAL "
echo "3 SAIR "
echo -n "POR FAVOR FAÇA SUA ESCOLHA: "
read OPCAO
if [ $OPCAO == 1 ] ; then
 echo -n "Digite o número[DECIMAL]: "
 read NUMERO
 echo "obase=2;$NUMERO" | bc
 
elif [ $OPCAO == 2 ] ; then
 echo n "Digite o número[BINARIO]: "
 read NUMERO
 echo "ibase=2;$NUMERO" | bc
 
elif [ $OPCAO == 3 ] ; then
 echo -e "\033[41;37;1m ATÉ MAIS! \033[m"
 
else
 echo -e "\033[41;37;1m NÃO EXISTE ESTE ITEM! \033[m"
fi
{% endhighlight %}
