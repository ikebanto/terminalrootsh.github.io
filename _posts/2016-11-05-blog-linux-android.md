---
layout: post
title: "O Android é ou não é Linux?"
date: '2016-11-05T11:16:00.000-07:00'
image: 'https://1.bp.blogspot.com/-SjO4KXLU_Ck/WBpd29-x26I/AAAAAAAAA78/B2yP3Qf0Ghso_xriskfmfUTunyPOUrC3ACLcB/s72-c/Blog%2BLinux%2BAndroid%2B.jpg'
description: "O Android é ou não é Linux?"
main-class: 'artigos'
color: '#34a853'
tags:
- Android
categories:
twitter_text: "O Android é ou não é Linux?"
introduction: "O Android é ou não é Linux?"
---

![Blog Linux](https://1.bp.blogspot.com/-SjO4KXLU_Ck/WBpd29-x26I/AAAAAAAAA78/B2yP3Qf0Ghso_xriskfmfUTunyPOUrC3ACLcB/s200/Blog%2BLinux%2BAndroid%2B.jpg)

O tema é batido, mas os 2 debatedores (Thom Holwerda, do OS News, e Jon Buys, do OStatic) reuniram boa parte dos argumentos que já ouvi em suporte a cada uma das posições.

Começou com o post do Thom ("Android is Linux"), que chama de equívoco a ideia de que o Android compete com o Linux, afirma que o Android é tão Linux quanto o Ubuntu, Debian, Red Hat ou qualquer outra coisa que use o kernel Linux.

Para ele, o Android é uma distribuição de Linux e, em suporte a essa afirmação, ele apresenta a definição de "Linux distribution", da Wikipedia.

Curiosamente, eu acredito que o Android não se encaixa tão bem na definição de distribuição Linux escolhida pelo Thom, porque não atende tão bem1 ao requisito de ser Unix-like – não é questão de ser uma implementação incompleta, mas sim de opção por não implementar todas as interfaces. Nem a Bionic2 nem o Toolbox3 procuram implementar na íntegra as definições do POSIX, e até por uma razão bem simples: a máquina virtual Dalvik dispensa alguns dos recursos e – especialmente para um sistema operacional móvel – quanto menor for a libc, melhor.

Para crédito do Thom, entretanto, não há dúvida de que o Android é pelo menos em boa parte Unix-like (e até implementa boa parte do que o POSIX define), o que justifica a defesa de que ele seja, afinal de contas, uma distribuição Linux.

A resposta veio no artigo do Jon ("On Android being Linux"), que procura se afastar da mera questão de o Android satisfazer ou não o conceito de distribuição Linux, rejeita o critério de o kernel do Android ser um fork do Linux como elemento suficiente para caracterizá-lo como sendo um par das distribuições mais conhecidas do desktop, lembra a nomenclatura preferida pela FSF (na qual o Android não se enquadra, acredito) e traz a outra afirmação essencial do debate: o Android é distribuído como um ecossistema profundamente diferente do que vem com as típicas distribuições.

Segundo Jon, criar um sistema ao redor do kernel Linux não basta para atender às expectativas que as pessoas expressam ao falar sobre ser um usuário de Linux. O usuário espera disponibilidade de modificar qualquer parte do sistema operacional, algo que até pode ocorrer com as imagens de software distribuídas diretamente pelo Google, mas é pouco frequente com as que são incluídas na configuração default de vários fabricantes.

Ele também cita alguns pontos da filosofia de governança do Android, incluindo o trecho em que o projeto afirma não ver a si mesmo como uma distribuição.

Ao final, ele conclui da mesma forma que eu: o Android "ser" ou "não ser" "Linux" é um detalhe técnico sujeito a interpretações variadas, e é secundário em relação a outras diferenças entre populares agregados de software agrupados ao redor do Linux, ou mesmo a aspectos que transcendem a questão do kernel, como se devemos confiar em uma empresa de publicidade para construir o sistema instalado em dispositivos que sabem como somos, onde estamos, com quem falamos e o que queremos comprar. Imagino que ele ache que não, mas tenho certeza de que bastante gente acredita que sim, ou que é melhor confiar na empresa de anúncios do que em alguma outra da qual particularmente não gostam. (via ostatic.com - http://ostatic.com/blog/on-android-being-linux#buzz)

[Publicado Originalmente Aqui](http://br-linux.org/2013/01/debate-o-android-e-ou-nao-e-linux.html)
