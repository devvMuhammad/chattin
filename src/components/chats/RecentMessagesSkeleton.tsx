import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function RecentMessagesSkeleton() {
  return (
    <div className="space-y-3">
      {Array(5)
        .fill(" ")
        .map(() => (
          <Card className="p-2 flex gap-2 items-center border-zinc-700 hover:bg-zinc-900 cursor-pointer">
            <Skeleton className="h-14 w-20 rounded-full" />
            <div className="w-full space-y-2">
              <Skeleton className="w-full h-8 rounded-lg" />
              <Skeleton className="w-full h-6" />
              {/* <p className="max-w-[250px] text-sm overflow-y-hidden overflow-x-hidden overflow-ellipsis text-nowrap">
      {text}
    </p> */}
            </div>
          </Card>
        ))}
    </div>
  );
}
