import User from "@/models/User"
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export const POST = async (request:any)=>{
    const {fullName,mail,password} = await request.json();
    await connect();
    const existingUser = await User.findOne({mail});

    if(existingUser){
        return new NextResponse('Emaill is alreary in use',{status:400});
    }
    const hashedPassword =  bcrypt.hashSync(password,10);

    const newUser = new User({
        fullName,
        mail,
        password:hashedPassword,
        twitterUsername:"",
        githubUsername:"",
        linkedinUsername:"",
    }) 


    try {
        await newUser.save();
        return new NextResponse("User is registered",{status:200});
        
        
    } catch (err:any) {
        return new NextResponse(err,{
                status:500,
            });
    }
}