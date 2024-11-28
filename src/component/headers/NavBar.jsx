import Logo from "../../assets/images/more/logo1.png";

export default function NavBar() {
  return (
    <div className="py-2 bg-[#382828]">
      <div className="flex items-center gap-2 m-auto w-fit">
        <div className="w-[75px] h-[90px]">
          <img className="w-full h-full" src={Logo} alt="logo" />
        </div>
        <h2 className="text-6xl text-white">Espresso Emporium</h2>
      </div>
    </div>
  );
}
