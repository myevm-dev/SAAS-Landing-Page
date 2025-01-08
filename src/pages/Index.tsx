import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Globe, Mail, MapPin, Phone, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold gradient-text">MyEVM</div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200 text-sm sm:text-base px-4 sm:px-6">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
          >
            Transform Your Business with
            <span className="gradient-text"> Modern SaaS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Streamline your operations, boost productivity, and scale your business with our cutting-edge SaaS platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-white text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="gradient-text">SaaSify</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold">Our Story</h3>
              <p className="text-gray-400">
                Founded in 2024, SaaSify has been at the forefront of digital transformation, helping businesses of all sizes embrace the power of cloud technology and automation.
              </p>
              <p className="text-gray-400">
                Our mission is to democratize enterprise-grade software solutions, making them accessible and affordable for businesses worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl font-bold gradient-text">500+</h4>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl font-bold gradient-text">98%</h4>
                  <p className="text-gray-400">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl font-bold gradient-text">24/7</h4>
                  <p className="text-gray-400">Support</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl font-bold gradient-text">15+</h4>
                  <p className="text-gray-400">Countries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 mb-4 text-blue-400" />,
                title: "Global Reach",
                description: "Connect with customers worldwide through our cloud-based platform."
              },
              {
                icon: <Cpu className="w-8 h-8 mb-4 text-purple-400" />,
                title: "AI-Powered",
                description: "Leverage artificial intelligence to automate and optimize your workflows."
              },
              {
                icon: <Code className="w-8 h-8 mb-4 text-pink-400" />,
                title: "Developer Friendly",
                description: "Extensive API documentation and developer tools for easy integration."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-8 rounded-2xl hover:transform hover:scale-105 transition-transform"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              },
              {
                name: "Emily Davis",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
              },
              {
                name: "David Kim",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

{/* Testimonials Section */}
<section id="testimonials" className="py-20 px-4 sm:px-6">
  <div className="container mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
      What Our Clients Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          text: "SaaSify has transformed how we manage our business operations. The automation features are incredible!",
          author: "John Smith",
          company: "Tech Solutions Inc.",
          rating: 5
        },
        {
          text: "The best investment we've made for our company. The ROI has been phenomenal.",
          author: "Lisa Chen",
          company: "Growth Ventures",
          rating: 5
        },
        {
          text: "Outstanding support team and powerful features. Highly recommended!",
          author: "Mark Wilson",
          company: "Digital First",
          rating: 5
        }
      ].map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="glass p-8 rounded-2xl flex flex-col h-full"
        >
          <div className="flex mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 flex-grow">{testimonial.text}</p>
          <div className="mt-4">
            <p className="font-bold">{testimonial.author}</p>
            <p className="text-gray-400 text-sm">{testimonial.company}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                features: ["5 Team Members", "10GB Storage", "Basic Analytics", "Email Support"]
              },
              {
                name: "Professional",
                price: "$99",
                features: ["15 Team Members", "50GB Storage", "Advanced Analytics", "Priority Support", "API Access"]
              },
              {
                name: "Enterprise",
                price: "$299",
                features: ["Unlimited Team Members", "500GB Storage", "Custom Analytics", "24/7 Support", "Custom Integration"]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-8 rounded-2xl text-center flex flex-col h-full"
              >
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6 gradient-text">{plan.price}<span className="text-base text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-300">{feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
