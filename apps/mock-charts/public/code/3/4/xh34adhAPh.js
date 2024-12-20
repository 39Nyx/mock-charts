option = {
    backgroundColor : '#000' ,
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    color:['#00A2FF', '#FF595B', '#FF9600', '#FFEF03','#00A2FF','#00A2FF'],
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 120,
            minSize: '50%',
            maxSize: '120%',
            width: '80%',
            sort: 'descending',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    fontSize: 12
                },
                emphasis: {
                    textStyle: {
                        fontSize: 14
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
            	 {
                	value: 120, 
                	name: '排行         坐标         达标作业         达标率',
                	label:{
                		fontSize:15,
                		fontWeight:'bold',
                	},
                },
                {value: 100, name: 'No.1     太原     89023.32亩     98.54%',},
                {value: 80, name: 'No.2    大同    7902.65亩    96.54%',},
                {value: 60, name: 'No.3   运城   6902.60亩   94.54%'},
                {value: 40, name: 'No.4  运城  6902.60亩  93.54%'},
                {value: 20, name: 'No.5 忻州 6902.60亩 92.98%'},    
            ]
        }
    ]
};