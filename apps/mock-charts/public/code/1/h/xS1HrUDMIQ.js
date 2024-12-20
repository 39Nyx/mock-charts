option = {
    backgroundColor: '#1B2D3B',
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center',
        textStyle: {
            //文字颜色
            color: 'white',
            // //字体风格,'normal','italic','oblique'
            // fontStyle:'normal',
            // //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            // fontWeight:'bold',
            // //字体系列
            // fontFamily:'sans-serif'
            // //字体大小
            // fontSize:18
        },
        subtextStyle: {}, //与textStyle类似
    },
    color: ['#4472C4', '#39E7FB', '#FAC901'], //饼图颜色


    /*
    tooltip为提示框组件,trigger为触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
    'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。

    formatter:折线（区域）图、柱状（条形）图、K线图: {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
              散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
              地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
              饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）

    如此例子,a代表series的name:访问来源,  b代表data的name,  c代表data的value  d代表所占比例
     */

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    //legend为图例,x,y设置其位置,textStyle可设置字体颜色大小等等,data需与series的dataname一致
    //默认横向布局horizontal，纵向布局值为'vertical'
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'top',
        data: ['直接访问', '邮件营销', '联盟广告'],
        textStyle: {
            color: 'white'
        }
    },

    //center:饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
    //radius://饼图的半径，数组的第一项是内半径，第二项是外半径。也支持设置成百分比
    //itemStyle:图形样式,比如鼠标移到图标上会显示数据等
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
                value: 335,
                name: '直接访问'
            },
            {
                value: 310,
                name: '邮件营销'
            },
            {
                value: 234,
                name: '联盟广告'
            },
        ],
        itemStyle: {
            shadowBlur: 10, //图形阴影的模糊大小。
            shadowOffsetX: 0, //阴影水平方向上的偏移距离。
            shadowColor: 'rgba(0, 0, 0, 0.5)', //阴影颜色
            //上面这三项主要展示的是饼状图外围的阴影属性

        }
    }]
};