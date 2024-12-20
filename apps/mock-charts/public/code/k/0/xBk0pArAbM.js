option = {
    tooltip:{
        formatter:'{d}%',
        textStyle:{
            color:'#fff',
            fontSize:45,

        },
    },
    legend:{

        show:true,
        data:['学龄儿童','小学','初中','高中','中专和技术学校','大学专科','大学本科','硕士','博士','其他','文盲或半文盲',],
        y: 'middle',
        width:'45%',
        right: '15%',
        left:'50%',
        textStyle: {
            color: '#fff',
            fontSize: 60,
            width:100,
        },
        itemGap:60
    },


    series: [{
        type: 'pie',
        radius: ['50%', '95%'],
        color: ['#4f81bc', '#c0504e', '#9bbb5a', '#8165a2', '#4aacc5'],
        data: [{
            name: '学龄儿童',
            value: 20,
        },{
            name: '小学',
            value: 70,
        },{
            name: '初中',
            value: 500,
        },{
            name: '高中',
            value: 80,
        },{
            name: '中专和技术学校',
            value: 90,
        },{
            name: '大学专科',
            value: 40,
        },{
            name: '大学本科',
            value: 30,
        },{
            name: '硕士',
            value: 20,
        },{
            name: '博士',
            value: 20,
        },{
            name: '其他',
            value: 80,
        },{
            name: '文盲或半文盲',
            value: 50,
        },],
        label:{

            normal:{
                position:'inside',
                textStyle:{
                    color:'#000',
                    fontSize:45,

                },
                formatter:'{d}%',
            },

        },
        center:['21%','50%'],
    }]
};