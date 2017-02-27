---
layout: post
title: "Lentidão no Firefox - como resolver"
date: '2011-10-31T09:24:00.000-07:00'
description: "Lentidão no Firefox - como resolver"
main-class: 'misc'
tags:
- Firefox
image: "http://3.bp.blogspot.com/-QP9K3lSKZK0/Tq7Ll-PDk2I/AAAAAAAAAH8/zpAjnipLJ9U/s72-c/firefox-7.jpg"
twitter_text: "Lentidão no Firefox - como resolver"
introduction: "Lentidão no Firefox - como resolver"
---
![Blog Linux](http://3.bp.blogspot.com/-QP9K3lSKZK0/Tq7Ll-PDk2I/AAAAAAAAAH8/zpAjnipLJ9U/s320/firefox-7.jpg "Blog Linux")
Fiquei um tempo achando que havia feito alguma besteira nas partições do meu HD e isso poderia ter causado problema no envio e recebimento de informações via HTTP, porém verifiquei que em testes realizados e pesquisadas efetuadas que o problema não tinha nada a ver e descobrí que a nova versão do Firefox vem como nao-habilitado o protocolo IPv6, porém muitos sites já recebem requisições de IPv6, então a solução foi:
1° - Digite na barra de endereços o texto: about:config.
 2°- Clique em: Serei cuidadoso, prometo!
3°- Pequise a palavra: IPv6.
4°- Verifique que só aparecer um item, clique com o botão direito do mouse e selecione: Inverter valores.
 Pronto o valor ficará como TRUE e você notará a velocidade normal:rápida!
Valeu!
