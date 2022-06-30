---
date: 2022-6-20
tags:
 - Linux
categories:
 -  Linux
---



# Linux 下定时执行shell

安装 crontab

Yum install crontabs 

\#创建一个shell脚本

touch a.sh

\#修改shell内容或者直接 vim a.sh直接创建并修改

vi a.sh

\#修改权限，否则无法正常运行

Chmod 777 a.sh

\#设置定时任务执行sh 文件

Crontab -e

\#重新加载crontab 配置

Systemctl reload crontab

\#重新启动crontab

Systemctl restart crontab

\#查看配置的定时器

Crontab -l

\#定时器规制

\* * * * * /home/a.sh

分 时 日 月 周 命令文件路径

 

 

 

 