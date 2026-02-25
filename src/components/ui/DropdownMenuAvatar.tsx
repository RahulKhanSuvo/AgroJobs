import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { User } from "@/redux/features/auth/auth.type";
import type { MenuItem } from "../layouts/NavBar/Navbar";
import { Link } from "react-router";
interface AvatarDropdownProps {
  user: User;
  menu: MenuItem[];
}

export function AvatarDropdown({ user, menu }: AvatarDropdownProps) {
  return (
    <DropdownMenu>
      <div className="flex items-center gap-2">
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>{user.firstName}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <h4>{user.firstName}</h4>
      </div>

      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          {menu.map((item) => (
            <DropdownMenuItem key={item.title}>
              <Link to={item.url}>{item.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
