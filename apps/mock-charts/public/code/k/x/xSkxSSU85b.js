var uploadedDataURL = "/asset/get/s/data-1505284886122-SkAzQUUcZ.json";

function randomData() {
    return Math.round(Math.random() * 10000);
}


function showProvince() {
    var name = 'liaoning';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
           
           title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['iphone3', 'iphone4', 'iphone5']
            },
            dataRange: {
                min: 0,
                max: 2500,
                x: 'left',
                y: 'bottom',
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            roamController: {
                show: true,
                x: 'right',
                mapTypeControl: {
                    'china': true
                }
            },
            series: [{
                name: 'iphone3',
                type: 'map',
                mapType: 'liaoning',
                roam: false,
                itemStyle: {
                    normal: { label: { show: true} },
                    emphasis: { label: { show: true} }
                },
                data: [
                { name: '铁岭市', value: Math.round(Math.random() * 1000) },
                { name: '沈阳市', value: Math.round(Math.random() * 1000) },
                { name: '朝阳市', value: Math.round(Math.random() * 1000) },
                { name: '抚顺市', value: Math.round(Math.random() * 1000) },
                { name: '阜新市', value: Math.round(Math.random() * 1000) },
                { name: '葫芦岛市', value: Math.round(Math.random() * 1000) },
                { name: '锦州市', value: Math.round(Math.random() * 1000) },
                { name: '盘锦市', value: Math.round(Math.random() * 1000) },
                { name: '营口市', value: Math.round(Math.random() * 1000) },
                { name: '辽阳市', value: Math.round(Math.random() * 1000) },
                { name: '本溪市', value: Math.round(Math.random() * 1000) },
                { name: '丹东市', value: Math.round(Math.random() * 1000) },
                { name: '鞍山市', value: Math.round(Math.random() * 1000) }
                ]
            },
            {
                name: 'iphone4',
                type: 'map',
                mapType: 'liaoning',
                itemStyle: {
                    normal: { label: { show: true} },
                    emphasis: { label: { show: true} }
                },
                data: [
                    { name: '铁岭市', value: Math.round(Math.random() * 1000) },
                    { name: '沈阳市', value: Math.round(Math.random() * 1000) },
                    { name: '朝阳市', value: Math.round(Math.random() * 1000) },
                    { name: '抚顺市', value: Math.round(Math.random() * 1000) },
                    { name: '阜新市', value: Math.round(Math.random() * 1000) },
                    { name: '葫芦岛市', value: Math.round(Math.random() * 1000) },
                    { name: '锦州市', value: Math.round(Math.random() * 1000) },
                    { name: '盘锦市', value: Math.round(Math.random() * 1000) },
                    { name: '营口市', value: Math.round(Math.random() * 1000) },
                    { name: '辽阳市', value: Math.round(Math.random() * 1000) },
                    { name: '本溪市', value: Math.round(Math.random() * 1000) },
                    { name: '丹东市', value: Math.round(Math.random() * 1000) },
                    { name: '鞍山市', value: Math.round(Math.random() * 1000) }
                ]
            },
            {
                name: 'iphone5',
                type: 'map',
                mapType: 'liaoning',
                itemStyle: {
                    normal: { label: { show: true} },
                    emphasis: { label: { show: true} }
                },
                data: [
                   { name: '铁岭市', value: Math.round(Math.random() * 1000) },
                    { name: '沈阳市', value: Math.round(Math.random() * 1000) },
                    { name: '朝阳市', value: Math.round(Math.random() * 1000) },
                    { name: '抚顺市', value: Math.round(Math.random() * 1000) },
                    { name: '阜新市', value: Math.round(Math.random() * 1000) },
                    { name: '葫芦岛市', value: Math.round(Math.random() * 1000) },
                    { name: '锦州市', value: Math.round(Math.random() * 1000) },
                    { name: '盘锦市', value: Math.round(Math.random() * 1000) },
                    { name: '营口市', value: Math.round(Math.random() * 1000) },
                    { name: '辽阳市', value: Math.round(Math.random() * 1000) },
                    { name: '本溪市', value: Math.round(Math.random() * 1000) },
                    { name: '丹东市', value: Math.round(Math.random() * 1000) },
                    { name: '鞍山市', value: Math.round(Math.random() * 1000) }
                ]
            }]
            
        });
    });
}

var currentIdx = 0;

showProvince();