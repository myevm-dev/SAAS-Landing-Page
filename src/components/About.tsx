import { motion } from "framer-motion";

const About = () => (
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
            {[
              { stat: "500+", label: "Happy Clients" },
              { stat: "98%", label: "Satisfaction Rate" },
              { stat: "24/7", label: "Support" },
              { stat: "15+", label: "Countries" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold gradient-text">{item.stat}</h4>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
