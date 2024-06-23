const mongoose = require('mongoose')
const StudentModel2 = new mongoose.Schema({


        name: String,
        roll: String,
        admission: String,
        isjvd: String,
        tutionfee: Number,
        universityfee:Number,
        skilldevfee:Number,
        transportfee: Number,
        hostelfee: Number,
        paidtutionfee:Number,
        paidhostelfee:Number,
        paidtransportfee:Number,
        paiduniversityfee:Number,
        paidskilldevfee:Number,
        paidfee: Number,
        balance: Number,
        password: String,
        mentorId: String,
        isApproved:Boolean,
        totalfee : Number,
        paymentdetails:{
                transport:Number,
                hostel:Number,
                tution:Number,
                university:Number,
                skilldev:Number,
               new:Boolean,
},

})

const newmodel = mongoose.model("studenttable", StudentModel2)
module.exports = newmodel
