import Image from "next/image";

const imagesData = [
  {
    src: "/visa.png",
    alt: "Visa",
  },
  {
    src: "/paypal.png",
    alt: "Paypal",
  },
  {
    src: "/skrill.png",
    alt: "Skrill",
  },
  {
    src: "/mastercard.png",
    alt: "MasterCard",
  },
  {
    src: "/discover.png",
    alt: "Discover",
  },
];

const Payments = () => {
  return (
    <>
      <p className="text-xs font-semibold mb-3">Secure Payments</p>
      <ul className="flex items-center gap-2">
        {imagesData.length > 0 &&
          imagesData.map((item, index) => (
            <li key={index}>
              <div className="relative h-4 w-8">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="34px"
                  loading="lazy"
                />
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Payments;
