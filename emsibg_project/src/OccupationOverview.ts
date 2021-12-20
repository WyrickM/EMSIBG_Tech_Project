/**************************************************** 
* Emsi Burning Glass
*
* Tech project
*
* Created by Mantz Wyrick 
* On 12/20/2021
*****************************************************/


import { postWithURLAndBody } from "./utils";

export const fetchOverviewData = async (): Promise<Response> => {
    return postWithURLAndBody("/v3/a2cc3707-8691-4188-8413-6183a7bb3d32");
  };
