import BannerImage from "../../assets/images/more/3.png";

export default function Banner() {
  return (
    <div
      className="h-[500px] flex  items-center"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" relative -right-1/2">
        <h2 className="text-5xl mb-4 text-white">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p className="text-white mb-8">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of <br className=" hidden lg:block" />{" "}
          every moment!!! Enjoy the beautiful moments and make them memorable.
        </p>
        <button className="btn bg-[#E3B577] text-2xl">Learn More</button>
      </div>
    </div>
  );
}
