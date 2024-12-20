option = {
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 8,
        roam: false,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                distance: 5
            }
        },
        edgeSymbol: ['', 'arrow'],
        data: [
            {
                name: '智能工厂',
                x: 20,
                y: 50
            },{
                name: '工业软件',
                x: 10,
                y: 30
            }, {
                name: '运营管理类',
                x: -10,
                y: 10
            }, {
                name: '生产控制类',
                x: 10,
                y: 10
            }, {
                name: '研发设计类',
                x: 30,
                y: 10
            }
        ],
        links: [{
            source: '智能制造产业链',
            target: '自动化生产线'
        }, {
            source: '智能制造产业链',
            target: '智能工厂'
        }, {
            source: '自动化生产线',
            target: '自动化系统集成'
        }, {
            source: '自动化生产线',
            target: '自动化解决方案'
        }, {
            source: '智能工厂',
            target: '工业软件'
        }, {
            source: '智能工厂',
            target: '智能控制系统'
        }, {
            source: '工业软件',
            target: '运营管理类'
        }, {
            source: '工业软件',
            target: '生产控制类'
        }, {
            source: '工业软件',
            target: '研发设计类'
        }, {
            source: '运营管理类',
            target: 'ERP'
        }, {
            source: '运营管理类',
            target: 'CRM'
        }, {
            source: '运营管理类',
            target: 'QM'
        }, {
            source: '运营管理类',
            target: 'SCM'
        }, {
            source: '生产控制类',
            target: 'MES'
        }, {
            source: '生产控制类',
            target: 'SCADA'
        }, {
            source: '研发设计类',
            target: 'CAD'
        }, {
            source: '研发设计类',
            target: 'PPM'
        }, {
            source: '研发设计类',
            target: 'PLM'
        }]
    }]
}