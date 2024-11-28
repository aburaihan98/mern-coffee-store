import {
  faCoffee,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        {/* 404 Text */}
        <h1 className="text-9xl font-extrabold text-green-500 relative z-10">
          404
        </h1>

        {/* Decorative Elements with FontAwesome Icons */}
        <div className="absolute top-8 left-8">
          <FontAwesomeIcon
            icon={faCoffee}
            className="w-12 h-12 text-green-500 transform rotate-12"
          />
        </div>
        <div className="absolute bottom-4 right-4">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="w-12 h-12 text-red-500 transform rotate-[-15deg]"
          />
        </div>
      </div>

      {/* Message */}
      <p className="text-lg text-gray-600 mt-6 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Back to Home Button */}
      <Link to="/">
        <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
