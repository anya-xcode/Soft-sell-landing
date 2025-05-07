
import { Upload, DollarSign, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-softsell-blue" />,
      title: "Upload License",
      description: "Securely upload your license information through our encrypted portal. We support all major software vendors."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-softsell-purple" />,
      title: "Get Valuation",
      description: "Our AI-powered system will analyze market conditions and provide a competitive valuation within 24 hours."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-softsell-blue" />,
      title: "Get Paid",
      description: "Accept our offer and receive payment via your preferred method. Most payments processed within 48 hours."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes selling your unused software licenses quick, secure, and profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-xl flex flex-col items-center text-center transition-all hover:scale-105 duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-full shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
