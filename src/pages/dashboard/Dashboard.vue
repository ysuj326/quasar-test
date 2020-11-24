<template>
  <q-page padding >
    <!-- content -->
    <div class="text-h6 text-bold q-my-sm">콘솔메인정보조회</div>
    <div class="row q-col-gutter-md">
      <div
        v-for="(item, idx) in statistics"
        :key="idx"
        class="col-4"
      >
        <q-card
          flat
          bordered
          class="items-center"
        >
          <q-card-section
            horizontal
            class="text-h4 items-center"
            :style="`background-color:${colors[idx]}`"
          >
            <q-card-section flat class="q-px-md q-ma-none text-white">
              <q-icon :name="item.icon"/>
            </q-card-section>

            <div class="text-center q-pa-md" style="flex-grow:1; background-color:white;">
              <div>{{ item.count }}</div>
              <div class="text-caption">{{item.memo}}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <div class="row q-my-lg">
      {{selectedInfo || 'null'}}
      <q-card class="col-12" style="padding-right:0;">
        <q-card-actions
          align="left"
          style="background-color:gray;"
        >
          <q-select
            borderless
            v-model="selectedInfo"
            :options="selectionChart"
            :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : 0"
            :option-label="opt => Object(opt) === opt && 'title' in opt ? opt.title : null"
            map-options
            @input="changeChart()"
          />
        </q-card-actions>
        <q-card-section
          class="row q-col-gutter-md"
        >
          <div class="round-chart q-ma-md">
            <q-circular-progress
              show-value
              font-size="12px"
              :value="Math.ceil(selectedInfo.success / (selectedInfo.success + selectedInfo.failure) * 100)"
              size="10em"
              :thickness="0.5"
              color="pink"
              track-color="grey-3"
              class="text-red text-h6"
            >
              {{ Math.ceil(selectedInfo.success / (selectedInfo.success + selectedInfo.failure) * 100)}} %
            </q-circular-progress>

            <div class="row text-center q-my-lg">
              <div class="col-6">
                {{ selectedInfo.success }}
                <p>SUCCESS</p>
              </div>

              <div class="col-6">
                {{ selectedInfo.failure }}
                <p>FAILURE</p>
              </div>
            </div>
          </div>

          <div class="bar-chart q-ma-md">
            <div class="chart-background" style="min-width: 300px;">
            </div>
            <BarChart :chart-data="chartData"></BarChart>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BarChart from 'components/CommitChart.ts'
import moment from 'moment'

@Component({
  name: 'Dashboard',
  components: {BarChart},
})

export default class Dashboard extends Vue {
  private statistics = [
    {count: 20, memo: 'TOTAL', icon: 'alarm_on'},
    {count: 12, memo: 'ISSU', icon: 'alarm_on'},
    {count: 12, memo: 'NEW', icon: 'alarm_on'}
  ];
  private colors = [
    '#ff9999',
    '#b366ff',
    '#6666ff',
    '#8cd98c',
    '#4da6ff',
  ];
  private selectionChart = [{}];
  private selectedInfo = {};

  private chartData = {};

  constructor() {
    super();
    const charts = [];

    for (let i=0; i<=4; i++){
      const monthData = [];
      let successCnt = 0;
      let failureCnt = 0;

       // (`Chart Title ${i}`);

      for(let m=1; m<=12;m++) {
        let rnaS = Math.ceil(Math.random() * 200);
        let rnaF = Math.round(Math.random() * 150);

        successCnt += rnaS;
        failureCnt += rnaF;

        monthData.push({
          month: m,
          success: rnaS,
          failure: rnaF,
        });
      }

      charts.push({
        id: i,
        title: `Chart Title ${i}`,
        success: successCnt,
        failure: failureCnt,
        monthly: monthData
      });
    }
    this.selectionChart = charts;
    this.selectedInfo = charts[0];
  }
  private mounted() {
    this.changeChart()
  }
  private changeChart() {
    const monthlyData = this.selectedInfo.monthly
    const monthlyShort = moment.monthsShort()

    // console.log(a)
    // const options = {responsive: true}
    // const chartData = {
    //   labels: ['January', 'February'],
    //   datasets: a
    // }

    const SuccessData = []
    const FailureData = []
    // loop over values
    for (let value of Object.values(monthlyData)) {
      if()
      alert(value); // John, then 30
    }
    Object.entries(prices).map(([key, value]) => [key, value * 2])


    param.apiMap.forEach((value: any, key: string) => {
      console.log('>> ## ::', key, value)
      result = result.replace(key, value)
    })

    this.chartData = {
      labels: monthlyShort,
      datasets: [
        {
          label: 'Success',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },
        {
          label: 'Failure',
          backgroundColor: 'red',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    }
    console.log(`before,` , this.chartData)
    // this.renderChart(chartData, options)
  }

}
</script>
<style lang="scss">

.q-card {
  padding: 0px 15px 0px 0px;
  border: 1px solid rgba(86, 61, 124, .2);
}
.chart-background {
 /* background-color: #888;
  background-image: linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444), linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444);
  background-position: 0 0, 10px 25px;
  background-size: 50px 50px;*/
}
</style>
