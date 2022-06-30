---
date: 2022-6-29
tags:
 - Maven

---



**在pom.xml文件中添加一下内容**
`<build>`
`	<plugins>   `
`      <plugin>   `
`        <groupId>org.apache.maven.plugins</groupId>   `
`        <artifactId>maven-surefire-plugin</artifactId>   `
`        <version>2.4.2</version>   `
`        <configuration>   `
`          <skipTests>true</skipTests>   <!--！！！-->`
`        </configuration> `  
`      </plugin>  ` 
`</plugins> `
`	</build>`
