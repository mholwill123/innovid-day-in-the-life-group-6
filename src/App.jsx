import { useState, useEffect } from "react"

const fooCampaigns = [
  {
    id: 16346145,
    title: 'Campaign 1',
    startdate: '01/01/2023',
    enddate: '31/02/2023',
    totalImpressions: 1113,
    totalResponse: 11008,
  },
  {
    id: 16346145,
    title: 'Campaign 2',
    startdate: '01/04/2023',
    enddate: '27/08/2023',
    totalImpressions: 1234551113,
    totalResponse: 55611008,
  },
  {
    id: 16346145,
    title: 'Campaign 3',
    startdate: '09/09/2021',
    enddate: '31/10/2021',
    totalImpressions: 12133,
    totalResponse: 13408,
  },
];

function App() {

//   const express = require('express');
// const app = express();

// ADDED
// const cors = require('cors');
// app.use(cors());

//   const [fooCampaigns, setFooCampaigns] = useState([])
  
//   useEffect(() => {
//   fetch("https://cclan.s3.eu-west-1.amazonaws.com/campaigns.json")
//     .then((res) => res.json())
//     .then((data) => setFooCampaigns(data))
//   });

  function numberFormatChange(number){
    return number.toLocaleString("en-US");
  }

  const campaignList = fooCampaigns.map((campaign) => (
    <li key={campaign.id}>
      {campaign.title} | start date: {campaign.startdate} | end date:{' '}
      {campaign.enddate} | Total Impressions {numberFormatChange(campaign.totalImpressions)} | Total
      Responses {numberFormatChange(campaign.totalResponse)}
    </li>
  ));

  return (
    <>
      <h1>Code Clan - event</h1>
      <ul>{campaignList}</ul>
    </>
  );
}

export default App;