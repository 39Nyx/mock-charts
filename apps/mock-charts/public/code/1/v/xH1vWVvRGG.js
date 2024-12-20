option = {
    title: {
        text: 'mobike中国大陆开通城市数据（单位：座）',
        subtext: '数据来源：mobike官方网站；截止日期：2017年12月25日',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['开通城市：165座，占比：56.12%', '未开通城市：129座，占比：43.88%', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
            value: 165,
            name: '开通城市：165座，占比：56.12%'
        }, {
            value: 129,
            name: '未开通城市：129座，占比：43.88%'
        }, ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};