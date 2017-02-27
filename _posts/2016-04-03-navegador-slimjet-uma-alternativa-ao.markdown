---
layout: post
title: "'Navegador Slimjet: uma alternativa ao Google Chrome no Linux'"
date: '2016-04-03T07:20:00.001-07:00'
description: "'Navegador Slimjet: uma alternativa ao Google Chrome no Linux'"
main-class: 'misc'
tags:
- Dicas
image: "https://2.bp.blogspot.com/-B35G7idbbUw/VwEkwfoFGZI/AAAAAAAAAJc/6zxQiS_amvMo74_MnJvBokodUJrnaVmEg/s72-c/slimjet-810x405.jpeg"
twitter_text: "'Navegador Slimjet: uma alternativa ao Google Chrome no Linux'"
introduction: "'Navegador Slimjet: uma alternativa ao Google Chrome no Linux'"
---
![Blog Linux](https://2.bp.blogspot.com/-B35G7idbbUw/VwEkwfoFGZI/AAAAAAAAAJc/6zxQiS_amvMo74_MnJvBokodUJrnaVmEg/s640/slimjet-810x405.jpeg "Blog Linux")
Navegador Slimjet: uma alternativa ao Google Chrome no Linux
Todos sabem que o Google Chrome 32 bits foi descontinuado para o GNU/Linux, no entanto, há uma ótima alternativa para sair dessa saia justa, chama-se : Slimjet!
![Blog Linux](https://2.bp.blogspot.com/-bnefhpMSmxE/VwEmR42BzxI/AAAAAAAAAJw/CJ3bKFpRYDoBztGSLXa620JBGJuuvWrPw/s1600/product_logo_256.png "Blog Linux")
Slimjet é um navegador baseado no projeto Chromium . No entanto, Slimjet não é open source . Como o nome indica , Slimjet centra-se na velocidade e é mais simples. Ele fornece funcionalidades adicionadas na parte superior do navegador Chromium.
![Blog Linux](https://2.bp.blogspot.com/-ayEXkWnuNUg/VwEmBfNTtrI/AAAAAAAAAJs/KU36hFyd9vcJ34RzbJVzcR2Cx7HbkvNKQ/s640/slimjet.jpg "Blog Linux")
Algumas características dele:
Muito rápido e leve, realmente!Já vem com AD-Block , que bloqueia propagandas.Novos aplicativos da Chrome Web StoreFocado em privacidade e vem com tecnologia anti -tracking.Gerenciador de downloads que resume as sessõesSuporte a temas do Google Chrome e customizável! 
Baixe e instale:
Baixe pelo navegador, na paǵina oficial, apa escolher o tipo de arquivo que quer (.deb, .tar.gz, 32bits, 64bits):
Download do SlimJet
Instalando nesse caso, um exemplo com um .deb com root:
{% highlight bash %}
dpkg -i slimjet*
{% endhighlight %}
Durante a instalação deu uma crítica no ícone do Slimjet, dae alterei assim:
{% highlight bash %}
sed -i 's/Icon.*/Icon\=\/opt\/slimjet\/product_logo_128.png/' /usr/share/applications/slimjet.desktop
{% endhighlight %}
Prontinho para voar!
