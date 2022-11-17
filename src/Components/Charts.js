import Chart from "react-google-charts";


const data = [

  ['Month', 'OnePlus', 'Samsung'],
  ['Jan', 40, 35],
  ['Feb', 48, 40],
  ['Mar', 55, 60],
  ['Apri', 70, 68],
  ['May', 80, 75],
];
const Charts = () => {

  return (
    <div className="container mt-5">
      <h2>Bar Chart and Line Chart</h2>
      <Chart
        width='90%'
        height='450px'
        chartType="ComboChart"
        data={data}
        options={
          {
            title: 'Monthly Sale  of Mobile Shop',
            vAxis: { title: 'Quantity' },
            hAxis: { title: 'Month' },
            seriesType: 'bars',
            series: { 1: { type: 'line' } },


          }}

      />
    </div>
  )
}

export default Charts;