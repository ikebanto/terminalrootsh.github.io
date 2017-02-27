---
layout: post
title: 'Curso Certificação Linux LPI-102: Kernel do Linux'
date: '2013-02-15T17:09:00.000-08:00'
description: 'Curso Certificação Linux LPI-102: Kernel do Linux'
main-class: 'linux'
tags:
- Linux
- LPI
image: http://3.bp.blogspot.com/-Aei4D1lmbt4/UR7a34iqs-I/AAAAAAAAA_8/18e9squdg4A/s72-c/Linux_kernel_map.png
twitter_text: 'Curso Certificação Linux LPI-102: Kernel do Linux'
introduction: 'Curso Certificação Linux LPI-102: Kernel do Linux'
---
![Blog Linux](http://3.bp.blogspot.com/-Aei4D1lmbt4/UR7a34iqs-I/AAAAAAAAA_8/18e9squdg4A/s400/Linux_kernel_map.png "Blog Linux")
 O núcleo do Linux (Linux Kernel) forma a estrutura base do sistema operacional GNU/Linux, que é um sistema operacional tipo unix. O núcleo do Linux é um dos exemplos mais proeminentes de software livre, pois pode prover alicerce para o desenvolvimento e execução de outros softwares livres.
O núcleo Linux é distribuído sob a licença GNU General Public License versão 2 (GPLv2), sendo desenvolvido por colaboradores em todo o mundo. O desenvolvimento ocorre a partir da lista de e-mail do núcleo Linux (Linux kernel mailing list).
O Linux foi concebido pelo estudante do Departamento de Ciência da Computação da Universidade de Helsinki na Finlândia, Linus Torvalds com ajuda de vários programadores voluntários por meio da Usenet (antecessora da Internet) em 1991.
Mais informações em: Wikipédia
Suporte aos dispositivos de hardware:
-Códigos dos drivers dos dispositivos podem ser carregados no próprio coração do núcleo(monolítico, rápido e flexível)
-Códigos dos drivers dos dispositivos podem ser carregados separadamente(os Módulos)("modulo.o", depende da versão do Kernel)
-O número de versão menor (o segundo componente) par indicavam uma série estável: 1.0.x, 1.2.x, 2.0.x, 2.2.x e 2.4.x;
Os módulos são dispnibilizados em /lib/modules/versao-do-kernel
Para visualizar a versão no Kernel, alguns comandos:
Padrão:
{% highlight bash %}
# uname -r
{% endhighlight %}
Visualiza com distro:
{% highlight bash %}
# uname -a
{% endhighlight %}
Visualização mais completa:
{% highlight bash %}
# cat /proc/version
{% endhighlight %}
Outar forma no Debian, por exemplo:
{% highlight bash %}
# cat /etc/issue
{% endhighlight %}
Para listar os módulos disponíveis e utilizados:
{% highlight bash %}
# lsmod
{% endhighlight %}
Ou
{% highlight bash %}
# cat cat /proc/modules
{% endhighlight %}
Para carregar um módulo para dentro do Kernel, se não for informado o caminho, o mesmo será procurado no arquivo /etc/modules.conf
{% highlight bash %}
# insmod [opções] [módulo]
{% endhighlight %}
Para remover ou descarregar um módulo do Kernel(quando não estiver em uso):
{% highlight bash %}
# rmmod [opções] [módulo]
{% endhighlight %}
Para obter informações sobre determinado módulo:
{% highlight bash %}
# modinfo [opções] [módulo]
{% endhighlight %}
O MAIS USADO DE TODOS, usado para carregar e descarregar os módulos de forma inteligente do Kernel:
{% highlight bash %}
# modprobe [opções] [módulo] [parâmetros do módulo]
{% endhighlight %}
Cria uma lista de dependências entre módulos
{% highlight bash %}
# depmode [opções]
{% endhighlight %}
{% highlight bash %}
Para Instalar um novo Kernel, consulte esse link:
Clique aqui - Como Compilar o Kernel
{% endhighlight %}
