import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">SaaSify</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transform Your Business with
            <span className="gradient-text"> Modern SaaS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Streamline your operations, boost productivity, and scale your business with our cutting-edge SaaS platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
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

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="glass p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our platform to grow and succeed.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
              Start Your Journey
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">SaaSify</div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            © 2024 SaaSify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;