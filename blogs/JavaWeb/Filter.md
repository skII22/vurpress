---
date: 2022-6-29
tags:
 - JavaWeb
categories:
 -  Java
---



## Filter 拦截路径配置


Filter 可以根据需求，配置不同的拦截资源路径
@WebFilter（"/*"）
public class FilterDemo

> 拦截具体的资源：/index.jsp：只有访问index.jsp时才会被拦截。
目录拦截：/user/*：访问/user下的所有资源，都会被拦截
后缀名拦截：*.jsp：访问后缀名为jsp的资源，都会被拦截
拦截所有：/*：访问所有资源，都会被拦截
> 
> 

## Filter执行流程
放行后访问对应资源，资源访问完成后，还会回到Filter中吗？会
如果回到Filter中，是重头执行还是执行放行后的逻辑呢？
放行后逻辑：
执行放行前逻辑-------->放行---------->访问资源----------->执行放行后逻辑

**1.放行前，对request数据进行处理**
**2.放行后，response数据进行处理**
