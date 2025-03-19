
import { useRef, useEffect, useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  testimonial: string;
  specialty: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Endocrinologist',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
    testimonial: "Doc2Me has revolutionized how I educate patients with diabetes. I've seen a 40% improvement in medication adherence since I started sharing personalized videos about glucose monitoring.",
    specialty: 'Diabetes Care',
  },
  {
    id: 2,
    name: 'Dr. Michael Rodriguez',
    role: 'Cardiologist',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
    testimonial: "My patients with heart conditions need constant reinforcement of lifestyle changes. Doc2Me lets me create quick videos that they can reference anytime. It's been a game-changer for patient compliance.",
    specialty: 'Heart Health',
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    role: 'Pediatrician',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 5,
    testimonial: "Parents constantly ask the same questions about childhood illnesses. Now I record once and share with everyone who needs it. Saves me hours every week and parents love having a trusted resource.",
    specialty: 'Child Development',
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    role: 'Orthopedic Surgeon',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 5,
    testimonial: "Post-surgery rehab instructions are critical. With Doc2Me, I create detailed rehab videos that patients can follow at home. My staff reports fewer confused phone calls and better recovery outcomes.",
    specialty: 'Joint Replacement',
  },
  {
    id: 5,
    name: 'Dr. Lisa Martinez',
    role: 'Neurologist',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    rating: 5,
    testimonial: "Explaining complex neurological conditions used to be challenging in a short appointment. Now I supplement with personalized videos. My patients feel more informed and comfortable with their treatment plans.",
    specialty: 'Migraine Treatment',
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-doc-blue-light/40 px-4 py-1.5 rounded-full text-doc-blue-dark text-sm font-medium mb-4">
          <span>Success Stories</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-doc-black">
          Hear from healthcare professionals
        </h2>
        <p className="text-doc-gray text-lg">
          Join thousands of doctors who are enhancing patient care with Doc2Me.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-0">
        <div 
          ref={testimonialsRef}
          className="overflow-hidden"
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="testimonial-card">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-doc-black">{testimonial.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-doc-gray">{testimonial.role}</span>
                          <span className="bg-doc-blue-light/50 text-doc-blue text-xs px-2 py-0.5 rounded-full">
                            {testimonial.specialty}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-doc-gray mb-4 italic">"{testimonial.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            disabled={isAnimating}
          >
            <ArrowLeft className="w-5 h-5 text-doc-black" />
          </button>
          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            disabled={isAnimating}
          >
            <ArrowRight className="w-5 h-5 text-doc-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
