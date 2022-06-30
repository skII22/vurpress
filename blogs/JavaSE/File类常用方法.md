---
date: 2022-6-30
tags:
 - Java
categories:
 -  Java
---



## 判断获取文件信息

File f1 =new file(文件路径)；
#是文件还是文件家判断
`f1.isFile()`
`f1.isDirectory()`
#文件绝对路径
`f1.getAbsolutePath()`
#文件定义时使用的路径
`f1.getPath()`
#文件名，带后缀
`f1.getName()`
#文件大小，字节个数
`f1.length()`
#文件最后修改时间，（数据为毫秒数）
`f1.latModified()`
#文件或文件夹是否存在
`f1.exeists()`
## 创建，删除文件
File f2 =new File(不存在的文件或路径)
f2.createNewFile()创建文件
f2.mkdir() 创建单个不存在的文件
f2.mkdirs（）创建多个不存在的文件夹（多级创建）
f2.delete()删除文件或文件夹，不能删除非空文件夹，文件被占用依然可以删除。

String name=f1.list()
for each 循环遍历 name

File file =f1.listFile()

## listFiles方法注意事项：
1·当调用者不存在时，返回null
2·当调用者是一个文件时，返回null
3·当调用者是一个空文件夹时，返回一个长度为0的数组
4·当调用者是一个有内容的文件夹时，将里面所有文件和文件夹的路径放在File数组中返回
5·当调用者是一个有隐藏文件的文件夹时，将里面所有文件和文件夹的路径放在File数组中返回，包含隐藏内容

## 字符流字节流
字节流、字符流如何选择使用？
·字节流适合做一切文件数据的拷贝（音视频，文本）
·字节流不适合读取中文内容输出
·字符流适合做文本文件的操作（读，写）
