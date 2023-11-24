// import { getServerSession } from "next-auth/next";
// import { options } from "../api/auth/[...nextauth]/options";

// export default async function Challenges() {
//   const session = await getServerSession(options);
//   // if (!session) {
//   //   redirect("/api/auth/signin/callbackURL=/server");
//   // }

//   return <>{session ? <p>Helo {session?.user?.image} </p> : <p>Log out</p>}</>;
// }
import React from 'react'

function Challenges() {
  return (
    <div>Challenges</div>
  )
}

export default Challenges