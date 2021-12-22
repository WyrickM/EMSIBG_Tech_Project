/**************************************************** 
* Emsi Burning Glass
*
* Tech project
*
* Created by Mantz Wyrick 
* On 12/20/2021
*****************************************************/

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
import Plot from 'react-plotly.js';

import { TrendComparison } from "./constants";

const TrendGraph: React.FC<TrendComparison> = ({start_year, end_year, regional, state, nation}) => { 

  interface TrendData {
    regionalChange: number[];
    stateChange: number[];
    nationChange: number[];
    xAxis: number[];
  }

  const [graphData, setGraphData] = React.useState<TrendData | undefined>(undefined);

  const calcPercentChangeData = (area: number[]) => {
    var difference = 0;
    var percentChange: number[] = [];

    for (var i=0; i < area.length; i++)
    {
      difference = area[i] - area[0];
      percentChange.push((difference / area[0])*100);
    }
    return percentChange;
  }
  const getStartVsEnd = (area: number[]) => {

  }

  const getXAxis = () => {
    var xAxis: number[] = [];
    for( var i = 0; i < regional.length; i++)
    {
      xAxis.push(start_year + i);
    }

    return xAxis;
  }


  React.useEffect(() => {
    setGraphData({
      regionalChange: calcPercentChangeData(regional),
      stateChange: calcPercentChangeData(state),
      nationChange: calcPercentChangeData(nation),
      xAxis: getXAxis(),
    })
  }, []);

  
  return (
    <>
      {graphData ? (
      <Plot
        className='Graph-plot'
        useResizeHandler={true}
        data = {[
          {
            type: "scatter",
            mode: "lines+markers",
            x: graphData?.xAxis,
            y: graphData?.regionalChange,
            name: "Region",
          },
          {
            type: "scatter",
            mode: "lines+markers",
            x: graphData?.xAxis,
            y: graphData?.stateChange,
            name: "State"
          },
          {
            type: "scatter",
            mode: "lines+markers",
            x: graphData?.xAxis,
            y: graphData?.nationChange,
            name: "Nation",
          }
        ]}
        layout = {{
          yaxis: {
            title: "Percent Change",
            linewidth: 1,
            showgrid: false,
            zeroline: false,
          },
          xaxis: {
            showline:false,
            dtick: 2,
            range: [graphData.xAxis[0], (graphData.xAxis[graphData.xAxis.length - 1] + 5)],
          }
        }}
      />
    ): null}
    </>
  )
}

export default TrendGraph;
