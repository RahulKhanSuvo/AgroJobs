import { NavLink } from "react-router";
import { useSidebar } from "./ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SidebarLinkProps {
  url: string;
  icon?: React.ElementType;
  title: string;
}

export function SidebarLink({ url, icon: Icon, title }: SidebarLinkProps) {
  const { state, isMobile } = useSidebar();

  return (
    <NavLink to={url} end>
      {({ isActive }) => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={`flex items-center gap-2  py-2 rounded-md transition-colors
                  ${isActive ? "bg-sidebar-accent text-white" : "text-muted-foreground hover:bg-muted"}`}
              >
                {/* Icon container */}
                {Icon && (
                  <div className="flex items-center justify-center w-10">
                    <Icon
                      className={`transition-all duration-200 ease-in-out ${
                        state === "collapsed" ? "w-6 h-6" : "w-5 h-5"
                      }`}
                    />
                  </div>
                )}

                {/* Show text only when sidebar is expanded */}
                {state !== "collapsed" && (
                  <span className="text-[16px]">{title}</span>
                )}
              </div>
            </TooltipTrigger>

            {/* Tooltip for collapsed sidebar */}
            {state === "collapsed" && !isMobile && (
              <TooltipContent side="right" align="center">
                {title}
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      )}
    </NavLink>
  );
}
