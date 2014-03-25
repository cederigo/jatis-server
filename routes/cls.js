/*
 * `cls` collection (classes)
 */

var db = require('../lib/db');

function get (req, res) {

  var name = req.param('name', '');

  if (!name) {
    return res.json({success: false, error: 'Missing parameter `name`'});
  }

  db.cls.get(name, function (err, cls) {
    if (err) {
      return res.json({success: false, error: 'Could not get class named: ' + name});
    }

    res.json({success: true, data: cls});
  });

}

module.exports = {
  get: get
};