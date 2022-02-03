import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  capacityCurr: Number,
  enroll: {
    type: [String],
    default: [],
  },
  waitlist: {
    type: [String],
    default: [],
  },
  startDate: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
