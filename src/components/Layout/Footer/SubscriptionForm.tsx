const SubscriptionForm = () => {
  return (
    <div className="flex items-center my-6">
      <input
        type="email"
        placeholder="Enter your email"
        className="h-10 p-2 text-sm w-full outline-none"
      />
      <button className="h-10 bg-primary px-4 py-2 text-sm text-white border border-primary transition-all duration-300 ease-in-out hover:bg-transparent hover:text-primary">
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionForm;
