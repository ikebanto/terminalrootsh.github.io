---
layout: post
title: ""Curso Certificação Linux LPI-1: Instalando e Compilando Programas""
date: '2012-12-02T16:13:00.000-08:00'
description: ""Curso Certificação Linux LPI-1: Instalando e Compilando Programas a partir""
main-class: 'linux'
tags:
- Linux
- LPI
image: "http://1.bp.blogspot.com/-5kJmfvI109Q/ULvs_vYJYkI/AAAAAAAAAzY/WIOt_LOiWxQ/s72-c/compilador.png"
twitter_text: ""Curso Certificação Linux LPI-1: Instalando e Compilando Programas a partir""
introduction: ""Curso Certificação Linux LPI-1: Instalando e Compilando Programas a partir""
---
 
![Blog Linux](http://1.bp.blogspot.com/-5kJmfvI109Q/ULvs_vYJYkI/AAAAAAAAAzY/WIOt_LOiWxQ/s400/compilador.png "Blog Linux")
 A Free Software Foundation (FSF, Fundação para o Software Livre) é uma organização sem fins lucrativos, fundada em 04 de Outubro de 1985 por Richard Stallman e que se dedica a eliminação de restrições sobre a cópia, redistribuição, estudo e modificação de programas de computadores – bandeiras do movimento do software livre, em essência. Faz isso promovendo o desenvolvimento e o uso de software livre em todas as áreas da computação mas, particularmente, ajudando a desenvolver o sistema operacional GNU e suas ferramentas.
![Blog Linux](http://4.bp.blogspot.com/-m2JvbRtT-uU/ULvuZG7OoxI/AAAAAAAAAzk/CFHA8Uhi08E/s320/Stallman-GNU.png "Blog Linux")
  Os pacotes com código fonte, distribuídos na forma dos famosos pacotes .tar.gz ou .tar.bz2, são o formato mais universal, porém ao mesmo tempo o mais complicado de instalar, que você deixa como um último recurso a lançar mão quando não encontrar um pacote atualizado do programa desejado.
Para instalá-los, é necessário, em primeiro lugar, ter instalado um conjunto de compiladores, incluindo o gcc e g++, ferramentas como o make, autoconf, diff e patch, e bibliotecas, como o binutils-dev, libc6-dev. Este "kit básico" é instalado ao marcar a categoria "desenvolvimento" (ou development) durante a instalação de várias distribuições. No caso do Kurumin, você tem pré-instalados os compiladores mais usados e você pode instalar outros necessários através do Synaptic, ou manualmente através do apt-get.
Uma dica é que todos os pacotes cujo nome termina com "-dev" são justamente bibliotecas de desenvolvimento, que podem ser necessárias ao compilar determinados programas. Quando o instalador reclama da falta de bibliotecas ou arquivos do X, provavelmente ele está dando falta do pacote "xlibs-dev", quando reclamar da falta de arquivos do KDE, provavelmente está pedindo o pacote "libqt3-dev" e assim por diante. A maior dificuldade em compilar programas complexos está justamente em localizar e instalar o conjunto de bibliotecas de que ele precisa.
Se os pré-requisitos estiverem em ordem, a compilação em si é feita descompactado o arquivo (usando o comando "tar -zxvf pacote.tar.gz" ou "tar -jxvf pacote.tar.bz2" ou descompactando pelo próprio Konqueror), acessando a pasta que será criada e rodando três comandos básicos:
{% highlight bash %}
$ ./configure
{% endhighlight %}
{% highlight bash %}
$ make
{% endhighlight %}
{% highlight bash %}
# make install
{% endhighlight %}
O "./configure" executa um script (dentro da pasta do programa), que verifica o sistema, em busca dos componentes de que precisa. Ele avisa caso algo esteja faltando, como neste erro que apareceu ao tentar compilar o Qemu:
ERROR: QEMU requires SDL or Cocoa for graphical output
To build QEMU with graphical output configure with --disable-gfx-check
Note that this will disable all output from the virtual graphics card.
Neste exemplo, está faltando a biblioteca de desenvolvimento do SDL. Quase sempre, os pacotes que contêm bibliotecas começam com "lib" e os pacotes de desenvolvimento terminam com "-dev". Procurando no http://www.debian.org por um pacote que comece com "lib", termine com "-dev" e tenha "sdl" no meio, você chega ao "libsdl1.2-dev", que é justamente o pacote que estava faltando neste caso :). Em casos onde a solução parecer mais difícil, a melhor opção é fazer uma busca no Google, usando parte da mensagem de erro.
O "make" cuida do trabalho pesado, fazendo a compilação propriamente dita. Ele se baseia nas informações deixadas pelo "./configure" para encontrar os componentes de que precisa.
Finalmente, temos o "make install", que finalmente instala o programa, copiando os arquivos gerados pelo make para as pastas corretas do sistema. Ao contrário dos dois primeiros comandos, ele precisa ser executado como root, já que envolve fazer alterações no sistema.
Apesar destes três comandos serem um padrão adotado na maioria dos pacotes, eles não são necessariamente uma regra. Muitos programas usam sistemas simplificados de instalação ou mesmo scripts próprios, por isso é sempre bom dar uma olhada no arquivo "INSTALL" ou "README" dentro da pasta, que explica os passos necessários. Em geral, os programas instalados a partir dos fontes não criam os ícones no menu. Você precisa chamar o programa via linha de comando ou criar os ícones manualmente.
Nas distribuições derivadas do Debian, uma dica com relação às dependências e bibliotecas é usar o auto-apt, um programa que verifica as mensagens de erro geradas durante a compilação e procura instalar via apt-get os componentes necessários para concluir a compilação. Ele não é perfeito: muitas vezes se perde ou tenta instalar pacotes desnecessários, mas realmente ajuda em muitos casos. Você pode instalá-lo via apt-get:
{% highlight bash %}
# apt-get install auto-apt
{% endhighlight %}
Depois de instalado, execute (nesta ordem) os comandos "auto-apt update", "auto-apt updatedb" e "auto-apt update-local", que geram a base de dados que ele usa para fazer seu trabalho. Depois de tudo pronto, você passa a executar os comandos de compilação dos pacotes através dele, usando o comando "auto-apt run" seguido pelo comando, como em:
{% highlight bash %}
# auto-apt run ./configure
{% endhighlight %}
{% highlight bash %}
# auto-apt run make
{% endhighlight %}
O comando ldconfig
 Cria, atualiza e remove as ligações necessárias e cache (para uso pelo linker de tempo de execução, ld.so) à mais recente partilhada bibliotecas encontrado nos diretórios especificados na linha de comando, em o arquivo / etc / ld.so.conf, e nos diretórios confiáveis ​​(/usr/lib e /lib). ldconfig verifica os nomes de cabeçalho e arquivo das bibliotecas que encontra ao determinar quais versões devem ter suas ligações atualizado. ldconfig ignora links simbólicos ao procurar por bibliotecas.
{% highlight bash %}
ldconfig [OPTION...]
{% endhighlight %}
O comando ldd
 Imprime as bibliotecas compartilhadas necessárias por cada programa ou compartilhado biblioteca especificada na linha de comando.
 
Extraído de:
http://www.fsf.org/
http://www.hardware.com.br
http://www.linuxmanpages.com/
Veja o Manual do Linux em uma página de Carlos Morimoto: 
  
 Manual linux de_uma_pagina  from Marcos da Boa Morte 
