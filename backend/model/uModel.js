const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleID: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isNewUser: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
  },
  address: {
    type: String,
    defualt: null,
  },
  city: {
    type: String,
    default: null,
  },
  regID: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: "0000000000",
  },
  isDonor: {
    type: Boolean,
    default: false,
  },
  donations: [
    {
      donationID: {
        type: String,
        required: true,
      },
      serving: {
        type: String,
        required: true,
      },
      post_date: {
        type: Date,
        default: Date.now,
      },
      expiration: {
        type: Date,
        required: true,
      },
      dietRestrictions: {
        type: String,
        default: true,
      },
      description: {
        type: String,
        required: null,
      },
    },
  ],
  defualt: [],
});

userSchema.plugin(require("mongoose-findorcreate"));

module.exports = mongoose.model("User", userSchema);
