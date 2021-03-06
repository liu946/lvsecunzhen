var field = {
    "xiangzhen" : 
    {
        "classname": "乡镇数据",
        "childfield": [
            {
                "fieldname": "镇名称",
                "datatype": "varchar(100)",
                "field": "ZhenMingChen"
            },
            {
                "fieldname": "经济社会现状信息",
                "datatype": "null"
            },
            {
                "fieldname": "镇域人口",
                "datatype": "jsonstr",
                "type" : "time",
                "unit": "人",
                "field": "ZhenYuRenKou",
                'sign':'A1'
            },
            {
                "fieldname": "非农人口",
                "datatype": "jsonstr",
                "type" : "time",
                "unit": "人",
                "field": "FeiNongRenKou",
                'sign':'A2'
            },
            {
                "fieldname": "居民人均收入",
                "datatype": "jsonstr",
                "type" : "time2000",
                "unit": "元",
                "field": "JiMinRenJunShouRu",
                'sign':'A4'
            },
            {
                "fieldname": "玉米种植面积",
                "datatype": "double",
                "unit": "亩",
                "field": "YuMiZhongZhiMianJi",
                'sign':'A5'
            },
            {
                "fieldname": "水稻种植面积",
                "datatype": "double",
                "unit": "亩",
                "field": "ShuiDaoZhongZhiMianJi",
                'sign':'A6'
            },
            {
                "fieldname": "大豆种植面积",
                "datatype": "double",
                "unit": "亩",
                "field": "DaDouZhongZhiMianJi",
                'sign':'A7'
            },
            {
                "fieldname": "玉米产量",
                "datatype": "double",
                "unit": "吨",
                "field": "YuMiChanLiang",
                'sign':'A8'
            },
            {
                "fieldname": "水稻产量",
                "datatype": "double",
                "unit": "吨",
                "field": "ShuiDaoChanLiang",
                'sign':'A9'
            },
            {
                "fieldname": "大豆产量",
                "datatype": "double",
                "unit": "吨",
                "field": "DaDouChanLiang",
                'sign':'A10'
            },
            {
                "fieldname": "绿色无公害农产品种植面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "LvSeWuGongHaiNongChanPinZhongZhiMianJi",
                'sign':'A3'
            },
            {
                "fieldname": "一产GDP",
                "datatype": "double",
                "unit": "万元",
                "field": "YiChanGDP",
                'sign':'A11'
            },
            {
                "fieldname": "二产GDP",
                "datatype": "double",
                "unit": "万元",
                "field": "ErChanGDP",
                'sign':'A12'
            },
            {
                "fieldname": "三产GDP",
                "datatype": "double",
                "unit": "万元",
                "field": "SanChanGDP",
                'sign':'A13'
            },
            {
                "fieldname": "一产从业人员",
                "datatype": "int(11)",
                "unit": "人",
                "field": "YiChanCongYeRenYuan",
                'sign':'A14'
            },
            {
                "fieldname": "二产从业人员",
                "datatype": "int(11)",
                "unit": "人",
                "field": "ErChanCongYeRenYuan",
                'sign':'A15'
            },
            {
                "fieldname": "三产从业人员",
                "datatype": "int(11)",
                "unit": "人",
                "field": "SanChanCongYeRenYuan",
                'sign':'A16'
            },
            {
                "fieldname": "镇域道路总长度",
                "datatype": "int(11)",
                "unit": "公里",
                "field": "ZhenYuDaoLuZongChangDu",
                'sign':'A17'
            },
            {
                "fieldname": "镇域道路硬化长度",
                "datatype": "int(11)",
                "unit": "公里",
                "field": "ZhenYuDaoLuYingHuaChangDu",
                'sign':'A18'
            },
            {
                "fieldname": "村镇中学学校建筑总面积",
                "datatype": "int(11)",
                "unit": "平方米",
                "field": "CunZhenZhongXueXueXiaoJianZhuZongMianJi",
                'sign':'A19'
            },
            {
                "fieldname": "中学学生总人数",
                "datatype": "int(11)",
                "unit": "人",
                "field": "ZhongXueXueShengRenShu",
                'sign':'A20'
            },   
            {
                "fieldname": "村镇小学学校建筑总面积",
                "datatype": "int(11)",
                "unit": "平方米",
                "field": "CunZhenXiaoXueXueXiaoJianZhuZongMianJi",
                'sign':'A21'
            },
            {
                "fieldname": "小学学生总人数",
                "datatype": "int(11)",
                "unit": "人",
                "field": "XiaoXueXueShengRenShu",
                'sign':'A22'
            },
            {
                "fieldname": "村镇卫生设施建筑总面积",
                "datatype": "int(11)",
                "unit": "平方米",
                "field": "CunZhenWeiShengSheShiJianZhuZongMianJi",
                'sign':'A23'
            },      
            {
                "fieldname": "镇域千人病床数",
                "datatype": "double",
                "unit": "个",
                "field": "ZhenYuQianRenBingChuangShu",
                'sign':'A24'
            },
            {
                "fieldname": "土地利用现状信息",
                "datatype": "null"
            },
            {
                "fieldname": "镇域总用地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "ZhenYuYongDiZongMianJi",
                'sign':'A25'
            },
            {
                "fieldname": "耕地面积",
                "datatype": "jsonstr",
                "type" : "time",
                "unit": "公顷",
                "field": "GengDiMianJi",
                'sign':'A26'
            },
            {
                "fieldname": "林地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "LinDiMianJi",
                'sign':'A27'
            },
            {
                "fieldname": "园地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "YuanDiMianJi",
                'sign':'A28'
            },
            {
                "fieldname": "水域面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "ShuiYuMianJi",
                'sign':'A29'
            },
            {
                "fieldname": "交通用地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "JiaoTongYongDiMianJi",
                'sign':'A30'
            },
            {
                "fieldname": "建设用地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "JianSheYongDiMianJi",
                'sign':'A31'
            },
            {
                "fieldname": "自然保护区用地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "ZiRanBaoHuQuYongDiMianJi",
                'sign':'A32'
            },
            {
                "fieldname": "采矿用地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "CaiKuangYongDiMianJi",
                'sign':'A33'
            },
            {
                "fieldname": "自然保留地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "ZiRanBaoLiuDiMianJi",
                'sign':'A34'
            },
            {
                "fieldname": "特殊用地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "TeShuYongDiMianJi",
                'sign':'A35'
            },
            {
                "fieldname": "生态环境现状信息",
                "datatype": "null"
            },
            {
                "fieldname": "农用化肥施用总量",
                "datatype": "double",
                "unit": "吨/年",
                "field": "NongYongHuaFeiShiYongLiang",
                'sign':'A36'
            },
            {
                "fieldname": "生活污水处理率",
                "datatype": "double",
                "unit": "%",
                "field": "ShengHuoWuShuiChuLiLv",
                'sign':'A37'
            },
            {
                "fieldname": "年均降雨量",
                "datatype": "int(11)",
                "unit": "毫米/年",
                "field": "NianJunJiangYuLiang",
                'sign':'A38'
            },
            {
                "fieldname": "最高海拔",
                "datatype": "int(11)",
                "unit": "米",
                "field": "ZuiGaoHaiBa",
                'sign':'A39'
            },
            {
                "fieldname": "最低海拔",
                "datatype": "int(11)",
                "unit": "米",
                "field": "ZuiDiHaiBa",
                'sign':'A40'
            },
            {
                "fieldname": "灾害类型数",
                "datatype": "int(11)",
                "unit": "个",
                "field": "ZaiHaiLeiXingShu",
                'sign':'A41'
            },
            {
                "fieldname": "近五年灾害发生频率",
                "datatype": "int(11)",
                "unit": "次/年",
                "field": "JinWuNianZaiHaiFaShengPinLv",
                'sign':'A42'
            },
            {
                "fieldname": "年均降水量",
                "datatype": "int(11)",
                "unit": "毫米",
                "field": "NianJunJiangShuiLiang",
                'sign':'A43'
            },
            {
                "fieldname": "年均无霜期",
                "datatype": "int(11)",
                "unit": "天",
                "field": "NianJunWuShuangQi",
                'sign':'A44'
            },
            {
                "fieldname": "本地木本植物种类数",
                "datatype": "int(11)",
                "unit": "个",
                "field": "BenDiMuBenZhiWuZhongLeiShu",
                'sign':'A45'
            },
            {
                "fieldname": "总木本植物种类数",
                "datatype": "int(11)",
                "unit": "个",
                "field": "ZongMuBenZhiWuZhongLeiShu",
                'sign':'A46'
            },
            
        ],
        "class": "XiangZhen"
    },
    "zhenquhuocunzhuang":
    {
        "classname": "镇区/村庄",
        "childfield": [
            {
                "fieldname": "镇区/村庄",
                "datatype": "int(4)",
                "field": "ZhenQuHuoCunZhuang",
                "items":{"1":"镇区","2":"村庄"},
                'visible':false,
            },
            {
                "fieldname": "所属乡镇",
                "datatype": "int(11)",
                "type": "list",
                "field": "SuoShuXiangZhen",
                'visible':false,

            },
            {
                "fieldname": "名称",
                "datatype": "varchar(100)",
                "field": "MingChen",
                'visible':false,
            },
            {
                "fieldname": "基本信息",
                "cunzhuangfield":"村庄基本信息",
                "datatype": "null"
            },
            {
                "fieldname": "人口",
                "datatype": "jsonstr",
                "type": "time",
                "unit": "人",
                "field": "RenKou",
                'Bsign':'B1',
                'sign':'C17'
            },
            {
                "fieldname": "居民人均收入",
                "datatype": "double",
                "unit": "元/年",
                "field": "ZhenQuJiMinRenJunShouRu",
                'Bsign':'B2',
                'sign':'C18'
            },
            {
                "fieldname": "主要农作物种植面积",
                "showin":"cunzhuang",
                "datatype": "null"
            },
            {
                "fieldname":"玉米种植面积",
                "showin":"cunzhuang",
                "datatype":"double",
                "unit":"亩",
                "field":"YMChanLiang",
                'sign':'C14'
            },
            {
                "fieldname":"水稻种植面积",
                "showin":"cunzhuang",
                "datatype":"double",
                "unit":"亩",
                "field":"SDChanLiang",
                'sign':'C15'
            },
            {
                "fieldname":"大豆种植面积",
                "showin":"cunzhuang",
                "datatype":"double",
                "unit":"亩",
                "field":"DDChanLiang",
                'sign':'C16'
            },
            {

                "fieldname": "现状用地信息",
                "cunzhuangfield":"村庄居民点现状信息",
                "datatype": "null",
            },
            {
                "fieldname": "居住用地",
                "datatype": "double",
                "unit": "公顷",
                "field": "JuZhuYongDiZongMianJi",
                'Bsign':'B4',
                'sign':'C19'
            },
            {
                "fieldname": "公共设施用地",
                "datatype": "double",
                "unit": "公顷",
                "field": "GongGongSheShiYongDiZongMianJi",
                'Bsign':'B5',
                'sign':'C20'
            },
            {
                "fieldname": "文体科技用地",
                "showin":"zhenqu",
                "datatype": "int(11)",
                "unit": "公顷",
                "field": "WenTiSheShiJianZhuZongMianJi",
                'Bsign':'B3',
            },
            {
                "fieldname":"商业金融用地",
                "showin":"zhenqu",
                "datatype":"double",
                "unit":"公顷",
                "field":"ShangYeYongDiZongMianJi",
                'Bsign':'B11',
            },
            {
                "fieldname": "生产设施用地",
                "datatype": "double",
                "unit": "公顷",
                "field": "ShengChanSheShiYongDiZongMianJi",
                'Bsign':'B6',
                'sign':'C22'
            },
            {
                "fieldname":"对外交通用地",
                "showin":"zhenqu",
                "datatype":"double",
                "unit":"公顷",

                "field":"DuiWaiJiaoTongYongDiZongMianJi",
                'Bsign':'B8',
            },
            {
                "fieldname":"仓储用地",
                "showin":"zhenqu",
                "datatype":"double",
                "unit":"公顷",
                "field":"CangChuYongDiZongMianJi",
                'Bsign':'B7'
            },
            {
                "fieldname": "道路广场用地",
                "datatype": "double",
                "unit": "公顷",
                "field": "DaoLuGuangChangYongDiZongMianJi",
                'Bsign':'B9',
                'sign':'C21'
            },
            {
                "fieldname":"工程设施用地",
                "showin":"zhenqu",
                "datatype":"double",
                "unit":"公顷",
                "field":"GongChengSheShiYongDiZongMianJi",
                'Bsign':'B10'
            },
            {
                "fieldname": "绿地",
                "datatype": "double",
                "unit": "公顷",
                "field": "LvDiMianJi",
                'Bsign':'B13',
                'sign':'C23',
            },
            {
                "fieldname": "建设用地总面积",
                "cunzhuangfield":"村庄建设用地面积",
                "datatype": "double",
                "unit": "公顷",
                "field": "JianSheYongDiZongMianJi",
                'Bsign':'B12',
                'sign':'C25'
            },
            {
                "fieldname":"水域及其他用地",
                "showin":"cunzhuang",
                "datatype":"double",
                "unit":"公顷",
                "field":"SYMianJi",
                'sign':'C24',
                'visible':false
            },
            {
                "fieldname":"耕地面积",
                "showin":"cunzhuang",
                "datatype":"double",
                "unit":"公顷",
                "field":"ZJGDMianJi",
                'sign':'C26'
            },
            {
                "fieldname":"林地面积",
                "showin":"cunzhuang",
                "datatype":"double",
                "unit":"公顷",
                "field":"LDMianJi",
                'sign':'C27'
            },
            {
                "fieldname":"园地面积",
                "showin":"cunzhuang",
                "datatype":"double",
                "unit":"公顷",
                "field":"YDMianJi",
                'sign':'C28'
            },
            {
                "fieldname":"水域及其他用地",
                "showin":"cunzhuang",
                "datatype":"double",
                "unit":"公顷",
                "field":"SYJQTYDMianJi",
                'sign':'C29'
            },

        ],
        "class": "ZhenQuHuoCunZhuang"
    },
    "zhuhu":
    {
        "classname": "住户数据",
        "childfield": [
            {
                "fieldname": "问卷编号",
                "datatype": "int(11)",
                "field": "WenJuanBianHao"
            },
            {
                "fieldname": "所属村庄或镇区",
                "datatype": "selectint(11)",
                "type" : "list",
                "field": "SuoShuCunZhuangHuoZhenQu"
            },
            {
                "fieldname":'受访者户籍',
                "options":{"1":"城镇户口","2":"农村户口"},
                "datatype": "select1-5",
                "field":"huji",
                "sign":'D1'
            },
            {
                "fieldname":'受访者年龄',
                "options":{1:"20以下",2:"21-30",3:"31-40",4:"41-50",5:"50以上"},
                "datatype": "select1-5",
                "field":"nianling",
                "sign":'D2'
            },
            {
                "fieldname":'受访者性别',
                "options":{"1":"男","2":"女"},
                "datatype": "select1-5",
                "field":"xingbie",
                "sign":'D3'
            },
            {
                "fieldname":'受访者职业',
                "options":{ 
                    "1":"务农",
                    "2":"外出务工",
                    "3":"小个体",
                    "4":"政府公务员",
                    "5":"其他"
                },
                "datatype": "select1-5",
                "field":"zhiye",
                "sign":'D4'
            },
            {
                "fieldname":'受访者文化程度',
                "options":{
                    "1":"小学", 
                    "2":"初中", 
                    "3":"高中", 
                    "4":"大专", 
                    "5":"本科"

                },
                "datatype": "select1-5",
                "field":"wenhuachengdu",
                "sign":'D5'
            },
            {
                "fieldname":'家庭共有人数',
                "datatype": "int(11)",
                "unit": "",
                "field":"jiatinggongyou",
                "sign":'D6'
            },
            {
                "fieldname":'常年在家人数',
                "datatype": "int(11)",
                "unit": "",
                "field":"changnianzaijia",
                "sign":'D7'
            },
            {
                "fieldname":'外出务工人数',
                "datatype": "int(11)",
                "unit": "",
                "field":"waichuwugong",
                "sign":'D8'
            },
            {
                "fieldname":'家庭收入来源',
                "options":{

                    "1":"养殖业", 
                    "2":"种植业", 
                    "3":"副业",  
                    "4":"外出打工",    
                    "5":"经营小企业",
                    "6":'其他'

                },
                "datatype": "selectmult",
                "field":"shourulaiyuan",
                "sign":'D9'
            },
            {
                "fieldname":'家庭年毛收入',
                "datatype": "double",
                "unit": "万元",
                "field":"nianjunmaoshouru",
                "sign":'D10'
            },
            {
                "fieldname":'家庭年消费支出',
                "datatype": "double",
                "unit": "万元",
                "field":"xiaofeizhichu",
                "sign":'D11'
            },
            {
                "fieldname":'福利保障条件满意度',
                "options":{"1":"满意","2":"比较满意","3":"一般满意","4":'比较不满意',"5":'不满意'},
                "datatype": "select1-5",
                "field":"fulibaozhang",
                "sign":'D12'
            },
            {
                "fieldname":'空气质量满意程度',
                "options":{"1":"满意","2":"比较满意","3":"一般满意","4":'比较不满意',"5":'不满意'},
                "datatype": "select1-5",
                "field":"kongqizhiliang",
                "sign":'D13'
            },
            {
                "fieldname":'农田劳作出行距离',
                "datatype": "int(11)",
                "unit": "米",
                "field":"nongtianlaozuo",
                'sign':"D19"
            },
            {
                "fieldname":'年煤炭消耗',
                "datatype": "int(11)",
                "unit": "吨",
                "field":"nianmeitan",
                'sign':"D20"
            },
            {
                "fieldname":'年木柴秸秆消耗',
                "datatype": "int(11)",
                "unit": "吨",
                "field":"mucaijieganxiaohao",
                'sign':"D21"
            },
            {
                "fieldname":'主要外出交通方式',
                "options":{
                    "1":"公交车",
                    "2":"汽车",
                    "3":"电瓶车或摩托车",
                    "4":"自行车",
                    "5":"步行"
                },
                "datatype": "selectmult",
                "field":"waichujiaotongfangshi",
                'sign':"D22"
            },
            {
                "fieldname":'冬季供暖消耗量（折合标煤）',
                "datatype": "int(11)",
                "unit": "吨",
                "field":"dongjigongnuanxiaohao",
                'sign':"D23"
            },
            {
                "fieldname":'每月电费',
                "datatype": "int(11)",
                "unit": "元",
                "field":"meiyuedianfei",
                'sign':'D24'
            },
            {
                "fieldname":'所在地区是否存在水土流失情况',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"shuituliushi",
                'sign':"D25"
            },
            {
                "fieldname":'是否直接倾倒污水',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"zhijieqingdaowushui",
                'sign':'D26'
            },
            {
                "fieldname":'是否使用自来水',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"shiyongzilaishui",
                'sign':'D27'
            },
            {
                "fieldname":'我镇对外交通是否便利、通畅',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"duiwaijiaotongshifou",
                'sign':'D28'
            },
            {
                "fieldname":'对灾害预防及应对措施是否满意',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"zaihaiyufang",
                "sign":'D29'
            },
            {
                "fieldname":'周边环境是否对您有影响',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"zhoubianhuanjing",
                "sign":'D30'
            },
            {
                "fieldname":'家附近是否有垃圾箱（房）',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"lajixiang",
                'sign':'D31'
            },
            {
                "fieldname":'供水情况是否满意',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"gongshuiqingkuang",
                'sign':'D32'
            },
            {
                "fieldname":'下雨时是否有内涝',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"xiayu",
                "sign":'D33'
            },
            {
                "fieldname":'教育条件是否满意',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"jiaoyutiaojian",
                'sign':'D34'
            },
            {
                "fieldname":'医疗条件是否满意',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"yiliaotiaojian",
                'sign':'D35'
            },
            {
                "fieldname":'道路都存在哪些问题',
                "options":{
                    "1":"雨天道路泥泞",
                    "2":"道路缺少路灯",
                    "3":"沥青硬化路面少",
                    "4":"部分地区未通道路",
                    "5":"冬季积雪阻塞",
                    "6":"冬季路滑",
                    "7":"冬季交通事故多"
                },
                "datatype": "selectmult",
                "field":"daoludoucunzai",
                "sign":'D36'
            },
            {
                "fieldname":'希望增加哪些设施',
                "options":{"1":"运动健身","2":"文化娱乐","3":"休闲活动"},
                "datatype": "selectmult",
                "field":"xiwangzengjia",
                "sign":'D37'
            },
            {
                "fieldname":'希望增加哪些商业服务设施',
                "options":{

                    "1":"集市",   
                    "2":"零售商业",   
                    "3":"农产品与生产资料市场",
                    "4":"小型金融网点",  
                    "5":"服务类商业"

                },
                "datatype": "selectmult",
                "field":"shangyefuwu",
                "sign":'D38'
            },
            {
                "fieldname":'种子饲料在哪购买',
                "options":{

                    "1":"村",
                    "2":"镇区",
                    "3":"县市",
                    "4":"其他"

                },
                "datatype": "select1-5",
                "field":"zongzisiliao",
                "sign":'D39'
            },
            {
                "fieldname":'供水状况存在哪些问题',
                "options":{

                        "1":"供水间断",   
                        "2":"供水管线受损断裂",   
                        "3":"冬季供水管冻裂",
                        "4":"部分人家没有供水管线",   
                        "5":"水质污浊",
                        "6":"无问题"

                },
                "datatype": "selectmult",
                "field":"gongshuiqingkuangcunzaiwenti",
                "sign":'D40'
            },
            {
                "fieldname":'做饭采用的燃料形式',
                "options":{
                    
                    "1":"燃气管道",  
                    "2":"沼气", 
                    "3":"木柴", 
                    "4":"秸秆",
                    "5":"煤气罐",
                    "6":"电器"

                },
                "datatype": "selectmult",
                "field":"zuofanranliaoxingshi",
                "sign":'D41'
            },
            {
                "fieldname":'污水处理方式',
                "options":{
                    
                    "1":"污水排放系统",  
                    "2":"渗水池",  
                    "3":"倒院内",  
                    "4":"倒街道",  
                    "5":"街道明沟",   
                    "6":"其他"

                },
                "datatype": "select1-5",
                "field":"wushuichulifangshi",
                "sign":'D42'
            },
            {
                "fieldname":'粪便如何处理',
                "options":{
                    "1":"直接排入村镇污水管网系统",    
                    "2":"与沼气池联通",    
                    "3":"自己运至耕地",    
                    "4":"其他"
                },
                "datatype": "select1-5",
                "field":"fenbian",
                "sign":'D43'
            },
            {
                "fieldname":'农产品剩余物是否有效利用',
                "options":{"1":"是","2":"否"},
                "datatype": "select1-5",
                "field":"nongchanpinshengyu",
                'sign':'D44'
            },
            
        ],
        "class": "ZhuHu"
    }
};

module.exports = field;
