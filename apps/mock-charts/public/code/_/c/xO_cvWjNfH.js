var uploadedDataURL = '/asset/get/s/data-1629680502980-OuuHcFujK.png';

var dataArry = ['标题', '标题', '标题', '标题', '标题'];
var dataCount = [-11, -33, -77, -39, -55];
var maxArr = new Array(dataCount.length).fill(-100);
option = {
    backgroundColor: '#0e1c47',
    grid: {
        show: 'true',
        borderWidth: '0',
        height: '80%',
        width: '60%',
        x: '20%',
        bottom: '5%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            return params[0].axisValue + '：' + -params[0].data + '个';
        },
    },
    xAxis: { show: false },
    yAxis: {
        type: 'category',
        boundaryGap: ['20%', '20%'],
        inverse: true, //让y轴数据逆向
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff', //y轴字体颜色
            },
            formatter: function (value, index) {
                return ['{icon|' + (index + 1) + '}  ' + '{title|' + value + '}  '].join('\n');
            },
            //定义富文本标签
            rich: {
                title: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 16,
                    align: 'center',
                    margin: 20,
                },
                icon: {
                    color: '#0b1f3a',
                    fontSize: 13,
                    backgroundColor: {
                        image: '/asset/get/s/data-1629680502980-OuuHcFujK.png', 
                        //在应用中，一般写成require("/asset/get/s/data-1629680502980-OuuHcFujK.png")
                        //当然。可以先试试不加require。如果写直接路径不行，还是加上
                    },
                    backgroundSize: 20,
                    width: 20,
                    height: 25,
                },
            },
        },
        splitLine: { show: false }, //横向的线
        axisTick: { show: false }, //y轴的端点
        axisLine: { show: false }, //y轴的线
        data: dataArry,
    },
    series: [
        {
            name: '数据内框',
            type: 'bar',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'insideRight', //在上方显示
                        formatter: function (params) {
                            if (params.name !== '') {
                                return -params.value + '个';
                            } else {
                                return '';
                            }
                        },
                        textStyle: {
                            //数值样式
                            color: '#FFFFFF',
                            fontSize: 16,
                        },
                    },
                    barBorderRadius: 0,
                    color: '#21dbff',
                },
            },
            barWidth: 35,
            data: dataCount,
        },
        {
            name: '外框',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: 'rgba(255, 255, 255, 0.14)', //rgba设置透明度0.14
                },
            },
            barGap: '-100%',
            z: 0,
            barWidth: 35,
            data: maxArr,
        },
    ],
};
