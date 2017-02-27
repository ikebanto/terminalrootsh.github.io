---
layout: post
title: "Como utilizar o Crontab"
date: '2014-12-26T09:15:00.002-08:00'
description: "Como utilizar o Crontab"
main-class: 'linux'
tags:
- Linux
- GNU
- LPI
image: "http://3.bp.blogspot.com/-h5Qtk1gSBn8/VJ2XSmirYTI/AAAAAAAABDk/iXGnr1iOYpA/s72-c/LXF95.tut_cron1.png"
twitter_text: "Como utilizar o Crontab"
introduction: "Como utilizar o Crontab"
---
![Blog Linux](http://3.bp.blogspot.com/-h5Qtk1gSBn8/VJ2XSmirYTI/AAAAAAAABDk/iXGnr1iOYpA/s320/LXF95.tut_cron1.png "Blog Linux")
O "cron" é um programa de “agendamento de tarefas”. Com ele você pode programar para ser executado qualquer coisa numa certa periodicidade ou até mesmo em um exato dia, numa exata hora. Um uso bem comum do cron é o agendamento de tarefas administrativas de manutenção do seu sistema, como por exemplo, procura por links simbólicos quebrados, análise de segurança do sistema, backup, entre outros. Estas tarefas são programadas para todo dia, toda semana ou todo mês, serem automaticamente executadas através do crontab e um script shell comum. A configuração do cron geralmente é chamada de crontab.
Para configurar um crontab por usuário, utiliza-se o comando “crontab“, junto com um parâmetro, dependendo do que você quiser fazer. Abaixo uma relação:
    Comando Função      crontab -e Edita(ou cria) o crontab atual do usuário        crontab -lExibe o atual conteúdo do crontab do usuário        crontab -r Remove o crontab do usuário   
# Jogo da velha no começo da linha é comentário
+---------------- minuto (0 - 59)
|  +------------- hora (0 - 23)
|  |  +---------- dia do mês (1 - 31)
|  |  |  +------- mês (1 - 12)
|  |  |  |  +---- dia da semana (0 - 7) (Domingo=0 or 7)
|  |  |  |  |
*  *  *  *  *  Comando para executar
^O(crtl+shift+O) para salvar, isso abaixo é exibido ao criar/editar um novo crontab, no rodapé.
Você irá ser perguntado onde salvar e o nome do crontab, exemplo de um padrão abaixo:
{% highlight bash %}
Nome do Arquivo para Gravar: /tmp/crontab.vPSLto/crontab
{% endhighlight %}
Isso pode ser editado conforme sua necessidade, então é só apertar ENTER.e Sair em seguida: ^X
^G Ajuda   ^O Gravar      ^R Ler o Arq   ^Y Pág Anter ^K Recort Txt  ^C Pos Atual^X Sair   ^J Justificar  ^W Onde está?  ^V Próx Pág  ^U Colar Txt   ^T Para Spell
Nesse exemplo o Crontab está agendado para criar o arquivo (arquivo_crontab.txt) no dia 22 Nov(11) às 00:11hs numa terça-feira(2):
{% highlight bash %}
11 00 22 11 2 touch /home/marcos/arquivo_crontab.txt
{% endhighlight %}
Nesse exemplo o Crontab está agendado para criar o arquivo (arquivo_crontab.txt) de 1 em 1 min das 0hs as 2hs todos os dias do mês, todos os meses e todos os dias da semana(* em minto quer dizer de 1 em 1 minuto, e para demais campos significa TODOS):
{% highlight bash %}
* 0-2 * * * touch /home/marcos/arquivo_crontab.txt
{% endhighlight %}
Para especificar "ou", utilize uma vírgula, mesmo exemplo que nas 14 ou 16hs.
{% highlight bash %}
* 14,16 * * * touch /home/marcos/arquivo_crontab.txt
{% endhighlight %}
Neste exemplo, vamos criar todos os dias porém de 5 em 5 min(verifique a divisão)
{% highlight bash %}
00-59/5 * * * * touch /home/marcos/arquivo_crontab.txt
{% endhighlight %}
Por padrão, o crontab enviará um email à conta que o carrega se existe alguma saída no comando. Para cancelar o email do crontab, redirecione a saída para outro lugar. Por exemplo, para /dev/null
{% highlight bash %}
00 2 * * * python2.4 /home/usuario/script.py>/dev/null 2>&amp;1
{% endhighlight %}
Como já foi dito para VER seu Crontab é só usar no terminal
{% highlight bash %}
# crontab -l
{% endhighlight %}
Como já foi dito para APAGAR seu Crontab é só usar no terminal
{% highlight bash %}
# crontab -r
{% endhighlight %}
Bem é isso, agora é só adequar a sua necessidade!
