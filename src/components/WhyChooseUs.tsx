
import { Shield, Clock, Award, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-softsell-purple" />,
      title: "Secure Transactions",
      description: "End-to-end encryption for all license transfers and financial transactions with multi-factor authentication."
    },
    {
      icon: <Clock className="w-8 h-8 text-softsell-blue" />,
      title: "Fast Payments",
      description: "Get paid within 48 hours of accepting our offer, with multiple payment methods available."
    },
    {
      icon: <Award className="w-8 h-8 text-softsell-purple" />,
      title: "Best Market Rates",
      description: "Our vast network of buyers ensures you always get the best possible value for your licenses."
    },
    {
      icon: <Users className="w-8 h-8 text-softsell-blue" />,
      title: "Trusted by 500+ Clients",
      description: "Join hundreds of satisfied customers who have successfully monetized their unused software assets."
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            SoftSell offers unmatched expertise in software license reselling, ensuring maximum value and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-xl flex items-start gap-6 transition-all hover:transform hover:translate-y-[-5px] duration-300"
            >
              <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass p-8 md:p-12 rounded-xl inline-block max-w-3xl">
            <h3 className="text-2xl font-bold mb-6">We Support All Major Software Vendors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {['Microsoft', 'Adobe', 'Oracle', 'Salesforce', 'IBM', 'SAP'].map((vendor, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-200">{vendor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
