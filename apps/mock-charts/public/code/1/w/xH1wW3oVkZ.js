
option = {
    title: {
        text: '参会人员省份分布',
        left: 'center'                 //标题位置
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['省份']             // 图例位置
    },
    visualMap: {
        min: 0,
        max: 770000,
        left: 'left',
        top: 'bottom',
        //color: ['red','yellow','lightskyblue'],
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },                     // 右侧工具栏
    series: [
        {
            name: '省份',
            type: 'map',
            mapType: 'china',
            roam: false,
            showLegendSymbol: false,     // 图例标点
            label: {
                normal: {
                    show: true          // 省会名称
                },
                emphasis: {
                    show: true          // 地图
                }
            },
            data:[
                 {name: '北京',value: 14144 },
                {name: '天津',value: 7974 },
                {name: '上海',value: 7754 },
                {name: '重庆',value: 4572 },
                {name: '河北',value: 7930 },
                {name: '河南',value: 7666 },
                {name: '云南',value: 4284 },
                {name: '辽宁',value: 765395 },
                {name: '黑龙江',value: 11546 },
                {name: '湖南',value: 4908 },
                {name: '安徽',value: 5328 },
                {name: '山东',value: 7986 },
                {name: '新疆',value: 4330 },
                {name: '江苏',value: 5944 },
                {name: '浙江',value: 5854 },
                {name: '江西',value: 4506 },
                {name: '湖北',value: 5022 },
                {name: '广西',value: 5140 },
                {name: '甘肃',value: 4164 },
                {name: '山西',value: 5268 },
                {name: '内蒙古',value: 7576 },
                {name: '陕西',value: 4712 },
                {name: '吉林',value: 25208 },
                {name: '福建',value: 4862 },
                {name: '贵州',value: 4222 },
                {name: '广东',value: 7070 },
                {name: '青海',value: 4066 },
                {name: '西藏',value: 1503 },
                {name: '四川',value: 4898 },
                {name: '宁夏',value: 4064 },
                {name: '海南',value: 4260 },
                {name: '台湾',value: 0 },
                {name: '香港',value: 0 },
                {name: '澳门',value: 0 }

            ]
        }
    ]
};
