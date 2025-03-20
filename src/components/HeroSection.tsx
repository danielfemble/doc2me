
import { ArrowRight, Camera, Play, MessageCircle, ThumbsUp, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 max-w-2xl lg:max-w-xl">
            <div className="inline-flex items-center neo-glass backdrop-blur-sm rounded-full py-1.5 px-4 shadow-neon">
              <span className="text-sm text-doc-black font-medium">For Clinics & Doctors</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-doc-black leading-tight md:leading-tight">
              <span className="block">More than</span>
              <span className="block">patient education.</span>
              <span className="text-[#0271e5] animate-pulse-slow">Doctor-Driven. Effortless. Instant.</span>
            </h1>
            
            <p className="text-base md:text-xl text-doc-gray leading-relaxed">
              We're on a mission to extend the power of doctors beyond the clinic—with content that lasts. Create, personalize, and share short-form videos with your patients in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group gap-2 text-base h-12" size="lg">
                Try Doc2Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-doc-gray pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
                    <img
                      src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span>Trusted by <b>leading doctors</b></span>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1 lg:flex-grow pt-8 md:pt-0 md:ml-8">
            <div className="platform-visual-wrapper perspective-900 max-w-[52rem] mx-auto">
              <div className="relative mx-auto">
                {/* Doctor video call mockup */}
                <div className="relative z-10 mx-auto bg-gray-800 rounded-t-xl overflow-hidden shadow-2xl transform -rotate-1 border-8 border-gray-800">
                  <div className="relative bg-white overflow-hidden">
                    {/* Main interface with doctor */}
                    <div className="relative w-full aspect-video bg-gray-100">
                      {/* Doctor in video call */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full bg-gray-900">
                          <img 
                            src="/lovable-uploads/ed5ef07e-38b3-4cb2-a66b-d486545ffa2f.png" 
                            alt="Doctor in video call"
                            className="w-full h-full object-cover opacity-95"
                          />
                          
                          {/* On mobile, we'll hide or simplify some of the overlay elements */}
                          {!isMobile && (
                            <>
                              {/* Fallopian tube visualization - Hidden on mobile */}
                              <div className="absolute top-5 left-5 w-1/3 h-2/5 rounded-lg overflow-hidden border-2 border-[#0271e5] shadow-neon animate-float-delay-200">
                                <img 
                                  src="/lovable-uploads/900eb547-122c-4281-8854-c515037a44e0.png" 
                                  alt="Fallopian tube visualization"
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-[#0271e5]/80 text-white text-xs py-1 px-2">
                                  <p className="font-medium text-center">Fallopian Tube Diagram</p>
                                </div>
                              </div>
                              
                              {/* AI-generated content agenda for IVF - Hidden on mobile */}
                              <div className="absolute top-5 right-5 w-1/3 h-3/5 rounded-lg overflow-hidden border-2 border-[#0271e5] shadow-neon animate-float-delay-200 bg-white">
                                <div className="w-full h-full p-3 flex flex-col">
                                  <div className="text-[#0271e5] font-semibold text-sm border-b border-gray-200 pb-1 mb-2">
                                    Content Agenda: IVF Consultation
                                  </div>
                                  <ul className="text-xs space-y-2 text-gray-800">
                                    <li className="flex items-start gap-1.5">
                                      <div className="min-w-4 h-4 rounded-full bg-[#0271e5]/10 text-[#0271e5] flex items-center justify-center text-[10px] font-bold mt-0.5">1</div>
                                      <span>IVF process overview (2 min)</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <div className="min-w-4 h-4 rounded-full bg-[#0271e5]/10 text-[#0271e5] flex items-center justify-center text-[10px] font-bold mt-0.5">2</div>
                                      <span>Medication protocol explanation (2 min)</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <div className="min-w-4 h-4 rounded-full bg-[#0271e5]/10 text-[#0271e5] flex items-center justify-center text-[10px] font-bold mt-0.5">3</div>
                                      <span>Egg retrieval procedure details (1 min)</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <div className="min-w-4 h-4 rounded-full bg-[#0271e5]/10 text-[#0271e5] flex items-center justify-center text-[10px] font-bold mt-0.5">4</div>
                                      <span>Embryo transfer process (1.5 min)</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <div className="min-w-4 h-4 rounded-full bg-[#0271e5]/10 text-[#0271e5] flex items-center justify-center text-[10px] font-bold mt-0.5">5</div>
                                      <span>Success rates and expectations (2 min)</span>
                                    </li>
                                  </ul>
                                  <div className="mt-auto pt-2 text-[10px] text-gray-500 border-t border-gray-100">
                                    <div className="flex items-center justify-between">
                                      <span>AI-optimized talking points</span>
                                      <span className="text-[#0271e5]">Personalize →</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          
                          {/* Content title - Simplified on mobile */}
                          <div className="absolute top-4 left-0 right-0 flex justify-center">
                            <div className="bg-white/90 rounded-md py-1 px-3 shadow-sm">
                              <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold`}>Understanding the Menstrual Cycle</span>
                            </div>
                          </div>
                          
                          {/* Recording indicator */}
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                            <div className="bg-black/70 rounded-full py-1 px-4 flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                              <span className="text-xs text-white">00:08</span>
                            </div>
                          </div>
                          
                          {/* Doc2Me branding overlay - Simplified on mobile */}
                          <div className="absolute top-4 left-4 bg-white/90 rounded-md py-1 px-2">
                            <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold text-[#0271e5]`}>Doc2Me</span>
                            {!isMobile && <span className="text-xs text-gray-600 ml-1">Enhanced</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none"></div>
                  </div>
                  
                  <div className="h-4 bg-gray-800 rounded-b-lg"></div>
                </div>
                
                {/* Only show these floating elements on desktop */}
                {!isMobile && (
                  <>
                    <div className="absolute -top-8 -right-4 neo-glass p-4 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delayed">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="bg-gradient-to-br from-[#0271e5] to-[#0258B6] text-white p-2 rounded-lg">
                          <Scan className="w-5 h-5" />
                        </div>
                        <span className="font-medium whitespace-nowrap">AI Content Creation</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-16 -left-6 neo-glass p-4 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-200">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="bg-gradient-to-br from-doc-purple-light to-doc-purple text-white p-2 rounded-lg">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="font-medium whitespace-nowrap">Share with patients</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 right-16 neo-glass p-4 rounded-xl shadow-neon border border-white/30 z-20 animate-float-delay-300">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-500/10 p-2 rounded-lg">
                          <ThumbsUp className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Patient engagement up 78%</p>
                          <p className="text-xs text-gray-500">Since implementing Doc2Me</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="absolute -z-10 w-40 h-40 rounded-full bg-[#0271e5]/30 blur-3xl top-1/2 -translate-y-1/2 left-1/4"></div>
              <div className="absolute -z-10 w-60 h-60 rounded-full bg-doc-purple/20 blur-3xl bottom-0 right-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
