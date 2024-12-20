app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['东城区','西城区','朝阳区','海淀区','丰台区','石景山','门头沟','房山','通州','顺义']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:77, name:'东城区', selected:true},
                {value:78, name:'西城区'},
                {value:75, name:'朝阳区'}
            ]
        },
        {
            name:'PM2.5平均浓度值',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:72, name:'海淀区'},
                {value:79, name:'丰台区'},
                {value:78, name:'石景山'},
                {value:68, name:'门头沟'},
                {value:83, name:'房山'},
                {value:80, name:'通州'},
                {value:71, name:'顺义'},
                {value:89, name:'大兴'},
                {value:61, name:'昌平'},
                {value:70, name:'平谷'},
                {value:61, name:'怀柔'},
                {value:61, name:'密云'},
                {value:60, name:'延庆'},
                {value:81, name:'北京经技术开放区'},
            ]
        }
    ]
};