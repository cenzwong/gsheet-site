fetch('https://raw.githubusercontent.com/cenzwong/gsheet-site/main/myjson.json')
  .then(response => response.json())
  .then(data => console.log(data));


  fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTxF-DtQoIAEVRoeMU6nOdZxg-gIgkvsRqCphEZixTbSyPAoGkg_kizf01v-7VcncDUcwmZR2SM-uj1/pub?output=csv')
  .then(response => response.text())
  .then(data => console.log(data));


  fetch('https://raw.githubusercontent.com/cenzwong/gsheet-site/main/mycsv.csv')
  .then(response => response.text())
  .then(data => console.log(data));


  fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTxF-DtQoIAEVRoeMU6nOdZxg-gIgkvsRqCphEZixTbSyPAoGkg_kizf01v-7VcncDUcwmZR2SM-uj1/pub?output=csv')
.then(response => response.text()) 
.then(csvString => {
    //Split the csv into rows
    const rows = csvString.split('\n');
    for (row of rows) {
    //Split the row into each of the comma separated values
        console.log(row.split(","));
    }
});