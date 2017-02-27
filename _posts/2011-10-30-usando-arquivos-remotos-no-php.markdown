---
layout: post
title: "Usando arquivos remotos no PHP"
date: '2011-10-30T13:45:00.000-07:00'
description: "Usando arquivos remotos no PHP"
main-class: 'misc'
tags:
- PHP
twitter_text: "Usando arquivos remotos no PHP"
introduction: "Usando arquivos remotos no PHP"
---
Aqui vou explicar como funciona o processo de chamar dinamicamente um trecho de uma página da internet e por na sua página, ou seja, quando aquela página alterar os dados daquele campo, autoomaticamente o dado do seu campo também será alterado.Na verdade eu queria publicar os resultados da Mega-Sena sem precisar tá sempre atualizando esse campo quando saísse um resultado novo, pego automaticamente de uma página da internet(que sempre atualiza) o resultado.
O código consiste em :
Para que não surja o aviso:
Warning: fopen(): URL file-access is disabled in the server configuration inE caso vc não tenha acesso ao arquivo php.ini de onde sua página está hospedada, temos que configurar o arquivo pelo script utilizando a função ini_set(), pois com ela vc pode habilitar ou não uma função do php.ini, no Manual do PHP há uma lista das funções configuráveis nno PHP.INI, então sete isso no início do script, caso venha aparecer este arquivo, geralmente ele ocorre pois estaremos abrindo uma URL, se fosse um arquivo dentro da sua pasta, vc poderia recorrer as permissões de pasta em sistemas GNU/Linux, mas mesmo assim vc deve dar permisssão para que isso ocorra, ou seja, mesmo após setar essa função, caso continue o Warning, dê permissão ao arquivo com chmod.
{% highlight bash %}
ini_set('allow_url_fopen', 'On');
{% endhighlight %}
Agora vamos ao script, leia os comentarios // para entender melhor.
{% highlight bash %}
<?php
//abre a url e diz que quer somente ler o arquivo
$file = fopen ("http://www.mega-sena.biz/", "r");
//se não abrir, gera um aviso.
if (!$file) {
 echo "&amp;lt;p&amp;gt;Incapaz de abrir arquivo remoto.\n";
 exit;
}
//efetuando a leitura, 1024 é a quantidade de bytes a ler em cada linha
while (!feof ($file)) {
 $line = fgets ($file, 1024);
 /* as tags tem de estar na mesma linha */
 //indica que queremos ler o que está dentro desta tag e final de tal tag
 if (eregi ("(.*)&amp;lt;/font&amp;gt;&amp;lt;br&amp;gt;", $line, $out)) {
 //out é um array, então queremos somente o valor
 $title = $out[1];
 break;
 }
}
//fecha o arquivo
fclose($file);
//limpa as tags que vem junto com ele
$title = strip_tags($title);
//tirei as informações subsequentes que vieram com ele, utilizando a função substr_replace()
$title = substr_replace($title, " ", -52, 100);
//exibe o arquivo pos-configurado
echo $title;
?>
{% endhighlight %}
Prontinho, é isso aê, até a próxima!
