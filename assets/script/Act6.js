fs = require('fs');

var readableData = fs.createReadStream('assets/CVS1/example.cvs', {encoding: 'utf8'});

readableData.on('data', function (data) {
  
  var splitData = data.split(',').join(' ').split("\r\n");

        empArr = [];

         for (i = 0; i < splitData.length; i++){

            dataArr1 = splitData[i].split(' ');
            empArr.push(dataArr1);
            
            };
            callBack(empArr, data);
          })
          

  function callBack(empArr, data) {

    fs.appendFileSync('assets/CVS1/insurance.cvs', data + '\r\n');

    var data = fs.readFileSync('assets/CVS1/insurance.cvs','utf8');

      console.log(data);

    var splitData2 = data.split(',').join(' ').split("\r\n");
  
          empArr2 = [];
  
           for (i = 0; i < splitData2.length; i++) {
  
                dataArr2 = splitData2[i].split(" ")
                empArr2.push(dataArr2);
                  
           }
        
           for (i = 0; i < empArr.length; i++) {
                
                if (empArr[i][3] === empArr2[i][3]){

                  const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true });
              
                  var sortArr = [];

                  sortArr.push(empArr[i].sort(sortAlphaNum));
                  

                      fs.appendFile('assets/CVS1/'+ empArr[i][3] + '.cvs', + '\r\n' + sortArr.toString() + '\r\n', function (err) {

                        if (err) throw err;

                        console.log('Saved!');

                      });
                   
                } else {
                      var sortArr = [];

                      const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true });

                      sortArr.push(empArr[i].sort(sortAlphaNum));
                    
                      fs.writeFile('assets/CVS1/'+ empArr[i][3] + '.cvs', + '\r\n' + sortArr.toString() + '\r\n', function (err) {
                        
                        if (err) throw err;

                        console.log('Saved!');
                      });

                }
              
            }
    
  }