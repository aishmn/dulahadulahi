const catchAsync = require("../utils/catchAsync");
const Profile = require("../models/profileModel");
const factory = require("./handlerFactory");

exports.getMyProfile = catchAsync(async (req, res, next) => {
  const result = await Profile.findOne({ user: req.user._id });
  res.status(200).json({
    status: "success",
    data: {
      profile: result,
    },
  });
});

exports.getMyProfileId = async (req, res, next) => {
  const profile = await Profile.findOne((user = req.user_id));
  req.params.id = profile._id;
  next();
};

exports.getAllProfile = factory.getAll(Profile);

exports.updateProfile = factory.updateOne(Profile);
