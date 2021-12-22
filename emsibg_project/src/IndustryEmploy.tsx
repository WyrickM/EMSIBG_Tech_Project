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
import { Table } from 'antd';
import { EmployingIndustries } from "./constants";
import { ColumnsType } from 'antd/lib/table';

const IndustryEmploy: React.FC<EmployingIndustries> = ({year, jobs, industries}) => {
  interface TableData {
    industryTitle: string;
    occupationJobs: number;
    percentOccupation: string;
    totalJobs: string;
  }

  const [tableData, setTableData] = React.useState<TableData[] | undefined>(undefined);

  const formatTableData = () => {
    const data: TableData[] = industries.map((x) => {
      return {
        industryTitle: x.title,
        occupationJobs: x.in_occupation_jobs,
        percentOccupation: ((x.in_occupation_jobs / jobs) * 100).toFixed(1) + "%",
        totalJobs: ((x.in_occupation_jobs / x.jobs) * 100).toFixed(1) + "%"
      }
    });

    setTableData(data);
  };

  const columns = [
    {
      title: "Industry",
      dataIndex: "industryTitle",
      key: "industryTitle",
      width: 1000,
      align: 'left' as 'left',
    },
    {
      title: `Occupation Jobs in Industry (${year})`,
      dataIndex: "occupationJobs",
      key: "occupationJobs",
      width: 200,
      align: 'right' as 'right',
    },
    {
      title: `% of Occupation in Industry (${year})`,
      dataIndex: "percentOccupation",
      key:"percentOccupation",
      width: 200,
      align: 'right' as 'right',
    },
    {
      title: `% of Total Jobs in Industry (${year})`,
      dataIndex: "totalJobs",
      key:"totalJobs",
      width: 200,
      align: 'right' as 'right',
    }
  ];

  React.useEffect(() => {
    formatTableData();
  }, []);

  return(
    <>
      <Table 
        className="Table"
        columns = {columns}
        dataSource = {tableData}
        pagination={false}
      />
    </>
  )
}

export default IndustryEmploy;
