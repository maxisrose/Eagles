var eagles = require('../controllers/eagles.js');

module.exports = function(app){
  app.get('/', function(req, res){
    console.log('/ route');
    eagles.show(req, res);
  }),
  app.get('/eagles/new', function(req, res){
    console.log('/new route')
    res.render('new');
  }),
  app.get('/eagles/:id', function(req, res){
    console.log('/showone route')
    eagles.showOne(req, res);
  }),
  app.get('/eagles/:id/edit', function(req, res){
    console.log('/edit route')
    res.render('edit', {req: req});
  }),

  app.post('/eagles', function(req, res){
    console.log('/eagles route for new eagles post data')
    eagles.new(req, res);
  }),
  app.post('/eagles/:id', function(req, res){
    console.log('/edit post route')
    eagles.edit(req, res);
  }),
  app.post('/eagles/:id/destroy', function(req, res){
    console.log('/destroy route');
    eagles.destroy(req, res);
  })
}
