import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import Offer from "@/models/offer";
import { NextResponse } from "next/server";
import Bar  from "@/models/bar";
import haversine from 'haversine'
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req:any,res:NextApiResponse) {
    await connectMongoDB();
    try {
        const offers = await Offer.find({});
        const latitude = req.nextUrl.searchParams.get('userLatitude')
        const longitude = req.nextUrl.searchParams.get('userLongitude')
        const userCoordinates = {
            latitude,
            longitude
        };

        // Fetch all bars
        const allBars = await Bar.find({});

        const barsWithDistance = allBars.map((bar:any) => {
            const barCoordinates = {
                latitude: bar.location.coordinates[1],
                longitude: bar.location.coordinates[0],
            };
            const distance = haversine(userCoordinates, barCoordinates, {
                unit: "mile",
            });

            // Exclude unnecessary properties from the response
            const { description, location, volume, lineQueue, email, ...rest } = bar._doc;

            return { ...rest, distance };
        });

        let data ={
            barsWithDistance,
            offers
        }

        return NextResponse.json({ message: 'home Data', data });
    } catch (error:any) {
        return NextResponse.json({ message: error.message });
    }
}
