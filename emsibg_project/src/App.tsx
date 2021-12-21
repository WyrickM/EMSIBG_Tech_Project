/**************************************************** 
* Emsi Burning Glass
*
* Tech project
*
* Created by Mantz Wyrick 
* On 12/20/2021
*****************************************************/

import React from 'react';
import './App.css';

import {fetchOverviewData} from "./OccupationOverview";
import { 
  Occupation,
  Region,
  Jobs,
  JobsGrowth,
  Earnings,
  Summary,
  TrendComparison,
  Industries,
  EmployingIndustries
} from './constants';
import OccupationSummary from "./OccupationSummary";



const App = (): JSX.Element => {
  interface ApiData {
    occupation: Occupation | undefined;
    region: Region | undefined;
    summary: Summary | undefined;
    trendComparison: TrendComparison | undefined;
    employingIndustries: EmployingIndustries | undefined;
  }

  const [apiData, setApiData] = React.useState<ApiData>();

  const fetchData = async () => {
    const r = await fetchOverviewData();

    const json = await r.json();

    setApiData({
        occupation: json.occupation,
        region: json.region,
        summary: json.summary,
        trendComparison: json.trend_comparison,
        employingIndustries: json.employing_industries,
      })

      if(json.occupation)
      {
        <p>this is a test</p>
      }
  }

  window.onload = fetchData;  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 style={{ margin: 0 }}>Occupation Overview</h1>
          <h4 style={{ margin: 0, fontWeight: "normal" }}>
            {apiData?.occupation?.title} in {apiData?.region?.title}
          </h4>
        </header>

        <div className='App-sections'>
          <h4 className='App-subtitles'>Occupation Summary for {apiData?.occupation?.title}</h4> 
          { apiData?.summary ? (
            <OccupationSummary 
            jobs={apiData.summary.jobs}
            jobs_growth={apiData.summary.jobs_growth}
            earnings={apiData.summary.earnings}
          />
          ): null}
          
        </div>

        <div className='App-sections'>
          <h4 className='App-subtitles'>Regional Trends</h4> 
        </div>

        <div className='App-sections'>
          <h4 className='App-subtitles'>Industries Employing {apiData?.occupation?.title}</h4> 
        </div>
      </div>  

    </>
  );
}

export default App;
