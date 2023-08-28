import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import Offer from "@/models/offer";
import { NextResponse } from "next/server";
import Bar  from "@/models/bar";
import haversine from 'haversine'
import { NextApiRequest, NextApiResponse } from "next";
export async function POST(req:any) {
  try {
    await connectMongoDB();
    const {
        barId,
        name,
        image,
        description,
        is_active,
        price,
      } = await req.json();
      const newOffer = new Offer({
        barId,
        name,
        image,
        description,
        is_active,
        price,
      });
  
      await newOffer.save();
  
    return NextResponse.json({ message: 'Offer created successfully',data:newOffer });
  } catch (error:any) {
    return NextResponse.json({ message: error.message});

  }
}
export async function PUT(req:any,res:any) {
  try {
    await connectMongoDB();
    const offerId = req.params.offerId;
    const {
        barId,
      name,
      image,
      description,
      is_active,
      price,
    } = req.body;

    const updatedOffer = await Offer.findByIdAndUpdate(
      offerId,
      {
        barId,
        name,
        image,
        description,
        is_active,
        price,
      },
      { new: true }
    );

    return NextResponse.json({ message: 'Offer update successfully',data:updatedOffer  });
  } catch (error) {
    console.log(error);
  }
}
export async function GET(req:any,res:NextApiResponse) {
    await connectMongoDB();
  try {
      console.log("offers")
        const offers = await Offer.find({});
    return NextResponse.json({  message: 'Offer get successfully',data:offers });
  } catch (error:any) {
    return NextResponse.json({ message: 'error.message'});
  }
}  
export async function Delete(req:any,res:any) {
  try {
    const offerId = req.params.offerId;
    await Offer.findByIdAndDelete(offerId);
    return NextResponse.json({  message: 'Offer deleted successfully' });
  } catch (error) {
    console.log(error);
  }
}  
    



// connectMongoDB();


// export default async (req:any, res:any) => {
//    const {
//     query: { barId },
//     method,
//     body: { userLatitude, userLongitude, maxDistance },
//   } = req;

//   switch (method) {
//     case "POST":
//         try {
//                 const {
//                     barId,
//                     name,
//                     image,
//                     description,
//                     is_active,
//                     price,
//                   } = req.body;
              
//                   const newOffer = new Offer({
//                     barId,
//                     name,
//                     image,
//                     description,
//                     is_active,
//                     price,
//                   });
              
//                   await newOffer.save();
              
//                 return NextResponse.json({ message: 'Offer created successfully',data:newOffer });
//               } catch (error) {
//                 console.log(error);
//               }
//     break
//     case "GET":
//       try {
//         const offers = await Offer.find({ store_id: barId });
//         res.status(200).json(offers);
//       } catch (error) {
//         res.status(500).json({ error: "Error getting offers" });
//       }
//       break;
//     case "GET":
//           try {
//         const offers = await Offer.find();
//     return NextResponse.json({  message: 'Offer get successfully',data:offers });
//   } catch (error) {
//     console.log(error);
//   }
//     break;
//   case "DELETE":
//     try {
//             const offerId = req.params.offerId;
//             await Offer.findByIdAndDelete(offerId);
//             return NextResponse.json({  message: 'Offer deleted successfully' });
//           } catch (error) {
//             console.log(error);
//           }
//           break;
//     case "PUT":
//           try {
//     const offerId = req.params.offerId;
//     const {
//         barId,
//       name,
//       image,
//       description,
//       is_active,
//       price,
//     } = req.body;

//     const updatedOffer = await Offer.findByIdAndUpdate(
//       offerId,
//       {
//         barId,
//         name,
//         image,
//         description,
//         is_active,
//         price,
//       },
//       { new: true }
//     );

//     return NextResponse.json({ message: 'Offer update successfully',data:updatedOffer  });
//   } catch (error) {
//     console.log(error);
//   }
//   case "POST":
//       try {
//         const userCoordinates = { latitude: userLatitude, longitude: userLongitude };

//         const bar:any = await Bar.findById(barId);

//         if (!bar) {
//           return res.status(404).json({ error: "Bar not found" });
//         }

//         const offers = await Offer.find({ barId: barId });

//         const nearbyOffers = offers.filter((offer:any) => {
//           const barCoordinates = {
//             latitude: bar.location.coordinates[1],
//             longitude: bar.location.coordinates[0],
//           };

//           const distance = haversine(userCoordinates, barCoordinates, { unit: "mile" });
//           return distance <= maxDistance;
//         });

//         res.status(200).json(nearbyOffers);
//       } catch (error) {
//         res.status(500).json({ error: "Error getting nearby offers" });
//       }
//       break;
//     default:
//       res.status(405).json({ error: `Method ${method} not allowed` });
//       break;
//   }
// };