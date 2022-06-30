---
date: 2022-6-30
tags:
 - Java
categories:
 -  Java
---



## 饿汉和懒汉的区别是：

饿汉是需要创建对象前已经创建好，懒汉则是需要时才创建

## 懒汉单例static 
`public static test t = new test();`
`t1=test.t;`
## 饿汉单例static
需要将声明的对象,并且要私有化防止调用出错（使用test t1 =test.t）
`private sattic test t;`
设置一个get方法返回对象
`test t1=test.getT();`

## 注意：
1，静态方法只能访问静态的成员，不可以直接访问实例成员，如果访问需要间接创建对象访问。
2，实例方法可以访问静态的成员，也可以访问实例成员。
3，静态方法中是不可以出现this关键字的
