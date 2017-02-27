---
layout: post
title: "'Curso Certificação Linux LPI-1: Sistema de Boot, Shutdown e Runlevels'"
date: '2012-11-22T13:17:00.000-08:00'
description: "'Curso Certificação Linux LPI-1: Sistema de Boot, Shutdown e Runlevels'"
main-class: 'linux'
tags:
- Linux
- LPI
image: "http://3.bp.blogspot.com/-Mbn2o-anpFE/UK6VOwHbwdI/AAAAAAAAAqw/gsqQ9mytofE/s72-c/fig1.gif"
twitter_text: "'Curso Certificação Linux LPI-1: Sistema de Boot, Shutdown e Runlevels'"
introduction: "'Curso Certificação Linux LPI-1: Sistema de Boot, Shutdown e Runlevels'"
---
![Blog Linux](http://3.bp.blogspot.com/-Mbn2o-anpFE/UK6VOwHbwdI/AAAAAAAAAqw/gsqQ9mytofE/s320/fig1.gif "Blog Linux")
Em informática, boot é o termo em inglês para o processo de iniciação do computador que carrega o sistema operacional quando a máquina é ligada.A solução para o paradoxo está na utilização de um pequeno e especial programa, chamado sistema de iniciação, boot loader ou bootstrap.O pequeno programa normalmente não é o sistema operacional, mas apenas um segundo estágio do sistema de inicialização, assim como o Lilo ou o Grub. Ele será então capaz de carregar o sistema operacional apropriado, e finalmente transferir a execução para ele.
Quando um sistema efetua boot pela primeira vez, o processador executa um código em um local conhecido. Em um Computador Pessoal (PC), esse local é o Sistema Básico de Entrada/Saída (BIOS), que está armazenado na memória flash, na placa-mãe.O estágio de inicialização do sistema depende do hardware no qual o Linux está efetuando boot. Em uma plataforma integrada, um ambiente de autoinicialização é utilizado quando o sistema é ligado ou reconfigurado.O loader de boot primário, que reside no MBR, é uma imagem de 512 bytes contendo o código do programa e uma pequena tabela de partição.
![Blog Linux](http://3.bp.blogspot.com/-9ey5dntd5aE/UK6Vbqo8UcI/AAAAAAAAAq8/CmitxyHqiRU/s320/fig2.gif "Blog Linux")
O loader de boot secundário, ou de segundo estágio, pode ser chamado de loader de kernel. Neste estágio, sua tarefa é carregar o kernel Linux e o disco RAM inicial opcional.Com a imagem de kernel na memória e o controle fornecido no loader de boot de estágio 2, o estágio do kernel começa. A imagem do kernel não é bem um kernel executável, mas uma imagem de kernel compactada. Em geral é uma zImage (imagem compactada, com menos de 512KB) ou uma bzImage (imagem compactada grande, com mais de 512KB), previamente compactada com zlib. 
![Blog Linux](http://2.bp.blogspot.com/-lnQdJ3-8Mhs/UK6ViZWgxEI/AAAAAAAAArI/GoUmP-Qzuuc/s320/fig3.gif "Blog Linux")
Após executar boot e inicializado, o kernel inicia o aplicativo do primeiro espaço do usuário. Ele é o primeiro programa chamado, compilado com a biblioteca C padrão. Até este momento no processo, nenhum aplicativo C padrão foi executado.
Runlevels (Níveis de Execução)
Níveis de execução definem quais tarefas podem ser realizadas no estado (ou nível de execução) atual de um sistema Linux. .Além do básico, o uso de níveis de execução pode ser diferentes nas distribuições.
Tablela 1. Níveis de execução básicos do Linux
Nível Propósito
0 Encerrar (ou parar) o sistema
1 Modo de usuário único; geralmente com os alias s ou S
2  Modo de multiusuário sem rede
3 Modo de multiusuário com rede
4 Não Utilizado
5 Modo de multiusuário com rede e com o X Window System
6 Reinicializar o sistema
A distribuição Slackware usa o nível de execução 4 em vez do 5 para um sistema completo executando X Window system. Debian e derivados, como Ubuntu, usam um único nível de execução para o modo de multiusuário, geralmente o nível 2. Consulte a documentação para sua distribuição.
Para alterar o Runlevel de inicialização do seu Linux, vc pode alterar o arquivo /etc/inittab:
{% highlight bash %}
# vi /etc/inittab
{% endhighlight %}
Exemplo abaixo, corresponde a linha em vermelho, o número 2 é o definido:
{% highlight bash %}
# /etc/inittab: init(8) configuration.
# $Id: inittab,v 1.91 2002/01/25 13:35:21 miquels Exp $
# The default runlevel.
id:2:initdefault:
# Boot-time system configuration/initialization script.
# This is run first except when booting in emergency (-b) mode.
si::sysinit:/etc/init.d/rcS
# What to do in single-user mode.
~~:S:wait:/sbin/sulogin
# /etc/init.d executes the S and K scripts upon change
# of runlevel.
#
# Runlevel 0 is halt.
# Runlevel 1 is single-user.
# Runlevels 2-5 are multi-user.
# Runlevel 6 is reboot.
l0:0:wait:/etc/init.d/rc 0
l1:1:wait:/etc/init.d/rc 1
{% endhighlight %}
Ou usando um dos comando abaixo(lembrando que para todos esses procedimentos deverá ser o super-usuário):
{% highlight bash %}
# init 5
{% endhighlight %}
Ou
{% highlight bash %}
# telinit 5
{% endhighlight %}
Personalizando o processo de inicialização
O Debian não utiliza o diretório rc.local no estilo BSD para personalizar o processo de inicialização; ao invés disso ele fornece o seguinte mecanismo de personalização.
Suponha que um sistema precisa executar o script foo na inicialização da máquina ou ao entrar em um nível de execução (System V) em especifíco. O administrador do sistema deverá então :
 Colocar o script foo dentro do diretório /etc/init.d/.
 Executar o comando Debian update-rc.d com os argumentos apropriados para criar as ligações entre os diretórios (especificados na linha de comando) rc?.d e /etc/init.d/foo. Aqui, ? é um número de 0 a 6 que corresponde a um dos níveis de execução System V.
 Reiniciar o sistema.
O comando update-rc.d criará as ligações entre os arquivos nos diretórios rc?.d e o script em /etc/init.d/. Cada ligação iniciará com um `S' ou um `K', seguido por um número, seguido pelo nome do script. Quando o sistema entra em um nível de execução N, scripts que iniciam com `K' em /etc/rcN.d/ são executados com stop como seu argumento, seguido por aqueles começando com `S' em /etc/rcN.d com start como seu argumento.
Alguém poderia, por exemplo, fazer com que o script foo seja executado na inicialização do sistema colocando-o em /etc/init.d/ e instalando as ligações com o comando update-rc.d foo defaults 19. O argumento defaults se refere aos níveis de execução padrões, que são do nível 2 até o nível 5. O argumento 19 assegura que foo seja chamado antes de quaisquer scripts contendo números 20 ou superiores. 
O Comando Shutdown
Desliga/reinicia o computador imediatamente ou após determinado tempo (programável) de forma segura. Todos os usuários do sistema são avisados que o computador será desligado . Este comando somente pode ser executado pelo usuário root ou quando é usada a opção -a pelos usuários cadastrados no arquivo /etc/shutdown.allow que estejam logados no console virtual do sistema.
shutdown [opções] [hora] [mensagem]
hora
 Momento que o computador será desligado. Você pode usar HH:MM para definir a hora e minuto, MM para definir minutos, SS para definir após quantos segundos, ou now para imediatamente (equivalente a 0).
O shutdown criará o arquivo /etc/nologin para não permitir que novos usuários façam login no sistema (com excessão do root). Este arquivo é removido caso a execução do shutdown seja cancelada (opção -c) ou após o sistema ser reiniciado.
mensagem
 Mensagem que será mostrada a todos os usuários alertando sobre o reinicio/desligamento do sistema.
 
opções
-h
 Inicia o processo para desligamento do computador.
-r
 Reinicia o sistema
-c
 Cancela a execução do shutdown. Você pode acrescentar uma mensagem avisando aos usuários sobre o fato.
-a
 Permite que os nomes de usuários contidos no arquivo /etc/shutdown.allow possam utilizar o shutdown para reinicializar/desligar o sistema. Deve ser colocado um nome de usuário por linha. O limite máximo de usuários neste arquivo é de 32.
Este arquivo é útil quando o shutdown é usado para controlar o pressionamento das teclas CTRL ALT DEL no /etc/inittab.
-k
 Simula o desligamento/reinicio do sistema, enviando mensagem aos usuários.
-f
 Não executa a checagem do sistema de arquivos durante a inicialização do sistema. Este processo é feito gravando-se um arquivo /fastboot que é interpretado pelos scripts responsáveis pela execução do fsck durante a inicialização do sistema.
-F 
