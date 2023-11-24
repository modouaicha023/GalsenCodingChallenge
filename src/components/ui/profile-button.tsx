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
import { Banknote, LogOut, Settings, UserCog } from "lucide-react";
import defaultLogo from "../../../public/images/bro.svg"
const ProfileButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={defaultLogo} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          Profile
          <DropdownMenuShortcut>
            <UserCog />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Portfolio
          <DropdownMenuShortcut>
            <Banknote />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Settings
          <DropdownMenuShortcut>
            <Settings />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer m-auto text-red-500">
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
