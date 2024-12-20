option = {
    title: {
        text: '英雄战力'
    },
    tooltip: {},
    legend: {
        data:  ['程咬金', '典韦', '廉颇', '刘婵', '项羽', '亚瑟',
        '钟无艳','庄周','东皇太一','苏烈','白起','牛魔王',
        '夏侯惇','张飞']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '生命', max: 4000},
           { name: '法力', max: 470},
           { name: '攻击', max: 180},
           { name: '法攻', max: 0},
           { name: '物防', max: 150},
           { name: '法防', max: 50}
        ]
    },
    series: [{
        name: '王者荣耀英雄战力',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [3437,0,161,0,125,50],
                name : '程咬金'
            },
             {
                value : [3434,430,168,0,89,50],
                name : '典韦'
            },
            {
                value : [3558,420,163,0,132,50],
                name : '廉颇'
            },
                
            {
                value : [3364,420,178,0,139,50],
                name : '刘婵'
            },
            {
               value  : [3062,420,157,0,103,50],
               name : '项羽'
            },
            {
                value : [3622,0,164,0,98,50],
                name : '亚瑟'
            },
            {
               value : [3150, 430, 164, 0, 100, 50],
               name : '钟无艳'
            },
            {
                value : [3146, 420, 170, 0, 150, 50],
                name : '庄周'
            },
            {
                value : [3201, 470, 163, 0, 99, 50],
                name : '东皇太一'
            },
            {
                value : [3436, 470, 171, 0, 86, 50],
                name : '苏烈'
            },
            {
                value : [3113, 420, 158, 0, 114, 50], 
                name : '白起'
            },
            {
                value : [3537, 470, 156, 0, 109, 50],
                name : '牛魔王'
            },
            {
                value : [3307, 430, 159, 0, 101, 50],
                name : '夏侯惇'
            },
            {
                value : [3450, 100, 153, 0, 125, 50],
                name : '张飞'

            }
      ]  
    }]
};

