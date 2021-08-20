var mongoose = require('mongoose'); var Schema = mongoose.Schema;
    // create Widget model
var widgetSchema = new Schema({
sn : {type: String, require: true, trim: true, unique: true}, name : {type: String, required: true, trim: true},
desc : String,
price : Number
});
var Widget = mongoose.model('Widget', widgetSchema);
