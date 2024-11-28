import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import bgImage from "../assets/images/more/11.png";

export default function UpdateCoffee() {
  const [coffee, setCoffee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCoffeeEdit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to update coffee!");
      }
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Coffee updated successful!",
        icon: "success",
        confirmButtonText: "Cool",
      });
      navigate("/");
    });
  };

  //   edit coffee
  useEffect(() => {
    fetch(`http://localhost:3000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data));
  }, []);

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
        className=" w-1/2 m-auto py-6 lg:py-12 text-[#374151] text-3xl flex items-center gap-3"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to home
      </Link>
      <div className="flex justify-center items-center">
        <div className="bg-[#F4F3F0] shadow-lg rounded-lg p-8 ">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Update Coffee
          </h2>
          <p className="text-gray-600 text-lg text-center mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at{" "}
            <br className=" hidden lg:block" /> its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to <br className=" hidden lg:block" /> using
            Content here.
          </p>
          <form onSubmit={handleCoffeeEdit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-700 font-semibold text-xl mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold text-xl mb-2"
                  htmlFor="chef"
                >
                  Chef
                </label>
                <input
                  type="text"
                  id="chef"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Enter coffee chef"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold text-xlm mb-2"
                  htmlFor="supplier"
                >
                  Supplier
                </label>
                <input
                  type="text"
                  id="supplier"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter coffee supplier"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold text-xl mb-2"
                  htmlFor="taste"
                >
                  Taste
                </label>
                <input
                  type="text"
                  id="taste"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold text-xl mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter coffee category"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold text-xl mb-2"
                  htmlFor="details"
                >
                  Details
                </label>
                <input
                  type="text"
                  id="details"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="block text-gray-700 font-semibold text-xl mb-2"
                htmlFor="photo"
              >
                Photo
              </label>
              <input
                type="url"
                id="photo"
                name="photo"
                defaultValue={photo}
                placeholder="Enter photo URL"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
              />
            </div>
            <button
              type="submit"
              className="btn mt-6 w-full bg-[#D2B48C] text-2xl py-2 px-4 rounded shadow border-black "
            >
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
