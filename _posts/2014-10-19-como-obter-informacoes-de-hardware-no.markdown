---
layout: post
title: "Como Obter Informações de Hardware no Linux"
date: '2014-10-19T14:04:00.001-07:00'
description: "Como Obter Informações de Hardware no Linux"
main-class: 'linux'
tags:
- Linux
- Dicas
- Hardware
image: "https://lh3.googleusercontent.com/-EGVwJHnSk_0/TjAJLkSgztI/AAAAAAAAFhM/qQSURyarFEM/s72-c/lshw-gtk_1.png"
twitter_text: "Como Obter Informações de Hardware no Linux"
introduction: "Como Obter Informações de Hardware no Linux"
---
1. lshw 
 lshw  é a  utilitário de linha de comando   que fornece informações detalhadas de hardware, como versões de firmware,   Informações BIOS, placa-mãe, e configuração de memória, informações de CPU e assim por diante.   
O que é legal sobre lshw é que ele pode obtê-lo a  saída as informações de hardware para um arquivo HTML ou XML . 
 lshw deve ser instalado por padrão no Ubuntu , mas no caso ele não está disponível para a sua versão do Ubuntu, instale-o usando o comando abaixo:  {% highlight bash %}
 sudo apt-get install lshw 
{% endhighlight %} 
Ou clique no botão abaixo: 
 Para instalar lshw no Fedora, use o comando a seguir:  
 {% highlight bash %}
 sudo yum install lshw 
{% endhighlight %} 
Para usar lshw, execute o seguinte comando em um terminal: 
 {% highlight bash %}
 sudo lshw 
{% endhighlight %} 
Para obter as informações de hardware em um arquivo HTML, use o comando a seguir: 
 {% highlight bash %}
 cd &amp; amp; &amp; amp; sudo lshw -html &amp; gt; hardware_info.html 
{% endhighlight %} 
Depois de executar o comando acima, você deve encontrar um arquivo chamado "hardware_info.html" em seu diretório pessoal - Você pode abrir este arquivo usando um navegador web. 
Para  ver um relatório HTML gerado usando lshw  no meu netbook (Asus 1005 HA), clique em  AQUI . 
2. lshw-GTK 
 lshw-gtk é uma interface gráfica de usuário para lshw.   Ele   pode exibir informações muito detalhadas sobre o hardware do seu computador dispositivos de processador, memória, placas de vídeo, ligados a: configuração Portas USB e assim por diante.  
lshw-gtk usa colunas Miller por   navegação através de vários componentes de hardware que é um pouco confuso de usar, mas, além disso, lshw-gtk é uma grande ferramenta e em comparação com o outras ferramentas GUI neste post, ele oferece o hardware mais detalhada informações. 
Além disso, assim como o lshw ferramenta de linha de comando, você pode exportar as informações de hardware para um HTML, texto simples ou arquivo xml. 
 Para instalá-lo no Ubuntu, use o comando a seguir:  
 {% highlight bash %}
 sudo apt-get install lshw-gtk 
{% endhighlight %} 
 ou clique no botão abaixo:  
 Para instalá-lo no Fedora, use o comando a seguir:  
 {% highlight bash %}
 sudo yum install lshw-gui 
{% endhighlight %} 
Uma vez instalado,  procurar "Hardware Lister" no menu / traço  ou execute o seguinte comando: 
 {% highlight bash %}
 gksu lshw-gtk 
{% endhighlight %} 
Ou, para o Fedora: 
 {% highlight bash %}
 lshw-gui 
{% endhighlight %} 
 screenshots lshw-GTK:  
 
