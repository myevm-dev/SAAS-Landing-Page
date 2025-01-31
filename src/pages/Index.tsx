import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InputBar from "@/components/InputBar";
import OutputBar from "@/components/OutputBar";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation />

    {/* Layout container */}
    <div className="flex flex-grow mt-20">
      {/* Left sidebar */}
      <InputBar />

      {/* Main content area (pushed between sidebars) */}
      <main className="flex-grow ml-[80px] mr-[80px] p-4">
        {/* Page content goes here */}
      </main>

      {/* Right sidebar */}
      <OutputBar />
    </div>

    <Footer />
  </div>
);

export default Index;
