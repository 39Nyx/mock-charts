var height = document.querySelector('#chart-panel').offsetHeight;
var width = document.querySelector('#chart-panel').offsetWidth;
var radiusMax = width >=height ? height : widht;
var itemStyle = {
    normal: {
        color: new echarts.graphic.RadialGradient(width/2,height/2,radiusMax*0.3,[{
            offset:0,
            color:'rgba(23,193,249,1)'
        },{
            offset:1,
            color:'rgba(23,193,249,0.1)'
        }],true),
        borderWidth: 1,
        borderColor: '#235894'
    }
};
option = {
    title: {
        text: '饼图纹理',
        textStyle: {
            color: '#235894'
        }
    },
    tooltip: {},
    series: [{
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 10,
        clockwise: true,
        label: {
            normal: {
                textStyle: {
                    fontSize: 18,
                    color: '#235894'
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#235894'
                }
            }
        },
        data:[
            {value:335, name:'直接访问',selected:true},
            {value:310, name:'邮件营销',selected:true},
            {value:234, name:'联盟广告',selected:true},
            {value:135, name:'视频广告',selected:true},
            {value:1548, name:'搜索引擎',selected:true}
        ],
        itemStyle: itemStyle
    }]
};