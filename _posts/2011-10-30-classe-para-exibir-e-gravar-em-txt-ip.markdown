---
layout: post
title: 'Classe para Exibir e Gravar em TXT: IP, OS, Data e Hora.'
date: '2011-10-30T12:38:00.000-07:00'
description: 'Classe para Exibir e Gravar em TXT: IP, OS, Data e Hora.'
main-class: 'misc'
tags:
- PHP
twitter_text: 'Classe para Exibir e Gravar em TXT: IP, OS, Data e Hora.'
introduction: 'Classe para Exibir e Gravar em TXT: IP, OS, Data e Hora.'
---
Segue classe e já instanciada e setada a função pronta para utilização e estudo.
{% highlight php %}
<?php
 class Dados{
 function exibir(){
 $ip = ($_SERVER['REMOTE_ADDR']);
 $browser = ($_SERVER['HTTP_USER_AGENT']);
 $data = date('d/m/Y H:i:s');
 //ARQUIVO TXT
 $arquivo = "estatisticas.txt";
 echo 'Número IP: '.$ip.' ';
 echo 'Navegador: ';
 if (strchr($browser, 'Firefox'))
  {
  $nav = 'Firefox ';
  }
  elseif (strchr($browser, 'Chromium'))
  {
  $nav = 'Chromium ';
  }
  elseif (strchr($browser, 'Chrome'))
  {
  $nav = 'Chrome ';
  }
  elseif (strchr($browser, 'Opera'))
  {
  $nav = 'Opera ';
  }
  elseif (strchr($browser, 'Windows'))
  {
  $nav = 'Internet Explorer ';
  }else{
  $nav = 'Outro Navegador ';
 }
 echo $nav.'';
 echo 'Sistema Operacional:  ';
 if (strchr($browser, 'Linux'))
 {
 $os = 'Linux ';
 }
 elseif (strchr($browser, 'Windows'))
 {
 $os = 'Windows ';
 }else{
 $os = 'Outro Sistema ';
 }
 echo $os.'Data e Hora: '.$data;
 //PREPARA O CONTEÚDO A SER GRAVADO
 $conteudo = "Ip: $ip\r\nSistema: $os\r\nNavegador: $nav\r\nData e Hora: $data\r\n-------------------------------------------\r\n";
 //TENTA ABRIR O ARQUIVO TXT
 if (!$abrir = fopen($arquivo, "a")) {
 echo "Erro abrindo arquivo ($arquivo)";
 exit;
 }
 //ESCREVE NO ARQUIVO TXT
 if (!fwrite($abrir, $conteudo)) {
 print "Erro escrevendo no arquivo ($arquivo)";
 exit;
 }
 //FECHA O ARQUIVO
 fclose($abrir);
 }//fim da função da exbir();
}//fim da class Dados
 $mostrar = new Dados();
 $mostrar->exibir();
?>
{% endhighlight %}
