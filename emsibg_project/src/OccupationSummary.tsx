/**************************************************** 
* Emsi Burning Glass
*
* Tech project
*
* Created by Mantz Wyrick 
* On 12/20/2021
*****************************************************/
import './App.css';
import * as React from "react";
import { Summary } from "./constants";

// Occupation Summary component, being used in App.tsx
const OccupationSummary: React.FC<Summary> = ({jobs, jobs_growth, earnings}) => {

    const percentage:number = Math.round((jobs.regional / jobs.national_avg)*100);

    return (
        <>
            <div className="Summary-row">
                <div className="Summary-col">
                    <h1 style={{ margin: 0, fontWeight: "normal" }}>{jobs.regional.toLocaleString()}</h1>
                    Jobs ({jobs.year}) <br/>
                    {jobs.regional > jobs.national_avg ? (
                        <span>
                            {percentage}% <span style={{ color:"green" }}>above</span> National average
                        </span>
                    ) : (
                        <span>
                            {percentage}% <span style={{ color:"red" }}>below</span> National average
                        </span>
                    )}
                </div>
                <div className="Summary-col">
                    {jobs_growth?.regional > 0 ? (
                        <span>
                             <h1 style={{ margin: 0, fontWeight: "normal", color:"green" }}>+{jobs_growth.regional}%</h1>
                            % Change ({jobs_growth.start_year} - {jobs_growth.end_year}) <br />
                            Nation:
                            <span style={{ color:"green" }}>+{jobs_growth.national_avg}%</span>
                        </span>
                    ) : (
                        <span>
                             <h1 style={{ margin: 0, fontWeight: "normal", color:"red" }}>+{jobs_growth.regional}%</h1>
                            % Change ({jobs_growth.start_year} - {jobs_growth.end_year}) <br />
                            Nation:
                            <span style={{ color:"red" }}>+{jobs_growth.national_avg}%</span>
                        </span>
                    )}
                </div>
                <div className="Summary-col">
                    <h1 style={{ margin: 0, fontWeight: "normal"}}>${earnings.regional}/hr</h1>
                    Median Hourly Earnings <br />
                    Nation: ${earnings.national_avg}/hr 
                </div>
            </div>
        </>
    )
}

export default OccupationSummary;
