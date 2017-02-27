---
layout: post
title: "Classe PHP para calcular a diferença entre Horas."
date: '2011-10-30T09:30:00.000-07:00'
description: "Classe PHP para calcular a diferença entre Horas."
main-class: 'misc'
tags:
- PHP
- Matemática
twitter_text: "Classe PHP para calcular a diferença entre Horas."
introduction: "Classe PHP para calcular a diferença entre Horas."
---
Segue o código abaixo comentado para causar o entendimento
{% highlight bash %}
<?php
 class Horas {
 public $resultado = '';
 function calcular($horaA,$horaB){
 echo "Hora A = $horaA hs e Hora B = $horaB hs
";
 echo "Qual o valor de x em horas?(x=A - B).
";
 /*primeiro multiplica: hora por 3600, minutos por 60 e ambos vc soma ao segundos na
 hora inicial(A) e final(B) para transformá-las em segundos*/
 $horaA = (2 * 3600) + (46 * 60) + 27;
 $horaB = (17 * 3600) + (32 * 60) + 59;
 /*o resultado em segundos de ambas vc subtrai a hora final(B) pela hora incial(A)*/
 $reshora = $horaB - $horaA;
 echo $reshora.'
';
 /*usa-se a função floor() para arrendodá-las para menos(Ex.: 9.9 >> 9) depois,
 [dividi o resultado por 3600para obter a HORA],
 [faz o módulo de 60 para o resultado dividido por 60 para obter os MINUTOS]
  [e depois o módulo do resultado por 60 para obter os SEGUNDOS]*/
 $HORA = floor($reshora / 3600);
 $MINU = floor(($reshora / 60) % 60);
 $SEGU  = floor($reshora % 60);
 $this->resultado = " O Resultado eh $HORA:$MINU:$SEGU hs
";
 return $this->resultado;
 }//fim da função calcular
 }//fim da class Horas
 $horaA = '2:46:27';
 $horaB = '17:32:59';
 $res = new Horas();
 $res = $res->calcular($horaA,$horaB);
 print_r($res);
?>
{% endhighlight %}
