---
title: bean基础配置
date: 2022-6-28
tags:
 - SSM
---



## bean作用范围说明

·为什么bean默认为单例？
·适合交给容器进行管理的bean
■表现层对象■业务层对象■数据层对象
■工具对象
·不适合交给容器进行管理的bean
■封装实体的域对象

## 作用范围
`scope="prototype`
prototype 创建多个对象
single是仅创建一个对象，重复利用

## 基础配置
`<**property name="bookDao" ref="bookdao123"**>`
name 是 声明的private 对象 	ref 是 bean 的 id 
