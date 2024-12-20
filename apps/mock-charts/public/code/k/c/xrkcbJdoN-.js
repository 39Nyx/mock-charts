option = {
    title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['电话营销','邮件营销','联盟广告'],
            selected: {
                '电话营销': false,
                '邮件营销': true,
                '联盟广告': true
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'电话营销',
                type:'line',
                stack: '总量',
                data:[90, 12, 78, 99, 35, 321, 34]
            },
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            }
        ]
};

// 判断是否全部被取消选中
function isAllUnselected(selected){
    var selectedCount = 0;
    for ( var name in selected) {
        if (!selected.hasOwnProperty(name)) {
            continue;
        }

        // 所有 selected Object 里面 true 代表 selected， false 代表 unselected
        if (selected[name] === true) {
            ++selectedCount;
        }
    }
    return selectedCount===0;
}

// 获取全为false前的一个为true的元素
function getLast(selected){
    var selectedCount = 0;
    var trueArray = [];
    for ( var name in selected) {
        if (!selected.hasOwnProperty(name)) {
            continue;
        }
        // 将为true的加入到数组中
        if (selected[name] === true) {
            ++selectedCount;
            trueArray.push(name)
        }
    }
    // 只返回一个值即可
    return trueArray[0];
}
var lastName = '';
myChart.on('legendselectchanged', function (params) {
    var selected = params.selected;
    
    // 更新最后选中的元素
    var newlast = getLast(selected);
    lastName = !newlast? lastName : newlast ;
    
    if(isAllUnselected(selected)){
        alert("至少选中一个legend！");
        var dynamicSelected = {};
        dynamicSelected[lastName] = true;
        //重绘echarts
        myChart.setOption({legend:{
            selected:dynamicSelected
        }});
    }
    });