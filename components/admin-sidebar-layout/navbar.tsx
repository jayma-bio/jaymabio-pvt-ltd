import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-sidebar-layout/user-nav";
import { SheetMenu } from "@/components/admin-sidebar-layout/sheet-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-8">
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild></TooltipTrigger>
            <TooltipContent side="bottom">Exlan Coin</TooltipContent>
          </Tooltip>
          <div className="flex items-center gap-3">
            <UserNav />
            {/* <ModeToggle /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
