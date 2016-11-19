---
layout: post
title: "Veja Como remover arquivos duplicados no seu PC"
date: 2016-11-18 23:33:26
image: '/assets/img/duplicados/fslint-gui.jpg'
description: "Fdupes é um utilitário Linux capaz de encontrar arquivos duplicados no conjunto de diretórios e subdiretórios."
main-class: 'linux'
color: '#34a853'
tags:
- Linux
- Dicas
categories:
twitter_text: "Fdupes é um utilitário Linux capaz de encontrar arquivos duplicados no conjunto de diretórios e subdiretórios."
introduction: "Fdupes é um utilitário Linux capaz de encontrar arquivos duplicados no conjunto de diretórios e subdiretórios."
---

# O que é

>Fdupes é um utilitário Linux capaz de encontrar arquivos duplicados no conjunto de diretórios e subdiretórios. Fdupes reconhecer duplicatas através da comparação MD5 assinatura de arquivos seguido por um byte-to-byte comparação. Um monte de opções podem ser passadas com Fdupes para listar, excluir e substituir os arquivos com hardlinks para duplicatas.

# Instalação

{% highlight bash %}
apt-get install fdupes -y
{% endhighlight %}

# Ferramenta para testes

{% highlight bash %}
mkdir TerminalRoot
for i in $(seq 1 15); do echo "Terminal Root é GNU/Linux!" >> TerminalRoot/TerminalRoot$i.txt; done;
{% endhighlight %}

### Comando básico, se houver arquivos duplicados naquele diretório (ele não irá ver recursivamente) ele mostrará, se não voltará a exibir nome e host no prompt

{% highlight bash %}
fdupes [diretório]
{% endhighlight %}

Opções

>-r	procura recursivamente

>-S	mostra o tamanho de cada arquivo

>-Sr ambos juntos

>-d	Para excluir os arquivos duplicados, preservando uma cópia, você pode usar a opção '-d'. Deve-se tomar cuidado ao usar esta opção, senão você pode acabar perdendo arquivos necessários ou dados , pois esse processo é irreversível.

>-f	protege um arquivo , se eles estiverem nomeados como: nome, cópia, 2° cópia, 3° cópia,...

>-h 	ajuda

### Ele lhe pergunta qual arquivo você deseja manter:

{% highlight bash %}
   [-] arquivos/.TerminalRoot13.txt
   [-] arquivos/.TerminalRoot1.txt
   [-] arquivos/.TerminalRoot9.txt
   [-] arquivos/.TerminalRoot6.txt

Set 1 of 1, preserve files [1 - 4, all]: 2-4
{% endhighlight %}

### se vc digitar 2 , significa que o segundo arquivo será preservado, justamente o .TerminalRoot1.txt

### se vc digitar 1 , significa que o segundo arquivo será preservado, justamente o .TerminalRoot13.txt


*Você ainda pode salvar a saída num arquivo, pra conferir os arquivos duplicados, caso deseje:*

{% highlight bash %}
fdupes -Sr [diretório] > output.txt
{% endhighlight %}

__E se quiser criar até um script depois para removê-los__. 

### Manual, quase o mesmo do *-h*

{% highlight bash %}
man fdupes
{% endhighlight %}

## Softwares similares, outra forma

# FSlint

### Instalação

{% highlight bash %}
apt-get install fslint -y
{% endhighlight %}

# Use

{% highlight bash %}
fslint-gui
{% endhighlight %}

## Aplicativo gráfico


![FSlint](/assets/img/duplicados/fslint-gui.jpg "FSlint")

# Para obter informções dele:

{% highlight bash %}
apt-cache search fslint
apt-cache show fslint
{% endhighlight %}

# Internet:

[https://is.gd/I4plGa](https://is.gd/I4plGa "FSlint")

__[+]Sobre fdupes__

*https://www.cyberciti.biz/faq/linux-unix-finds-duplicate-files-in-given-directories/*

*http://www.tecmint.com/fdupes-find-and-delete-duplicate-files-in-linux/*

*http://www.tecmint.com/fslint-find-and-remove-duplicate-unwanted-files-in-linux/*
