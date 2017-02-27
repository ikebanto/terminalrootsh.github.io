---
layout: post
title: 'Curso Certificação Linux LPI-102: Hora e Internacionalização do Sistema'
date: '2013-03-31T15:45:00.000-07:00'
description: 'Curso Certificação Linux LPI-102: Hora e Internacionalização do Sistema'
main-class: 'linux'
tags:
- Linux
- LPI
image: http://2.bp.blogspot.com/-g8CS25o8e1U/UVYzwzyhV0I/AAAAAAAABS0/wxds5sYR9qs/s72-c/Linux_clock.jpg
twitter_text: 'Curso Certificação Linux LPI-102: Hora e Internacionalização do Sistema'
introduction: 'Curso Certificação Linux LPI-102: Hora e Internacionalização do Sistema'
---
 O diretório abaixo contém as informações de configuração das zonas de fuso horário:
{% highlight bash %}
/usr/share/zoneinfo
{% endhighlight %}
 A zona local do sitema é determinada por um link simbólico de algum arquivo deste diretório para o arquivo:
{% highlight bash %}
/etc/localtime
{% endhighlight %}
Copia a hora corrente no relógio da máquina para o relógio da sistema, durante a carga do sistema.Este comando irá assumir que a hora no hardware é a hora local, a menos que a opção --utc seja utilizada
{% highlight bash %}
/sbin/hwclock
{% endhighlight %}
 O comando date também pode ser utilizado para configurar a data e hora do sistema. O formato que a data e hora precisam ser informados segue a notação MMDDhhmmAAAA, segue:
 
 ° MM - mês
 ° DD - dia
 ° hh - hora
 ° mm - minuto
 ° AAAA - ano 
 Os dias e meses menores que 10 devem ser escritos com zero na frente e as horas no padrão 24h.
 
 Exemplo:
Configura a hora e data para Sex 29 Mar 2013 21:34 hs 
 
{% highlight bash %}
# date 032921342013
{% endhighlight %}
