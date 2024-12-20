// var uploadedDataURL = "/asset/get/s/data-1539585554354-UC1-VtNE7.png";

// var uploadedDataURL = "/asset/get/s/data-1539585549697-eTqmHwOsZ.png";

// var uploadedDataURL = "/asset/get/s/data-1539585543337-_KGgCuqyx.png";

// var uploadedDataURL = "/asset/get/s/data-1539585535630-zaZPS7zDR.png";

// var uploadedDataURL = "/asset/get/s/data-1539585522931-t6-OAv3gC.png";
var richdata = {};
var countryFlags = {
    'f1': './asset/get/s/data-1539585554354-UC1-VtNE7.png',
    'f2': './asset/get/s/data-1539585549697-eTqmHwOsZ.png',
    'f3': './asset/get/s/data-1539585543337-_KGgCuqyx.png',
    'f4': './asset/get/s/data-1539585535630-zaZPS7zDR.png',
    'f5': './asset/get/s/data-1539585522931-t6-OAv3gC.png',
};
var arr = Object.keys(countryFlags);

for (let i in countryFlags) {
    // console.log(i); 
    // console.log(countryFlags[i]); 
    richdata[i] = {
        height: 50,
        align: 'center',
        backgroundColor: {
            image: countryFlags[i]
        }
    }
}

// console.log(JSON.stringify(richdata));


option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        //     data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            show: false
        },
        data: arr,
        // data: ['f1', 'f2', 'f3','f4','f5'],
        axisLabel: {
            formatter: function(value) {
                return '{' + value + '| }';
            },
            margin: 20,
            rich: richdata,
            // rich: {
            //     // value: {
            //     //     lineHeight: 30,
            //     //     align: 'center'
            //     // },
            //     f1: {
            //         height: 50,
            //         align: 'center',
            //         backgroundColor: {
            //             image: countryFlags.f1
            //         }
            //     },
            //     f2: {
            //          height: 50,
            //         align: 'center',
            //         backgroundColor: {
            //             image: countryFlags.f2
            //         }
            //     },
            //     f3: {
            //          height: 50,
            //         align: 'center',
            //         backgroundColor: {
            //             image: countryFlags.f3
            //         }
            //     },
            //     f4: {
            //          height: 50,
            //         align: 'center',
            //         backgroundColor: {
            //             image: countryFlags.f4
            //         }
            //     },
            //     f5: {
            //          height: 50,
            //         align: 'center',
            //         backgroundColor: {
            //             image: countryFlags.f5
            //         }
            //     }
            // }
        }
    }],
    xAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390]
    }]
};
// console.log(option.yAxis);