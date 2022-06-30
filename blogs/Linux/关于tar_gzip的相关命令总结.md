---
title: tar_gzip相关命令
date: 2022-6-20
tags:
 - Linux
categories:
 -  Linux
---



tar -cvf xxx.tar xxx（绝对路径/被打包文件）
#将xxx文件打包为tar包

#tar -zcvf xxx.tar.gz xxx（绝对路径/被打包文件）
将xxx文件打包为tar包后再进行压缩

tar -xvf xxx.tar
#将xxx.tar文件的内容还原出来

tar -zxvf xxx.tar
#将xxx.tar.gz文件的内容还原出来


tar -tf tar文件
#查看tar包的内容

tar -r xxx.tar file 
#把file 加入 xxx.tar

tar --delete xxx.tar file
#把file 从 xxx.tar 里删除掉

#gzip 压缩	gunzip等价于gzip -d解压
#gzip 常用的参数
c v r f u
f(强制操作)
v（显示执行过程）
r(递归进行压缩，也就是一级一级向下执行)
c（执行压缩不对源文件进行操作，不加c参数一般会删除源文件）
Gzip只能进行单文件压缩，不能对文件夹进行压缩
u 在解压前删除需要重写的文件
