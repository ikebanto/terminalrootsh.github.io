---
layout: post
title: "Script de visualizar texto com Dialog"
date: '2013-02-24T08:09:00.000-08:00'
description: "Script de visualizar texto com Dialog"
main-class: 'bash'
tags:
- Shell Script
image: "http://3.bp.blogspot.com/-la2Sbd4T1l4/USo5PNkE0QI/AAAAAAAABGA/Q9ZR5bMWLqo/s72-c/dialog.png"
twitter_text: "Script de visualizar texto com Dialog"
introduction: "Script de visualizar texto com Dialog"
---
 Eu sei que podemos ver os textos contidos nos arquivos com o VIM ou similares, porém utilizando o Dialog fica mais bem visível.
Para usar o Dialog no seu script é necessário, possui-lo, para verificar se o Dialog já está instalado no seu PC, execute o comando:
{% highlight bash %}
# dpkg -l | xdialog
{% endhighlight %}
Se retornar informações sobre o programa é que está instalado, se não(aparecer comando/programa não encontrado), então vc deve instalá-lo da seguinte forma:
{% highlight bash %}
# apt-get install dialog
{% endhighlight %}
Agora verifique o script abaixo, ou baixe-o clicando aqui, mas leia os comentários(#) e o código para entender o funcionamento do mesmo.
Segue o script com código em Imagem, no Blog e no PasteBin:
Código em Imagem:
![Blog Linux](http://1.bp.blogspot.com/-BN62RHy4nuY/USo5yeekcrI/AAAAAAAABGI/284Rcl96W_4/s400/dialog+3.png "Blog Linux")
Código do Blog:
{% highlight bash %}
#!/bin/bash
# ----------------------------------------------------------------------------
# Autor: Marcos da Boa Morte, http://marcospinguim.blogspot.com
# ./visualizartexto.sh
# >> Esse scritp para visualizar textos com maior eficiência de visuabilidade pelo terminal<<
# Dom 24 Fev 2013 11:22:10 BRT 
# Versão: 1
# Licença: GPL
# ----------------------------------------------------------------------------
# exibe o texto para inserir os dados com --inputbox (arquivo/caminho do arquivo) para visualizar o texto do arquivo, em segundo plano ele insere as informações para o arquivo /tmp/nome.txt e armazena na variável nome.
dialog --inputbox "Digite o nome do arquivo ou do caminho completo caso esteje em outro diretório sem ser o $PWD:" 0 0 2>/tmp/nome.txt
nome=$( cat /tmp/nome.txt )
# se a variável nome for nula(for ZERO(0), ou seja o usuário não digitar nada) exibe esse --msgbox, os numeros finais representam tamanho e largura, respectivamente.Uso o clear para limpar a tela.
if [ -z $nome ]; then
 dialog --msgbox '
  É NECESSÁRIO INFORMAR O NOME DO ARQUIVO OU O CAMINHO DO ARQUIVO,
  CASO O NOME DO ARQUIVO CONTENHA ESPAÇOS, UTILIZE ASTERISCO(*)
  EX.: 
   *Novo*arquivo*
      OU  
   arquivo.txt 
      OU 
   Docs/arquivo.txt' 15 40
 clear
# se o arquivo existir, visualizamos o conteúdo do mesmo com o --textbox, o --title é pra denominar o quadro.
elif [ -s $nome ]; then
 dialog --title 'Visualizando Arquivo' --textbox $nome 0 0
 clear
# caso seja digitado alguma coisa, mas o arquivo não existe, exiibimos essa --msgbox
else
 dialog --msgbox 'ARQUIVO NÃO ENCONTRADO' 0 0
 clear
fi
{% endhighlight %}
Código no PasteBin: 
<iframe src="http://pastebin.com/raw/UVeNufAD" style="border:none;width:100%;"><iframe>
![Blog Linux](http://4.bp.blogspot.com/-h-12zkVfc8k/USo7qlH7WfI/AAAAAAAABGQ/5oyRXrT_DEw/s400/dialog+2.png "Blog Linux")
