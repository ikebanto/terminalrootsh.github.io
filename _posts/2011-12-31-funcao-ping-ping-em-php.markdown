---
layout: post
title: "Função ping( ) - ping em php"
date: '2011-12-30T18:37:00.000-08:00'
description: "Função ping( ) - ping em php"
main-class: 'misc'
tags:
- PHP
image: "http://4.bp.blogspot.com/-8PdUJBNGF6g/Tv6BdZZMlEI/AAAAAAAAATQ/6C9DFqfxnRg/s72-c/ping.png"
twitter_text: "Função ping( ) - ping em php"
introduction: "Função ping( ) - ping em php"
---
Já li alguns tutoriais a respeito disso, mas essa forma que eu criei, acho que é a mais simples quando o assunto é pingar com PHP . Segue a abaixo a função o modo de utilizá-la e um exemplo, você pode até incluir em sua biblioteca para usar sem precisar ficar reescrevendo-a.Leia os comentários, pois como se trata de uma variável para Shell, precisamos utilizar `crase` em vez de "aspas duplas" ou 'simples' , segue:
Função ping();
<iframe src="http://pastebin.com/raw/7waAdjaL" style="border:none;width:100%;"><iframe>
para chamá-la:
<iframe src="http://pastebin.com/raw/XXv0TsaY" style="border:none;width:100%;"><iframe>
Exemplo de utilização:
<iframe src="http://pastebin.com/raw/ZwAsbKGu" style="border:none;width:100%;"><iframe>
Funcionando:
![Blog Linux](http://4.bp.blogspot.com/-8PdUJBNGF6g/Tv6BdZZMlEI/AAAAAAAAATQ/6C9DFqfxnRg/s1600/ping.png "Blog Linux")
Obs.: O Funcionamento da mesma dependerá das configurações do seu servidor
 Agora caso você deseje somente retornar valores booleanos para constatação, deve usar assim, que independente das configurações do servidor, deverá funcionar:
<iframe src="http://pastebin.com/raw/M89XPJwW" style="border:none;width:100%;"><iframe>
Pronta para usar!
