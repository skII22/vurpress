---
title: urlPattern配置规则
date: 2022-6-29
tags:
 - Mybatis
---



## 2.urlPattern配置规则：

### ①精确匹配：
·配置路径：@WebServLet（"/user/select"）
·访问路径：localhost：8080/web-demoluser/select
### ②目录匹配：
·配置路径：@WebservLet（"/user/*"）
·访问路径：
localhost：8080/web-demd/user/aaa
localhost：8080/web-demo/user/bbb
### ③扩展名匹配：
·配置路径：@WebServlet（“*.do"）
·访问路径：
localhost：8080/web-dem/aaa.dol
localhost：8080/web-demo/bbb.do

### ④任意匹配：
@WebServlet（"/"）
·配置路径：@WebServLet（"/*"）localhost：8080/web-dem/hehel
·访问路径：
localhost：8080/web-demo/hahal
## /和/*区别：
-------->当我们的项目中的Servlet配置了"/”，会覆盖掉tomcat中的DefaultServlet，当其他的url-pattern都匹配不上时都会走这个Servlet
------>当我们的项目中配置了“/*”，意味着匹配任意访问路径
优先级：
精确路径>目录路径>扩展名路径>/*>/
