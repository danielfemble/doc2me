
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import SignupDialog from "@/components/SignupDialog";

const PricingSection = () => {
  const [selectedTier, setSelectedTier] = useState<'single' | 'organization'>('single');

  const pricingOptions = [
    {
      id: 'single',
      title: 'Single Doctor',
      description: 'Perfect for independent practitioners who want to enhance their online presence',
      benefits: [
        'AI guidance in content creation',
        'AI enhancement of health information',
        'Smart distribution recommendations',
        'Increased online visibility',
        'Build patient trust',
        'Establish thought leadership'
      ]
    },
    {
      id: 'organization',
      title: 'Organization',
      description: 'Ideal for clinics, hospitals, and healthcare organizations with multiple practitioners',
      benefits: [
        'Everything in Single Doctor plan',
        'Multi-user accounts',
        'Organization-wide content library',
        'Collaborative content creation',
        'Advanced analytics dashboard',
        'Priority support'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 relative z-10 bg-gradient-to-b from-doc-blue-light/30 via-white/90 to-white/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-doc-blue via-doc-purple to-doc-blue-dark bg-clip-text text-transparent">Choose Your Plan</h2>
          <p className="text-lg text-doc-gray max-w-2xl mx-auto">
            Select the option that best fits your practice needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingOptions.map((option) => (
            <Card 
              key={option.id}
              className={`pricing-card transition-all duration-300 hover:shadow-neon ${selectedTier === option.id ? 'border-2 border-doc-blue shadow-neon' : 'border border-gray-200'}`}
              onClick={() => setSelectedTier(option.id as 'single' | 'organization')}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
                <CardDescription className="text-base">{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-bold text-lg text-doc-black">Contact us for pricing</p>
                <ul className="space-y-2">
                  {option.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-doc-purple shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <SignupDialog 
                  trigger={
                    <Button 
                      variant="gradient" 
                      className="w-full" 
                      size="lg"
                    >
                      Get Demo
                    </Button>
                  }
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
