---
layout: post
title: Instale o plugin Flash Player Mozilla no Linux
date: '2016-04-13T18:54:00.002-07:00'
description: Instale o plugin Flash Player Mozilla no Linux
main-class: 'linux'
tags:
- Debian
- Linux
- Dicas
- Firefox
image: https://2.bp.blogspot.com/-Tuc09b4oQcc/Vw7zjv34aXI/AAAAAAAAAQQ/Xp57vrDIhpMVR5h68eeR4UyajFgxywLVACLcB/s72-c/flash-player-mozilla-linux.jpg
twitter_text: Instale o plugin Flash Player Mozilla no Linux
introduction: Instale o plugin Flash Player Mozilla no Linux
---
![Blog Linux](https://2.bp.blogspot.com/-Tuc09b4oQcc/Vw7zjv34aXI/AAAAAAAAAQQ/Xp57vrDIhpMVR5h68eeR4UyajFgxywLVACLcB/s640/flash-player-mozilla-linux.jpg "Blog Linux")
Adobe Flash Player é um plugin que permite aos navegadores, como o  Firefox, mostrar conteúdo Flash em páginas Web. O Flash é usado  frequentemente para animações, vídeos e jogos. Este artigo explica como  instalar o plugin do Flash no Firefox. 
Quando você visita uma página Web que usa Flash e o plugin não está presente, será apresentada a mensagem "É necessário um plugin para mostrar o conteúdo", nas partes da página que necessitam do Flash (se houver): 
![Blog Linux](https://support.cdn.mozilla.net/media/uploads/gallery/images/2014-12-17-17-27-04-a39401.png "Blog Linux")
   Siga os passos abaixo para instalar a última versão do plugin do Flash Player.  
Índice Instalando o plugin do Flash manualmente Mantenha o plugin do Flash atualizado Solução de problemas do plugin FlashInstalando o plugin do Flash manualmente Vá para a página de download do Flash Player.  Salve o arquivo.  Clique no botão de menu              
![Blog Linux](https://support.cdn.mozilla.net/media/uploads/gallery/images/2014-01-10-13-08-08-f52b8c.png "Blog Linux")
   e clique em Sair              
![Blog Linux](https://support.cdn.mozilla.net/media/uploads/gallery/images/2014-03-07-11-44-35-716f6b.png "Blog Linux")
    Abra o Terminal (no Gnome, clique no menu Aplicações, depois em Acessórios e então em Terminal.)  Na janela do Terminal, vá para a pasta onde salvou o arquivo (ex.: cd /home/user/Downloads).  Descompacte o arquivo baixado com o comando tar -zxvf install_flash_player_"version"_linux."processor".tar.gz.  Como super usuário, copie o arquivo libflashplayer.so para a pasta plugins que está na pasta onde o Firefox está instalado. Por exemplo, se o Firefox está instalado em /usr/lib/mozilla, use o comando sudo cp libflashplayer.so /usr/lib/mozilla/plugins, entre com a sua senha de super usuário quando for pedido.             
![Blog Linux](https://support.cdn.mozilla.net/media/uploads/gallery/images/0a85171f1802a3b0d9f46ffb997ddc02-1260326970-447-1.png "Blog Linux")
   Mantenha o plugin do Flash atualizadoA última versão do plugin do Flash deve ter melhor desempenho e  apresentar menos falhas. Para verficar se o Flash está atualizado,  visite a página de verificação de plugins da Mozilla. Se a atualização do Flash for necessária, instale a versão mais recente utilizando os passos descritos na seção acima.
Testando o FlashVisite a página de teste da Adobe para saber se o flash está instalado e funcionando corretamente. Se não estiver instalado, a próxima seção para aprender a instalar a versão mais recente do Flash. 
Solução de problemas do plugin FlashAcesse Plugin Flash - Mantenha-o atualizado e evite problemas para seguir etapas de solução de problemas do plugin Flash. 
Artigo Original: Mozilla Firefox
No Debian você pode usar o APT
{% highlight bash %}
$ su
{% endhighlight %}{% highlight bash %}
# apt-get install flashplayer-mozilla
{% endhighlight %}
Se o plugin flashplayer-plugin-nonfree estiver instalado ele irá  removê-lo automaticamente ( e ainda sugerir o  kde-config-flash-player ,  :) ) e instalar o
flashplayer-mozilla 
VEJA IMAGEM ABAIXO:
