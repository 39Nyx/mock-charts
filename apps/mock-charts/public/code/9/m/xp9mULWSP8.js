// 数据来源于https://www.zhihu.com/question/342932131
let data={
    nodes:[{
        name: '司马睿'
    }, {
        name: '司马觐'
    }, {
        name: '司马懿'
    }, {
        name: '夏侯渊'
    }, {
        name: '汉献帝'
    }, {
        name: '袁耀'
    }, {
        name: '孙和'
    }, {
        name: '张昭'
    },{
        name: '周瑜'
    }, {
        name: '袁术'
    },  {
        name: '诸葛亮'
    }, {
        name: '孙匡'
    }, {
        name: '曹操'
    }, {
        name: '孙权'
    }, {
        name: '张承'
    }, {
        name: '诸葛诞'
    }, {
        name: '陆逊'
    }, {
        name: '诸葛瑾'
    }, {
        name: '张飞'
    }, {
        name: '杨修'
    }, {
        name: '汉少帝'
    }, {
        name: '何晏'
    }, {
        name: '孙鲁班'
    }, {
        name: '夏侯惇'
    }, {
        name: '刘禅'
    }, {
        name: '吕布'
    }, {
        name: '孙策'
    }, {
        name: '袁谭'
    }, {
        name: '汉灵帝'
    }, {
        name: '袁绍'
    }, {
        name: '陆抗'
    }, {
        name: '刘备'
    }, {
        name: '庞统'
    }, {
        name: '何进'
    }, {
        name: '刘表'
    }],
    links:[{
        source: '司马睿',
        target: '司马觐',
        name: '父亲'
    }, {
        source: '司马睿',
        target: '司马懿',
        name: '爷爷'
    }, {
        source: '司马睿',
        target: '诸葛诞',
        name: '姥爷'
    }, {
        source: '诸葛诞',
        target: '诸葛亮',
        name: '族兄'
    }, {
        source: '诸葛亮',
        target: '刘表',
        name: '妻子的姨夫'
    }, {
        source: '诸葛亮',
        target: '庞统',
        name: '姐姐的小叔子'
    }, {
        source: '诸葛亮',
        target: '刘禅',
        name: '亲家'
    }, {
        source: '刘禅',
        target: '刘备',
        name: '父亲'
    }, {
        source: '刘禅',
        target: '张飞',
        name: '丈人'
    }, {
        source: '张飞',
        target: '夏侯渊',
        name: '丈人的哥哥'
    }, {
        source: '夏侯渊',
        target: '夏侯惇',
        name: '族兄'
    }, {
        source: '夏侯惇',
        target: '曹操',
        name: '亲家'
    }, {
        source: '曹操',
        target: '袁谭',
        name: '亲家'
    }, {
        source: '袁谭',
        target: '袁绍',
        name: '爹'
    }, {
        source: '袁绍',
        target: '袁术',
        name: '弟弟'
    }, {
        source: '袁术',
        target: '杨修',
        name: '外甥'
    }, {
        source: '袁术',
        target: '袁耀',
        name: '儿子'
    }, {
        source: '袁耀',
        target: '吕布',
        name: '丈人'
    }, {
        source: '袁耀',
        target: '孙权',
        name: '妹夫'
    }, {
        source: '孙权',
        target: '孙策',
        name: '哥哥'
    }, {
        source: '孙策',
        target: '陆逊',
        name: '女婿'
    }, {
        source: '陆逊',
        target: '陆抗',
        name: '儿子'
    }, {
        source: '陆抗',
        target: '张承',
        name: '丈人'
    }, {
        source: '张承',
        target: '张昭',
        name: '爹'
    }, {
        source: '张昭',
        target: '诸葛瑾',
        name: '亲家'
    }, {
        source: '诸葛瑾',
        target: '孙和',
        name: '外孙女婿'
    }, {
        source: '孙和',
        target: '孙鲁班',
        name: '妹妹'
    }, {
        source: '孙鲁班',
        target: '周瑜',
        name: '公公'
    }, {
        source: '孙鲁班',
        target: '孙匡',
        name: '叔叔'
    }, {
        source: '孙匡',
        target: '曹操',
        name: '丈人的哥哥'
    }, {
        source: '曹操',
        target: '何晏',
        name: '女婿'
    }, {
        source: '何晏',
        target: '何进',
        name: '爷爷'
    }, {
        source: '何进',
        target: '汉灵帝',
        name: '妹夫'
    }, {
        source: '汉灵帝',
        target: '汉少帝',
        name: '儿子'
    }, {
        source: '汉少帝',
        target: '汉献帝',
        name: '弟弟'
    }]
}




option = {
    title: {
        text: '三国人物关系图',
    },
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 58,
        draggable: true,
        roam: true,
        // focusNodeAdjacency: true,
        edgeSymbol: ['', 'arrow'],
        // edgeSymbolSize: [80, 10],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 16
                },
                formatter(x) {
                    return x.data.name;
                }
            }
        },
        label: {
            show: true
        },
        force: {
            repulsion: 2000,
            edgeLength: 200
        },
        data: data.nodes,
        links: data.links
    }]
}