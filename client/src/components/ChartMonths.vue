<template>
  <div class="line-chart">
    <Line :data="chartData" :options="options" />
  </div>
</template>
<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { ref, onMounted } from 'vue'
import { getArtistOfMonthByYear } from '../services/trackService'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const chartData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setempro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Músicas mais ouvidas',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

onMounted(async () => {
  const data = await getArtistOfMonthByYear(2022)
  console.log(data)
});

</script>

<style lang="scss">
.line-chart {
  width: 100%;
  height: 96%;
  background-color: var(--gray);
}
</style>