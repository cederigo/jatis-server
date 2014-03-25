
var mongo = require('mongoskin');
var conf = require('./conf');

//connect
var db = module.exports = mongo.db(conf.mongo + '?auto_reconnect', {native_parser: true, });

//`Cls` collection
db.bind('cls').bind({
  get: function (name, cb) {
    this.findOne({className: name}, cb);
  }
});

db.cls.ensureIndex({name: 1}, function (err) {
  if (err) {
    throw new Error('Could not create Index on cls collection. error: ' + err.message);
  }
});