![Blog Linux](https://lh3.googleusercontent.com/-EGVwJHnSk_0/TjAJLkSgztI/AAAAAAAAFhM/qQSURyarFEM/s400/lshw-gtk_1.png "Blog Linux")
  
 
![Blog Linux](https://lh5.googleusercontent.com/-9uXCDmij7_8/TjAJL7AxoxI/AAAAAAAAFhU/t6yzz1c0TJ8/s400/lshw-gtk_3.png "Blog Linux")
  
 
![Blog Linux](https://lh5.googleusercontent.com/-9CJ_mInvyQ8/TjAJL6dFBaI/AAAAAAAAFhQ/XfHmQrWaYIg/s400/lshw-gtk_2.png "Blog Linux")
  
 
![Blog Linux](https://lh5.googleusercontent.com/-3T__x5MSgqM/TjAJMMjcv4I/AAAAAAAAFhc/KXc4per3W1c/s400/lshw-gtk_4.png "Blog Linux")
  
3. HardInfo 
 HardInfo pode exibir informações tanto sobre o hardware do seu sistema e do sistema operacional, algo que não está disponível em lshw.  
As informações do sistema operacional   inclui: resolução do desktop e outras informações de exibição, Linux Versão do kernel, nome do computador e nome de utilizador, ambiente de trabalho, tempo de atividade,   média de carga, módulos do kernel, idiomas disponíveis, informações de sistema de arquivos, variáveis ​​de ambiente e muito mais. 
Quanto a informação de hardware da peça, HardInfo exibe menos detalhes do que lshw, mas é mais user-friendly graças a uma interface de utilizador muito intuitivo: os dispositivos estão listados no   à esquerda e são fáceis de detectar, sem ter manualmente procurar vários dispositivos através da interface como em lshw-gtk. 
Outro aspecto interessante é que ele HardInfo  pode executar vários benchmarks:   CPU: Blowfish, CryptoHash, Fibonacci, N-Rainhas  FPU: FFT e Raytracing 
Além disso, a  informações de hardware, bem como os resultados de benchmark podem ser exportados para um arquivo de texto HTML ou sem formatação  e as informações é muito melhor organizado do que em lshw (mas mais uma vez: é também menos detalhada do que lshw) . 
 Para instalar no Ubuntu HardInfo, use o comando a seguir:  
 {% highlight bash %}
 sudo apt-get install HARDiNFO 
{% endhighlight %} 
 ou clique no botão a seguir:  
 Para instalá-lo no Fedora, use o comando a seguir:  
 {% highlight bash %}
 sudo yum install HARDiNFO 
{% endhighlight %} 
Para executá-lo,  procurar "Profiler e Referência do Sistema" no menu / dash . 
Para  ver um relatório HTML gerado usando HardInfo  no meu netbook (Asus 1005 HA), clique em  AQUI . 
 HardInfo screenshots:  
 
![Blog Linux](https://lh6.googleusercontent.com/-V40RL1w33eg/TjAJK2aGy1I/AAAAAAAAFg8/ffWetSIwNGQ/s400/hardinfo_1.png "Blog Linux")
  
 
![Blog Linux](https://lh6.googleusercontent.com/-4E-kCAGzx_0/TjAJLLnFvjI/AAAAAAAAFhA/nIz8piZbvCQ/s400/hardinfo_2.png "Blog Linux")
  
 
![Blog Linux](https://lh6.googleusercontent.com/-wwmGvjPwCLg/TjAJLKXBfVI/AAAAAAAAFhE/RlSs1GkI4XU/s400/hardinfo_3.png "Blog Linux")
  
 
![Blog Linux](https://lh6.googleusercontent.com/-LeZfW6LwnLg/TjAJLw6Gz6I/AAAAAAAAFhY/8ZrGTRwYtc4/s400/hardinfo_4.png "Blog Linux")
  
 
![Blog Linux](https://lh6.googleusercontent.com/-CBQZ5hxzTb0/TjAJLVesLfI/AAAAAAAAFhI/yE7OXGbvLEQ/s400/hardinfo_5.png "Blog Linux")
  
4. SysInfo 
Sysinfo é um,  alternativa minimalista leve para HardInfo e lshw-gtk e pode exibir as seguintes informações:   System (versão da distribuição Linux, versões do GNOME, kernel, gcc e Xorg e hostname);  CPU (identificação do fornecedor, nome do modelo, a frequência, cache level2, bogomips, números de modelo e bandeiras);  Memória (RAM total do sistema, memória livre, troca de espaço total e livre, cache, memória ativa, inativa);  (interface IDE, todos os dispositivos IDE, dispositivos SCSI) de armazenamento;  Hardware (placa-mãe, placa de vídeo, placa de som, dispositivos de rede);  NVIDIA placa gráfica:. somente com NVIDIA driver de vídeo instalado 
 Sysinfo é uma ferramenta que é um pouco mais avançado do que o Monitor do sistema   (Monitor do sistema vem por padrão com o Ubuntu e outros Linux distribuições que usam o GNOME), então não espere para listar muitos detalhes sobre o hardware. Mas é muito útil se você quiser dar uma rápido olhar para o hardware do seu computador sem ter que passar por muitos   de informações. 
 Sysinfo screenshots:  
 
![Blog Linux](https://lh5.googleusercontent.com/-qwMVblhbLy8/TjAJMepzHTI/AAAAAAAAFhk/EPa2VVZ4SNo/s400/sysinfo_1.png "Blog Linux")
  
 
![Blog Linux](https://lh4.googleusercontent.com/-1AOlFBVOJGo/TjAJMrLFurI/AAAAAAAAFhg/E5cM44eSUOU/s400/sysinfo_2.png "Blog Linux")
  
 
![Blog Linux](https://lh6.googleusercontent.com/-eI1uFpbdeIo/TjAJM_QqGnI/AAAAAAAAFho/i4uZF3wx9fU/s400/sysinfo_3.png "Blog Linux")
  
 Para instalar SysInfo em Ubuntu, execute o seguinte comando em um terminal:  
 {% highlight bash %}
 sudo apt-get install sysinfo 
{% endhighlight %} 
 ou clique no botão abaixo:  
 Nota:  as ferramentas neste post só fornecer informação real, se eles são usados ​​em sistemas operacionais não-virtualizados. 
 Outras ferramentas de linha de comando para obter informações sobre o hardware:   lspci, dmidecode, lsusb (para USB), "cat / proc / cpuinfo" (por CPU), hwinfo, inxi (use "F inxi"; não há nenhum pacote inxi no oficial Repositórios do Ubuntu, mas os usuários do Ubuntu podem baixar um deb de  aqui ). 
