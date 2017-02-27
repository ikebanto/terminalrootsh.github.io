---
layout: post
title: Como instalar o Roblox no Debian e no Ubuntu Linux
date: '2016-10-16T07:21:00.000-07:00'
description: Como instalar o Roblox no Debian e no Ubuntu Linux
main-class: 'debian'
tags:
- Debian
- Ubuntu
- Games
image: https://4.bp.blogspot.com/-zwN9yWnOQ3A/WAOGFXTZKvI/AAAAAAAAA2g/p8YjUxH3Q5YB0_dBNeu7Lsmo0lLq1ai2gCLcB/s72-c/como-instalar-roblox-debian-ubuntu-linux.jpg
twitter_text: Como instalar o Roblox no Debian e no Ubuntu Linux
introduction: Como instalar o Roblox no Debian e no Ubuntu Linux
---
![Blog Linux](https://4.bp.blogspot.com/-zwN9yWnOQ3A/WAOGFXTZKvI/AAAAAAAAA2g/p8YjUxH3Q5YB0_dBNeu7Lsmo0lLq1ai2gCLcB/s400/como-instalar-roblox-debian-ubuntu-linux.jpg "Blog Linux")
Salve salve rapaziada, ontem eu tive que instalar o Roblox (Game estilo MineCraft , muito bom!) pro meu filho, na verdade ele mesmo já tinha instalado (ele tem 7 anos) :) , mas não dava certo, aparecia um erro ao tentar abrir:
 
 An unexpected error occurred and Roblox needs to quit
 
 Então eu percebi de acordo com pesquisas na internet que o erro estava diretamente ligado ao caminho de arquivos setados no WINE . Então eu vi um vídeo gringo explicando pelo CrossOver , e testei no Debian e depois no Ubuntu do meu filho e deu certo. Dae separei alguns passos caso alguém se interesse ou tenha o mesmo problema.
 
 1 - Baixe o CrossOver e o Laucher do Roblox
 Clique aqui pra baixar
 
 2 - Descompacte o arquivo pelo descompactador gráfico ou pelo comando:
 {% highlight bash %}
tar -zxvf crossover-roblox.tar.gz
{% endhighlight %}
   
 
 3 - Um dos arquivos é o CrossOver e o outro o Laucher do Roblox, instale o CrossOver pelo GDebi ou com o root/sudo pelo comando:
 
  Obs.: Observe algumas coisas antes de instalar o CrossOver:
  
   3.1 - Pelo GDebi em descrição vc verá que o pacote é para 64bits , e ele mesmo da a dica na aba descrição de rodar esse comando antes
      se você estiver num sistema 32bits, se não tiver o sudo utilize o root:
      {% highlight bash %}
sudo dpkg --add-architecture i386 ; sudo apt-get update
{% endhighlight %}
      
   3.2 - No mesmo pacote há saídas pelo Lintian, se vc não tivé-lo instalado, é bom instalar também:
      {% highlight bash %}
apt-get install lintian
{% endhighlight %}
      
   3.3 - Se no status do pacote tiver: Todas as dependências satisfeitas, então está tudo certo, caso contrário, utilize o APT pra instalar 
      as dependências que faltam. 
 Estando tudo certo instale:
 
 {% highlight bash %}
dpkg -i crossover.deb
{% endhighlight %}
 
 4 - Após instalar o CrossOver , agora abra-o e clique em : Install Windows Software
 
     
![Blog Linux](https://2.bp.blogspot.com/-_Mfy649HhPM/WAOKK8hv3vI/AAAAAAAAA2s/2i8eC2yACigHlp20udmt8HdVYVQCBtu_gCLcB/s400/cross-over-print.png "Blog Linux")
 
 5 - Aparecerá um AVISO de amarelo pra vc atualizar, clique em Atualizar Agora e aguarde a atualização...
 
       
![Blog Linux](https://2.bp.blogspot.com/-ztAHxOvKQWc/WAOKSYnCEWI/AAAAAAAAA2w/N-mhYVQw6ZYzJ8WyP_8CwuvCCa5eT12pwCLcB/s400/co2.png "Blog Linux")
 
 6 - Após finalizada a atualização , clique em Browse Available Applications... Então abrirá um no menu e clique na setinha de Unknown e depois selecione Outra Aplicação e depois clique em Continuar se não houver passado automaticamente de selecionar o arquivo.
 
        
![Blog Linux](https://4.bp.blogspot.com/-zPoYir1-gQk/WAOKYHggBdI/AAAAAAAAA20/l4qzV6kOWXYi8V4RCcaXQn7dxtcBkQSDQCLcB/s400/coN.png "Blog Linux")
 
 7 - Selecione o Laucher do Roblox que você baixou e clicando em: Selecione o Arquivo do Instalador e ANTES de INSTALAR clique em Select Bootle e marque Nova Garrafa Windows 8 e depois clique em Instalar.
 
      
![Blog Linux](https://1.bp.blogspot.com/-XffpW4Bleyg/WAOKetMMWUI/AAAAAAAAA24/T1PBGn9xwKc5DOPYML7e-j4k_uV4rrO1QCLcB/s320/co0.png "Blog Linux")
![Blog Linux](https://3.bp.blogspot.com/-pL8qbJigDK8/WAOKe3SCoII/AAAAAAAAA28/0XTnABZdhhUdz6kyzLgxMtA4QOwphidfwCLcB/s320/co4.png "Blog Linux")
 
obs.: Se o CrossOver pedir para confirmar/comprar/registrar , clique em Try Now. 
 irá instalar o Roblox Player e o Roblox Studio, ambos ícones aparecerão na sua Área de Trabalho após instalação concluída, depois abra o Roblox Studio.
 
 
 8 - Após o Roblox Studio aberto, vá em FILE >> Settings >> Rendering e em Mode Graphic, clique em automatic e mude para OpenGL.
 
 Lembrando que para jogar é preciso ter uma conta no Site do Roblox!
 
 E esse jogo é recomendado pra quem possui 4GB de Memória ou mais e possui um sistema de 64bits, mas vc pode tentar se não tiver! :)
 
 
 Vídeo Explicativo em inglês. 
 
