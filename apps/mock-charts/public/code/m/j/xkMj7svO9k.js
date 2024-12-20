var porfessor_data = [
    {
        value: 796,
        name: '一级正教授',
        type: '正教授',
    },
    {
        value: 1475,
        name: '二级正教授',
        type: '正教授',
    },
    {
        value: 301,
        name: '三级正教授',
        type: '正教授',
    },
    {
        value: 347,
        name: '四级正教授',
        type: '正教授',
    },
    {
        value: 1234,
        name: '一级副教授',
        type: '副教授',
    },
    {
        value: 213,
        name: '二级副教授',
        type: '副教授',
    },
    {
        value: 213,
        name: '三级副教授',
        type: '副教授',
    },
];
var data = [
    {
        value: 60,
        name: '正教授',
    },
    {
        value: 40,
        name: '副教授',
    },
];
var porfessor_total = 0; // 教授总数
porfessor_data.forEach((item) => (porfessor_total += item.value));
var colorList = ['#1a9dff', '#ffa93b'];
var colorList1 = ['#1a9dff', '#1a9dff', '#1a9dff', '#1a9dff', '#ffa93b', '#ffa93b', '#ffa93b'];

option = {
    backgroundColor: '#fff',
    color: ['#7A8FFF', '#50E696', '#28D278', '#FFD341', '#FFD29D', '#B797FF'],
    // title: {
    //     itemGap: 10,
    //     text: '学生总数',
    //     subtext: porfessor_total,
    //     left: '30%',
    //     top: '44%',
    //     textAlign: 'center',
    //     textStyle: {
    //         fontWeight: '400',
    //         fontSize: 18,
    //         color: '#999'
    //     },
    //     subtextStyle: {
    //         fontFamily: 'Arial',
    //         fontWeight: '400',
    //         fontSize: 40,
    //         color: '#111',
    //     }
    // },
    // tooltip: {
    //     trigger: 'item',
    //     formatter: '{a} <br/>{b} : {c} 人',
    //     backgroundColor: "rgba(0,0,0,0.6)",
    //     borderColor: "rgba(0,0,0,0.6)",
    //     padding: 15,
    //     textStyle: {
    //         color: "#fff",
    //         fontSize: 14,
    //         fontWeight: "300",
    //     },
    // },
    legend: {
        itemGap: 40,
        icon: 'circle',
        type: 'scroll',
        orient: 'vertical',
        right: 50,
        top: 'center',
        textStyle: {
            // color: '#77899c',
            rich: {
                // a（系列名称），b（数据项名称），c（数值）, d（百分比）
                a: {
                    color: '#333',
                    width: 70,
                },
                b: {
                    color: '#333',
                    width: 40,
                    align: 'right',
                },
                c: {
                    color: '#333',
                    width: 60,
                    align: 'right',
                },
            },
        },
        formatter: function (name) {
            let target;
            for (let i = 0; i < porfessor_data.length; i++) {
                if (porfessor_data[i].name == name) {
                    target = porfessor_data[i].value;
                }
            }
            return `{a|${name}}{c|${target} 人} {b|${((target / porfessor_total) * 100).toFixed(2) + '%'}}`;
        },
    },
    series: [
        {
            name: '整体分类',
            type: 'pie',
            radius: ['15%', '30%'],
            label: {
                show: false,
                // position: 'center',
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            selectedMode: 'single',
            data: data,
        },
        {
            name: '细节分类',
            type: 'pie',
            radius: ['40%', '55%'],
            roseType: 'radius',
            label: {
            show: false,
            position: 'center'
        },
            itemStyle: {
                normal: {
                    // color: function (params) {
                    //     console.log(params);
                    //     for (i = 0; i < porfessor_data.length; i++) {
                    //         if (porfessor_data[i].index === 0) {
                    //             return colorList[0];
                    //         } else {
                    //             return colorList[1];
                    //         }
                    //     }
                    // },
                    color: function (params) {
                        return colorList1[params.dataIndex];
                    },
                    // color: function (params) {
                    //     if (params.type == '正教授') {
                    //         return colorList[0];
                    //     }else {
                    //         return colorList[1];
                    //     }
                    // },
                },
            },
            // label: {
            //     show: false,
            //     normal: {
            //         position: 'center',
            //         formatter: function (params) {
            //             // if (params.value !== 0) return params.data.type + '   ' + params.value + '人' +  '   ' +params.percent + '% ;
            //             if (params.value !== 0)
            //                 return params.data.type + ':' + params.value + '人' + params.percent + '%';
            //             else return '';
            //         },
            //         show: true,
            //     },
            // },
            data: porfessor_data,
        },
    ],
};
