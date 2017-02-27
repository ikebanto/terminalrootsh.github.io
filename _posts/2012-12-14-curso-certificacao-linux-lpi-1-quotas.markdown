---
layout: post
title: 'Curso Certificação Linux LPI-1: Quotas de Disco'
date: '2012-12-14T06:00:00.000-08:00'
description: 'Curso Certificação Linux LPI-1: Quotas de Disco'
main-class: 'linux'
tags:
- Linux
- LPI
image: http://3.bp.blogspot.com/-2ESRGiS34ck/UMsv1l9LTMI/AAAAAAAAA1w/kRqpyy8uA0A/s72-c/imagem.php.jpg
twitter_text: 'Curso Certificação Linux LPI-1: Quotas de Disco'
introduction: 'Curso Certificação Linux LPI-1: Quotas de Disco'
---
![Blog Linux](http://3.bp.blogspot.com/-2ESRGiS34ck/UMsv1l9LTMI/AAAAAAAAA1w/kRqpyy8uA0A/s320/imagem.php.jpg "Blog Linux")
 No Linux existe a possibilidade de habilitarmos quotas de disco para gerenciarmos melhor o uso do espaço disponível em disco.Este recurso é especialmente importante em ambientes multi-usuários, servidores de Web, servidores de arquivos, servidores de e-mail, etc.
 
 No gerenciamento de cotas é possível definirmos a quantidade de espaço em disco para cada usuário ou grupo de usuários.É preciso habilitar o gerenciamento de quotas antes de utilizarmos este recurso.Também é preciso que o suporte a quotas esteja compilado no Kernel. 
 1-Edite o arquivo /etc/fstab e adicione o gerenciamento de cota para usuário (usrquota) e para grupo (grpquota) no dispositivo desejado.
 
 {% highlight bash %}
# vi /etc/fstab
{% endhighlight %}
 Acrescentar "usrquota" e "gprquota":
 
 {% highlight bash %}
 /dev/hda6 /home ext3 defaults,usrquota,grpquota 1 2
{% endhighlight %}
 2-Crie o arquivo quota.user e quota.group no diretório /home e configure as permissões de leitura e escrita para o root.Estes dois arquivos serão os bancos de dados para quotas de usuário e grupo respectivamente.
 
 Cria os arquivos de quota:
 
 {% highlight bash %}
 # touch /home/quota.user
 # touch /home/quota.group
 
{% endhighlight %}
 
 Altera as permissões:
 
 {% highlight bash %}
 # chmod 600 /home/quota.user
 # chmod 600 /home/quota.group
 
{% endhighlight %}
 
 3-Execute o comando quota-check para iniciar o banco de dados recém criado, e verifique se o banco de dados foi iniciado.Os arquivos quota.user e quota.group não devem ter tamanho zero.
 
 {% highlight bash %}
# ls -lga /home
{% endhighlight %}
 
 4-Habilite o serviço de quotas:
 
 {% highlight bash %}
# quotaon -a
{% endhighlight %}
 
 5-Tenha certeza de que o serviço de quotas é habilitado no boot.Se não existir o arquivo /etc/rc.d/quotas, crie um arquivo de script:
 {% highlight bash %}
 # vi /etc/rc.d/quotas
 #!/bin/bash
 /sbin/quotaon -avug
 
{% endhighlight %}
 
 Altere as permissões para 755:
 
 {% highlight bash %}
# chmod 755 /etc/rc.d/quotas
{% endhighlight %}
 
 6-Crie o link simbólico para o arquivo de quotas para o runlevel 3 e runlevel 5:
 
 {% highlight bash %}
 # ln -s /etc/rc.d/quotas /etc/rc.d/rc3.d/S20quotas
 # ln -s /etc/rc.d/quotas /etc/rc.d/rc5.d/S20quotas
 
{% endhighlight %}
 
 7-Faça checagem do sistema de quotas uma vez por semana colocando o comando quotacheck no cron do root:
 
 {% highlight bash %}
 # crontab -e
 0 3 * * 0 /sbin/quotacheck -avug
 
{% endhighlight %}
 
 Uma vez feitos estes passos o sistema de quotas poderá ser utilizado.
 
 - user hard limit (limite físico), é a quantidade total de espaço em disco que um usuário pode ter.
 
 - user soft limits (limite leve), funciona como uma área de aviso, quando o usuário alcança este limite o sistema avisa ao usuário que o espaço físico está acabando.
 
 - group hard limit (limite físico por grupo)
 
 - group soft limit , também área de aviso.
 
 - grace período (Período de Graça), pode-se configurar um período para que o usuário ou grupo que tenha atingido o limite leve possa apagar alguns arquivos e ficar dentro do estabelecido.Este limite pode ser em minutos, horas, dias, semanas e até meses. 
 Comandos:
 
 quota:
 {% highlight bash %}
 # quota [opções] usuário/grupo
 
{% endhighlight %}
 
 Ex.:
 {% highlight bash %}
 # quota -v marcos
 
{% endhighlight %}
 
 O usuário marcos está usando 18320 blocos.O limite leve são 19000 blocos e o físico 20000 blocos.
![Blog Linux](http://3.bp.blogspot.com/-1oiypiasLII/UMswih5GIBI/AAAAAAAAA14/w4gNnE5r4zA/s320/2.png "Blog Linux")
 
 
 quotaon:
 {% highlight bash %}
 # quotaon [opções] [dispositivos]
 
{% endhighlight %}
 
 Ex.(habilita quotas de usuários e grupos para todos os dispositivos):
 {% highlight bash %}
# quotaon -avug
{% endhighlight %}
 
 quotaoff:
 {% highlight bash %}
 # quotaoff [opções] [dispositivo]
 
{% endhighlight %}
 
 Ex.(desabilita o gerenciamento de quotas num determinado dispositivo.):
 quotaon:
 {% highlight bash %}
 # quotaoff -gu /dev/hda6
{% endhighlight %}
 
 quotacheck(faz uma varredura em determinado dispositivo e constrói os arquivos de banco de dados de quotas):
 {% highlight bash %}
 # quotacheck [opções] [dispositivo]
 
{% endhighlight %}
 
 edquota(Este comando edita quotas para usuários e grupos):
 {% highlight bash %}
 # edquota [opções] usuário/grupo
 
{% endhighlight %}
 
 repquota(cria um relatório das quotas e utilização do disco dos usuários):
 {% highlight bash %}
 # repquota [opções] [dispositivo]
 
{% endhighlight %}
