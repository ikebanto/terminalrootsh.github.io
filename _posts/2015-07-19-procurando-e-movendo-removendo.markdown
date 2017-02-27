---
layout: post
title: "Procurando e movendo, removendo, renomeando, mudando permissão,..."
date: '2015-07-19T15:59:00.001-07:00'
description: "Procurando e movendo, removendo, renomeando, mudando permissão,...find"
main-class: 'misc'
tags:
- Dicas
- Terminal
- Comandos
image: "http://3.bp.blogspot.com/-KJml3oBBlyg/VasWoWDL4vI/AAAAAAAAF3w/xw5pozsUnhg/s72-c/terminal109.jpg"
twitter_text: "Procurando e movendo, removendo, renomeando, mudando permissão,...find"
introduction: "Procurando e movendo, removendo, renomeando, mudando permissão,...find"
---
![Blog Linux](http://3.bp.blogspot.com/-KJml3oBBlyg/VasWoWDL4vI/AAAAAAAAF3w/xw5pozsUnhg/s320/terminal109.jpg "Blog Linux")
PROCURANDO E MOVENDO, REMOVENDO, RENOMEANDO, MUDANDO PERMISSÃO,... : FIND , EXEC OU XARGS
Precisando automatizar algumas tarefas e com a necessidade de agilizá-las (remover, renomear, mudar permissão, entre outras) e ainda se tratando de muitos arquivos, podemos facilitar muito este trabalho utilizando apenas uma linha.
Aqui vou mostrar uma das tarefas mais simples que o find pode ajudar, ferramenta poderosa quando se sabe usar todas as suas opções. Fazendo-se buscas no Google pode-se achar muita coisa.
Problemas e Soluções:
1 - Encontrar arquivos .jpg e movê-los para o diretório /meudir:
Com exec:
{% highlight bash %}
find /home/$USER/ -name *.jpg -exec mv {} /meudir \;
{% endhighlight %}
2 - Encontrar arquivos que possuem a palavra terminal de extensão .png e movê-los para o diretório /meudir:
Com xargs::
{% highlight bash %}
$ find /home/$USER/ -name *terminal*.jpg -print0 | xargs -0 -i mv {} /meudir
{% endhighlight %}
3 - Encontrar arquivos que possuem a palavra Terminal(T maiúsculo) e terminal (t minúsculo) de extensão .png e removê-los:
Com exec:
{% highlight bash %}
find /home/$USER/ -type f -name *[Tt]erminal*.png -exec rm {} \; 
{% endhighlight %}
4 - Mudando as permissões somente dos diretórios: 
Com exec:
{% highlight bash %}
find /home/* -type d -exec chmod 775 '{}' \; 
{% endhighlight %}
5 - Renomeando as extensões dos arquivo que estiverem em maiúsculas: 
Assim:
{% highlight bash %}
find . -name '.*' -prune -o -exec rename 's/\.jpg$/\.JPG/i' {} + 
{% endhighlight %}
6 - Mover arquivos com mais de 15 dias criados:
Assim:
{% highlight bash %}
find / -ctime +15 -exec mv {} /maisde15 \;
{% endhighlight %}
Várias formas, vários tipos e vários sabores!Via:
http://www.cyberciti.biz/faq/linux-unix-bsd-xargs-construct-argument-lists-utility/
http://superuser.com/questions/529742/how-can-i-move-files-with-xargs-in-linux
http://unix.stackexchange.com/questions/83711/moving-files-with-find-xargs-target-is-not-a-directory
http://unix.stackexchange.com/questions/90886/how-can-i-find-files-and-then-use-xargs-to-move-them
http://www.vivaolinux.com.br/dica/Utilizando-find-+-exec-e-agilizando-tarefas
http://www.vivaolinux.com.br/topico/Debian-para-iniciantes/Comando-find-com-mv
