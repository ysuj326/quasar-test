import { Component, Prop, Vue} from 'vue-property-decorator';
import Chart from 'chart.js';
import VueChart from 'vue-chartjs';


@Component({
  extends: VueChart.Bar,
  mixins: [VueChart.mixins.reactiveProp]
})
export default class CommitChart extends Vue {
  @Prop({ required: true, default: {} })
  public chartData!: Chart.ChartData;
  public chartOptions!: Chart.ChartOptions;
  private options: Chart.ChartOptions = {};
  private chart!: Chart;
  public renderChart!: (chartData: any, options: any) => void

  mounted() {
    console.log(this.chartData);
    // this.chartData = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    //   datasets: [
    //     {
    //       // label: 'GitHub Commits',
    //       backgroundColor: '#f87979',
    //       data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    //     }
    //   ]
    // }
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options)
    // this.chart = this.$data._chart;

  }
}
