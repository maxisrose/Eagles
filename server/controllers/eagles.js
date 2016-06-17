var mongoose = require('mongoose');
var Eagle = mongoose.model('Eagle');

module.exports = {
  show: function(req, res){
    Eagle.find({}, function(err, eagles){
      if(err){
        res.json(err);
      }else{
      // console.log(eagles);
      res.render('index', {eagles: eagles});
      }
    });
  },
  new: function(req, res){
    var eagle = new Eagle({name: req.body.name, fly: req.body.fly, description: req.body.description});
    eagle.save(function(err){
      if(err){
        res.json(err);
      }else{
        res.redirect('/');
      }
    });
  },
  edit: function(req, res){
    Eagle.update({_id: req.params.id}, {name: req.body.name, fly: req.body.fly, description: req.body.description}, function(err){
      if(err){
        res.json(err);
      }else{
        res.redirect('/');
      }
    });

  },
  showOne: function(req, res){
    Eagle.findOne({_id: req.params.id}, function(err, eagle){
      if(err){
        res.json(err);
      }else{
      // console.log(Eagle.findOne({id: req.params.id}))
      res.render('one', {eagles: eagle, params: req.params});
      }
    });
  },
  destroy: function(req, res){
    Eagle.remove({_id: req.params.id}, function(err){
      if (err){
        res.json(err);
      }else {
        res.redirect('/');
      }
    })
  }
}
