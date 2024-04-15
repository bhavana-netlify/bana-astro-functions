import fetch from "node-fetch";

const API_ENDPOINT = "https://app.writer.com/organization/701794/team/709272/document/6083819?mode=coWrite&currentTemplateId=a7e5ba16-58c4-49ff-b1be-96af77a30ba1";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json", "Authorization": "Bearer 2ev0B4vDLmyCYhqkZkXKJO_3UACSN7llzp2_UF1iofyRhm15eJDeKb14YC9-OOKFbCKXvGps4IKkHEkP6lEs_EVXAvYsfbPDR0MA0MIU1wH4yDXaRcnQNfD0iMoM1_ic"} })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data.joke
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};