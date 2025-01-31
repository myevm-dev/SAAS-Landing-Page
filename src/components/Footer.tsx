const Footer = ({ children }: { children?: React.ReactNode }) => {
    return (
      <footer className="w-full h-[50px] bg-gray-900 text-white flex items-center justify-center fixed bottom-0">
        {children ? (
          <div className="flex items-center space-x-4">
            {children}
          </div>
        ) : (
          <p className="text-sm">© 2025 Your Company</p>
        )}
      </footer>
    );
  };
  
  export default Footer;
  