const DropDown = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-12 right-0 w-max shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-md text-sm z-20 bg-white animate-fade-in-up">
      {children}
    </div>
  );
};

export default DropDown;
