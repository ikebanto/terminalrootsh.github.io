---
layout: post
title: Enviando E-Mails (Gmail) com PHPMailer
date: '2011-11-18T18:18:00.000-08:00'
description: Enviando E-Mails (Gmail) com PHPMailer
main-class: 'misc'
tags:
- PHP
twitter_text: Enviando E-Mails (Gmail) com PHPMailer
introduction: Enviando E-Mails (Gmail) com PHPMailer
---
 Eu utilizei essa classe hoje pra configurar minha página de contato aqui do Blog, CLIQUE AQUI para ver a página(Obs.:essa página tem JQueri e está hospedada em outro lugar, pois o blogger não executa o PHP aqui e muito menos hospeda arquivos, chamei com um FRAME pra cá).
A classe PHPMailer serve para envio de e-mails através do PHP via conexão SMTP ou POP3 muito utilizado por todo o mundo. Seu método de envio é largamente recomendado e é bem melhor do que o envio do mail() ou sendmail() ambas do PHP.
Esse processo é bem simples, e nesse caso vamos configurar também o envio de resposta pra quem preencheu o formulário.
Separei em dos arquivos, mas costumo usar tudo num só arquivo, os dois arquivos serão:
index.php
 enviar.php
Usarei como exemplo um e-mail do Gmail, primeiramente temos de baixar a classe PHPMailer do site e descompactá-la no local onde
está os arquivos criados aqui.
Clique aqui para efetuar o download da classe PHPMailer, baixei o arquivo PHPMailer v5.1
Agora vamos construir nosso index.php que estará nosso form(nao usei tableless nesse exemplo, nem tá completo o arquivos faltando as tags de uma página HTML).
Leia os cometários em AZUL para compreender a ação.Qualquer dúvida é só comentar.
{% highlight bash %}
 
  
  
   Nome:
   
    
   
    
  
   Email:
   
    
   
    
  
   Assunto:
   
    
   
    
  
   Mensagem
   
    
   
  
  
   
    Atualizar
   
   
    
   
   
 
{% endhighlight %}
E aqui o arquivo enviar.php
{% highlight bash %}
<?php
 /* se apertar em enviar dados entra no processo*/
 if(isset($_POST['enviar']))
 {
 /* extraimos o POST para criar as variaveis automaticamente pelo nome do FORM */
 extract($_POST);
 /* CASO ALGUM CAMPO ESTEJA VAZIO, aconselho não colocar mensagem por campo e sim completo por motivos de segurança */
 if(empty($nome) ||
 empty($email) ||
 empty($assunto) ||
 empty($mensagem) 
 )
 {
 echo 'Um ou mais campos está(ão) vazio(s).';
 }
 /* utilizando Expressão Regular, verificamos se o formato do email é válido, clique aqui pra saber mais sobre Expressões Regulares */
 
 else if(!preg_match("/^[a-z0-9_\.\-]+@[a-z0-9_\.\-]*[a-z0-9_\-]+\.[a-z]{2,4}$/i", $email))
 {
 echo 'Informe um email válido.';
 }
 else
 {
 /* preparamos o arquivo para envio */
 $corpo = 'Nome: '.$nome.'
Email: '.$email.'
Mensagem: 
'.$mensagem;
 /* criamos uma função para chamar os métodos da Classe PHPMailer */
 function sendMail($assunto,$corpo,$remetente,$nomeRemetente,$destino,$nomeDestino){
   /* Incluimos a class, lembrando que essa classe é o arquivo baixado e está dentro da pasta PHPMailer, renomei */
   require_once('PHPMailer/class.phpmailer.php');
   /* Instanciamos a class */
   $mail = new PHPMailer(); //inicia a classe
   /* Setamos os métodos necessários para o funcionamento */
   $mail->IsSMTP();
   $mail->SMTPAuth = true;
   $mail->Host = 'smtp.gmail.com';
   $mail->Port = '587';
   $mail->SMTPSecure = "tls";
   /* digite aqui o seu email que fará a autenticação de envio */
   $mail->Username = 'SEU_EMAIL@gmail.com';
   /* coloque a senha desse email */
   $mail->Password = 'SUA_SENHA_DO_EMAIL_ACIMA';
   $mail->From = $remetente;
   $mail->FromName = utf8_decode($nomeRemetente);
   $mail->IsHTML(true);
   $mail->Subject = utf8_decode($assunto); //assunto
   $mail->Body = utf8_decode($corpo); //mensagem
   $mail->AddAddress($destino,utf8_decode($nomeDestino)); //email e nome do destino
   /* caso haja erro no envio */
   if(!$mail->Send()){
   echo 'Erro ao enviar mensagem.';
   /* caso o envio esteja correto */
   }else{
   
   echo 'Sua mensagem foi enviada com sucesso!';
   
  }
 
 }
 /* preparamos a mensagem de resposta */
 $resposta = 'Olá '.$nome.'!
 
 Obrigado por entrar em contato!
 
 Em breve responderemos.
 Atenciosamente,
 SUA ASSINATURA.
';
 /* envia o email para você */
 sendMail($assunto,$corpo,$email,$nome,'SEU_EMAIL@gmail.com','SUA MENSAGEM');
 /* envia o email de resposta */
 sendMail('Olá '.$nome.', recebemos sua mensagem',$resposta,'SEU_EMAIL@gmail.com','SEU TITULO',$email,$nome);
 }/* else dos campos vazios e da ExReg */
 }
?> 
{% endhighlight %}
Pronto, é isso, qualquer dúvida é só comentar
