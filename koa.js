var koa = require('koa');
var route = require('koa-route');
var app = koa();


app.use(function *(next){
  if(this.query.download) {
    this.set('Content-Disposition', 'attachment' +
      (this.query.filename ? '; filename="' + this.query.filename + '"' : '')
    );
  }
  yield next;
});

for(var i = parseInt(process.argv[1] || 0, 10); i > 0; i++) {
  app.get('/a/:_id/route/' + i, function(req, res, next){
    next();
  });
}

app.use(route.get('/time', function *(){
  this.body = Date.now();
}));

app.listen(1339);
