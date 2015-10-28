## 绿色村镇体系数据库数据输入框架

启动这个应用（MacOS 或 Linux 平台）：

> $ DEBUG=myapp npm start

Windows 平台使用如下命令：

> set DEBUG=myapp & npm start

## URL流程
![url流程](https://raw.githubusercontent.com/liu946/lvsecunzhen/master/doc/img/url.jpg)

## 2015年10月28日 修改需求注意
1. 类型time2005改为time2000
2. select1-5 类型改为单选，后台保存字符串
格式举例
``` js
{
    "fieldname": "居民对道路交通设施满意度",
    "options":{1:"满意",2:"比较满意",3:"一般满意",4:'比较不满意',5:'不满意'},
    "datatype": "select1-5",
    "field": "JiMinDuiDaoLuJiaoTongSheShiManYiDu"
},
```
3.