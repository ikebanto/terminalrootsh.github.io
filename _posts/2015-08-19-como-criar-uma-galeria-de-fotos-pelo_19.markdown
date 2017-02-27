---
layout: post
title: Como criar uma galeria de fotos pelo Terminal
date: '2015-08-19T05:09:00.000-07:00'
description: Como criar uma galeria de fotos pelo Terminal
main-class: 'bash'
tags:
- Shell Script
- Multimídia
- Terminal
- Comandos
image: http://1.bp.blogspot.com/-8AGqXhMKiSw/Vc9gLetD4tI/AAAAAAAABps/QJKDX2aIEz0/s72-c/galeria.jpg
twitter_text: Como criar uma galeria de fotos pelo Terminal
introduction: Como criar uma galeria de fotos pelo Terminal
---
![Blog Linux](http://1.bp.blogspot.com/-8AGqXhMKiSw/Vc9gLetD4tI/AAAAAAAABps/QJKDX2aIEz0/s640/galeria.jpg "Blog Linux")
Para você criar uma galeria estilo a da imagem dessa postagem é necessário que você possua o totem-video-thumbnailer.
totem-video-thumbnailer é usado internamente por aplicações do GNOME tais como Nautilus para gerar miniaturas PNG de arquivos de vídeo. Embora seja possível invocá-lo manualmente, geralmente é feito automaticamente pelo Nautilus. Com ele também é possível gerar Galerias de imagens, essas podem ser geradas pelo próprio modo gráfico, no entanto, se você tiver uma série de vídeos que você deseja criar galerias de todos vídeos, a melhor forma é criar um script, que será mostrado aqui.
Copie esse código e cole no Terminal , se a resposta for 'Está instalado' , então precisa instalar, se não, pule a próxima etapa que é de instalação:
{% highlight bash %}
[ $(which totem-video-thumbnailer) ] &amp;&amp; echo 'Está instalado' || 'Não tem instalado e precisa instalar'
{% endhighlight %}
Se 'Não tem instalado e precisa instalar' for a resposta, então instale, use seu gerenciador de pacotes para instalar, ele está na maioria dos repositórios da Distros:
{% highlight bash %}
apt-get install totem
{% endhighlight %}
Como podem ver ele é instalado junto com TOTEM
Totem é um media player livre para o ambiente desktop GNOME. Totem é o padrão media player no GNOME desde a versão 2.10. O programa usa GStreamer media para a reprodução, embora o xine também seja possível. O Totem é capaz de reproduzir muitos formatos, embora por vezes mais codecs são necessários.
Clique aqui para saber mais sobre o Totem
Tudo pronto e então vamos pôr mão na massa!
Se você quiser criar só uma thumbnail de um vídeo seu, basta executar este comando:
{% highlight bash %}
totem-video-thumbnailer -j video.mp4 imagem.jpg
{% endhighlight %}
Mas se você quiser criar uma Galeria, que é propósito dessa postagem, você deverá executar este código:
-l , não limitar a 30 segundos, o padrão é 30 segundos.
-j , a saída será uma imagem, em jpg
-s , tamanho dos quadros da galeria, pixels.
-g , quantidade de quadros da galeria
{% highlight bash %}
totem-video-thumbnailer -l -j -s 500 -g 9 video.mp4 galeria.jpg
{% endhighlight %}
Agora se você quiser gerar galeria de vários videos, rode esse Script:
Troque a palavra DIRETORIO pelo nome do seu diretório! As imagens aparecerão no diretório que está o script, a não ser que você mude.
Obs.: Rode script fora do diretório dos vídeos e informe o caminho no script:
Obs.: Se você gerar uma Galeria com tamanho dos quadros x quantidade de quadros , muito grande, o totem-video-thumbnailer irá matar o processo: Morto.
  
Você ainda pode melhorar esse script adicionando algumas informações do vídeo a ele, nesse caso é necessário possuir o o ffmpeg instalado:
Descobrir a duração do Vídeo:
{% highlight bash %}
ffmpeg -i video.mp4 2>&amp;1 | grep "Duration" | cut -d ' ' -f4 | tr -d ',' | cut -d '.' -f1
{% endhighlight %}
Você pode enviar esses dados para uma variável e resgatar a variável depois, se for no script, crie a variável dentro do loop:
{% highlight bash %}
DURACAO=$(ffmpeg -i "$MOVIE" 2>&amp;1 | grep "Duration" | cut -d ' ' -f4 | tr -d ',' | cut -d '.' -f1)
echo $DURACAO
{% endhighlight %}
Outros dados:
Resolução do vídeo:
{% highlight bash %}
ffmpeg -i DIRETORIO/"$MOVIE" 2>&amp;1 | grep 'fps' | cut -d' ' -f14 | tr -d ','
{% endhighlight %}
Largura do vídeo:
{% highlight bash %}
ffmpeg -i DIRETORIO/"$MOVIE" 2>&amp;1 | grep 'fps' | cut -d' ' -f14 | tr -d ',' | cut -d'x' -f1
{% endhighlight %}
Frames por segundo:
{% highlight bash %}
ffmpeg -i DIRETORIO/"$MOVIE" 2>&amp;1 | grep 'fps' | cut -d ',' -f5 | tr -d ' '
{% endhighlight %}
Se for pôr tudo no Script, alteraria a variável GALERIA deixando-a, assim:
{% highlight bash %}
GALERIA=$(totem-video-thumbnailer -l -j -s 500 -g 18 "$MOVIE" "$MOVIE"-"Duracao:$DURACAO-Resolucao:$RESOLUCAO-Frames:$FRAMES".jpg 2>/dev/null)
{% endhighlight %}
Consequentemente o Script, ficaria assim:
  
A saída ficaria mais ou menos assim:
 Video-Duracao:00:08:55-Resolucao:500x400-Frames:25.jpg
Legal, dá pra ver as informações do vídeo pelo nome do arquivo!!!
Comente!
