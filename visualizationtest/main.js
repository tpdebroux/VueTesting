const randomData = () => new Array(6).fill("").map(() => 1 + Math.floor(Math.random() * 20));
new Vue({
  el: '#chart',
  data: {
    dataMax: 20,
    chartWidth: 500,
    chartHeight: 400,
    chartData: [5, 8, 20, 3, 17, 14],
  },
  methods: {
    barWidth(value) {
      return this.chartWidth / this.dataMax * value;
    },
    handleClick(){
      this.chartData = randomData();
    },
  },
  computed: {

  },
});
