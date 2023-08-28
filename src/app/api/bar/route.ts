import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import Bar from "@/models/bar";
import { NextResponse } from "next/server";
import haversine from 'haversine'


export async function POST(req:any) {
  try {
    await connectMongoDB();

    const {
        title,
        description,
        image,
        rating,
        location,
        offers,
        volume,
        waitTime,
        lineQueue,
        email,
      } = await req.json();

    const newBar = new Bar({
      title,
      description,
      image,
      rating,
      location,
      offers,
      volume,
      waitTime,
      lineQueue,
      email,
    });

    await newBar.save();
      
    return NextResponse.json({ message: 'Bar created successfully',data:newBar });
  } catch (error:any) {
    return NextResponse.json({ message:error.message });

  }
}
export async function PUT(req:any,res:any) {
  try {
    await connectMongoDB();
   const { userId, waitTime, volume, numberOfPeople } = req.body;
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            "waitTime": waitTime,
            "volume": volume,
            "numberOfPeople": numberOfPeople,
          }
        },
        { new: true }
      );
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
export async function GET2(req:any,res:any) {
  try {
    await connectMongoDB();
    const barId = req.params.barId;
      const users = await User.find({ numberOfPeople: { $exists: true }, barId });
      const BarGet = await Bar.findById( barId);
      const totalUsers = users.length;
  
      if (totalUsers === 0) {
        return res.json({ averageWaitTime: 0, averageVolume: 0, averageNumberOfPeople: 0 });
      }
  
      const totalWaitTime = users.reduce((sum:any, user:any) => sum + user.waitTime, 0);
      const totalVolume = users.reduce((sum:any, user:any) => sum + user.volume, 0);
      const totalNumberOfPeople = users.reduce((sum:any, user:any) => sum + user.numberOfPeople, 0);
      const averageWaitTime = totalWaitTime / totalUsers;
      const averageVolume = totalVolume / totalUsers;
      const averageNumberOfPeople = totalNumberOfPeople / totalUsers;
  
    return NextResponse.json({ BarGet,averageWaitTime, averageVolume, averageNumberOfPeople });
  } catch (error) {
    console.log(error);
  }
}  
export async function GET(req:any,res:any) {
  try {
    await connectMongoDB();

 
    const id = req.nextUrl.searchParams.get('id');
    // Fetch a bar by ID
    const bar = await Bar.findOne({ _id: id });
    return NextResponse.json({ message:'Near bar get', data: bar});
  } catch (error:any) {
    return NextResponse.json({ message:error.message});
  }
}  
export async function GET3(req:any,res:any) {
  try {
    await connectMongoDB();

 
    const id = req.nextUrl.searchParams.get('id');
    // Fetch a bar by ID
    const bar = await Bar.find({ _id: id });
    return NextResponse.json({ message:'Near bar get', data: bar});
  } catch (error:any) {
    return NextResponse.json({ message:error.message});
  }
}  
export async function GET1(req:any,res:any) {
  try {
    await connectMongoDB();
    // Fetch all bars
    const allBars = await Bar.find({});

    return NextResponse.json({ message:'All bar', data: allBars});
  } catch (error) {
    console.log(error);
  }
}  
export async function Delete(req:any,res:any) {
    try {
      const barId = req.params.barId;
      await Bar.findByIdAndDelete(barId);
      return NextResponse.json({  message: 'Bar deleted successfully' });
    } catch (error) {
      console.log(error);
    }
  }  


//   function getBarsInNeighborhood(neighborhood) {
//     const barsData = [
//       { id: 1, name: 'Cozy Pub', rating: 4.5 },
//       { id: 2, name: 'Hipster Bar', rating: 4.0 },
//       { id: 3, name: 'Rooftop Lounge', rating: 4.8 }
//       // ... more bar data
//     ];
  
//     return barsData;
//   }
// function getTopPicks(barsData) {
// const sortedBars = barsData.sort((a, b) => b.rating - a.rating);
// return sortedBars.slice(0, 3); // Get the top 3 picks
// }


// app.get('/api/top-picks/:neighborhood', (req, res) => {
//     const neighborhood = req.params.neighborhood;
//     const barsData = getBarsInNeighborhood(neighborhood);
//     const topPicks = getTopPicks(barsData);
//     res.json(topPicks);
//   });
  