var uploadedDataURL = "/asset/get/s/data-1463034017417-BJFsgoWM.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function (rawData) {
    
    myChart.hideLoading();
    
    function convert(source, target, basePath) {
        for (var key in source) {
            var path = basePath ? (basePath + '.' + key) : key;
            if (key.match(/^\$/)) {

            }
            else {
                target.children = target.children || [];
                var child = {
                    name: path
                };
                target.children.push(child);
                convert(source[key], child, path);
            }
        }

        if (!target.children) {
            target.value = source.$count || 1;
        }
        else {
            target.children.push({
                name: basePath,
                value: source.$count
            });
        }
    }

    convert(rawData, data, '');
    
    myChart.setOption({
        title: {
            text: 'ECharts 配置项查询分布',
            subtext: '2016/04',
            left: 'leafDepth'
        },
        tooltip: {},
        series: [{
            name: 'option',
            type: 'treemap',
            visibleMin: 300,
            data: data.children,
            leafDepth: 2,
            levels: [
                {
                    itemStyle: {
                        normal: {
                            borderColor: '#333',
                            borderWidth: 1,
                            gapWidth: 1
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.6],
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    }
                }
            ]
        }]
    })
});