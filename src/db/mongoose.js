const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://UtsavDesai:Utsav_*_26@cluster0.mvra3im.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log("<-------- mongodb connected -------->")
})