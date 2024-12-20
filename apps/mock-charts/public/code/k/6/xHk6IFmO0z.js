var dataStyle = { //作用不明
    normal: {
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = { //作用不明  原来是这是pie图里面的
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
var option = {
    backgroundColor: '#fff', //图表的配置颜色
    color: ['#45e8bc', '#33d7fb','#ffdf34','#eeeeee'], //每一项对应的颜色
    tooltip : {  //提示框组件
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"  //正则设置格式
    },
    legend: {  //图例组件
        orient:'vertical', //图例的布局朝向
        x:400,  //图例的位置--离左边的距离
        y:50,  //图例的位置--离上边的距离
        itemGap:20, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
        data:['高血压','高血脂','高血糖','会员总数']
    },
    series : [  //系列列表
        {
            name:'高血压',  //名字--用于tooltip的显示
            type:'pie',    //类型--饼状图
            clockWise:false,   //饼图的扇区是否是顺时针排布。
            radius : [90,115], //饼图的半径，数组的第一项是内半径，第二项是外半径。 内半径是0就是一个真正的饼
            center:['30%', '50%'], //饼图片的中心
            itemStyle : dataStyle, //样式
            hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
            zlevel:2,
            data:[  //系列中的数据内容数组
                {
                    value:360,     //数据值总的值
                    name:'高血压'  //数据项名称。
                },
                {
                    value:60,     //剩下的值
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }

            ],
        },
        {
            name:'高血脂',
            type:'pie',
            clockWise:false,
            radius : [70, 90],
            center:['30%', '50%'], //饼图片的中心
            itemStyle : dataStyle,
            hoverAnimation: false,
            zlevel:100,
            data:[
                {
                    value:360,   //数据值总的值
                    name:'高血脂'
                },
                {
                    value:270,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'高血糖',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [50, 70],
            center:['30%', '50%'], //饼图片的中心
            itemStyle : dataStyle,

            data:[
                {
                    value:360,
                    name:'高血糖'
                },
                {
                    value:300,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'会员总数',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [90,115],
            center:['30%', '50%'], //饼图片的中心
            itemStyle : dataStyle,
            zlevel:1,
            data:[
                {
                    value:360,
                    name:'会员总数'
                },
                {
                    value:0,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ],
        },
    ]
};