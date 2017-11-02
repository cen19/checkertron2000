let testInit = {
  method: 'GET'
};

let fetchTest = function() {
  fetch('http://localhost:3000/test', testInit)
    .then((res) => res.json())
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log('super error here, ', err);
    });
};