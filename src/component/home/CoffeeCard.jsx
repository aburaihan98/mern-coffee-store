import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function CoffeeCard({ coffee, coffees, setCoffees }) {
  // delete coffee
  const handleDeleteCoffee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        // fetch
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const remaining = coffees.filter((coffee) => coffee?._id !== id);
            setCoffees(remaining);
          });
      }
    });
  };

  return (
    <div
      key={coffee?._id}
      className=" bg-[#F5F4F1] border border-blue-400 rounded-lg shadow-md overflow-hidden p-4 lg:p-7 flex justify-between items-center gap-4"
    >
      <img
        src={coffee?.photo}
        alt="Americano Coffee"
        className="w-[150px] h-[200px] object-cover rounded"
      />

      <div className="text-2xl text-gray-600">
        <h3 className="">
          <span className="text-black font-bold mr-2"> Name: </span>{" "}
          {coffee?.name}
        </h3>
        <p className="">
          <span className="text-black font-bold mr-2">Chef:</span>{" "}
          {coffee?.chef}
        </p>
        <p className="">
          <span className="text-black font-bold mr-2">Price:</span> 890 Taka
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <Link
          to={`/details/${coffee?._id}`}
          className="bg-yellow-400 text-white p-2 rounded hover:bg-yellow-500"
        >
          <i className="fas fa-eye"></i>
        </Link>
        <Link
          to={`/coffee/${coffee?._id}`}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          <i className="fas fa-edit"></i>
        </Link>
        <button
          onClick={() => handleDeleteCoffee(coffee?._id)}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
