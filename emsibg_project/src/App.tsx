/**************************************************** 
* Emsi Burning Glass
*
* Tech project
*
* Created by Mantz Wyrick 
* On 12/20/2021
*****************************************************/

import React from 'react';
import logo from './Misc/logo.svg';
import './App.css';

import {fetchOverviewData} from "./OccupationOverview";
import { Occupation } from './constants';


const App = (): JSX.Element => {

  const [occupation, setOccupation] = React.useState<Occupation | undefined>(undefined);

  const fetchData = async () => {
    const r = await fetchOverviewData();

    const json = await r.json();

    setOccupation(json.occupation)

  }

  window.onload = fetchData;

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        
        </header>
      </div>  
      
    </>
    
  );
}

export default App;
