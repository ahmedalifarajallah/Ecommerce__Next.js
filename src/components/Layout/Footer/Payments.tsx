import Image from "next/image";

const Payments = () => {
  return (
    <>
      <p className="text-xs font-semibold mb-3">Secure Payments</p>
      <ul className="flex items-center gap-2">
        <li>
          <Image src="/visa.png" alt="Visa" width={32} height={32} />
        </li>
        <li>
          <Image src={"/paypal.png"} alt="Paypal" width={32} height={32} />
        </li>
        <li>
          <Image src="/skrill.png" alt="Skrill" width={32} height={32} />
        </li>
        <li>
          <Image
            src="/mastercard.png"
            alt="MasterCard"
            width={32}
            height={32}
          />
        </li>
        <li>
          <Image src="/discover.png" alt="Discover" width={32} height={32} />
        </li>
      </ul>
    </>
  );
};

export default Payments;
