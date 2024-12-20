 option = {
     title: {
         text: 'Compare trajectory/input_example/corridor_a503/'
     },
     tooltip: {
         formatter: function(x) {
             return x.data.des;
         }
     },
     series: [{
         type: 'graph',
         layout: 'force',
         symbolSize: 50,
         roam: true,
         edgeSymbol: ['circle', 'arrow'],
         // edgeSymbolSize: [80, 10],
         edgeLabel: {
             normal: {
                 textStyle: {
                     fontSize: 20
                 }
             }
         },
         force: {
             repulsion: 2500,
             edgeLength: [10, 50]
         },
         draggable: true,
         itemStyle: {
             normal: {
                 color: '#4b565b'
             }
         },
         lineStyle: {
             normal: {
                 width: 2,
                 color: '#4b565b'

             }
         },
         edgeLabel: {
             normal: {
                 show: true,
                 formatter: function(x) {
                     return x.data.name;
                 }
             }
         },
         label: {
             normal: {
                 show: true,
                 textStyle: {}
             }
         },
         data: [{
                 name: 'summary_vertices.csv',
                 des: 'vins_result_path',
                 itemStyle: {
                     normal: {
                         color: 'red'
                     }
                 }

             },
             {
                 name: 'tf_offline_processed.txt',
                 des: 'lidar_result_path',
                 itemStyle: {
                     normal: {
                         color: 'red'
                     }
                 }

             },
             {
                 name: 'summary_vertices_canon.txt',
                 des: 'vins_result_file_txt',

             },
             {
                 name: 'summary_vertices_canon.csv',
                 des: 'vins_result_file_txt',

             },
             {
                 name: 'tf_offline_processed_canon.txt',
                 des: 'lidar_result_file_txt',

             },
             {
                 name: 'tf_offline_processed_canon.csv',
                 des: 'lidar_result_file_txt',

             },
             {
                 name: 'tf_aligned.csv',
                 des: 'the aligned poses',

             },
             {
                 name: 'camera_aligned.csv',
                 des: 'the aligned poses',

             },
             {
                 name: 'time_offset.csv',
                 des: '',

             },
             {
                 name: 'output_pose_H_E_yml',
                 des: '',

             },
             {
                 name: 'calibration.json',
                 des: '',

             },
             {
                 name: 'calibration_optimized.json',
                 des: '',

             },
             {
                 name: 'camera_groundtruth.csv',
                 des: '',

             },
             {
                 name: 'aligned_traj_rpe.svg',
                 des: '',

             },
             {
                 name: 'alignment_result_rpe.json',
                 des: '',

             },
             {
                 name: 'aligned_calibrated_traj.svg',
                 des: '',

             },
             {
                 name: 'alignment_result_ate_orig.json',
                 des: '',

             }
         ],
         //==========
         //=========
         //==========
         links: [{
                 source: 'summary_vertices.csv',
                 target: 'summary_vertices_canon.txt',
                 name: "create standard input",

             },
             {
                 source: 'summary_vertices.csv',
                 target: 'summary_vertices_canon.csv',
                 name: "create standard input",

             },
             {
                 source: 'tf_offline_processed.txt',
                 target: 'tf_offline_processed_canon.txt',
                 name: "create standard input",

             },
             {
                 source: 'tf_offline_processed.txt',
                 target: 'tf_offline_processed_canon.csv',
                 name: "create standard input",

             },
             {
                 source: 'summary_vertices_canon.csv',
                 target: 'camera_aligned.csv',
                 name: "create standard input",

             },

             {
                 source: 'summary_vertices_canon.txt',
                 target: 'time_offset.csv',
                 name: "",

             },
             {
                 source: 'tf_offline_processed_canon.txt',
                 target: 'time_offset.csv',
                 name: "",

             },
             {
                 source: 'tf_offline_processed_canon.csv',
                 target: 'tf_aligned.csv',
                 name: "",

             },
             {
                 source: 'tf_aligned.csv',
                 target: 'output_pose_H_E_yml',
                 name: "",

             },
             {
                 source: 'camera_aligned.csv',
                 target: 'output_pose_H_E_yml',
                 name: "",

             },
             {
                 source: 'tf_aligned.csv',
                 target: 'calibration.json',
                 name: "",

             },
             {
                 source: 'camera_aligned.csv',
                 target: 'calibration.json',
                 name: "",

             },
             {
                 source: 'output_pose_H_E_yml',
                 target: 'calibration.json',
                 name: "",

             },
             {
                 source: 'time_offset.csv',
                 target: 'calibration.json',
                 name: "",

             },
             {
                 source: 'tf_offline_processed_canon.csv',
                 target: 'calibration_optimized.json',
                 name: "",

             },
             {
                 source: 'summary_vertices_canon.csv',
                 target: 'calibration_optimized.json',
                 name: "",

             },
             {
                 source: 'calibration.json',
                 target: 'calibration_optimized.json',
                 name: "",

             },
             {
                 source: 'calibration_optimized.json',
                 target: 'camera_groundtruth.csv',
                 name: "",

             },
             {
                 source: 'tf_offline_processed_canon.csv',
                 target: 'camera_groundtruth.csv',
                 name: "",

             },
             {
                 source: 'tf_offline_processed_canon.csv',
                 target: 'aligned_traj_rpe.svg',
                 name: "",

             },
             {
                 source: 'camera_groundtruth.csv',
                 target: 'aligned_traj_rpe.svg',
                 name: "",

             },
             {
                 source: 'tf_offline_processed_canon.csv',
                 target: 'alignment_result_rpe.json',
                 name: "",

             },
             {
                 source: 'camera_groundtruth.csv',
                 target: 'alignment_result_rpe.json',
                 name: "",

             },
             {
                 source: 'tf_offline_processed_canon.csv',
                 target: 'aligned_calibrated_traj_orig.svg',
                 name: "",

             },
             {
                 source: 'camera_groundtruth.csv',
                 target: 'aligned_calibrated_traj_orig.svg',
                 name: "",

             },
             {
                 source: 'tf_offline_processed_canon.csv',
                 target: 'alignment_result_ate_orig.json',
                 name: "",

             },
             {
                 source: 'camera_groundtruth.csv',
                 target: 'alignment_result_ate_orig.json',
                 name: "",

             }
         ]
     }]
 };