app.title = '最强NBA球星关系图谱';

myChart.showLoading();

var uploadedDataURL = "/asset/get/s/data-1564734496501-c_dVbaKpE.js";


var setData = function(webkitDep) {
    myChart.hideLoading();

    option = {
        legend: {
            data: ['PG', 'SG', 'SF', 'PF', 'C']
        },
        series: [{
            type: 'graph',
            layout: 'force',
            animation: true,
            symbolSize: function(value, params) {
                return value * 2;
            },
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    formatter: '{b}'
                }
            },
            draggable: true,
            data: webkitDep.nodes,
            categories: webkitDep.categories,
            force: {
                initLayout: 'circular', //环形布局
                repulsion: 200,
                edgeLength: 100,
                gravity: 0.1,
                roam: true,
            },
            edges: webkitDep.links
        }]
    };
    myChart.setOption(option);
}

setData(webkitDep);