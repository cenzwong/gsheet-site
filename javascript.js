fetch('https://raw.githubusercontent.com/cenzwong/gsheet-site/main/myjson.json')
  .then(response => response.json())
  .then(data => console.log(data));