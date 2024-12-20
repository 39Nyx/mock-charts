option = {
    title: {
        text: '所有文章获赞数（共16篇）',
        //subtext: '南丁格尔玫瑰图',
        // 我的简书两月记：数据可视化
        // https://zhuanlan.zhihu.com/p/29833266
        x: 'center',
        //x: 'left',//'center',
        y: 60

    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            /*dataView: {
                show: true,
                readOnly: false
            },*/
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            /*restore: {
                show: true
            },*/
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '30%',
            center: ['50%', '50%'],
            data: [{
                value: '231',
                name: '简书推荐作者风云榜（爬取简书app数据）  231'
            } ,{
                value: '198',
                name: '你猜简书有多少名签约作者？  198'
            }, {
                value: '111',
                name: '爬取张佳玮138w+知乎关注者：数据可视化  111'
            }, {
                value: '97',
                name: '我的简书一月记：数据可视化  97'
            }, {
                value: '83',
                name: '简书=鸡汤？爬取今日看点数据：1916篇简书热门文章可视化  83'
            }, {
                value: '76',
                name: '爬取简书26万+用户信息：数据可视化  76'
            }, {
                value: '14',
                name: 'Gephi绘制微博转发图谱：以“@老婆孩子在天堂”为例  14'
            }, {
                value: '10',
                name: '大学两年读了200多本书，送你这28句话（下）  10'
            }, {
                value: '12',
                name: '爬取IP代理偷偷给文章刷阅读量  12'
            }, {
                value: '12',
                name: '（送福利）BDP绘制微博转发动态热力图  12'
            }, {
                value: '6',
                name: '大学两年读了200多本书，送你这28句话（上）  6'
            }, {
                value: '6',
                name: '爬取老树画画全部微博数据：三千诗与画  6'
            }, {
                value: '4',
                name: '《红楼梦》带给你的影响有多大？  4'
            }, {
                value: '4',
                name: '伤心桥下春波绿，曾是惊鸿照影来  4'
            }, {
                value: '3',
                name: '大学两年读了200多本书，送你这28句话（中）  3'
            }, {
                value: '3',
                name: '伊斯坦布尔的猫  3'
            }]
        }
        /*, {
                name: '面积模式',
                type: 'pie',
                radius: [30, 105],
                center: ['76%', '50%'],
                roseType: 'area',
                data: [{value:'198',name:'你猜简书有多少名签约作者？ 198'}, {value:'76',name:'爬取简书26万+用户信息：数据可视化 76'}, {value:'83',name:'简书=鸡汤？爬取今日看点数据：1916篇简书热门文章可视化 83'}, {value:'97',name:'我的简书一月记：数据可视化 97'}, {value:'231',name:'简书推荐作者风云榜（爬取简书app数据） 231'}, {value:'10',name:'大学两年读了200多本书，送你这28句话（下） 10'}, {value:'3',name:'大学两年读了200多本书，送你这28句话（中） 3'}, {value:'6',name:'大学两年读了200多本书，送你这28句话（上） 6'}, {value:'12',name:'爬取IP代理偷偷给文章刷阅读量 12'}, {value:'12',name:'（送福利）BDP绘制微博转发动态热力图 12'}, {value:'14',name:'Gephi绘制微博转发图谱：以“@老婆孩子在天堂”为例 14'}, {value:'4',name:'伤心桥下春波绿，曾是惊鸿照影来 4'}, {value:'3',name:'伊斯坦布尔的猫 3'}, {value:'6',name:'爬取老树画画全部微博数据：三千诗与画 6'}, {value:'4',name:'《红楼梦》带给你的影响有多大？ 4'}, {value:'111',name:'爬取张佳玮138w+知乎关注者：数据可视化 111'}]
            }*/
    ]
};