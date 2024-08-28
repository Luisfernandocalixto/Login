const mongoose = require('mongoose');


const uri = process.env.DATABASE_URL;
mongoose.connect(uri, {

})
    .then(db => console.log('DB es connected'))
    .catch(err => console.error(err))

