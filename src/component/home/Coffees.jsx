import { useEffect, useState } from "react";
import { Link } from "react-router";
import BannerImage from "../../assets/images/more/1.png";
import CoffeeCard from "./CoffeeCard";

export default function Coffees() {
  const [coffees, setCoffees] = useState([]);

  // get coffees
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <>
      <div
        className="mt-12 lg:mt-24 "
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-[100px] lg:mx-[200px] m-auto">
          <h6 className="text-xl mb-2 text-center">--- Sip & Savor ---</h6>
          <p className="text-5xl mb-12 lg:mb-24 text-center">
            Our Popular Products
          </p>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee?._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" text-center">
        <Link
          to="/coffee"
          className="btn bg-[#382828] mt-12 text-white text-2xl hover:text-[#382828]"
        >
          Add coffee
        </Link>
      </div>
    </>
  );
}
