import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    features: ["5 Team Members", "10GB Storage", "Basic Analytics", "Email Support"],
    buttonLabel: "Get Started",
  },
  {
    name: "Professional",
    price: "$99",
    features: [
      "15 Team Members",
      "50GB Storage",
      "Advanced Analytics",
      "Priority Support",
      "API Access",
    ],
    buttonLabel: "Get Started",
  },
  {
    name: "Enterprise",
    price: "$299",
    features: [
      "Unlimited Team Members",
      "500GB Storage",
      "Custom Analytics",
      "24/7 Support",
      "Custom Integration",
    ],
    buttonLabel: "Get Started",
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 px-4 sm:px-6">
    <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
        Simple, Transparent Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass p-8 rounded-2xl text-center flex flex-col h-full"
          >
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <div className="text-3xl font-bold mb-6 gradient-text">
              {plan.price}
              <span className="text-base text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-white text-black hover:bg-gray-200">
              {plan.buttonLabel}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
