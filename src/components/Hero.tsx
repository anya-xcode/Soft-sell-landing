
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Maximize Value</span> From Your Unused Software Licenses
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Turn idle software investments into revenue. The secure, fast way to sell your unused corporate licenses.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-softsell-purple to-softsell-blue hover:opacity-90 transition-opacity text-lg py-6 px-8">
                Sell My Licenses
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                Get A Quote
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-bold">500+</span> companies trust us
              </span>
            </div>
          </div>
          
          <div className="relative h-full flex justify-center">
            <div className="relative w-full h-full min-h-[400px] animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-softsell-purple/20 to-softsell-blue/20 rounded-3xl blur-3xl"></div>
              <div className="relative glass h-full rounded-3xl p-8 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    <svg viewBox="0 0 200 200" className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#8B5CF6" d="M41.3,-69.8C54.4,-62.8,66.5,-53.1,74.4,-40.1C82.3,-27.1,86.1,-10.8,83.7,4.3C81.3,19.5,72.8,33.5,62.3,44.6C51.9,55.7,39.6,63.9,26.1,70.3C12.6,76.7,-2.1,81.3,-17.1,79.5C-32.1,77.6,-47.5,69.3,-58.8,57.4C-70.1,45.4,-77.4,29.7,-80.1,13C-82.8,-3.6,-80.8,-21.2,-73.1,-35.6C-65.3,-50.1,-51.7,-61.4,-37.6,-67.9C-23.5,-74.3,-8.8,-75.8,4.1,-82.5C17,-89.2,28.2,-76.9,41.3,-69.8Z" transform="translate(100 100)" />
                    </svg>
                    <img 
                      src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                      alt="Software License Management" 
                      className="absolute inset-10 rounded-full object-cover shadow-lg animate-pulse-slow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
