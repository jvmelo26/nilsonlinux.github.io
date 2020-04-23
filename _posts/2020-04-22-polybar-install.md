---
layout: post
title: Instalação e configuração do polybar
description: Complementos
author: Nilsonlinux
image: "/uploads/bspwm010.png"
tags: polybar

comments: true
edit_url: true
---

INSTALAÇÃO DO POLYBAR
Foi testado nas seguintes distribuições: Solus Budgie / Mate, Arch linux XFCE / Openbox
Acredito que qualquer distribuição com estas ambientes devem funcionar sem problemas.

## Vamos ao que interessa.

Primeiramente precisamos baixar o pacote *polybar* com o gerenciador de sua distro. Neste poste vou utilizar o eopkg do solus e o ambiente utilizado será o mate. 
**1 .Instalação polybar***
```
sudo eopkg it polybar
```
**2 .Criando o subdiretório** *fonts* **que ficarar dentro das pastas** *.local/share/*.
```
mkdir ~/.local/share/fonts
```
**2 .Criando o subdiretório** *polybar* **que ficarar dentro da pasta** *.config*.
```
mkdir ~/.config/polybar
```
Agora precisaremos clonar o reposítório que contém os arquivos necessário para a execução do polybar.

**3 .Clonando o repositório.***
```
git clone https://github.com/nilsonlinux/polybar
```
Agora vamos entrar no diretório baixado e copiar a pasta *fonts* pra pasta *~/.local/share/* 
**4 .Entrar no diretório e copiar a pasta** *fonts*.
```
cd polybar && cp -r fonts/* ~/.local/share/fonts
```

```
# sudo eopkg it polybar && mkdir ~/.local/share/fonts && mkdir ~/.config/polybar && git clone https://github.com/nilsonlinux/polybar && cd polybar && cp -r fonts/* ~/.local/share/fonts && fc-cache -v && cp -r * ~/.config/polybar && chmod +x ~/.config/polybar/polybar.sh &&  ~/.config/polybar/polybar.sh
```

![](https://i.ibb.co/G7fQWKh/Captura-de-tela-em-2020-04-21-11-00-43.png)
![](https://i.ibb.co/VDqd4GB/Captura-de-tela-em-2020-04-21-11-00-39.png)
![](https://i.ibb.co/TM7n4Pn/Captura-de-tela-em-2020-04-21-11-00-33.png)
![](https://i.ibb.co/VCsv6sh/Captura-de-tela-em-2020-04-21-11-00-18.png)
![](https://i.ibb.co/WBdj562/Captura-de-tela-em-2020-04-21-10-37-15.png)
![](https://i.ibb.co/Qcj2PPH/Captura-de-tela-em-2020-04-21-10-36-36.png)
