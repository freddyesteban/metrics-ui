import styles from './page.module.css'
import LineChart from "@/components/line-chart"
import PieChart from '@/components/pie-chart'

export default function Home() {

  return (
    <main className={styles.main}>
      {/* Header */}
      <div>
        <div className="container">
          <div className={styles.header_body}>
            <div className="row">
              <div className="col">
                <h6>Overview</h6>
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="container">
        {/* Row of cards */}
        <div className="row mb-5 row-gap-3">
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body">
                <div className="col">
                  <h6 className="text-uppercase text-muted mb-2">Daily visits</h6>
                  <span className="h2 mb-0">1,200</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body">
                <div className="col">
                  <h6 className="text-uppercase text-muted mb-2">Monthly visits</h6>
                  <span className="h2 mb-0">10,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body">
                <div className="col">
                  <h6 className="text-uppercase text-muted mb-2">Year to date</h6>
                  <span className="h2 mb-0">10,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body">
                <div className="col">
                  <h6 className="text-uppercase text-muted mb-2">Avg. Daily Visits</h6>
                  <span className="h2 mb-0">10,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Graphing cards */}
        <div className="row row-gap-3">
          <div className="col-12 col-xl-8">
            <div className="card">
              <div className={`card-header ${styles.card_header}`}>
                <div className="card-header-title">Monthly Visits</div>
              </div>
              <div className="card-body">
                <LineChart />
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="card">
              <div className={`card-header ${styles.card_header}`}>
                <h6 className="card-header-title">Traffic Channels</h6>
              </div>
              <div className="card-body">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
