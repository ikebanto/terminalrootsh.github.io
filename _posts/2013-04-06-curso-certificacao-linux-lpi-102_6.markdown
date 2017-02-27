---
layout: post
title: "'Curso Certificação Linux LPI-102: Segurança'"
date: '2013-04-06T16:14:00.000-07:00'
description: "'Curso Certificação Linux LPI-102: Segurança'"
main-class: 'linux'
tags:
- Linux
- LPI
image: "http://2.bp.blogspot.com/-SlJtSH4knV4/UVcQCyk6UgI/AAAAAAAABTs/50k0MXFTG9U/s72-c/security.png"
twitter_text: "'Curso Certificação Linux LPI-102: Segurança'"
introduction: "'Curso Certificação Linux LPI-102: Segurança'"
---
Existem várias ferramentas de segurança que podem auxiliar a vida de um administrador de redes/sistemas no Linux. Aqui abordarei duas fundamentais para obter tal segurança:
° IPTABLES
° TCPWRAPPER
Vale ressaltar que segurança vai mais além, mas esses dois já estarão de bom tamanho para o entendimento de segurança, em diversos outros aplicativos.
IPTABLES
E aê galera!?Eu estava configurando meu Firewall hoje e decidi escrever um Post sobre Iptables pra documentar algumas informações.
Iptables é o nome da ferramenta do espaço do usuário que permite a criação de regras de firewall e NATs. Apesar de, tecnicamente, o iptables ser apenas uma ferramenta que controla o módulo netfilter(O netfilter é um módulo que fornece ao sistema operacional Linux as funções de firewall, NAT e log dos dados que trafegam por rede de computadores.), o nome "iptables" é frequentemente utilizado como referência ao conjunto completo de funcionalidades do netfilter. O iptables é parte de todas as distribuições modernas do Linux.
Ao reiniciar o computador as Regras de Firewall são perdidas, para isso é preciso criar um script para executar sempre que o computador for iniciado.
Para verificar quais regras estão criadas, se existir, o comando é:
{% highlight bash %}
# iptables -L
{% endhighlight %}, se não retornar nada é porque o pacote não está instalado, então você pode instalá-lo pelo comando:
{% highlight bash %}
# apt-get install iptables
{% endhighlight %}
Rejeitar pacotes de uma porta:
{% highlight bash %}
# iptables -A INPUT -p tcp --dport 445 -j DROP
{% endhighlight %}
Aceitar pacotes de uma porta:
{% highlight bash %}
# iptables -A INPUT -p tcp --dport 445 -j ACCEPT
{% endhighlight %}
Desativar o iptables, isso libera todas as portas:
{% highlight bash %}
# iptables -F
{% endhighlight %}
Essa regra abaixo fecha todas as portas, porém voçê conecta a internet normalmente, mas aplicativos como Apache por exemplo não funcionará no localhost.
{% highlight bash %}
iptables -A INPUT -p tcp --syn -j DROP
{% endhighlight %}, aqui abaixo a mesma regra, porém para o protocolo UDP.{% highlight bash %}
# iptables -A INPUT -i ppp0 -p udp --dport 0:30000 -j DROP
{% endhighlight %}
Lembrando que as tabelas do IPTABLES são lidas de cima pra baixo, ou seja, se você quiser fechar todas as portas e liberar somente o apache a porta 80, você precisa primeiro criar a regra que libera a porta 80 (ou as portas que você deseja), pra só depois fechar todas as outras, exemplo:
{% highlight bash %}
# iptables -A INPUT -p tcp --destination-port 80 -j ACCEPT
{% endhighlight %}, depois:{% highlight bash %}
iptables -A INPUT -p tcp --syn -j DROP
{% endhighlight %}
Para acessar pacotes de determinados IPs de uma rede interna, ou de uma determinada rede, você usar os comandos abaixo:
{% highlight bash %}
# iptables -A INPUT -p tcp --syn -s 192.168.1.107/255.255.255.0 -j ACCEPT
iptables -A INPUT -p tcp --syn -s 192.168.0.0/255.255.255.0 -j ACCEPT
{% endhighlight %}, aceitar as requisições do IP 192.168..107 e no comando seguinte, aceitará todas as requisições da rede interna, se logo depois vc fechar tudo pra internet, a regra de aceitar será válida, o inverso não.
Para configurações de compartilhamento, seria regras de NAT,assim:
Para compartilhar a conexão do modem com a rede local:
{% highlight bash %}
# modprobe iptable_nat
iptables -t nat -A POSTROUTING -o ppp0 -j MASQUERADE
echo 1 > /proc/sys/net/ipv4/ip_forward
{% endhighlight %}
Para compartilhar uma conexão via ADSL ou cabo instalada na eth0:
{% highlight bash %}
# modprobe iptable_nat
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
echo 1 > /proc/sys/net/ipv4/ip_forward
{% endhighlight %}
Para desativar o compartilhamento, você deve usar o comando :
{% highlight bash %}
# iptables -t nat -F.
{% endhighlight %}
Uma observação é que estas regras não incluem um servidor DHCP, você deve configurar os clientes com endereço IP fixo ou então ativar o serviço DHCPD na sua distribuição.Será necessário também configurar os DNS, se não souber os endereços do seu provedor, você pode usar os DNS públicos do Google 8.8.8.8 e 8.8.4.4, mais informações sobre esses DNS Clique Aqui.
Mais uma linha interessante de se adicionar, que protege contra pacotes danificados (usados em ataques DoS por exemplo) é:{% highlight bash %}
# iptables -A FORWARD -m unclean -j DROP
{% endhighlight %}, (esta linha deve ser adicionada antes das demais).
Depois de todas as regras criadas, voçê criar um script em Shell e gravar na pasta /usr/bin/ com o nome que você deseja e poderá executar esse nome no terminal que automaticamente, será criadas as regras, lembrando que para isso tem de estar com permissão de execução e deve ser o usuário root.Você também pode torná-lo inicializável, em Debian e Debian-Likes(Ubuntu, Linux Mint,...) com o comando:{% highlight bash %}
update-rc.d nome_do_script defaults
{% endhighlight %}, para excluir basta trocar o defaults por remove.
Para fazer um forward(Redirecionamento, exemplo: uma solicitação de jogo na porta 27020, você quer que seja direcionada ao PC 192.168.1.107 da sua rede)com Iptables.
{% highlight bash %}
# modprobe iptable_nat
iptables -t nat -A PREROUTING -i etho -p tcp --dport 22 -j DNAT --to-dest 192.168.1.107
iptables -A FORWARD -p tcp -i eth0 --dport 22 -d 192.168.1.107 -j ACCEPT
{% endhighlight %}
Você pode repetir o comando várias vezes para direcionar varias portas diferentes para várias máquinas. Naturalmente uma mesma porta não pode ser fowardada duas vezes.Para um range de portas, o Counter Strike pode usar mesmo da 27015 até 27030, se você não qual porta dessa range do seu colega está aberta, então você pode abrir esta faixa de portas assim:
{% highlight bash %}
# iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 27015:27030 -j DNAT --to-dest 192.168.1.107
iptables -A FORWARD -p tcp -i eth0 --dport 27015:27030 -d 192.168.1.107 -j ACCEPT
{% endhighlight %}
Eu crie um script em PHP para verificar quais portas estão abertas da porta 1 até a 1024, se gue abaixo:
{% highlight bash %}
$servidor="127.0.0.1";    
for($i=1;$i<1024;$i++){
$con = fsockopen($servidor, $i, $errono, $errostr, 3);
if($con){
echo 'A porta '.$i.' está aberta!
';
}
}
fputs($con, "Portas");
fclose($con);
{% endhighlight %}
Mas você pode utilizar o Nmap para verificar quais portas estão abertas no seu micro, para instalá-lo no Debian e Debian-Likes, basta:
{% highlight bash %}
# apt-get install nmap
{% endhighlight %}, para analisar em rede interna use o IP interno, para análise à internet use seu IP externo, para loopback use:
{% highlight bash %}
# nmap 127.0.0.1
{% endhighlight %}
Há também um serviço online que tem como você efetuar testes de portas e de invasões, eu uso muito ele, é o http://www.grc.com/
-clique em Services
-depois clique em ShieldsUP
-depois clique em proceed
-clique em "Proceed"
- e inicie o teste clicando em "All Service Ports".
É isso aê, espero que gostem e comentem.
Fonte:www.hardware.com.br
TCPWRAPPER
O TCP Wrappers são usados para aplicar regras de acesso aos servidores utilizados em sistema, podendo permitir ou negar as conexões a eles. Eles são controlados por dois arquivos: /etc/hosts.allow (configuração de acessos permitidos para determinados IPs) e /etc/hosts.deny (configuração de acesso negados para determinados IPs) TCP. Sigla para “Transmission Control Protocol”.
{% highlight bash %}
/etc/hosts.allow
{% endhighlight %} – Se uma regra deste arquivo for atendida, o acesso ao serviço pe permitido
{% highlight bash %}
/etc/hosts.deny
{% endhighlight %} - Se uma regra deste arquivo for atendida, o acesso ao serviço é negado
As regras destes arquivos podem ser contruída de forma a corresponder a todos os serviços ou, alternativamente, a determinados serviços específicos. Se não houver nenhuma correspondência nos dois arquivos, o acesso ao serviço é permitido. É comum se especificar regras particulares no arquivo hosts.allow e específicar uma negativa geral no arquivo hosts.deny, limitando assim o acesso aos clientes que você especificamente permitir. A linguagem dos arquivos de controle consiste de uma lista de serviços, seguida por dois-pontos, seguida por uma lista de hosts. Os hosts podem ser específicados por nome ou por endereço IP.
Por exemplo: Para negar acesso a todos os serviços, exceto ao ftp no domínio local, poderiam ser usados estes dois arquivos simples:
{% highlight bash %}
hosts.allow
{% endhighlight %} – Esta entrada permite acesso ao ftp aos clientes do domínio local
ftp: LOCAL
hosts.deny – Esta entrada nega o acesso a todos os serviços a todos os clientes
ALL: ALL
Entendendo um pouco mais…
Existem dezenas de possibilidades de configuração para o tcp_wrappers e é possível estudá-las em extensão através das páginas de manual hosts_access e hosts_options. Portanto, serão ilustrados apenas alguns casos interessantes do uso desta ferramenta. As regras de controle de acesso, existentes nestes dois arquivos, têm o seguinte formato:
lista_de_daemons : lista_de_clientes [: comando]
lista_de_daemons: Lista de um ou mais nomes de daemons (como especificados no /etc/inetd.conf), ou curingas. lista_de_clientes: Lista de um ou mais endereços ou nomes de máquinas, padrões ou curingas utilizados para especificar quais clientes podem e quais não podem acessar o serviço.
comando (opcional): É possível executar um comando sempre que uma regra casa com um padrão e é utilizada. Veja exemplos a seguir. Como citado anteriormente, curingas podem ser utilizados tanto na lista de daemons quanto na lista de clientes. Entre os existentes, pode-se destacar os seguintes:
ALL
Significa todos os serviços ou todos os clientes, dependendo apenas do campo em que se encontra.
LOCAL
Este curinga casa com qualquer nome de máquina que não contenha um caractere ponto “.”, isto é, uma máquina local.
PARANOID
Casa com qualquer nome de máquina que não case com seu endereço. Isto geralmente ocorre quando algum servidor DNS está mal configurado ou quando alguma máquina está tentando se passar por outra.
{% highlight bash %}
/etc/hosts.allow
{% endhighlight %}
O arquivo /etc/hosts.allow é um arquivo de configuração do programa /usr/sbin/tcpd. O arquivo hosts.allow contém regras descrevendo que hosts tem permissão de acessar um serviço em sua máquina.
O formato do arquivo é muito simples:
{% highlight bash %}
# /etc/hosts.allow
#
# lista de serviços: lista de hosts : comando
{% endhighlight %}
lista de serviços
É uma lista de nomes de serviços separados por vírgula que esta regra se aplica. Exemplos de nomes de serviços são: ftpd, telnetd e fingerd.
lista de hosts
É uma lista de nomes de hosts separada por vírgula. Você também pode usar endereços IP’s aqui. Adicionalmente, você pode especificar nomes de computadores ou endereço IP usando caracteres coringas para atingir grupos de hosts.
Exemplos incluem: gw.vk2ktj.ampr.org para conferir com um endereço de computador específico, .uts.edu.au para atingir qualquer endereço de computador finalizando com aquele string. Use 200.200.200. para conferir com qualquer endereço IP iniciando com estes dígitos. Existem alguns parâmetros especiais para simplificar a configuração, alguns destes são: ALL atinge todos endereços, LOCAL atinge qualquer computador que não contém um “.” (ie. está no mesmo domínio de sua máquina) e PARANOID atinge qualquer computador que o nome não confere com seu endereço (falsificação de nome). Existe também um último parâmetro que é também útil: o parâmetro EXCEPT lhe permite fazer uma lista de exceções. Isto será coberto em um exemplo adiante.
comando
É um parâmetro opcional. Este parâmetro é o caminho completo de um comando que deverá ser executado toda a vez que esta regra conferir. Ele pode executar um comando para tentar identificar quem esta conectado pelo host remoto, ou gerar uma mensagem via E-Mail ou algum outro alerta para um administrador de rede que alguém está tentando se conectar.
Existem um número de expansões que podem ser incluídas, alguns exemplos comuns são: %h expande o endereço do computador que está conectado ou endereço se ele não possuir um nome, %d o nome do daemon sendo chamado.
Se o computador tiver permissão de acessar um serviço através do /etc/hosts.allow, então o /etc/hosts.deny não será consultado e o acesso será permitido.
Como exemplo:
{% highlight bash %}
# /etc/hosts.allow
#
# Permite que qualquer um envie e-mails
in.smtpd: ALL
# Permitir telnet e ftp somente para hosts locais e myhost.gnulinuxbr.com
in.telnetd, in.ftpd: LOCAL, myhost.gnulinuxbr.com
{% endhighlight %}
Qualquer modificação no arquivo /etc/hosts.allow entrará em ação após reiniciar o daemon inetd. Isto pode ser feito com o comando kill -HUP [pid do inetd], o pid do inetd pode ser obtido com o comando ps ax|grep inetd.
{% highlight bash %}
/etc/hosts.deny
{% endhighlight %}
O arquivo /etc/hosts.deny é um arquivo de configuração das regras descrevendo quais computadores não tem a permissão de acessar um serviço em sua máquina.
Um modelo simples deste arquivo se parece com isto:
{% highlight bash %}
# /etc/hosts.deny
#
# Bloquear o acsso SSH para todos, exceto para a rede 10.0.0.0
sshd: ALL EXCEPT 10.0.0.0/24
{% endhighlight %}
Tendo um padrão ALL: ALL no arquivo /etc/hosts.deny e então ativando especificamente os serviços e permitindo computadores que você deseja no arquivo /etc/hosts.allow é a configuração mais segura.
Qualquer modificação no arquivo /etc/hosts.deny entrará em ação após reiniciar o daemon inetd. Isto pode ser feito com o comando kill -HUP [pid do inetd], o pid do inetd pode ser obtido com o comando ps ax|grep inetd.
Importante saber:
O arquivo hosts.deny é consultado depois de hosts.allow, permitindo ao administrador definir regras específicas de permissão, que serão aplicadas antes das regras de proibição ou de uma negativa geral. Exemplo de Configuração do tcp_wrappers
Exemplos dos arquivos /etc/hosts.allow e /etc/hosts.deny
{% highlight bash %}
Arquivo /etc/hosts.deny
ALL:ALL
Arquivo /etc/hosts.allow
ALL: localhost
in.ftpd: .minhaorganizacao
ipop3d: ALL
{% endhighlight %}
Configuração do tcp_wrappers menos restritiva, considere o mesmo arquivo /etc/hosts.deny do exemplo anterior:
Configuração do tcp_wrappers menos restritiva
Arquivo /etc/hosts.allow
ALL: localhost
in.ftpd: .minhaorganizacao 10.0.0.0/255.255.255.0 192.168
ipop3d: ALL EXCEPT gnulinuxbr.com
Neste último caso, máquinas da rede “10.0.0.0/255.255.255.0” e máquinas em que o endereço IP inicie por “192.168.” também podem acessar o serviço FTP. Note que foi utilizado um operador novo para o serviço ipop3d: EXCEPT. Isto permitiu que o acesso a este serviço fosse liberado para todos, exceto para máquinas da rede “gnulinuxbr.com”. O operador EXCEPT pode ser utilizado tanto na lista de clientes quanto na lista de serviços. Por exemplo, a linha:
ALL EXCEPT in.ftpd: ALL
no arquivo /etc/hosts.allow permite o acesso a todos os serviços, exceto o FTP, para qualquer máquina.
Todos os acessos, bem-sucedidos ou não, são registrados através do syslog, em /var/log/secure. É recomendado que este arquivo seja periodicamente analisado à procura de tentativas de invasão. Testando a Configuração Negue certos serviços para uma máquina de sua rede (como por exemplo o serviço telnet) e após reinicializar o xinetd, procure fazer acessos da máquina onde o serviço foi negado.
