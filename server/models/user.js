var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {
    User
}

// var newUser = new User({
//     email: 'sanchezalan95@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log('New User', newUser);
// }, (e) => {
//     console.log('Unable to save the user');
// });