option = {
    title: {
                subtext: '电力数据：万千瓦/时',
                padding: [-20, 0, 0, 0],
                x: 'right',
                subtextStyle: {
                    "fontSize": 12,
                    "fontFamily": "Microsoft YaHei",
                    "color": "#444"
                }
            },
           
         dataZoom: {
             show: false
         },
         grid: {
             height: 140,
             left: '3%',
             right: '4%',
             bottom: '3%',
             containLabel: true
         },
         tooltip: {
             trigger: 'axis',
             axisPointer: {
                 type: 'shadow'
             }
         },
    
         legend: {
             x: 'left',
             padding: [10, 0, 0, 40],
             data: ['额定值','1#实时出力','2#实时出力','3#实时出力','4#实时出力']
         },
         xAxis: {
             boundaryGap: true,
             splitLine: {
                 show: false
             },
             axisLabel: {
                 interval: function(index, value) {
                     var liu = value;
                     if (liu != '-') {
                         return true;
                     } else {
                         return false;
                     }
                 }
             },
             data: [' ', '-', '吴二', '-', '-', '-', '-', '外二', '-', '-', '-', '-', '外三', '-', '-',  '-','-', '星火', '-', '-', '-','-','-', '临 港', '-', '-', '-','-','申皖', '-', '-', '-','-', '吴忠','-','-']
         },
         yAxis: {

         },
         series: [{ //0
             name: '额定值',
             type: 'bar',
             slient: true,
             barGap: '-100%',
             barCategoryGap: '0%',
             itemStyle: { normal: { color: '#4C8FDE'} },//borderWidth
             data: [
                 '-', //设定相同total value为相同颜色 吴二
                 { value: 3000},
                 '-', { value: 3000},
                
                 '-',
                 '-', //设定相同total value为相同颜色 外二
                 { value: 2500},
                 '-', { value: 2500},
                
                 '-',
                 '-', //设定相同total value为相同颜色  外三
                 { value: 2300 },
                 '-',
                 { value: 2300 },
                
                 '-',
                 '-', //设定相同total value为相同颜色  星火
                 { value: 3000 },
                 '-', 
                 { value: 3000},
                
                 '-', 
                 '-', //设定相同total value为相同颜色  临港
                 { value: 2500 },
                 { value: 2500 },
                 { value: 2500},
                 { value: 2500 },
                
                 '-', 
                 '-', //设定相同total value为相同颜色  申皖
                 { value: 2300 },
                 '-', 
                 { value: 2300 },
             
                 '-', 
                 '-', //设定相同total value为相同颜色  吴忠
                 { value: 2300 },
               '-', 
                 { value: 2300 }
             ]
         },
             { 
                 name: '1#实时出力',
                 type: 'bar',
                 barGap: '-100%',
                 barCategoryGap: '0%',
                 itemStyle: {normal: { color: 'red'} },
                 data: ['-', 1487, '-', '-', '-',  /*吴二1*/
                        '-', 2145, '-', '-', '-',  /*外二1*/
                        '-', 772, '-', '-', '-',   /*外三1*/
                        '-', 1880, '-', '-', '-',  /*星火1*/
                        '-', 600, '-', '-', '-',   /*临港1*/
                        '-', '-', 300, '-', '-',   /*申皖1*/
                        '-','-',100,'-','-','-','-']}, /*吴忠1*/
             {
                 name: '2#实时出力',
                 type: 'bar',
                 barGap: '-99%',
                 barCategoryGap: '0%',
                itemStyle: {normal: { color: 'red'} },
                 data: ['-', '-', '-', '-', '-',  /*吴二2*/
                        '-', '-',  '-', '-', '-', /*外二2*/
                        '-', '-', '-', '-', '-',  /*外三2*/
                        '-', '-', '-', '-', '-',  /*星火2*/
                        '-', '-', 500, '-', '-',  /*临港2*/
                        '-', '-', '-', '-', '-',  /*申皖2*/
                        '-', '-', '-', '-', '-']  /*吴忠2*/
             }, { 
                 name: '3#实时出力',
                 type: 'bar',
                 barGap: '-99%',
                 barCategoryGap: '1',
                 itemStyle: {normal: { color: 'red'} },
                 data: ['-', '-', '-', 1528, '-', /*吴二3*/
                        '-', '-', '-', 960, '-',  /*外二3*/
                        '-', '-', '-', 883, '-',  /*外三3*/
                        '-', '-', '-', 990, '-',  /*星火3*/
                        '-', '-', '-', 888, '-',  /*临港3*/
                        '-', '-', '-', '-', 2000, /*申皖3*/
                        '-', '-', '-', '-', 1000] /*吴忠3*/
             }, { 
                 name: '4#实时出力',
                 type: 'bar',
                 barGap: '-99%',
                 barCategoryGap: '1',
               itemStyle: {normal: { color: 'red'} },
                 data: [    '-', '-', '-', '-', '-',  /*吴二4*/
                            '-', '-',  '-', '-', '-', /*外二4*/
                            '-', '-', '-', '-', '-',  /*外三4*/
                            '-', '-', '-', '-', '-',  /*星火4*/
                            '-', '-', '-', '-', 2100,  /*临港4*/
                            '-', '-', '-', '-', '-',  /*申皖4*/
                            '-', '-', '-', '-', '-']  /*吴忠4*/
             }
         ]
     };