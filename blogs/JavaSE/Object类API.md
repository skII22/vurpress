---
date: 2022-6-30
tags:
 - Java
categories:
 -  Java
---



## Object类 tostring方法作用是：

打印当前对象地址
让子类重写以返回对象的内容


## String Builder 
public StringBuilder append(任意类型)		字符串拼接
public StringBuilder reverse()		将对象内容反转
public int length()		返回对象内容长度
public String toString()		通过toString()就可以实现把StringBuilder转化为String

## 为什么拼接反转字符串建议使用StringBuilder？
因为String内容是不可变的，拼接能力差，每一次拼接或反转都需要创建一个新的对象，浪费资源
StringBuilder 则不会，一直都使用一个对象镜像操作，内容可变性能优秀

