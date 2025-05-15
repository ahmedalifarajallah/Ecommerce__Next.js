import Image from "next/image";

const Banner = () => {
  return (
    <section className="section-banner flex justify-center items-center gap-10 bg-rose-100">
      <div className="banner-text w-1/2">
        <h1 className="text-3xl font-semibold text-gray-700">
          Grab up to 50% off On Selected Products
        </h1>
        <button className="btn btn-primary bg-primary text-white py-2 px-4 rounded-3xl mt-4">
          Buy Now
        </button>
      </div>
      <div className="banner-img">
        <Image
          src="/woman.png"
          alt="Woman Image"
          width={300}
          height={300}
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Banner;
