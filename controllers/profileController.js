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

exports.getAllProfile = factory.getAll(Profile);

exports.updateProfile = factory.updateOne(Profile);
