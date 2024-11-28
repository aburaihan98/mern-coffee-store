import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLoaderData } from "react-router";
import bgImage from "../assets/images/more/11.png";

export default function DetailsCoffee() {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div
      className="w-full h-full mb-12 lg:mb-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link
        to="/"
        className="w-1/2 m-auto py-3 lg:py-6 text-[#374151] text-3xl flex items-center gap-3"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to home
      </Link>
      <div className="flex items-center justify-center ">
        <div className="shadow-md rounded-lg grid lg:grid-cols-2 gap-12 lg:gap-24 py-[72px] px-[185px] bg-[#F4F3F0]">
          {/* Coffee Cup Image */}
          <div className="flex items-center justify-center">
            <img src={photo} alt="Coffee Cup" className="w-full h-auto" />
          </div>
          {/* Coffee Details */}
          <div className="">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 lg:mb-4">
              Niceties
            </h2>
            <ul className=" text-xl text-gray-600 space-y-2">
              <li>
                <span className="font-semibold text-black mr-2">Name:</span>{" "}
                {name}
              </li>
              <li>
                <span className="font-semibold text-black mr-2">Chef:</span> Mr.
                {chef}
              </li>
              <li>
                <span className="font-semibold text-black mr-2">Supplier:</span>{" "}
                {supplier}
              </li>
              <li>
                <span className="font-semibold text-black mr-2">Taste:</span>{" "}
                {taste}
              </li>
              <li>
                <span className="font-semibold text-black mr-2">Category:</span>{" "}
                {category}
              </li>
              <li>
                <span className="font-semibold text-black mr-2">Details:</span>{" "}
                {details}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
