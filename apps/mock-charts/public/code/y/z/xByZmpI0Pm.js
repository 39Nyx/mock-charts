option = {
    title : {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量'],
        right: '0%'
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['旧存','新收','结案','未结']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[19282, 32716, 24361, 20717],
        },
        {
            name:'降水量',
            type:'bar',
            data:[13752, 35000, 18000, 26900],
            barCategoryGap: '50%',
            markPoint : {
                data : [
                    {name : '年最高', value : '19.3% \n ▲', xAxis: 0, yAxis: 13752},
                    {name : '年最低', value : '5.8% \n ▼', xAxis: 1, yAxis: 35000},
                    {name : '年最高', value : '10.2% \n ▲', xAxis: 2, yAxis: 18000},
                    {name : '年最低', value : '10.2%\n ▼', xAxis: 3, yAxis: 26900}
                ]
            }
        }
    ]
};