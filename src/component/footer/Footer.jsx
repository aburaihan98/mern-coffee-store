import bgImage from "../../assets/images/more/13.jpg";
import Logo from "../../assets/images/more/logo1.png";

export default function Footer() {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <footer className="bg-gray-100 py-12 px-6 lg:px-20">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <img
                src={Logo}
                alt="Espresso Emporium Logo"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Espresso Emporium</h3>
              <p className="text-gray-600">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
            </div>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="text-gray-600 text-2xl hover:text-gray-800"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 text-2xl hover:text-gray-800"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 text-2xl hover:text-gray-800"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 text-2xl hover:text-gray-800"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div>
              <p className="text-gray-600 mb-2">
                <i className="fas fa-phone-alt mr-2"></i> +88 01533 333 333
              </p>
              <p className="text-gray-600 mb-2">
                <i className="fas fa-envelope mr-2"></i> info@gmail.com
              </p>
              <p className="text-gray-600">
                <i className="fas fa-map-marker-alt mr-2"></i> 72, Wall Street,
                King Road, Dhaka
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Connect with Us</h3>
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                ></textarea>
              </div>
              <button className="bg-[#382828] text-white py-2 px-6 rounded-lg hover:bg-[#4a4a4a] transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </footer>
      <div className="bg-[#0f0201] py-[9px] text-xl text-white text-center">
        Copyright Espresso Emporium ! All Rights Reserved
      </div>
    </div>
  );
}
