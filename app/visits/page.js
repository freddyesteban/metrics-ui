import LineChart from "@/components/line-chart"

export default function Visits() {

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='d-flex justify-content-center py-2'>
            <h2>Site Visits</h2>
          </div>
        </div>
        <div className='row'>
          <div className="col">
            <LineChart />
          </div>
          <div className="col">
            <LineChart />
          </div>
          <div className="col">
            <LineChart />
          </div>
        </div>
      </div>
    </main>
  )
}
