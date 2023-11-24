// "use clientl"
// import UserCard, { User } from "@/components/UserCard";
// import { Button } from "@/components/ui/button";
// import Container from "@/components/ui/container";
// import { GithubIcon } from "lucide-react";
// import { getServerSession } from "next-auth";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { options } from "../api/auth/[...nextauth]/options";

// interface SessionUser extends User {
//   mail: string;
// }

// export default async function Profile() {
//   const router = useRouter();

//   const session = await getServerSession(options);
//   if (!session) {
//     router.replace("/api/auth/signin/callbackURL=/server");
//     return null;
//   }
//   if (!session.user) {
//     return (
//       <Container>
//         <div className="">
//           <h1 className=""> User Not found</h1>
//           <Button asChild size={"lg"} className="shadow-10px-black font-bold">
//             <Link href={"/profile"} className="">
//               Sign In{""} <GithubIcon size={44} />
//             </Link>
//           </Button>
//         </div>
//       </Container>
//     );
//   }
//   return (
//     <Container>
//       <UserCard user={session.user as SessionUser} />
//     </Container>
//   );
// }

import React from "react";

export default function Profile() {
  return <div>Profile</div>;
}
