const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  dob: { type: Date },
  country: { type: String, default: 'Nepal' },
  horoscope: { type: String },
  height: { type: String },
  weight: { type: String },
  bio: { type: String, trim: true },
  impressum: {
    type: String,
    trim: true,
    default:
      'Marry me, or you will regret whole life whom i got married to! :-)'
  },
  maritial_status: {
    type: String,
    enum: {
      values: ['married', 'unmarried', 'divorced'],
      default: 'unmarried',
      message: 'Maritial status is either: married, unmarried, divorced'
    }
  },
  education: {
    highest_education: { type: String },
    university: { type: String }
  },
  work: {
    position: { type: String },
    company: { type: String },
    averageSalary: { type: String }
  },
  desired_partner: {
    description: { type: String, default: 'Some one who understands me!' },
    height: { type: String },
    weight: { type: String },
    maritial_status: { type: String },
    religion: { type: String },
    horoscope: { type: String }
  }
});

ProfileSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name mobile'
  });
  next();
});
const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
