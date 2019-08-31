
原项目
https://github.com/sivasamyk/logtrail

定制修改logtrail，插件名称更新为logtrail6

修改记录：
1、修改kibana/logtrail 目录为 kibana/logtrail6 
2、find . -type f |xargs grep logtrail 查看修改 
  修改kibana/logtrail6/package.json配置
  修改kibana/logtrail6/public/app.js  修改url地址

4、新旧项目同时导入kibana插件
bin/kibana-plugin remove logtrail
bin/kibana-plugin install file:///data/elk6_2/kibana/download/logtrail-0.1.30/logtrail-0.1.30.zip

bin/kibana-plugin remove logtrail6
bin/kibana-plugin install file:///data/elk6_2/kibana/download/logtrail6-0.6/logtrail6-0.6.zip

5、安装后的插件css js文件会被编译到 optimize/bundles/logtrail6 
[elk@harbor-efk kibana]$ ll optimize/bundles/logtrail6*
-rw-rw-r-- 1 elk elk 99029 Jan 18 10:11 optimize/bundles/logtrail6.bundle.js
-rw-rw-r-- 1 elk elk  1840 Jan 18 10:06 optimize/bundles/logtrail6.entry.js
-rw-rw-r-- 1 elk elk 10701 Jan 18 10:11 optimize/bundles/logtrail6.style.css

6、修改流程
   1、修改js 或者 css html等文件。
   2、在项目目录，zip文件。   
      rm -f logtrail6-0.6.zip   
	  zip logtrail6-0.6.zip -r kibana
   3、kibana-plugin remove logtrail6 
      kibana-plugin install file://... 

7、修改内容
   调整search长度，调整按钮摆放位置，调整colormapping颜色定义。
   利用keymap的配置项目定义的host对应日志的APP，
   增加一个level的全局查询条件：增加按钮，按钮事件，server端查询条件，返回的event增加字段，setting改变时清理初始化条件。
   
8、kibana 版本号适配
   需要调整 package.json 中 kibana 版本号