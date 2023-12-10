"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  LayoutDashboard, LogOut, UserCog } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
const ProfileButton = () => {
  const { data: session }: any = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session.user?.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel> {session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile">
          <DropdownMenuItem className="cursor-pointer">
            Profile
            <DropdownMenuShortcut>
              <UserCog />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
        <Link href="/dashboard">
          <DropdownMenuItem className="cursor-pointer">
            Dashboard
            <DropdownMenuShortcut>
              <LayoutDashboard />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
        {/* <DropdownMenuItem className="cursor-pointer">
          Settings
          <DropdownMenuShortcut>
            <Settings />
          </DropdownMenuShortcut>
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer m-auto text-red-500"
          onClick={() => signOut()}>
          Log Out
          <DropdownMenuShortcut>
            <LogOut />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
