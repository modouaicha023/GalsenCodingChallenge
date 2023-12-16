import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <Container>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div className="flex flex-col items-center justify-center w-[300px] h-[400px] gap-2 p-6">
          <Skeleton className="h-[200px] w-full " />
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <div className="flex gap-4 w-full">
            <Skeleton className="h-[30px] w-full rounded-lg" />
            <Skeleton className="h-[30px] w-full rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[300px] h-[400px] gap-2 p-6">
          <Skeleton className="h-[200px] w-full " />
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <div className="flex gap-4 w-full">
            <Skeleton className="h-[30px] w-full rounded-lg" />
            <Skeleton className="h-[30px] w-full rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[300px] h-[400px] gap-2 p-6">
          <Skeleton className="h-[200px] w-full " />
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <div className="flex gap-4 w-full">
            <Skeleton className="h-[30px] w-full rounded-lg" />
            <Skeleton className="h-[30px] w-full rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[300px] h-[400px] gap-2 p-6">
          <Skeleton className="h-[200px] w-full " />
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <div className="flex gap-4 w-full">
            <Skeleton className="h-[30px] w-full rounded-lg" />
            <Skeleton className="h-[30px] w-full rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[300px] h-[400px] gap-2 p-6">
          <Skeleton className="h-[200px] w-full " />
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <div className="flex gap-4 w-full">
            <Skeleton className="h-[30px] w-full rounded-lg" />
            <Skeleton className="h-[30px] w-full rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[300px] h-[400px] gap-2 p-6">
          <Skeleton className="h-[200px] w-full " />
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <div className="flex gap-4 w-full">
            <Skeleton className="h-[30px] w-full rounded-lg" />
            <Skeleton className="h-[30px] w-full rounded-lg" />
          </div>
        </div>
      </div>
    </Container>
  );
}
