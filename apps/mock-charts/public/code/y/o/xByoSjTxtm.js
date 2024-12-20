option = {
          tooltip: {
            trigger: 'axis'
          },
          color:['#898CFD', '#FC8576', '#6AD77F', '#BD79FC', '#B5DE45', '#FDC64F'],
          legend: {
            data:['总收藏','笔记类','文件类','图片类','文章类','音频类','其他类','标签功能'],
            textStyle: {
              fontSize: 14,
              color: '#606266'
            },
            selected:{
                '总收藏':true,
                '笔记类':true,
                '文件类':true,
                '图片类':true,
                '文章类':false,
                '音频类':false,
                '其他类':false,
                '标签功能':false
              }
          },
          grid: {
            left: '3%',
            right:'5%',
            bottom: '3%',
            containLabel: true
          },

          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            axisLine: {
              lineStyle: {
                color: "#909399"
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: "#909399"
              }
            }
          },
          series: [
            {
              name:'总收藏',
              type:'line',
              stack: '总量',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'笔记类',
              type:'line',
              stack: '总量',
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'文件类',
              type:'line',
              stack: '总量',
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'图片类',
              type:'line',
              stack: '总量',
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'文章类',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            },
            {
              name:'音频类',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            },
            {
              name:'其他类',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            },
            {
              name:'标签功能',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            },

          ]
        }