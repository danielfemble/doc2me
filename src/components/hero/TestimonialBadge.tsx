
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { UserRound, Flag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
interface TestimonialBadgeProps {
  className?: string;
}
const TestimonialBadge = ({
  className = ""
}: TestimonialBadgeProps) => {
  return <div className={`flex items-center gap-4 text-sm text-doc-gray pt-4 ${className}`}>
      <div className="flex -space-x-2">
        {/* Female doctor avatars */}
        <Avatar className="w-8 h-8 border-2 border-white shadow-sm">
          <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&h=150" alt="Female doctor" />
          <AvatarFallback><UserRound className="h-4 w-4" /></AvatarFallback>
        </Avatar>
        
        <Avatar className="w-8 h-8 border-2 border-white shadow-sm">
          <AvatarImage src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&h=150" alt="Female doctor with stethoscope" />
          <AvatarFallback><UserRound className="h-4 w-4" /></AvatarFallback>
        </Avatar>
        
        {/* Male doctors avatars */}
        <Avatar className="w-8 h-8 border-2 border-white shadow-sm">
          <AvatarImage alt="Male doctor" src="/lovable-uploads/9d419a94-22d3-405e-ad70-ae56d9122f8c.png" />
          <AvatarFallback><UserRound className="h-4 w-4" /></AvatarFallback>
        </Avatar>
        
        <Avatar className="w-8 h-8 border-2 border-white shadow-sm">
          <AvatarImage src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&h=150" alt="Male doctor with stethoscope" />
          <AvatarFallback><UserRound className="h-4 w-4" /></AvatarFallback>
        </Avatar>
      </div>
      <span className="flex items-center gap-2">
        Trusted by <b>leading doctors</b>
        <div className="flex space-x-1 ml-1">
          {/* US Flag */}
          <Badge variant="outline" className="px-1.5 py-0 border-none">
            <img src="https://flagcdn.com/w20/us.png" width="16" height="12" alt="US flag" className="inline-block" />
          </Badge>
          
          {/* Swiss Flag */}
          <Badge variant="outline" className="px-1.5 py-0 border-none">
            <img src="https://flagcdn.com/w20/ch.png" width="16" height="12" alt="Swiss flag" className="inline-block" />
          </Badge>
          
          {/* Austrian Flag */}
          <Badge variant="outline" className="px-1.5 py-0 border-none">
            <img src="https://flagcdn.com/w20/at.png" width="16" height="12" alt="Austrian flag" className="inline-block" />
          </Badge>
        </div>
      </span>
    </div>;
};
export default TestimonialBadge;
