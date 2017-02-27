---
layout: post
title: Artigo sobre o Shebang
date: '2015-06-14T14:27:00.000-07:00'
description: Artigo sobre o Shebang
main-class: 'linux'
tags:
- Linux
- Unix
- Artigos
- GNU
image: http://2.bp.blogspot.com/-2SY6QaitLrs/VX3xjAh3UCI/AAAAAAAABYw/aW5KUc8wkdQ/s72-c/shebang.png
twitter_text: Artigo sobre o Shebang
introduction: Artigo sobre o Shebang
---
![Blog Linux](http://2.bp.blogspot.com/-2SY6QaitLrs/VX3xjAh3UCI/AAAAAAAABYw/aW5KUc8wkdQ/s320/shebang.png "Blog Linux")
Em computação, um shebang (também chamado de hashbang, hashpling, pound bang, ou crunchbang) refere-se aos dois caracteres "#!", quando os mesmos são os primeiros caracteres de um arquivo de texto, especificamente em um código fonte escrito em uma linguagem interpretada. Em sistemas operacionais como o Unix, o sistema tenta executar o arquivo usando um interpretador especificado pelo shebang. Por exemplo, scripts do Bourne shell iniciam-se com o shebang:
{% highlight bash %}
#!/bin/sh
{% endhighlight %}
Mais precisamente, uma linha shebang consiste de um cerquilha e um ponto de exclamação ("#!"), em seguida, opcionalmente, qualquer quantidade de espaços em branco, seguidos pelo endereço (absoluto) para o interpretador que irá fornecer a interpretação. Pelo fato do caractere "#" ser usado como marcador de comentários em muitas linguagens de script, o uso do shebang, na maioria dos casos, não interferirá no funcionamento do código; em alguns interpretadores de linguagens que não usam cerquilha para iniciar comentários (como Scheme) podem ignorar a linha do shebang, em reconhecimento do seu propósito em alguns sistemas.
Via: Shebang
