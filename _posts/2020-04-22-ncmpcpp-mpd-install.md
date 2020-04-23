---
layout: post
title: Instalação mpd + ncmpcp
description: mpd + ncmpcp
image: "/uploads/bspwm010.png"
tags:
  - solus
  - linux
comments: true
edit_url: true
---

Instalação ncmpcpp-mpd


# INSTALAÇÃO mpd + ncmpcp
```
sudo eopkg it mpd ncmpcpp && mkdir ~/.config/mpd && mkdir .config/mpd/playlists && wget https://raw.githubusercontent.com/nilsonlinux/ncmpcpp-mpd/master/mpd.conf && cp mpd.conf ~/.config/mpd/ && mpd && ncmpcpp
```
![](https://i.ibb.co/cF11PXG/Captura-de-tela-em-2020-04-21-11-32-07.png)
