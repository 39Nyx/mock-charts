var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['Plant-Complete', 'Plant-Chromosome', 'Plant-Scaffold', 'Plant-Contig', 'Animal-Complete', 'Animal-Chromosome', 'Animal-Scaffold', 'Animal-Contig']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value'
                },
                xAxis: {
                    type: 'category',
                    data: ['2016.01', '2016.04', '2016.07', '2016.10', '2017.01', '2017.04', '2017.07', 'Now']
                },
                series: [{
                    name: 'Plant-Complete',
                    type: 'bar',
                    stack: 'Plant',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#FFF48B',
                            barBorderRadius: 0,
                            borderWidth: 1,
                            borderColor: '#000'

                        }
                    },
                    data: [0, 0,0, 0, 0, 0, 0, 0]
                }, {
                    name: 'Plant-Chromosome',
                    type: 'bar',
                    barGap: '5%',
                    stack: 'Plant',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#91EC8C',
                            barBorderRadius: 0,
                            borderWidth: 1,
                            borderColor: '#000'

                        }
                    },
                    data: [8, 10,12, 16, 20, 23, 25, 25]
                }, {
                    name: 'Plant-Scaffold',
                    type: 'bar',
                    stack: 'Plant',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#FF7F7C',
                            barBorderRadius: 0,
                            borderWidth: 1,
                            borderColor: '#000'

                        }
                    },
                    data: [19, 20,22, 25, 26, 31, 37, 38]
                }, {
                    name: 'Plant-Contig',
                    type: 'bar',
                    stack: 'Plant',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },

                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#E89AFF',
                            barBorderRadius: 0,
                            borderWidth: 1,
                            borderColor: '#000'

                        }
                    },
                    data: [5, 5,9, 10, 16, 20, 23, 25]
                }, {
                    name: 'Animal-Complete',
                    type: 'bar',
                    stack: 'Animal',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },

                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#FFF48B',
                            barBorderRadius: 0,


                        }
                    },
                    data: [ 0,0, 0, 0, 0, 0,0, 0]
                }, {
                    name: 'Animal-Chromosome',
                    type: 'bar',
                    stack: 'Animal',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },

                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#91EC8C',
                            barBorderRadius: 0,


                        }
                    },
                    data: [12,12, 13, 15, 16, 18, 20, 20]
                }, {
                    name: 'Animal-Scaffold',
                    type: 'bar',
                    stack: 'Animal',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },

                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#FF7F7C',
                            barBorderRadius: 0,


                        }
                    },
                    data: [ 28,30, 32, 35, 35,37,40, 41]
                }, {
                    name: 'Animal-Contig',
                    type: 'bar',
                    stack: 'Animal',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },

                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#E89AFF',
                            barBorderRadius: 0,


                        }
                    },
                    data: [ 1,1, 1, 1, 1,1,1, 1]
                }]
            };
