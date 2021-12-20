/**************************************************** 
* Emsi Burning Glass
*
* Tech project
*
* Created by Mantz Wyrick 
* On 12/20/2021
*****************************************************/


// this function is to get any information from the api,
// the url for the api is just the exact link to the mock api
export const postWithURLAndBody = async (
    url: string,
    body: Record<string, unknown> = {}
  ): Promise<Response> => {
    return fetch(`https://run.mocky.io${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
