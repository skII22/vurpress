---
date: 2022-6-29
tags:
 - JavaWeb
categories:
 -  Java
---



## 使用Document对象的方法来获取Element对象

*getELementById：根据id属性值获取，返回一个ELement对象
*getELementsByTagName：根据标签名称获取，返回ELement对象数组
*getELementsByName：根据name属性值获取，返回ELement对象数组
*getELementsByCLassName：根据cLass属性值获取，返回ELement对象数组

## 常见事务
onclick鼠标单击事件
onblur元素失去焦点
onfocus元素获得焦点
onloadI某个页面或图像被完成加载
onsubmit当表单提交时触发该事件
onsubmit:
return true对内容进行提交
return false 不对内容进行提交
onkeydown 某个键盘的键被按下
onmouseover鼠标被移到某元素之上
onmouseout 鼠标从某元素移开

## 正则表达式
## 定义：
1.直接量：注意不要加引号
`var reg = /^\w{6，12}$/；`
2.创建 RegExp对象
`var reg = new RegExp（"^\\w{6，12}$"）;`

### 语法：
^：表示开始·5：表示结束
[ ]：代表某个范围内的单个字符，比如：[0-9]单个数字字符
.：代表任意单个字符，除了换行和行结束符
\w：代表单词字符：字母、数字、下划线（_），相当于[A-Z a-z 0-9_]
\d：代表数字字符：相当于[0-9]
### 量词：
+：至少一个		`var reg=/^\w+$/；`
*：零个或多个·
？：零个或一个
{x}：x个
{m}：至少m个
{mn}：至少m个，最多n个










## JavaScript
### 引入方式
`<script> 代码 </script>`
`<script src="../js/demo.js"></script>`
使用window.alert（）写入警告框
使用document.write（）写入HTML输出
使用console.1og（）写入浏览器控制台
typeof 变量 查看变量的数据类型
-----------------------------------------------------------------------------------------------------------------
==和===：
==会进行类型转换，===不会进行类型转换
### 类型转换：
#### 其他类型转为数字：
1.string：将字符串字面值转为数字。如果字面值不是数字，则转为NaN。
一般使用parselnt方法进行转换
2.boolean:true转为1，false转为0
#### 其他类型转为boolean
1.number：0和NaN转为false，其他的数字转为true
2.string：空字符串转为false，其他字符串转为true
3.null：转为false
4.undefined：转为false
