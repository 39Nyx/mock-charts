data = {
    '10.1.0.62->10.1.0.62': [
        ['2019-07-11T10:11:47', 1],
        ['2019-07-11T10:11:59', 1],
        ['2019-07-11T10:12:11', 1],
        ['2019-07-11T10:28:48', 1],
        ['2019-07-11T10:29:00', 1],
        ['2019-07-11T10:29:12', 1],
        ['2019-07-11T11:08:34', 1],
        ['2019-07-11T11:08:46', 1],
        ['2019-07-11T11:08:58', 1]
    ],
    '10.1.0.62->10.1.0.57': [
        ['2019-07-11T10:28:37', 1],
        ['2019-07-11T10:28:49', 1],
        ['2019-07-11T10:29:01', 1],
        ['2019-07-11T10:29:13', 1]
    ],

    '10.1.0.62->10.1.0.58': [
        ['2019-07-11T10:11:47', 1],
        ['2019-07-11T10:11:59', 1],
        ['2019-07-11T10:12:11', 1],
        ['2019-07-11T10:28:47', 1],
        ['2019-07-11T10:28:59', 1],
        ['2019-07-11T10:29:11', 1],
        ['2019-07-11T10:29:23', 1],
        ['2019-07-11T11:08:35', 1],
        ['2019-07-11T11:08:47', 1],
        ['2019-07-11T11:08:59', 1],
        ['2019-07-11T11:09:11', 1]
    ],

    '10.1.0.137->10.1.0.62': [
        ['2019-07-10T16:52:12', 1],
        ['2019-07-10T17:17:03', 1],
        ['2019-07-10T17:17:29', 1],
        ['2019-07-10T17:48:45', 1],
        ['2019-07-10T18:13:46', 1],
        ['2019-07-10T18:57:45', 1],
        ['2019-07-10T20:38:17', 1],
        ['2019-07-11T07:38:28', 1],
        ['2019-07-11T08:04:00', 1],
        ['2019-07-11T09:57:41', 1],
        ['2019-07-11T10:00:25', 1],
        ['2019-07-11T10:11:47', 1],
        ['2019-07-11T10:11:59', 1],
        ['2019-07-11T10:12:11', 1],
        ['2019-07-11T10:16:57', 1],
        ['2019-07-11T10:28:47', 1],
        ['2019-07-11T10:28:59', 1],
        ['2019-07-11T10:29:11', 1],
        ['2019-07-11T10:55:24', 1],
        ['2019-07-11T11:08:39', 1],
        ['2019-07-11T11:08:51', 1],
        ['2019-07-11T11:09:03', 1],
        ['2019-07-11T12:05:41', 1],
        ['2019-07-11T12:13:09', 1],
        ['2019-07-11T12:23:32', 1],
        ['2019-07-11T12:34:29', 1]
    ],
    '10.1.0.137->10.1.0.57': [
        ['2019-07-10T18:57:41', 1],
        ['2019-07-10T20:38:13', 1],
        ['2019-07-11T07:38:23', 1],
        ['2019-07-11T08:03:57', 1],
        ['2019-07-11T10:28:36', 1],
        ['2019-07-11T10:28:48', 1],
        ['2019-07-11T10:29:00', 1],
        ['2019-07-11T10:29:12', 1]
    ],
    '10.1.0.137->10.1.0.58': [
        ['2019-07-10T18:57:41', 1],
        ['2019-07-10T20:38:14', 1],
        ['2019-07-11T07:38:26', 1],
        ['2019-07-11T08:04:00', 1],
        ['2019-07-11T10:11:36', 1],
        ['2019-07-11T10:11:48', 1],
        ['2019-07-11T10:12:00', 1],
        ['2019-07-11T10:12:13', 1],
        ['2019-07-11T10:16:56', 1],
        ['2019-07-11T10:55:23', 1],
        ['2019-07-11T11:08:39', 1],
        ['2019-07-11T11:08:51', 1],
        ['2019-07-11T11:09:03', 1]
    ]

};

/**
data1 = (function() {
    let res = {};
    for (let key in data) {
        res[key] = [];
        tmp = '';
        for (let i in data[key]) {
            if ((data[key][i][0]).substr(0, 17) + '00' === tmp) {
                res[key][res[key].length - 1]++;
            } else {
                tmp = (data[key][i][0]).substr(0, 17) + '00';
                res[key].push([tmp, 1]);
            }
        }
    }
    return res;
})();
*/

data2 = (function() {
    let res = {};
    let val = 1;
    for (let key in data) {
        res[key] = [];
        for (let i in data[key]) {
            res[key].push([data[key][i][0], val]);
        }
        val++;
    }
    return res;
})();

option = {
    title: {
        text: 'time 散点图'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            let res = params[0].data[0] + '<br/>';
            for (var i = 0; i < params.length; i++) {
                res += params[i].seriesName + '<br/>';
            }
            return res;
        }
    },
    dataZoom: {},
    grid: {
        top: '15%'
    },
    xAxis: {
        type: 'time',
    },
    yAxis: {},
    legend: {
        top: '10%'
    },

    series: (function() {
        res = [];
        for (let key in data2) {
            res.push({
                type: 'scatter',
                areaStyle: {},
                barWidth: 4,
                name: key,
                //stack:1,
                data: data2[key]
            });
        }
        return res;
    })()
};