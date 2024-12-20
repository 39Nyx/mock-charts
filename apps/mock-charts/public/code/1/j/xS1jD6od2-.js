option = {
    title: {
        text: 'Top20 公司和职业',
        //爬取张佳玮138w+知乎关注者：数据可视化
        //https://zhuanlan.zhihu.com/p/28890605?refer=c_122608198
        //subtext: '南丁格尔玫瑰图',
        x: 'center',
        //x: 'left',//'center',
        y: 50

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
    series: [{
        name: '半径模式',
        type: 'pie',
        radius: [30, 105],
        center: ['30%', '50%'],
        roseType: 'radius',
        data: [{
            value: '184',
            name: '腾讯 184'
        }, {
            value: '149',
            name: '阿里巴巴集团 149'
        }, {
            value: '91',
            name: '百度 91'
        }, {
            value: '57',
            name: '谷歌 57'
        }, {
            value: '52',
            name: '网易 52'
        }, {
            value: '49',
            name: '知乎公共领域编辑计划 49'
        }, {
            value: '46',
            name: '知乎 46'
        }, {
            value: '42',
            name: 'Facebook 42'
        }, {
            value: '34',
            name: '微软 34'
        }, {
            value: '3',
            name: '银行 33'
        }, {
            value: '32',
            name: '华为 32'
        }, {
            value: '29',
            name: '小米科技 29'
        }, {
            value: '29',
            name: '美团网 29'
        }, {
            value: '25',
            name: '清华大学 25'
        }, {
            value: '22',
            name: '创业公司 22'
        }, {
            value: '21',
            name: '师事务所 21'
        }, {
            value: '20',
            name: '德勤 20'
        }, {
            value: '18',
            name: '微信 18'
        }, {
            value: '18',
            name: '今日头条 18'
        }, {
            value: '16',
            name: '奇虎360 16'
        }]
    }, {
        name: '面积模式',
        type: 'pie',
        radius: [30, 105],
        center: ['76%', '50%'],
        roseType: 'area',
        data: [{
            value: '322',
            name: '产品经理 322'
        }, {
            value: '163',
            name: '创始人 163'
        }, {
            value: '144',
            name: 'CEO 144'
        }, {
            value: '108',
            name: '软件工程师 108'
        }, {
            value: '102',
            name: '工程师 102'
        }, {
            value: '84',
            name: '联合创始人 84'
        }, {
            value: '74',
            name: '运营 74'
        }, {
            value: '72',
            name: '自由职业 72'
        }, {
            value: '67',
            name: '前端工程师 67'
        }, {
            value: '64',
            name: '律师 64'
        }, {
            value: '60',
            name: '程序员 60'
        }, {
            value: '58',
            name: '编辑 58'
        }, {
            value: '51',
            name: '教师 51'
        }, {
            value: '50',
            name: '志愿者 50'
        }, {
            value: '45',
            name: 'PM 45'
        }, {
            value: '45',
            name: '前端开发 45'
        }, {
            value: '40',
            name: '游戏策划 40'
        }, {
            value: '39',
            name: '记者 39'
        }, {
            value: '38',
            name: '设计师 38'
        }, {
            value: '36',
            name: '编剧 36'
        }]
    }]
};
