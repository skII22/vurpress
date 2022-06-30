---
date: 2022-6-30
tags:
 - Java
categories:
 -  Java
---

## 创建对象

调用前先新建一个对象 new一下
`Arraylist arry =new Arraylist();`
定义时一般定义类型即泛型<>只存储相应类型 的值
## 常用API接口
add()添加元素
get(index)获得索引的元素
size 获得集合的元素个数
用get进行for循环表里集合内容
array.remove(index)即进行删除元素操作，返回被删除元素的值
array.remove(元素值)成功会返回true失败返回false
remove删除有多个相同内容元素时，优先删除第一个
array.set(index,元素值) 进行更改元素值操作 返回被修改的元素值

## ArrayList底层原理
第一次创建集合并添加第一个元素的时候，
在底层创建一个默认长度为10的数组。当空间不够时1.5倍数进行扩容
