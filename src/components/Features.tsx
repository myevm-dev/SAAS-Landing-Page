import { motion } from "framer-motion";
import { Globe, Cpu, Code } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-8 h-8 mb-4 text-blue-400" />,
    title: "Global Reach",
    description: "Connect with customers worldwide through our cloud-based platform.",
  },
  {
    icon: <Cpu className="w-8 h-8 mb-4 text-purple-400" />,
    title: "AI-Powered",
    description: "Leverage artificial intelligence to automate and optimize your workflows.",
  },
  {
    icon: <Code className="w-8 h-8 mb-4 text-pink-400" />,
    title: "Developer Friendly",
    description: "Extensive API documentation and developer tools for easy integration.",
  },
];

const Features = () => (
  <section id="features" className="py-20 px-4 sm:px-6">
    <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
        Powerful Features for Your Business
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
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
);

export default Features;
