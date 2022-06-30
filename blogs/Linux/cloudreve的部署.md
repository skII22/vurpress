---
date: 2022-6-20
tags:
 - Linux
categories:
 -  Linux
---



# docker部署cloudreve

启动代码

`docker run -d --name cloudreve  -e PUID=0 -e PGID=0 -e TZ="Asia/Shanghai"  -p 5212:5212  --restart=unless-stopped  -v uploads:/cloudreve/uploads  -v config:/cloudreve/config  -v db:/cloudreve/db  -v avatar:/cloudreve/avatar  xavierniu/cloudreve`