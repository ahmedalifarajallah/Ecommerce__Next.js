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
              <Image src={item.src} alt={item.alt} width={34} height={34} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Payments;
