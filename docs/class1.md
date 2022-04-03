---
id: class1
title: 第一课 安装Ebiten
sidebar_label: 1.安装Ebiten
---

# 课前
欢迎大家来到 Ebiten 中文教程.  
今天我们正式开始学习Ebiten的开发.

# 安装开发环境

也可以参杂官方教程(中文文档): <https://ebiten-zh.vercel.app/documents/install.html>

## 安装操作系统
没有的话建议remake.

## 安装依赖

使用Windows系统的朋友请直接跳到下一步.

`FreeBSD` 比较特殊,需要先安装桌面环境,详情见[官方教程](https://ebiten-zh.vercel.app/documents/install.html?os=freebsd).

### C编译器

`macOS`,`Linux`,`FreeBSD`需要先安装C编译器(基本上使用`gcc`)

#### MacOS
~~据说~~在最新的MacOS上,在命令行输入`clang`后,如果没有C编译器,系统会引导您安装.  
其他版本的MacOS还可以通过`brew install gcc`安装.

:::提示

如果在安装时报出以下错误:
```bash
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```
可以通过运行 `xcode-select --install` 来安装.

:::

#### Linux
以Linux发行版`Ubuntu`为例,运行:
```bash
sudo apt install gcc
```
其他发行版请使用各自的包管理器或源码安装`gcc`.

#### FreeBSD
如果使用`pkg`作为包管理器,就运行:
```bash
pkg install clang
```
当然也可以源码安装.

### 安装其他依赖
#### Linux 发行版
##### Debian / Ubuntu
```bash
sudo apt install libc6-dev libglu1-mesa-dev libgl1-mesa-dev libxcursor-dev libxi-dev libxinerama-dev libxrandr-dev libxxf86vm-dev libasound2-dev pkg-config
```
##### Fedora
```bash
sudo dnf install mesa-libGLU-devel mesa-libGLES-devel libXrandr-devel libXcursor-devel libXinerama-devel libXi-devel libXxf86vm-devel alsa-lib-devel pkg-config
```
##### Solus
```bash
sudo eopkg install libglu-devel libx11-devel libxrandr-devel libxinerama-devel libxcursor-devel libxi-devel libxxf86vm-devel alsa-lib-devel pkg-config
```
##### Arch
```bash
sudo pacman -S mesa libxrandr libxcursor libxinerama libxi pkg-config
```
##### Alpine
```bash
sudo apk add alsa-lib-dev libx11-dev libxrandr-dev libxcursor-dev libxinerama-dev libxi-dev mesa-dev pkgconf
```
#### FreeBSD
```bash
pkg install alsa-lib libxcursor libxi libxinerama libxrandr mesa-libs pkgconf
```

## 安装Golang
~~没有的话还是建议remake.~~  
如果还没安装的话,可以到[golang.google.cn/dl](https://golang.google.cn/dl/)(国内镜像)或[go.dev/dl](https://go.dev/dl/)(全球)下载.  
建议直接装最新版本,因为 Ebiten 向上兼容.  

:::提醒

Ebiten v2.2.5 要求最低Go版本: 1.1..

:::

## 下载Ebiten库

```bash
go get github.com/hajimehoshi/ebiten/v2
```
:::笔记

这里一定不要漏掉最后的`v2`,否则就会安装Ebiten v1.12.

:::

## 测试安装
运行以下指令,测试安装是否成功.
```bash
go run -tags=example github.com/hajimehoshi/ebiten/v2/examples/rotate
```
当你的屏幕上出现了一个窗口,并显示下面这幅图片,证明Ebiten安装成功并可以成功编译运行`example/rotate`.

![test print](https://ebiten-zh.vercel.app/images/rotate.png)

end time: 2022-04-03 23:50