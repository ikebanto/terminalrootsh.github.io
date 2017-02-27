---
layout: post
title: Criando um simples software de codificação com PHP-GTK
date: '2013-05-25T17:40:00.000-07:00'
description: Criando um simples software de codificação com PHP-GTK
main-class: 'misc'
tags:
- PHP-GTK
image: http://1.bp.blogspot.com/--eP2SBg1nmI/UZ1caClieKI/AAAAAAAABoE/HAT6057t7w0/s72-c/codificar+base+64+php-gtk+.png
twitter_text: Criando um simples software de codificação com PHP-GTK
introduction: Criando um simples software de codificação com PHP-GTK
---
![Blog Linux](http://1.bp.blogspot.com/--eP2SBg1nmI/UZ1caClieKI/AAAAAAAABoE/HAT6057t7w0/s320/codificar+base+64+php-gtk+.png "Blog Linux")
Criei um "programinha" simples para gerar codificação com Base 64 só para mostrar o funcionamento de coisas básicas com PHP-GTK. Pra funcionar precisa:
{% highlight bash %}
{% endhighlight %}
1-Ter o PHP instalado, caso não tenha, execute no terminal:
{% highlight bash %}
apt-get install php5
{% endhighlight %}
2- Ter o PHP-GTK também instalado, se não tiver, consulte esse link
Como Instalar o PHP-GTK
3-Talvez o Glade também (talvez, porque não testei, mas teste antes SEM), caso precise instalá-lo
{% highlight bash %}
apt-get install glade
{% endhighlight %}
O programa se resume em dois arquivos, seguem o arquivos abaixo, 1 em .php(codificar.php) e outro em .glade(leiaute.glade, que é um XML), depois de salvá-los na mesma pasta (tem de estar na mesma pasta, ou alterar o caminho da instância do .glade no arquivo .php, visualize), basta executá-lo:
{% highlight bash %}
php-gtk2 codificar.php
{% endhighlight %}
codificar.php
{% highlight php %}
<?php
	/* Instacia o Glade */
	$glade 		= new GladeXML('leiaute.glade');
	
	/* Setamos a janela principal */
	$window1 	= $glade->get_widget('window1');
	
	/* Setamos o título da janela */
	$window1->set_title('Hashing');
	
	/* Setamos os demais objetos */
	$button1 	= $glade->get_widget('button1');
	$entry1 	= $glade->get_widget('entry1');
	$entry2 	= $glade->get_widget('entry2');
	
	/* Ao clicar no botão (lembra o $_POST[] para forms em HTML) */
	$button1->connect_simple('clicked', 'Gerar', $entry1, $entry2);
	
	/* Para fechar a janela quando clicar no [x]*/
	$window1->connect_simple('destroy', array('gtk', 'main_quit'));
	
	/* Função quer irá gerar a codificação em base64 */
	function Gerar($entry1, $entry2){
	
		/* Mostrar a codificação */
		$entry2->set_text(base64_encode($entry1->get_text()));
	}
	
	/* Finalizando a instância da classe */
	Gtk::main();
?>
{% endhighlight %}
leiaute.glade
{% highlight html %}
  
  
  
    600
    400
    True
    center
    
      
        True
        
          
            325
            28
            True
            True
            &#x25CF;
          
          
            141
            57
          
        
        
          
            323
            32
            True
            Base 64 (codificar)
            center
          
          
            143
            22
          
        
        
          
            Gerar
            150
            53
            True
            True
            True
          
          
            238
            106
          
        
        
          
            334
            27
            True
            True
            &#x25CF;
          
          
            141
            239
          
        
        
          
            325
            30
            True
            Base 64 (codificada)
          
          
            146
            203
          
        
      
    
  
{% endhighlight %}
Comente!
