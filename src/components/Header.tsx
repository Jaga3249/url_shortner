import logo from "../../public/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link2, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = true;

  return (
    <nav className="flex justify-between items-center py-1 px-4 sm:px-6 md:px-10 bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <Link to="/">
        <img src={logo} alt="logo" className="h-10 sm:h-12 md:h-16 w-auto" />
      </Link>

      <div>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer outline-none">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="truncate">
                Jagannath Behera
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link2 className="mr-2 h-4 w-4" />
                My Links
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900">
                <LogOut className="mr-2 h-4 w-4 text-red-500" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={() => navigate("/auth")}
            className="text-sm sm:text-base"
          >
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Header;
