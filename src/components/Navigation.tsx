import { Button } from "@/components/Button";

const Navigation = () => (
  <nav className="fixed w-full z-50 glass">
    <div className="container mx-auto px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold gradient-text">MyEVM</div>
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {["About", "Features", "Team", "Testimonials", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <Button className="bg-white text-black hover:bg-gray-200 text-sm sm:text-base px-4 sm:px-6">
          Get Started
        </Button>
      </div>
    </div>
  </nav>
);

export default Navigation;
