---
layout: post
title: "Instalando a GUI Gnome 2 aka Mate no Debian"
date: '2013-12-07T10:27:00.000-08:00'
description: "Instalando a GUI Gnome 2 aka Mate no Debian"
main-class: 'debian'
tags:
- Debian
- MATE
- Dicas
image: "http://4.bp.blogspot.com/-tCpF25i0SK4/UKI3fHkKySI/AAAAAAAAA5A/pMv9x7UUNDA/s72-c/mateicon.png"
twitter_text: "Instalando a GUI Gnome 2 aka Mate no Debian"
introduction: "Instalando a GUI Gnome 2 aka Mate no Debian"
---
![Blog Linux](http://4.bp.blogspot.com/-tCpF25i0SK4/UKI3fHkKySI/AAAAAAAAA5A/pMv9x7UUNDA/s320/mateicon.png "Blog Linux")
Passos:
1 - Adicione o repositório no seu sources.list(perce o #, ou seja, torne-se ROOT):
#  add-apt-repository 'deb http://repo.mate-desktop.org/debian wheezy main' 
2 - Atualize sua lista:
# apt-get update 
2.2 - Caso obtenha tipo essa informação no final do update, :
{% highlight bash %}
W: Erro GPG: http://repo.mate-desktop.org wheezy Release: As assinaturas a seguir não puderam ser verificadas devido à chave pública não estar disponível: NO_PUBKEY 68980A0EA10B4DE8
{% endhighlight %}
2.3 - Adicione a chave (troque [ID] por sua chave, essa é a minha: 68980A0EA10B4DE8):
# gpg --keyserver pgpkeys.mit.edu --recv-key [ID] 
2.4 - E depois registre-a:
# gpg -a --export [ID] | sudo apt-key add - 
2.5 - Agora sim atualize (o passo anterior foi justamente pra você pegar sua ID):
# apt-get update 
3 - Agora instale o MATE:
# apt-get install mate-desktop-environment 
Se quiser ainda instale o pacotes extras (Não é necessário!):
# apt-get install mate-desktop-environment-extra 
Quando você for iniciar a sessão, ao selecionar o usuário, mude a GUI no rodapé, e escolha MATE.
Pronto!
