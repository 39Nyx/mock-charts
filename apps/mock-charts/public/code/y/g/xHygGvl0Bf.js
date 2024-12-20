
placeHolderStyle = {
    normal: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },

};
option = {
    title:{
        show:true,
        text:'异常原因',
        left:400,
        top:150,
        textStyle:{
             fontSize:36,
             color:'#999999'
        }
       
    },
    backgroundColor: '#fff',
    color: ['#FF8700','#ffc300','#00e473','#009DFF'],
    tooltip: {
        trigger: 'item',
        formatter: "{a}:<br/>{b}(起)",

    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '12%',
        top: '25%',
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 100,
        textStyle: {
            color: '#000000',
            fontSize:18
        },
        data: ['未按规定公示年报', '通过登记的住所或经营场所无法联系',
        '公示信息隐瞒真实情况丶弄虚作假', '未按规定公示其他应当公示的信息']
    },
    series: [{
        name: '未按规定公示年报',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: ['55%', '60%'],
        center: [380, 420],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 20
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
              //  borderColor: "#FF8700",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 7.5,
            name: '44%'
        }, {
            value: 2.5,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '通过登记的住所或经营场所无法联系',
        type: 'pie',
        clockWise: false,
        radius: ['45%', '50%'],
        center: [380, 420],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
               // borderColor: "#ffc300",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 5,
            name: '27%'
        }, {
            value: 5,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name:'公示信息隐瞒真实情况丶弄虚作假',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: ['35%', '40%'],
        center: [380, 420],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                //borderColor: "#00e473",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 4,
            name: '26%'
        }, {
            value: 6,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '未按规定公示其他应当公示的信息',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: ['25%', '30%'],
        center: [380, 420],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 24
                    }
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
                shadowBlur: 40,
                //borderColor: "#009DFF",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 3,
            name: '13%'
        }, {
            value: 7,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }]
};