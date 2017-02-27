---
layout: post
title: "O editor de texto Nano"
date: '2015-10-04T17:27:00.002-07:00'
description: "O editor de texto Nano"
main-class: 'linux'
tags:
- Linux
- Dicas
- GNU
image: "http://2.bp.blogspot.com/--fyAowAolbI/VhG-LEGKCyI/AAAAAAAAEyc/GCezmYZT1Mw/s72-c/nano.png"
twitter_text: "O editor de texto Nano"
introduction: "O editor de texto Nano"
---
![Blog Linux](http://2.bp.blogspot.com/--fyAowAolbI/VhG-LEGKCyI/AAAAAAAAEyc/GCezmYZT1Mw/s1600/nano.png "Blog Linux")
Nano (http://www.nano-editor.org/) é um editor que deve ser executado a partir de um terminal, e se concentra em simplicidade. Nano é um clone do antigo  editor de texto Pico, o editor para o cliente de e-mail Pine, que foi muito popular lá pelos anos 90, em UNIX e sistemas do tipo UNIX. O Pine foi substituído pelo Alpine e o Pico pelo Nano, mas algumas coisas não mudaram - assim como a simplicidade de edição com o Nano. 
Caso você não possua o Nano, utilize o seu gerenciador de pacotes para instalar, ele está na maioria dos repositórios da Distros:
{% highlight bash %}
apt-get install nano
{% endhighlight %} 
Nano foi criado em 1999 com o nome de "TIP" (uma sigla, um acrônimo  recursivo que significa "TIP Isn't Pine", ou "TIP não é o Pine") por  Chris Allagretta. Allagretta decidiu criar este clone do Pico porque o  programa não foi liberado sob a GPL. O nome foi mudado oficialmente em  10 de janeiro de 2000 para diminuir a confusão entre o novo editor e o  comando "tip" (o comando "tip" é comum em Sun Solaris). 
Nano usa combinações muito simples de teclas para trabalhar com arquivos. Um arquivo é aberto ou iniciado com o comando: 
{% highlight bash %}
nano 
{% endhighlight %}
Veja uma imagem de terminal rodando o Nano:
![Blog Linux](http://3.bp.blogspot.com/-QwEYUIpIU8M/VhHBJeFQOiI/AAAAAAAAEyo/sx8v1FTcNVo/s640/editor-gnu-nano.png "Blog Linux")
Quando o arquivo estiver aberto no Nano, você verá uma pequena lista de  exemplos de comando na parte inferior da janela do terminal. Veja na  figura:  
![Blog Linux](http://3.bp.blogspot.com/-kwDITFgS8vs/VhHCUXTvQ-I/AAAAAAAAEy0/MF_nCQOYPpw/s640/editor-gnu-nano3.png "Blog Linux")
Todas as combinações de teclas para Nano começam com a tecla CTRL. Para  executar um comando você deve manter a tecla CTRL pressionada e clicar  na segunda tecla para executar a ação. As combinações mais comuns para  Nano são: 
 CTRL-x - Sai do editor. Se você estiver no meio da edição de um  arquivo, o processo de saída irá perguntar se você quer salvar seu  trabalho.  CTRL-R - Ler um arquivo em seu arquivo de trabalho atual. Isso  permite que você adicione o texto de outro arquivo enquanto trabalha  dentro de um novo arquivo.  CTRL-c - Mostra a posição atual do cursor.  CTRL-k - 'recorta' o texto.  CTRL-U - 'cola' o texto.  CTRL S - Salva o arquivo e continua trabalhando.  CTRL-T - verifica a ortografia do seu texto.  CTRL-w - faz uma busca no texto.  CTRL-a- leva o cursor para o início da linha.  CTRL-e - leva o cursor para o fim da linha.  CTRL-g - mostra a ajuda do Nano. 
Existem muitos mais comandos para usar no Nano. Para ver a lista de comandos, use o comando CTRL-g.
![Blog Linux](http://3.bp.blogspot.com/-C2UttcJM-KI/VhHCwHodoUI/AAAAAAAAEy8/ML5UpyEJG68/s640/editor-gnu-nano2.png "Blog Linux")
Via: http://www.vivaolinux.com.br/artigo/Introducao-ao-Linux-O-editor-de-texto-Nano
