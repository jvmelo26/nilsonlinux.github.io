---
layout: post
title:  "eopkg detalhes"
date:   2020-04-23
tags: solus eopkg

comments: true
edit_url: true
---



O Solus usa o sistema de gerenciamento de pacotes ``eopkg`` para entregar software ao usuário final. 
Abaixo estão alguns comandos básicos para usar o ``eopkg``


#### Noções básicas de gerenciamento de pacotes.

Instalando Software  
Você pode instalar um ou mais pacotes usando:
```javascript
sudo eopkg install packagename
```
Por exemplo:
```javascript
sudo eopkg install gnome-documents gnome-music
```
Reinstalando Software
Você pode reinstalar um ou mais pacotes usando:
```javascript
sudo eopkg install --reinstall packagename
```
Por exemplo:
```javascript
sudo eopkg install --reinstall gnome-documents gnome-music
```
Desinstalando o software
Você pode desinstalar um ou mais pacotes usando:
```javascript
sudo eopkg remove packagename
```
Por exemplo:
```javascript
sudo eopkg remove gnome-documents gnome-music
```
Obter informações sobre software
Você pode obter informações sobre software, como sua descrição, versão, tamanho da instalação e muito mais, usando
```javascript
sudo eopkg info packagename
```
Por exemplo:
```javascript
sudo eopkg info gnome-documents
```
Atualizando
Você pode atualizar seu sistema usando:
```javascript
sudo eopkg upgrade
```
Se você quiser apenas atualizar uma parte específica do software no seu sistema, você pode especificar é como abaixo:
```javascript
sudo eopkg upgrade firefox
```
Procurando
Você pode pesquisar a seleção de software que a Solus fornece usando:
```javascript
sudo eopkg search term
```
Por exemplo:
```javascript
sudo eopkg search documents
```
Observe que você não precisa procurar por um nome de software específico, embora você possa fazer isso. Procuramos resumos e nomes de software por padrão. 
**Ferramentas de desenvolvimento base 

Se você está querendo compilar software sob o Solus, recomendamos instalar o nosso componente system.devel rodando o seguinte:
```javascript
sudo eopkg install -c system.devel
```
Isso fornecerá itens como clang, gcc, make, vários sub-pacotes de desenvolvimento e muito mais. Nosso system.devel é similar a pacotes em outros sistemas operacionais, como o essencial da Debian.

By: Nilsonlinux. Fonte:
https://getsol.us/articles/package-management/basics/en/
