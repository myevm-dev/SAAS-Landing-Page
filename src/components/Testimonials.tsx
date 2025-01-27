import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "SaaSify has transformed how we manage our business operations. The automation features are incredible!",
    author: "John Smith",
    company: "Tech Solutions Inc.",
    rating: 5,
  },
  {
    text: "The best investment we've made for our company. The ROI has been phenomenal.",
    author: "Lisa Chen",
    company: "Growth Ventures",
    rating: 5,
  },
  {
    text: "Outstanding support team and powerful features. Highly recommended!",
    author: "Mark Wilson",
    company: "Digital First",
    rating: 5,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-4 sm:px-6">
    <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
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
);

export default Testimonials;
