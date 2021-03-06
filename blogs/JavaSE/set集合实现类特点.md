---
title: set的区别
date: 2022-6-30
tags:
 - Java
categories:
 -  Java
---



## 区别：

Hashset：无序、不重复、无索引。
LinkedHashset：有序、不重复、无索引。
TreeSet：排序、不重复、无索引。
Set集合的功能上基本上与Collection的API一致。

## 哈希表的组成
·JDK8之前的，底层使用数组+链表组成
·JDK8开始后，底层采用数组+链表+红黑树组成。

## HashSet原理解析
①创建一个默认长度16的数组，数组名table
②根据元素的哈希值跟数组的长度求余计算出应存入的位置（哈希算法）
③判断当前位置是否为null，如果是null直接存入
④如果位置不为null，表示有元素，则调用equals方法比较
⑤如果一样，则不存，如果不一样，则存入数组，
·JDK7新元素占老元素位置，指向老元素
·JDK8中新元素挂在老元素下面

## 哈希表的详细流程
①创建一个默认长度16，默认加载因为0.75的数组，数组名table
②根据元素的哈希值跟数组的长度求余计算出应存入的位置
③判断当前位置是否为null，如果是null直接存入，如果位置不为null，表示有元素，则调用equals方法比较属性值，如果一样，则不存，如果不一样，则存入数组。
④当数组存满到16*0.75=12时，就自动扩容，每次扩容原先的两倍
⑤如果一样，则不存，如果不一样，则存入数组，
结论：如果希望Set集合认为2个内容一样的对象是重复的，必须重写对象的hashCode（）和equals（）方法
因为如果不重写，相同的内容可能得到不同的Hash值，要定义相同的内容得到相同的Hash值，同时存储时还要再对比内容是否相同，相同则不插入，不相同向后接入链表

## TreeSet集合概述和特点
·不重复、无索引、可排序
·可排序：按照元素的大小默认升序（有小到大）排序。
·TreeSet集合底层是基于红黑树的数据结构实现排序的，增删改查性能都较好。
·注意：TreeSet集合是一定要排序的，可以将元素按照指定的规则进行排序。
想使用TreeSet存储自定义类型，需要自定义排序规则。


## 自定义排序规则
### ·TreeSet集合存储对象的的时候有2种方式可以设计自定义比较规则
方式一
·让自定义的类（如学生类）实现comparable接口重写里面的compareTo方法来定制比较规则。
方式二
·Treeset集合有参数构造器，可以设置comparator接口对应的比较器对象，来定制比较规则。

注意：如果TreeSet集合存储的对象有实现比较规则，集合也自带比较器，默认使用集合自带的比较器排序。

## 总结
### 1.如果希望元素可以重复，又有索引，索引查询要快？
·用ArrayList集合，基于数组的。（用的最多）
### 2.如果希望元素可以重复，又有索引，增删首尾操作快？
·用LinkedList集合，基于链表的。
### 3.如果希望增删改查都快，但是元素不重复、无序、无索引。
·用Hashset集合，基于哈希表的。
### 4.如果希望增删改查都快，但是元素不重复、有序、无索引。
·用LinkedHashset集合，基于哈希表和双链表。
### 5.如果要对对象进行排序。
·用Treeset集合，基于红黑树。后续也可以用List集合实现排序。
