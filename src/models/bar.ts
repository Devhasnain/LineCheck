import mongoose from "mongoose";
import haversine from "haversine";

const offerSchema = new mongoose.Schema({
    type: { type: String, required: true ,minlength: 3, maxlength: 100}, // "discount", "freeDelivery", etc.
  });

 
const barSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 30 },
    description: { type: String, required: true, minlength: 3, maxlength: 250 },
    image: { type: String, required: true, minlength: 3, maxlength: 250 },
    rating: { type: String, required: true,  maxlength: 40 },
    location: {
      type: {
        type: String,
        default: "Point"
      },
      address: { type: String, },
      coordinates: {
              type: [Number],
              required: true,
              validate: {
                validator: (coords:any) => coords.length === 2 && coords.every((c:any) => !isNaN(c)),
                message: 'Invalid coordinates',
              },
            }
    },
    offers: [offerSchema],
    eventDate: { type: Date },
    volume: { type: Number }, // Volume of people
    waitTime:{
      start: { type: Number, required: true }, // "discount", "freeDelivery", etc.
      end: { type: Number,required: true  }, // Discount value, percentage, etc.
    },
    lineQueue: { type: Number }, // Length of the queue in people
    email: {
      type: String,
      required: true,
      unique:true,
      minlength: 3,
      maxlength: 200,
      ref:'User'
    },
  },
);




// barSchema.pre('save', function (next) {
//   const earthRadius = 3958.8; // Earth's radius in miles
//   const userCoordinates = { latitude: userLatitude, longitude: userLongitude }; // User's coordinates
  
//   const barCoordinates = {
//     latitude: this.location.coordinates[1],
//     longitude: this.location.coordinates[0],
//   };
  
//   const distance = haversine(userCoordinates, barCoordinates, { unit: 'mile' });
//   this.distance = distance;
//   next();
// });



barSchema.index({ location: "2dsphere" });
const Bar = mongoose.models.Bar || mongoose.model("Bar", barSchema);

export default Bar;
