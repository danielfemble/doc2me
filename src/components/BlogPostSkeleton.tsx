
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock } from "lucide-react";

const BlogPostSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-doc-gray mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
