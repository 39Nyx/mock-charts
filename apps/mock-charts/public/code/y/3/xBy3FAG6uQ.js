app.title = '嵌套环形图';

//使用formatter来获取data里面的数据并渲染到标签

option = {
    title : {
        text: '湖北省车辆占比',
        subtext: '纯属虚构',
        x:'center'
    },
    //tooltip: {
    //    trigger: 'item',
    //    formatter: "{a} <br/>{b}: {c} ({d}%)"
    //},
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['旅游客运','班线客运','普货','危险品']
    },
    series: [
        {
            name:'车辆占比',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter:function(a,b,c,d){
                        console.log(a)
                        return a.data.name+'\n'+a.data.value+"-"+a.data.id
                    },
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
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            data:[
                {value:348, name:'旅游客运',id:'12'},
                {value:251, name:'班线客运',id:'12'},
                {value:147, name:'普货',id:'12'},
                {value:102, name:'危险品',id:'12'}
            ]
        }
    ]
};