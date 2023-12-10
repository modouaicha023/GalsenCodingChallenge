import { getServerSession } from "next-auth";
import User from "../../../models/User"
import connect from "../../../utils/db"
export async function GET(req, res) {
    // const session = await getServerSession();
    await connect();
    // res.json(await User.findOne({email:session?.user?.email}))
    const user = res.json(await User.find());
    return NextResponse.json({ user });
}