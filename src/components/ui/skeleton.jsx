import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-muted dark:bg-muted-foreground", className)} {...props} />);
}

export { Skeleton }
