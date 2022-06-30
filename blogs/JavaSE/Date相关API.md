---
title: Data相关Api
date: 2022-6-30
tags:
 - Java
categories:
 -  Java
---

## #将毫秒数据转换为标准时间格式

`SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(时间毫秒参数/m)`

### 创建对象，获取时间毫秒值
`Date date =new Date();`
`long time = date.getTime(0;`

### 时间毫秒值转换为时间对象
`Date d =new Date(time);`
`d.setTime(time);`



# SimpledateFormat      API
y	年
M	月
d	日
H	时
m	分
s	秒
EEE 星期
a 上下午
format 方法是将时间数据转换为规格的格式返回
parse （String）是将字符串解析生成时间数据
