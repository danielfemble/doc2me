
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialBadgeProps {
  className?: string;
}

const TestimonialBadge = ({ className = "" }: TestimonialBadgeProps) => {
  return (
    <div className={`flex items-center gap-4 text-sm text-doc-gray pt-4 ${className}`}>
      <div className="flex -space-x-2">
        {/* Female doctors avatars */}
        {[1, 2].map((i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
            <img
              src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
              alt="Female doctor avatar"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Male doctors avatars */}
        <Avatar className="w-8 h-8 border-2 border-white shadow-sm">
          <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=150&h=150" alt="Male doctor" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        
        <Avatar className="w-8 h-8 border-2 border-white shadow-sm">
          <AvatarImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=150&h=150" alt="Male doctor" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
      </div>
      <span>Trusted by <b>leading doctors</b></span>
    </div>
  );
};

export default TestimonialBadge;
