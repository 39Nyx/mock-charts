var data= {
	"nodes": [{
		"name": "预审"
	},
	{
		"name": "提单"
	},
	{
		"name": "机审"
	},
	{
		"name": "电核岗"
	},
	{
		"name": "模型"
	},
	{
		"name": "终审"
	},
	{
		"name": "通过"
	},
	{
		"name": "未通过"
	}],
	"links": [{
		"source": "预审",
		"target": "提单",
		"value": 2500
	},
	{
		"source": "预审",
		"target": "未通过",
		"value": 600
	},
	{
		"source": "提单",
		"target": "机审",
		"value": 1500	
	},
	{
		"source": "提单",
		"target": "电核岗",
		"value": 900
	},
	{
		"source": "提单",
		"target": "未通过",
		"value": 100
	},
	{
		"source": "机审",
		"target": "通过",
		"value": 1000
	},
	{
		"source": "机审",
		"target": "未通过",
		"value": 500
	},
	{
		"source": "电核岗",
		"target": "终审",
		"value": 300
	},
	{
		"source": "电核岗",
		"target": "未通过",
		"value": 300
	},
	{
		"source": "电核岗",
		"target": "模型",
		"value": 300
	},
	{
		"source": "模型",
		"target": "通过",
		"value": 200
	},
	{
		"source": "模型",
		"target": "未通过",
		"value": 100
	},
	{
		"source": "终审",
		"target": "通过",
		"value": 200
	},
	{
		"source": "终审",
		"target": "未通过",
		"value": 100
	}]
};
myChart.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'

        },
        series: [
            {
                type: 'sankey',
                layout:'none',
                data: data.nodes,
                links: data.links,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ]
    });