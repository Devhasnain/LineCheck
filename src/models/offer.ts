const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
  {
    barId: { type: mongoose.Types.ObjectId, required: true ,ref: "Bar"},
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    image: { type: String, required: true,  },
    description: { type: String, required: true, minlength: 3, maxlength: 250 },
    is_active: { type: Boolean, required: true,default:true },
    price: { type: Number, required: true,  },
  },
);

const Offer = mongoose.models.Offer || mongoose.model("Offer", OfferSchema);

export default Offer;
