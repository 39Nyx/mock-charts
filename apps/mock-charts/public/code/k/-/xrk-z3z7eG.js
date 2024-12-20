var uploadedDataURL = "/asset/get/s/data-1511365377294-SJK-szXeM.csv";

$.get(uploadedDataURL).then(function(res) {
    var data = [];
    res.split('\n').forEach(function(d) {
        data.push({
            value: d.split(',').map(function(i) {return +i})
        })
    })
    option = {
    tooltip: {},
    grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        viewControl: {
            // projection: 'orthographic'
        },
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'scatter3D',
        data: data,
        shading: 'lambert',
        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
}
})

