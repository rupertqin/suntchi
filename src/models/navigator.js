const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
      
const NavigatorSchema = new Schema({
  name: {type: String},
  url: {type: String},
  disabled: {type: Boolean},
  create_at: {type: Date, default: Date.now},
  update_at: {type: Date, default: Date.now}
})

const Navigator = mongoose.model('Navigator', NavigatorSchema)
module.exports = Navigator