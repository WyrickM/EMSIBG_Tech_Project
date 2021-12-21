/**************************************************** 
* Emsi Burning Glass
*
* Tech project
*
* Created by Mantz Wyrick 
* On 12/20/2021
*****************************************************/

export type Occupation = {
    onet: string;
    title: string;
  };

export type Region = {
    type: string;
    id: string;
    title: string;
}

export type Jobs = {
    year: number;
    regional: number;
    national_avg: number;
}

export type JobsGrowth = {
    start_year: number;
    end_year: number;
    regional: number;
    national_avg: number;
}

export type Earnings = {
    regional: number;
    national_avg: number;
}

export type Summary = {
    jobs: Jobs;
    jobs_growth: JobsGrowth;
    earnings: Earnings;
}

export type TrendComparison = {
    start_year: number;
    end_year: number;
    regional: number[];
    state: number[];
    nation: number[];
}

export type Industries = {
    naics: string;
    title: string;
    in_occupation_jobs: number;
    jobs: number;
}

export type EmployingIndustries = {
    year: number;
    jobs: number;
    industries: Industries[];
}
