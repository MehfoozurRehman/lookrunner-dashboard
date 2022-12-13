import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export default function Dashboard() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="dashboard__container">
      <div className="dashboard__container__left">
        <div className="dashboard__container__left__entry">
          <div className="dashboard__container__left__main">
            <div className="dashboard__container__left__main__header">
              Daily Sales
            </div>
            <div className="dashboard__container__left__main__content">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data} margin={{ left: -15 }}>
                  <XAxis dataKey="name" strokeOpacity={0} />
                  <YAxis strokeOpacity={0} />
                  <CartesianGrid stroke="#9F9F9F" strokeDasharray="5 5" />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#F1A684"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="dashboard__container__left__entry">
          <div className="dashboard__container__left__entry__title">
            Movements
          </div>
          <div className="dashboard__container__left__entry__content">
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
          </div>
        </div>
        <div className="dashboard__container__left__entry">
          <div className="dashboard__container__left__entry__title">Orders</div>
          <div className="dashboard__container__left__entry__content">
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
            <DashboardStartEntry />
          </div>
        </div>
      </div>
      <div className="dashboard__container__right">
        <div className="dashboard__container__right__title">Latest Orders</div>
        <div className="dashboard__container__right__content">
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
          <DashboardOrderEntry />
        </div>
      </div>
    </div>
  );
}

function DashboardStartEntry() {
  return (
    <div className="dashboard__container__left__entry__content__entry">
      <div className="dashboard__container__left__entry__content__entry__heading">
        13.343
      </div>
      <div className="dashboard__container__left__entry__content__entry__info">
        Total Articles in Warehouse
      </div>
    </div>
  );
}

function DashboardOrderEntry() {
  return (
    <a href="#" className="dashboard__container__right__content__entry">
      <div className="dashboard__container__right__content__entry__icon">
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13.1226" cy="4.96243" r="4.36478" fill="#E6E6E6" />
          <path
            d="M10.9378 11.5098C7.32189 11.5098 4.39062 14.441 4.39062 18.0569C4.39062 19.2622 5.36771 20.2393 6.57301 20.2393H19.6673C20.8726 20.2393 21.8497 19.2622 21.8497 18.0569V16.9657C21.8497 13.9525 19.407 11.5098 16.3938 11.5098H10.9378Z"
            fill="#E6E6E6"
          />
          <path
            d="M5.48331 11.5098C2.47006 11.5098 0.0273438 13.9525 0.0273438 16.9657V18.0569C0.0273438 19.2622 1.00443 20.2393 2.20973 20.2393H15.3041C16.5094 20.2393 17.4864 19.2622 17.4864 18.0569V16.9657C17.4864 13.9525 15.0437 11.5098 12.0305 11.5098H5.48331Z"
            fill="#F1A684"
          />
          <circle cx="8.7554" cy="4.96243" r="4.36478" fill="#F1A684" />
        </svg>
      </div>
      <div className="dashboard__container__right__content__entry__content">
        <div className="dashboard__container__right__content__entry__content__heading">
          Mike Taylor
        </div>
        <div className="dashboard__container__right__content__entry__content__info">
          Chicago, TX
        </div>
      </div>
    </a>
  );
}
