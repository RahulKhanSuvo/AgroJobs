import { cn } from "@/lib/utils";

type StackProps = {
  direction?: "vertical" | "horizontal"; // default vertical
  gap?: "sm" | "md" | "lg" | "xl"; // gap sizes
  children: React.ReactNode;
  className?: string;
};

const gapSizes: Record<string, string> = {
  sm: "gap-2 md:gap-3",
  md: "gap-4 md:gap-6",
  lg: "gap-6 md:gap-8",
  xl: "gap-8 md:gap-10",
};

export default function Stack({
  direction = "vertical",
  gap = "md",
  children,
  className,
}: StackProps) {
  const gapClass = gapSizes[gap] || gapSizes["md"];
  const flexDirection = direction === "vertical" ? "flex-col" : "flex-row";

  return (
    <div className={cn("flex", flexDirection, gapClass, className)}>
      {children}
    </div>
  );
}
