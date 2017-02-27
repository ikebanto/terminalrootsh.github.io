---
layout: post
title: "'Curso Certificação Linux LPI-102: Fundamentos e Serviços de Rede - TCP-IPv4'"
date: '2013-03-03T12:54:00.000-08:00'
description: "'Curso Certificação Linux LPI-102: Fundamentos e Serviços de Rede - TCP-IPv4'"
main-class: 'linux'
tags:
- Linux
- LPI
- Redes
image: "http://3.bp.blogspot.com/-uzYvMVmbDM0/UTO2AdE_-oI/AAAAAAAABJE/J4FhP_Jt0tg/s72-c/Captura_de_tela-3.png"
twitter_text: "'Curso Certificação Linux LPI-102: Fundamentos e Serviços de Rede - TCP-IPv4'"
introduction: "'Curso Certificação Linux LPI-102: Fundamentos e Serviços de Rede - TCP-IPv4'"
---
 O TCP/IP é um conjunto de protocolos de comunicação entre computadores em rede (também chamado de pilha de protocolos TCP/IP). Seu nome vem de dois protocolos: o TCP (Transmission Control Protocol - Protocolo de Controle de Transmissão) e o IP (Internet Protocol - Protocolo de Interconexão).
 O endereço IP é escrito na notação decimal com 4 posiçõe de 8 bitscada, totalizando 32 bits.Cada parte do endereço pode ir de 0 a 255 na notação decimal.
{% highlight bash %}
x.y.z.k
192.168.1.1
{% endhighlight %}
O protocolo perimite que uma rede seja dividida em classes e subclasses indicam onde começa e termina uma rede e precisam de dois IPs para marcar o seu início e final.Essa divisão é feita utilizando a máscara de rede.
{% highlight bash %}
IP:    192.168.1.1
Subrede:  255.255.255.0
{% endhighlight %}
 Os bits de valor 1 na máscara iddicam quais bits do endereço serão usados como endereçamento de rede.O valor 0 indica os bits que serão usados como endereçamento de máquinas.Veja o exemplo abaixo(192.168.1.1):
![Blog Linux](http://3.bp.blogspot.com/-uzYvMVmbDM0/UTO2AdE_-oI/AAAAAAAABJE/J4FhP_Jt0tg/s320/Captura_de_tela-3.png "Blog Linux")
O modelo TCP/IP tem 5 classes de endereços definidas pelas letras: A, B, C, D e E.
Classe A:
![Blog Linux](http://3.bp.blogspot.com/-ogH0TKeTcFo/UTO2kMGhBjI/AAAAAAAABJw/ugU3HHSXjFU/s320/Captura_de_tela-5.png "Blog Linux")
Classe B:
![Blog Linux](http://4.bp.blogspot.com/-fJBugVNbp0Y/UTO2kyt6b9I/AAAAAAAABKA/ns0hq5pYjrg/s320/Captura_de_tela-7.png "Blog Linux")
Classe C:
![Blog Linux](http://1.bp.blogspot.com/-PprDVNJBmok/UTO2kx75RmI/AAAAAAAABJ8/cdnoGkB4BxQ/s320/Captura_de_tela-8.png "Blog Linux")
Classe D e Classe E:
![Blog Linux](http://2.bp.blogspot.com/-nwSk5bK5Kjs/UTO2i3CprlI/AAAAAAAABJQ/5_h-uwu0e8o/s320/Captura_de_tela-10.png "Blog Linux")
 Existem alguns endereços IP especiais que são reservados para funções específicas que não podem ser utilizados como endereços de uma máquina da rede.A classe A 127.0.0.1 é utilizada como referência a própria máquina.Normalmente o endereço 127.0.0.1 é associado ao nome localhost.
 
![Blog Linux](http://4.bp.blogspot.com/-653U-HlQK4E/UTO2iyfqtTI/AAAAAAAABJM/ogzOjf8CYaw/s320/Captura_de_tela-11.png "Blog Linux")
 O modelo inicial do TCP/IP é baseado em 4 níveis: Host/rede; Inter-rede; Transporte; e Aplicação. Surgiu, então, um modelo híbrido, com 5 camadas, que retira o excesso do modelo OSI e melhora o modelo TCP/IP: Física; Enlace; Rede; Transporte; e Aplicação.
 
![Blog Linux](http://2.bp.blogspot.com/-Pu7g2sJeGxY/UTO2i-kVB7I/AAAAAAAABJY/baPjbFCtnJ0/s320/Captura_de_tela-12.png "Blog Linux")
![Blog Linux](http://4.bp.blogspot.com/-gTikMQfrRzc/UTO2j0AQm1I/AAAAAAAABJo/MicSYbhqXPQ/s320/Captura_de_tela-13.png "Blog Linux")
![Blog Linux](http://4.bp.blogspot.com/-NCIWD0CgUww/UTO2jrUVkYI/AAAAAAAABJk/CzfuTyoeN9s/s320/Captura_de_tela-14.png "Blog Linux")
 As aplicações fazem acesso à camada de transporte através de portas.Elas podem ser vistas como canais de comunicações.Cada porta é referênciada como número inteiro, que a identifica e a aplicação que ela dá suporte.Este número é um valo de 16-bit, que vai do 1 ao 65535 em decimal.
 Os pacotes TCP e UDP contêm em seu cabeçalho informações como endereço IP do remetente, porta de origem, endereço IP e porta de destino.Cada serviço utiliaz uma única porta.
 
 O snúmeros de 1 a 1024 sõ chamados de portas privilegiadas porque os serviços oferecidos através delas executam com autoridade de super-usuário.
 
 O arquivo SERVICES definem os serviços e as portas conhecidas pelo sistema Linux:
 {% highlight bash %}
# cat /etc/services
{% endhighlight %}
 
