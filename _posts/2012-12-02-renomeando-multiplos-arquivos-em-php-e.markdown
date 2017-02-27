---
layout: post
title: Renomeando múltiplos arquivos em PHP e Shell Script
date: '2012-12-02T11:05:00.000-08:00'
description: Renomeando múltiplos arquivos em PHP e Shell Script
main-class: 'bash'
tags:
- Shell Script
- PHP
image: http://2.bp.blogspot.com/-qUx5f2Qbdg0/ULufBtDWpFI/AAAAAAAAAy0/yIb6hciVLFY/s72-c/arquivos-php-shell.gif
twitter_text: Renomeando múltiplos arquivos em PHP e Shell Script
introduction: Renomeando múltiplos arquivos em PHP e Shell Script
---
![Blog Linux](http://2.bp.blogspot.com/-qUx5f2Qbdg0/ULufBtDWpFI/AAAAAAAAAy0/yIb6hciVLFY/s320/arquivos-php-shell.gif "Blog Linux")
E ae galera, uma das coisas que o Linux ainda precisa apresentar é renomear múltiplos arquivos, pois quando, por exemplo carregamos fotos da máquina fotográfica para o PC e queremos dar um nome indicativo, seja data, nome, ... precisamos alterar todos de uma vez só, pela falta disso resolvi escrever esse mini programa e fiz um script em PHP para renomear vários arquivos de uma vez só e depois inclui o script em Shell para torná-lo livre do navegador. ficou assim(observe os comentários em cada script para entendimento, verifique os 6 itens): 
1-Sem tags HTML(basta abrir arquivo no browser): <iframe src="http://pastebin.com/raw/9Br3seFj" style="border:none;width:100%;"><iframe>
2-Com HTML e botão de gerar renomeamento(nesse modo já há a opção de um nome padrão mais a numeração dos arquivos, ex.: NiverEric01.jpg, NiverEric02.jpg...), nesse não há comentários, pois é praticamente igual ao anterior só acrescentado as tags HTML e o IF do POST: <iframe src="http://pastebin.com/raw/XNX1bh6r" style="border:none;width:100%;"><iframe>
3-Depois inclui Shell Script Nele: <iframe src="http://pastebin.com/raw/0eaurH9Q" style="border:none;width:100%;"><iframe>
4-Para deixar no terminal:
 4.1 - torne-o executável: {% highlight bash %}
$ chmod +x renomear
{% endhighlight %} 
4.1 - como root copie para pasta binaria do usuário:  {% highlight bash %}
# cp renomear /usr/bin/
{% endhighlight %} 
5-Usabilidade:
 5.1- basta entrar na pasta que contém os arquivos que vc deseja renomear de uma vez só, Ex.:  {% highlight bash %}
$ cd /home/$USER/Aniversario/
{% endhighlight %} 
5.1 - Agora basta escrever o nome do programa e passar o parâmetro ou não, Exemplos:
  5.1.1 - Sem parâmetro:   {% highlight bash %}
$ renomear
{% endhighlight %}  
5.1.2 - Com parâmetro:
  {% highlight bash %}
$ renomear NiverEric
{% endhighlight %}
Haverá continuação de melhorias, aguardem, mas por enquanto é só!
