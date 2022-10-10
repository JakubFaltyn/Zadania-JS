const fs = require('fs');
fs.readFile('EX.1/example.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    let arr = data.split("\n");
    for (let i = 1; i<=arr[0]; i++){
        let date= arr[i].split(/\s+/).reverse();
        date.shift();
        const dayOfWeekName = new Date(date.join(',')).toLocaleString(
            'en-US', {weekday: 'long'}
          );
          console.log(dayOfWeekName);
    }
})