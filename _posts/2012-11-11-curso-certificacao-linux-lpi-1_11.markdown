---
layout: post
title: "'Curso Certificação Linux LPI-1: Hierarquia do Sistema'"
date: '2012-11-11T03:40:00.000-08:00'
description: "'Curso Certificação Linux LPI-1: Hierarquia do Sistema'"
main-class: 'linux'
tags:
- Linux
- LPI
image: "http://1.bp.blogspot.com/-Iay1HcXpqeY/UJ-PniER_fI/AAAAAAAAAj0/6N1jdnT4X0I/s72-c/diretorios.png"
twitter_text: "'Curso Certificação Linux LPI-1: Hierarquia do Sistema'"
introduction: "'Curso Certificação Linux LPI-1: Hierarquia do Sistema'"
---
![Blog Linux](http://1.bp.blogspot.com/-Iay1HcXpqeY/UJ-PniER_fI/AAAAAAAAAj0/6N1jdnT4X0I/s400/diretorios.png "Blog Linux")
Sistema de arquivos é a forma de organização de dados em algum meio de armazenamento de dados em massa frequentemente feito em discos magnéticos.[1] Sabendo interpretar o sistema de arquivos de um determinado disco, o sistema operacional pode decodificar os dados armazenados e lê-los ou gravá-los.
Fazendo analogias, tal organização assemelha-se a uma biblioteca escolar. O bibliotecário organiza os livros conforme um padrão, cuja busca, convenientemente, procura deixar mais fácil, sem ocupar muitas prateleiras e assegurando a integridade deste.
Inode
Cada diretório e arquivo do Linux é identificado para o kernel como um número de nó i (inode).
Inode
Um inode é, na realidade, uma estrutura de dados que possui informações sobre um determinado arquivo ou diretório como, por exemplo, dono, grupo, tipo e permissões de acesso.
O inode é exclusivo somente para o dispositivo (partição) dentro do qual ele está contido. Portanto, para identificar unicamente um arquivo, o kernel deve ter o número de dispositivo e o inode do arquivo.
Um arquivo possui um único inode, não importa por quantos nomes este arquivo é identificado no sistema. Logo, é o conjunto de inodes que indica o número de arquivos/diretórios que o sistema possui.Inodes
Diretório
Diretório é o local utilizado para armazenar conjuntos de arquivos para melhor organização e localização. O diretório, como o arquivo, também é "Case Sensitive" (diretório /teste é completamente diferente do diretório /Teste).
Não podem existir dois arquivos com o mesmo nome em um diretório, ou um sub-diretório com um mesmo nome de um arquivo em um mesmo diretório.
Um diretório, nos sistemas Linux/UNIX, é especificado por uma "/" e não uma "\" como é feito no DOS. Para detalhes sobre como criar um diretório, veja o comando mkdir.
![Blog Linux](http://4.bp.blogspot.com/-VSdiUfyvwvQ/UJ-QZZxJvEI/AAAAAAAAAkA/5DSYrrFp260/s400/Arquivos.png "Blog Linux")
  Diretório Raiz
Este é o diretório principal do sistema. Dentro dele estão todos os diretórios do sistema. O diretório Raiz é representado por uma "/", assim se você digitar o comando cd / você estará acessando este diretório.
Nele estão localizados outros diretórios como o /bin, /sbin, /usr, /usr/local, /mnt, /tmp, /var, /home, etc. Estes são chamados de sub-diretórios pois estão dentro do diretório "/". A estrutura de diretórios e sub-diretórios pode ser identificada da seguinte maneira:
A estrutura de diretórios também é chamada de Árvore de Diretórios porque é parecida com uma árvore de cabeça para baixo. Cada diretório do sistema tem seus respectivos arquivos que são armazenados conforme regras definidas pela FHS (FileSystem Hierarchy Standard - Hierarquia Padrão do Sistema de Arquivos) versão 2.0, definindo que tipo de arquivo deve ser armazenado em cada diretório.
O sistema GNU/Linux possui a seguinte estrutura básica de diretórios, organizados segundo o FHS (Filesystem Hierarchy Standard):
/ 
raíz do sistema
/bin
Contém arquivos programas do sistema que são usados com frequência pelos usuários.
/boot
Contém arquivos necessários para a inicialização do sistema.
/cdrom
Ponto de montagem da unidade de CD-ROM.
/media
Ponto de montagem de dispositivos diversos do sistema (rede, pen-drives, CD-ROM em distribuições mais novas).
/dev
Contém arquivos usados para acessar dispositivos (periféricos) existentes no computador.
/etc
Arquivos de configuração de seu computador local.
/floppy
Ponto de montagem de unidade de disquetes
/home
Diretórios contendo os arquivos dos usuários.
/lib
Bibliotecas compartilhadas pelos programas do sistema e módulos do kernel.
/lost+found
Local para a gravação de arquivos/diretórios recuperados pelo utilitário fsck.ext2. Cada partição possui seu próprio diretório lost+found.
/mnt
Ponto de montagem temporário.
/proc
Sistema de arquivos do kernel. Este diretório não existe em seu disco rígido, ele é colocado lá pelo kernel e usado por diversos programas que fazem sua leitura, verificam configurações do sistema ou modificam o funcionamento de dispositivos do sistema através da alteração em seus arquivos.
/root
Diretório do usuário root.
/sbin
Diretório de programas usados pelo superusuário (root) para administração e controle do funcionamento do sistema.
/tmp
Diretório para armazenamento de arquivos temporários criados por programas.
/usr
Contém maior parte de seus programas. Normalmente acessível somente como leitura.
/var
Contém maior parte dos arquivos que são gravados com frequência pelos programas do sistema, e-mails, spool de impressora, cache, etc.    Fontes:
http://www.uniriotec.br/
http://pt.wikibooks.org/wiki/Guia_do_Linux/
