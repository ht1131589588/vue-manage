<template>
  <div class="hx-chart">
    <div id="mainChat"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/tooltip';

import dtime from 'time-formater'

export default {
  props:{
    yDates:{
      default: function(){
        var  dates = [];
        for (let i = 6; i > -1; i--) {
          const date = dtime(new Date().getTime() - 86400000*i).format('YYYY-MM-DD')
          dates.push(date)
        }
        return dates;
      }
    },
    xDatas:{
      default:function(){
        return [
          [120, 132, 101, 134, 90, 230, 210],
          [220, 182, 191, 234, 290, 330, 310],
          [820, 932, 901, 934, 1290, 1330, 1320]
        ];
      }
    },
    colors:{
      default:function(){
        return ['#d14a61', '#5793f3', '#675bba', '#13CE66'];
      }
    }
  },
  
  mounted () {
    this.myChart = echarts.init(document.getElementById('mainChat'));
    this.initData();
  },
  methods: {
    initData(){
      const option = {
          color: this.colors,
          title: {
              text: '走势图',
              // subtext: ''
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['新注册用户', '新增管理员', '新增文章']
          },
          toolbox: {
              show: true,
              feature: {
                  dataZoom: {
                      yAxisIndex: 'none'
                  },
                  dataView: {readOnly: false},
                  magicType: {type: ['bar', 'line']},
                  restore: {},
              }
          },
          xAxis:  {
              type: 'category',
              boundaryGap: false,
              data: this.yDates
          },
          // yAxis: {
          //     type: 'value'
          // },
          yAxis: [
              {
                type: 'value',
                name: '用户/管理员',
                min: 0,
                max: 1000,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
              },
              {
                type: 'value',
                name: '文章',
                min: 0,
                max: 2500,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
              },
          ],
          series: [
              {
                  name:'新注册用户',
                  type:'line',
                  data:this.xDatas[0],
                  yAxisIndex: 0,
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
              },
              {
                  name:'新增管理员',
                  type:'line',
                  data:this.xDatas[1],
                  yAxisIndex: 0,
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
              },
              {
                  name:'新增文章',
                  type:'line',
                  data:this.xDatas[2],
                  yAxisIndex: 1,
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
              }
          ]
    
      };
      // 绘制图表
      this.myChart.setOption(option);
    }
  }
}
</script>

<style lang="scss" scoped>
  .hx-chart{
      display: flex;
      justify-content: center;
      #mainChat{
        width: 90%;height:450px
      }
  }
</style>

