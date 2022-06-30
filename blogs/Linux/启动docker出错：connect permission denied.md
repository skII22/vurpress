---
date: 2022-6-20
tags:
 - Linux
categories:
 -  Linux
---



# 启动docker出错：connect: permission denied



sudo gpasswd -a $USER docker   #将登陆用户加入到docker用户组中

newgrp docker   #更新用户组

docker ps -a  #测试docker命令是否可以使用sudo正常使用

![docker报错](https://s3.bmp.ovh/imgs/2022/06/30/6a252ea5a5a3e369.png)