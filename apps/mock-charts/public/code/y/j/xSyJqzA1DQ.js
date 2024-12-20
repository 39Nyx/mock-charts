app.title = '极坐标系下的堆叠柱状图';

option = {
    backgroundColor:'',
    angleAxis: {
        type: 'category',
        data: ['2010', '2011','2012', '2013', '2014', '2015', '2016', '2017'],
        z: 10
    },
    radiusAxis: {
       max: 100,
    },
    polar: {
    },
    barWidth: 38,
    series: [
        
        {
        type: 'bar',
        data: [63.8, 73.5, 74.4, 66, 57.2, 57.5, 51.6,45.1],
        coordinateSystem: 'polar',
        name: '纸质',
         color:'#F2E6CE',
        stack: 'a'
    },
       {
        type: 'bar',
        data: [21.4, 11.8, 13.2, 15, 14.3, 10.2, 9.8,12.2],
        coordinateSystem: 'polar',
        name: '网络在线阅读',
         color:'#Fbb929',
        stack: 'a'
    },
    {
        type: 'bar',
        data: [1.7, 2.8, 1.3, 1, 1.6, 1.2, 1,1.4],
        coordinateSystem: 'polar',
        name: '其他',
         color:'#F7DA94',
        stack: 'a'
    },
       {
        type: 'bar',
        data: [13, 11.9, 11.2, 18, 26.9, 31.1, 37.6,41.3],
        coordinateSystem: 'polar',
        name: '移动端阅读',
        color:'#b5aa90',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['纸质', '网络在线阅读', '移动端阅读','其他']
    }
};