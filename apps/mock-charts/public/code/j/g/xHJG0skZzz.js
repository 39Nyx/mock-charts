app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['教育局','教师','教材','国家','学生','学校']
    },
    series: [
        {
            name:'评论主体',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:124, name:'教育局'},
                {value:52, name:'教师'},
                {value:68, name:'教材'},
                {value:19, name:'国家'},
                {value:20, name:'学生'},
                {value:17, name:'学校'}
            ]
        }
    ]
};
