---
layout: post
title: Instalação mpd + ncmpcpp
description: Instalação ncmpcpp e mpd
image: "/uploads/bspwm010.png"
tags:
  - mpd
  - ncmpcpp
comments: true
edit_url: true
---

Bom pessoal esse é meu primeiro post e vou ensinar a instalar e configurar facilmente esses dois pacotes mágicos que faz com
que você tenha um player de músicas totalmente funcional e cheio de funcionalidades em seu terminal. Além de consumir pouquíssimo recursos de sua máquina.

*Só mais uma coisinha. Se você é um tipo de usuário apressadinho você pode ir para o final do post que tenho o comando completo para se instalar e configurar tudo de uma vez. Mais aconsselho a realizar o passo a passo. Assim você entenderar os processos e o funcionamento.*
# Então vamos deixar de papo e vamos ao que interessa!


Primeiro você precisa baixar os pacotes. ``mpd + ncmpcp`` Instale com esse comando asseguir.
~~~ruby
sudo apt install mpd ncmpcpp
~~~
Logo em seguida você precisará criar dois subdirerórios para o funcionamento.

Criando o diretório  *mpd* dentro da pasta ``.config`` e também o diretório *playlists* que ficará dentro da pasta ``./local/mpd/`` com esse comando.
```ruby
 mkdir ~/.config/mpd &&  mkdir ~/.config/mpd/playlists
```
Pronto. Agora que você ja possue os diretórios criados em seus respectivos lugares. Vamos baixar o arquivo de configuração do ``mpd``.
```ruby
wget https://raw.githubusercontent.com/nilsonlinux/ncmpcpp-mpd/master/mpd.conf
```
E por fim vamos copiar o arquivo que você baixou para o diretório criado no início. Ficará em ``./config/mpd``
```ruby
cp mpd.conf ~/.config/mpd/
```
Pronto. Agora está tudo configurado. Para iniciar você só precisa rodar o comando *mpd* para rodar o servidor mpd em sua máquina e*ncmpcpp* para executar o player em seu terminal
```ruby
mpd && ncmpcpp
```
# Viu só como é fácil. 
Se você fez as etapas conforme eu publiquei. **Meus parabéns**! 
*Ou é aquele tipo apressadinho que citei no início do post?*  Hehe

Aí está o comando completo logo abaixo.

Então é isso pessoal. Até a próxima. 
~~~javascript
sudo eopkg it mpd ncmpcpp && mkdir ~/.config/mpd && mkdir .config/mpd/playlists && wget https://raw.githubusercontent.com/nilsonlinux/ncmpcpp-mpd/master/mpd.conf && cp mpd.conf ~/.config/mpd/ && mpd && ncmpcpp
~~~

![](https://i.ibb.co/cF11PXG/Captura-de-tela-em-2020-04-21-11-32-07.png)
