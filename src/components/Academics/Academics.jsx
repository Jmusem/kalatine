import "./Academics.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList
} from "recharts";

function Academics() {

    const data = [
        { year: "2021", meanScore: 4.538 },
        { year: "2022", meanScore: 6.579 },
        { year: "2023", meanScore: 5.667 },
        { year: "2024", meanScore: 5.882 },
        { year: "2025", meanScore: 5.083 }
    ];

    const enrichedData = data.map((item, index) => {
        if (index === 0) {
            return {
                ...item,
                change: 0,
                deviation: 0
            };
        }

        const previous = data[index - 1].meanScore;
        const change = item.meanScore - previous;
        const deviation = ((change / previous) * 100).toFixed(2);

        return {
            ...item,
            change,
            deviation
        };
    });

    return (
        <section className="academics" id="academics">

            {/* HEADER */}
            <div className="academics-header">
                <h2>Academic Performance</h2>
                <p>KCSE Mean Score Trend Analysis (2021 - 2025)</p>
            </div>

            {/* STATS */}
            <div className="academics-stats">

                <div className="stat-card">
                    <h3>Trend Insight</h3>
                    <p>Performance fluctuations across academic years</p>
                </div>

                <div className="stat-card highlight">
                    <h3>Peak Performance</h3>
                    <p>2022 — Highest Mean Score</p>
                </div>

                <div className="stat-card">
                    <h3>Current Level</h3>
                    <p>2025 — Stabilized output</p>
                </div>

            </div>

            {/* GRAPH */}
            <div className="chart-container">

                <h3>Performance Trend with Growth Indicators</h3>

                <div className="chart-box">

                    <ResponsiveContainer width="100%" height={380}>

                        <LineChart data={enrichedData}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="year" />

                            <YAxis domain={[3, 8]} />

                            <Tooltip
                                formatter={(value, name, props) => {
                                    const item = props.payload;
                                    return [
                                        `Score: ${value}`,
                                        `Change: ${item.change.toFixed(3)} | Dev: ${item.deviation}%`
                                    ];
                                }}
                            />

                            {/* MAIN LINE */}
                            <Line
                                type="monotone"
                                dataKey="meanScore"
                                stroke="#0a2342"
                                strokeWidth={3}
                                dot={{ r: 6 }}
                            >

                                {/* LABELS ON POINTS */}
                                <LabelList
                                    dataKey="change"
                                    position="top"
                                    formatter={(value, entry, index) => {
                                        if (index === 0) return "";
                                        return value >= 0 ? `▲` : `▼`;
                                    }}
                                    fill="#000"
                                />

                            </Line>

                        </LineChart>

                    </ResponsiveContainer>

                </div>

            </div>

            {/* INSIGHT */}
            <div className="insight">

                <h3>Performance Insight</h3>

                <p>
                    The academic trend shows fluctuations with a peak in 2022 followed by
                    stabilization. The visual indicators highlight year-to-year improvements
                    and declines, giving a clear performance trajectory for decision-making.
                </p>

            </div>

        </section>
    );
}

export default Academics;