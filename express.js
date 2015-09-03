var express = require('express');

var app = express();

app.use(function(req, res, next){
  if(req.query.download) {
    res.set('Content-Disposition', 'attachment' +
      (req.query.filename ? '; filename="' + req.query.filename + '"' : '')
    );
  }
  next();
});

for(var i = parseInt(process.argv[1] || 0, 10); i > 0; i++) {
  app.get('/a/:_id/route/' + i, function(req, res, next){
    next();
  });
}

app.get('time', function(req, res, next){
  res.send(Date.now());
});

app.listen(1338);
