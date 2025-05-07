
const Testimonials = () => {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was incredibly smooth and their valuation was higher than competitors.",
      name: "Michael Richardson",
      title: "CTO",
      company: "TechGlobe Inc.",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      stars: 5
    },
    {
      quote: "As a growing startup, managing software costs is crucial. SoftSell allowed us to sell excess licenses we acquired during scaling, giving us critical runway extension.",
      name: "Sarah Johnson",
      title: "Operations Director",
      company: "Agile Systems",
      avatar: "https://randomuser.me/api/portraits/women/24.jpg",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with SoftSell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass p-8 rounded-xl">
              <div className="flex mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-lg italic mb-6 text-gray-700 dark:text-gray-200">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
