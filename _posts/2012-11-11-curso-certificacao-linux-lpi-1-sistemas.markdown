---
layout: post
title: "'Curso Certificação Linux LPI-1: Sistemas de Arquivos e Dispositivos'"
date: '2012-11-11T12:36:00.000-08:00'
description: "'Curso Certificação Linux LPI-1: Sistemas de Arquivos e Dispositivos'"
main-class: 'linux'
tags:
- Linux
- LPI
image: "http://1.bp.blogspot.com/-Pbc8ct3fI_E/UKAKhYv9aDI/AAAAAAAAAkY/kDbdxYj8NBo/s72-c/sad.png"
twitter_text: "'Curso Certificação Linux LPI-1: Sistemas de Arquivos e Dispositivos'"
introduction: "'Curso Certificação Linux LPI-1: Sistemas de Arquivos e Dispositivos'"
---
![Blog Linux](http://1.bp.blogspot.com/-Pbc8ct3fI_E/UKAKhYv9aDI/AAAAAAAAAkY/kDbdxYj8NBo/s400/sad.png "Blog Linux")
Por padrão, os discos são nomeados da seguinte forma no linux:
/dev/hda - Disco IDE conectado na interface primária mestre.
/dev/hdb - Disco IDE conectado na interface primária escravo.
/dev/hdc - Disco IDE conectado na interface secundária mestre.
/dev/hdd - Disco IDE conectado na interface secundário escravo.
/dev/sda - Disco SCSI conectado no primeiro canal.
/dev/sdb - Disco SCSI conectado no segundo canal.
/dev/sdc - Disco SCSI conectado no terceiro canal.
/dev/fd - Drive de disquete.
Cada disco pode ter de uma a 16 partições.As partições funcionam com um contêiner para os sistemas de arquivosNo Linux cada partição é representada por um número inteiro.
Partições Primárias
Cada disco pode conter no máximo 4 partições primárias.Estas partições contêm necessariamente um sistema de arquivos e pelo menos uma deve ser criada.As partições primárias podem ser nomeadas como: /dev/hda1, /dev/hda2, /dev/hda3 /dev/hda4.Uma destas partições primárias deve ser marcada como ativa para que a carga do sistema operacional(boot) seja possível.
Partições Estendidas
Elas são uma variação das partições primárias, mas não podem conter um sistema de arquivos.Funcionam como um contêiner para as partições lógicas.
Partições Lógicas
Essas existem em conjunto com uma partição estendida e podemos ter de uma a 12 partições desse tipo.São nomeadas do n° 5 até 16.
Exemplo:
/dev/hda1 (partição primária)
/dev/hda2 (partição estendida)
/dev/hda5 (partição lógica)
/dev/hda6 (partição lógica)
(...)
/dev/hda16 (partição lógica)
Partição de Swap (arquivo de troca)
Existem ainda um outro tipo especial de partição no Linux chamado de partição de swap.Esta possibilita que o Linux tenha uma memória virtual em disco.Este tipo de memória é usado como arquivo de troca de dados entre a memória física e o disco.Seu objetivo é aumentar a performance do sistema.
fdisk (e cfdisk) são responsáveis por criar, listar, alterar e apagar as partições de disco.mkfs formata a partição criada pelo fdisk.mkswap prepara o dispositivo para ser usado como área de memória virtual(swap), antes de formatar uma partição para swap, é necessária que ela seja do tipo 82 (Linux Swap).swapon ativa a partição após formatada (necessário).df mostra a capacidade utilizada em termos de espaço e inodes.du (Disk Usage) fornece uma lista detalhada sobre a utilização do disco em termos de diretórios.fsck checa e corrige a existência de erros no sistema de arquivos.Por padrão ele assume o sistema de arquivos ext2./etc/fstab mantém informações de quais sistemas de arquivos serão montados no processo de carga do sistema operacional.which procura um comando no disco
Find
O comando find localiza a partir de um caminho ou diretório recursivamente uma expressão diretamente no sistema de arquivos.
uso: find caminho expressão
exemplo, encontra o arquivo marcospinguim.php no disco:
{% highlight bash %}
$ find /home/marcos -name marcospinguim.php
{% endhighlight %}
para as pastas que você não tem permissão de visualização, pode jogar a segunda etapa para o vazio, assim:
{% highlight bash %}
$ find /home/marcos -name marcospinguim.php 2>/dev/null
{% endhighlight %}
Para localizar arquivos ou diretórios que foram alterados nos últimos 30 dias, utilizamos a expressão -ctime 30:
{% highlight bash %}
$ find | home -ctime 30
{% endhighlight %}
Para localizar arquivos que foram acessados nos últimos 10 dias, utilizamos a expressão -used 10:
{% highlight bash %}
$ find | -used 10
{% endhighlight %}
Para localizar arquivos com pelo menos 30k, utilizamos a expressão -size nk:
{% highlight bash %}
$ find | -size 30k
{% endhighlight %}
locate realiza buscas em um banco de dados criado com updatedb.whatis pesquisa por palavra exata no banco de dados.apropos consulta um banco de dados consistindo de descrições curtas dos comandos do sistema e utilitários.
Por enquanto é só, até o próximo tópico ou a próxima postagem sobre outro assunto.
