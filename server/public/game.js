const board = [];

let testInit = {
  method: 'GET'
};

let fetchTest = function() {
  fetch('http://localhost:3000/test', testInit).then(function(res) {
    alert('response received', res.blob());
  });
};