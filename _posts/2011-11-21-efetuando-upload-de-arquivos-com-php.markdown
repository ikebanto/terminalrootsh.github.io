---
layout: post
title: Efetuando Upload de arquivos com PHP
date: '2011-11-21T16:01:00.000-08:00'
description: Efetuando Upload de arquivos com PHP
main-class: 'misc'
tags:
- PHP
twitter_text: Efetuando Upload de arquivos com PHP
introduction: Efetuando Upload de arquivos com PHP
---
 Upload de arquivos é um assunto complicado, pois ele é uma brecha pra varios ataques se não for feito de maneira correta.Temos que estabelecer alguns LIMITES obrigatóriamente se quisermos ter segurança.
1° - Nunca permita qualquer tipo de arquivo para upload, pricipalmente se for arquivos de script(HTML, PHP, ASP...)
2° - Estabeleça o tamanho máximo de arquivo, pois com práticas hacker pode-se derrubar seu servidor com "Negação de Serviço".Lembrando que caso vc tenha acesso ao php.ini, vc deve configurar o tamanho permitido pelo PHP na linha que contém: upload_max_filesize, por padrão ele está setado para aceitar 2M (2 MB), mas você pode aumentar ou diminuir este tamanho.
3° - Não mostre erros detalhados, aqui eu vou dar exemplo, mas use um único erro pra qualquer tipo de erro, e se quiser crie uma função pra salvar o tipo de erro pra você analisar mais tarde, no Banco de Dados.
Há inúmeras maneiras de se fazer isso, vou tentar mostrar aqui a maneira mais simples, numa próxima postagem sobre isso, vou explicar o Upload de Múltiplos Arquivos, porém antes vou explicar melhor os arrays e algumas de suas funções, e mais tarde o mesmo assunto utilizando AJAX.
Como de prática aqui do blog, vou publicar o arquivo(nesse caso criei o HTML e o PHP num só arquivo, requisição na própria página) e comentei de AZUL os partes do código para causar entendimento.Verifique:
upload.php
{% highlight bash %}
 
 
 
 
 Arquivo: 
 
 
<?php
/*se clicarmos em Enviar Dados iniciaremos a leitura desse bloco*/if(isset($_POST['enviar'])){
 /* dê um var_dump($_FILES) ou print_r($_FILES) pra entender melhor essa parte, são os valores do array, nome, tipo, tamanho, erro, nome temporario...*/
 $nome = $_FILES['arquivo']['name'];
 $tipo = $_FILES['arquivo']['type'];
 $tmp = $_FILES['arquivo']['tmp_name'];
 $size = $_FILES['arquivo']['size'];
 $erro = $_FILES['arquivo']['error'];
 /* aqui definimos a pasta e/ou o caminho dela para que seja enviados os arquivos */    
 $caminho = '/uploads/';
 /* o caminho mais o nome do aquivo para que possamos salvar o arquivo em determinada pasta */
 $arquivocam = $caminho . $nome;
 /* iremos decidir qual o tamanho máximo que permitiremos do arquivo */
 $sizemax = 1024 * 1500;
 /* informamos quais tipos de arquivo permitiremos */
 $somente = array('image/jpg','text/plain','image/png');
 /*pararemos a execução do bloco caso o tamanho seja execedido */
 if($size > $sizemax){
  die('Tamanho não permitido.');
 }
 /*pararemos a execução do bloco caso o tipo do arquivo não seja entre os permitido */
 if(!array_search($tipo, $somente)){
  die('tipo inválido.');
 }
 
 /* se a chave erro for igual a 0, entraremos nesse bloco */
 if($erro == 0){
  /* usamos a função move_upload_file para mover, se der certo, completaremos o processo */
 if(move_uploaded_file($tmp, $arquivocam)){
 echo "Foi carregado com sucesso o arquivo: $nome, do tipo: $tipo, com tamanho de: $size bytes!";
 chmod($arquivocam,0777);
 }
 /* caso erro seja maior que zero, descobriremos qual foi o problemas, porém nesse caso é bom salvar os erros em outro lugar e mostrar somente um erro, por motivos de segurança */
 }else{
  switch($erro)
  {
  case 1: echo "Arquivo atingiu o tamanho máximo no PHP."; echo '
'; break;
  case 2: echo "Arquivo atingiu o tamanho máximo no HTML.";echo '
'; break;
  case 3: echo "Arquivo parcialmente carregado."; echo '
'; break;
  case 4: echo "Erro: arquivo não carregado."; echo '
'; break;
  }
 }
}
?>
{% endhighlight %}
Simples, num é?Pronto!
