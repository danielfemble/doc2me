
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

interface TestimonialBadgeProps {
  className?: string;
}

const TestimonialBadge = ({ className = "" }: TestimonialBadgeProps) => {
  return (
    <div className={`flex items-center gap-4 text-sm text-doc-gray pt-4 ${className}`}>
      <div className="flex -space-x-3">
        {/* Female doctor avatars */}
        <Avatar className="w-8 h-8 border-2 border-white shadow-md">
          <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&h=150" alt="Female doctor" />
          <AvatarFallback><UserRound className="h-4 w-4" /></AvatarFallback>
        </Avatar>
        
        <Avatar className="w-8 h-8 border-2 border-white shadow-md">
          <AvatarImage src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&h=150" alt="Female doctor with stethoscope" />
          <AvatarFallback><UserRound className="h-4 w-4" /></AvatarFallback>
        </Avatar>
        
        {/* Male doctors avatars */}
        <Avatar className="w-8 h-8 border-2 border-white shadow-md">
          <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&h=150" alt="Male doctor" />
          <AvatarFallback><UserRound className="h-4 w-4" /></AvatarFallback>
        </Avatar>
        
        <Avatar className="w-8 h-8 border-2 border-white shadow-md">
          <AvatarImage src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&h=150" alt="Male doctor with stethoscope" />
          <AvatarFallback><UserRound className="h-4 w-4" /></AvatarFallback>
        </Avatar>
      </div>
      <span>Trusted by <b>leading doctors</b></span>
    </div>
  );
};

export default TestimonialBadge;
