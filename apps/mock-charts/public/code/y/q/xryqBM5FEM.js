option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            return params.name + " 累计注册 " + params.data.value + " 个,占比 " +
                params.percent + "%";
        }
    },
    series: [{
        name: '服务分组大类',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '50%'],
        label: {
            normal: {
                position: 'inner',
                   formatter: function(params, ticket, callback) {
                 return params.name+"\n\n"+params.percent + "%";
               }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        color:['#005ca5','#00d3ff'],
        data: [{
            "name": "邮件分类",
            "value": "20"
        }, {
            "name": "直达分类",
            "value": "60"
        }]
    }, {
        name: '分组小类',
        type: 'pie',
        radius: ['57%', '70%'],
              label: {
            normal: {
                position: 'inner',
                   formatter: function(params, ticket, callback) {
                 return params.name+"\n\n"+params.percent + "%";
               }
            }
        },
        color:['#00d3ff','#005ca5'],
        data: [{
            "name": "直达",
            "value": "60"
        }, {
            "name": "邮件营销",
            "value": "20"
        }]
    }]
};