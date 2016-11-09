---
layout: post
title: "X Dicas, Macetes e Hacks no Linux."
date: 2016-11-07 16:51:03
image: '/assets/img/header-parallax/header-parallax.png'
description: "Meu GitHub com Jekyll Minha Nova Vida"
main-class: 'linux'
color: '#2DA0C3'
tags:
- terminalroot
- github
- jekyll
categories:
twitter_text: "Novo Blog do Terminal Root com GitHub e Jekyll."
introduction: "Novo Blog do Terminal Root com GitHub e Jekyll."
---

<p class="intro">Em HTML tag P</p>

Dois underlines em baixo, o que é __Queria Saber__




## Aqui tem duas tralhas 

* Logo abaixo tem algo diferente nos SRC do IMG e isso aqui tem o *

<figure>
    <img src="{{ '/assets/img/icons/32_favicon.png' | prepend: site.baseurl }}" alt="Teste de Imagem para o GIT" style="width: 20%; height: 20%"> 
    <!--<figcaption>Uhul!</figcaption>-->
</figure>

# Ul ou OL ? Com uma tralha só

* Só com asteriscos
* De novo
* Mais uma vez
* Beleza

Colocando entre dois underlines veja só __Que legal Maluco__ deu certo, ficou em negrito ?

Jogando entre dois colchetes o nome __vídeo TR__ e depois entre parenteses o link do vídeo [vídeo terminal root](https://www.youtube.com/watch?v=NDQy_saxxZU). Legal, né, vamos ver se deu certo.

<span class="amarelo"><i class="fa fa-exclamation-triangle fa-lg"></i></span> Antes tem 2 tags HTML __span__ e __i__ , com classes __CSS__ cada uma delas.

## Duas Tralhas


 Está entre dois colchetes [Vejamos o que é por entre 2 colchetes , tem que ter link depois dos colchetes pra virar link] (http://www.terminalroot.com.br/)

### Três tralhas

 Lembrando que a imagem possui um style de width e height com 100% :)

OLha Código aê <code class="language-bash">Codigo.sh</code> vai vendo

#### Quatro Tralhas!

 Sucesso com o ####
 
 As extensões do MarkDown podem ser __.md__ ou __.markdown__ no [blog] tá com __.md__ e em [concurso] está com __.markdown__

Lembrando também que deletei TODOS (blog e concurso) do ggio :D

{% highlight bash %}
#!/bin/bash
# Novo Blog do Terminal Root com GitHub e Jekyll.
function NovoBlog(){

	echo "Olá, Mundo do GitHub e Jekyll!";
	exit 0;

}

NovoBlog

{% endhighlight %}

Depois de feito o header, só precisamos ajustar o conteúdo da parte que vai sobrepor o header. Quando colocamos um elemento com `position: fixed` ele passa a não ter "espaço ocupado" e todo conteúdo já sobrepõe ele na hora. Mas não queremos isso, senão o header nem apareceria. Nós precisamos pegar o nosso conteúdo e espaçar exatamente da altura do header, no nosso exemplo `height: 600px`. Para isso, definimos um `position: relative`, que fará nosso conteúdo respeitar a nova posição e daremos um `top: 600px`.

O problema de fazermos isso é que se o conteúdo não tiver um fundo, na hora que ele sobrepôr o header, ele vai ficar todo vazado e feio, para isso, definimos um `background` com a cor que desejarmos, assim ele vai de fato, fazer sumir o header.

As propriedades do nosso exemplo vão ficar assim:

{% highlight css %}
main {
    background: #E7E3DA;
    position: relative;
    top: 600px;
    font-family: 'Raleway', sans-serif;
}
{% endhighlight %}


Pronto! O efeito de sobrepôr já está feito! Se você quiser, já pode parar por aí =)

## Parte do JS

{% highlight js %}
function scrollBanner() {
  var scrollPos;
  var headerText = document.querySelector('.header-paralax h1');
  scrollPos = window.scrollY;

  if (scrollPos <= 600) {
      headerText.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
      headerText.style.opacity = 1 - (scrollPos/600);
  }
}

window.addEventListener('scroll', scrollBanner);
{% endhighlight %}


## Video

<div class='embed-container'><iframe style="width: 100% !important; height: 400px" src='https://www.youtube.com/embed/pAMtbwGySI0' frameborder='0' allowfullscreen></iframe></div>
