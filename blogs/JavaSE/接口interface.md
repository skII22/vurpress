---
date: 2022-6-30
tags:
 - Java
categories:
 -  Java
---



继承与接口的顺序
先继承再接口
接口可以多继承。
接口就是一种规范，
JDK1.8以前接口里面可以常量和抽象方法
JDK1.8新增默认方法，静态方法
JDK1.9才开始支持私有方法
静态方法不能用类名加"."访问，因为接口限制只能在接口内进行调用
为什么静态方法只能接口本身调用？
当一个类继承多个相同的接口时，如果直接调用相同的方法会报错，这就是为什么静态方法只允许接口本身才能调用接口中的方法


私有方法只能在接口内部进行访问

