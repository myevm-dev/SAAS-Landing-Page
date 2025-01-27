import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6">
    <div className="container mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
      >
        Business with
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
);

export default Hero;
