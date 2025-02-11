const mongoose = require("mongoose");

const doctor = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true},
    password: String,
    phone: { type: Number, require: true, unique: true},
    patients: [
        {
            patientId: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            createdAt: new Data(),
        }
    ],
});

const patient = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true},
    password: String,
    phone: { type: Number, require: true, unique: true},
    doctor: [
        {
            doctorId: mongoose.Schema.Types.ObjectId,
            issue: { type: String, require: true },
            ref: "Doctor",
            createdAt: new Date(),
            firtVisit: new Date(),
            lastVisit: new Date(),
        }
    ]
})

const DoctorModel = mongoose.model("Doctor", doctor);
const PatientModal = mongoose.model("Patient", patient);

module.exports = {
    DoctorModel: DoctorModel,
    PatientModal: PatientModal,
};