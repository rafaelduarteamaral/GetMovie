const mongoose = require('mongoose');

const url = 'mongodb+srv://root:admin@cluster0.fquaa.mongodb.net/todo?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

export default mongoose;