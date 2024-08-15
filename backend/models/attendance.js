import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    studentIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }]
});

// Create the Attendance model
const Attendance = mongoose.model('Attendance', attendanceSchema);

export { Attendance };
