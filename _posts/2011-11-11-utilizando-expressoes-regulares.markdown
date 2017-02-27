---
layout: post
title: Utilizando Expressões Regulares
date: '2011-11-11T16:50:00.000-08:00'
description: Utilizando Expressões Regulares
main-class: 'misc'
tags:
- PHP
twitter_text: Utilizando Expressões Regulares
introduction: Utilizando Expressões Regulares
---
Uma expressão regular(ReGex), na Informática, define um padrão a ser usado para procurar ou substituir palavras ou grupos de palavras. É um meio preciso de se fazer buscas de determinadas porções de texto.
Elas são usadas em diversão linguagens de programação, inclusive em PHP, que é onde basearei as explicações.
Vou mostrar alguns "formatos" de Regex.Nem todas serão usadas, mas é bom que vocês já vejam tudo que é possível fazer(lembrando que há demais "formatos"):
    \s -> Significa um espaço em branco
/^ -> Significa o início da string
$/ -> Significa o fim da string
\. -> Significa qualquer caractere
(bola|casa) -> Significa bola ou casa
[0-9] ->Significa qualquer número entre zero e nove
[a-z] -> Significa qualquer letra minúscula
[A-Z] -> Significa qualquer letra maiúscula
[^a-z] -> Significa a não ocorrência (falta / proibição) de letras minúsculas. O circunflexo (^) tem significado de ‘não existe’
? -> Significa nenhuma ou uma ocorrência caractere anterior
* -> Significa nenhuma ou várias ocorrências do caractere anterior
+ -> Significa – no mínimo – uma ocorrência do caractere anterior
{3} -> Significa exatamente três caracteres
{3,} -> Significa três ou mais caracteres
{3,6} -> Significa entre três e seis caracteres, pode ser 4, 5 também
Mostrarei alguns exemplos agora que eu criei para explicar as expressões regulares:
1 - Este exemplo permite somente nomes que possuam uma string com 6 letras(de A a Z)
iniciais minúsculas ou maiúsculas, mais um espaço em branco e mais 7 letras também
minúsculas ou maiúsculas.
{% highlight bash %}
<?php
$string  = 'Marcos Pinguim';
$validar = preg_match('/^[a-zA-Z]{6}+\s[a-zA-Z]{7}$/', $string);
echo $validar == true ? 'Ok' : 'Errada';
?>
{% endhighlight %}
2 - Este exemplo define a primeira letra como maiúscula(de A a Z) e mais 5 letras(de a até z, minúsculas); um espaço em branco e
6 letras minúsculas.
{% highlight bash %}
<?php
$string2  = 'Marcos Pinguim';
$validar2 = preg_match('/^[A-Z]{1}+[a-z]{5}+\s[A-Z]{1}+[a-z]{6}$/', $string2);
echo $validar == true ? 'Ok' : 'Errada';
?>
{% endhighlight %}
3 - Este exemplo permite letras minúsculas ou maiúsculas, números, underline(_), ponto(.), traço e somente emails com o dominio @oliveira.com.br
{% highlight bash %}
<?php
$email  = 'marcos.bm8@oliveira.com.br';
$validar3 = preg_match('/^[a-z0-9_\.\-]+(@oliveira.com.br)$/', $email);
if($validar) echo 'Ok'; else echo 'Errado';
?>
{% endhighlight %}
Abaixo vou mostrar alguns exemplos de Expressões Regulares para se validar E-mails, Telefone, Endereços IP..., que busquei pela internet, mas lembre-se o importante é entender o funcionamento.
Endereços de e-mail
{% highlight bash %}
$string = "email@dominio.com.br";
if(preg_match('/^[a-z0-9_\.\-]+@[a-z0-9_\.\-]*[a-z0-9_\-]+\.[a-z]{2,4}$/i',$string)){
echo "Validado.";
}
{% endhighlight %}
Números telefônicos
{% highlight bash %}
$string = "(032)555-5555";
if (preg_match('/^(\(?[2-9]{1}[0-9]{2}\)?|[0-9]{3,3}[-. ]?)[ ][0-9]{3,3}[-. ]?[0-9]{4,4}$/', $string)) {
echo "O número está correto.";
}
{% endhighlight %}
Máscaras
{% highlight bash %}
$string = "255.255.255.0";
if (preg_match(
'^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:[.](?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$',
$string)) {
echo "Mask ok.";
}
{% endhighlight %}
Entre outras coisas que você pode validar, fica como exercício, tipo(Cores Hexadecimais, CEP, comentários multi-linha, Datas...)
Espero que tenha gostado, dá uma comentada ae pra aumentar o PageRank e uma clicada nas propagandas antes de ir embora pra ajudar o blog, valeu!
