import One from "../../assets/images/icons/1.png";
import Two from "../../assets/images/icons/2.png";
import Three from "../../assets/images/icons/3.png";
import For from "../../assets/images/icons/4.png";

export default function Header() {
  return (
    <div className="bg-[#ECEAE3] py-14 px-[100px] grid grid-cols-4 gap-10">
      <div>
        <div className="w-[70px] h-[70px] mb-4">
          <img className="w-full h-full" src={One} alt="" />
        </div>
        <h3 className="text-[35px] mb-2">Awesome Aroma</h3>
        <p>You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div>
        <div className="w-[70px] h-[70px] mb-4">
          <img className="w-full h-full" src={Two} alt="" />
        </div>
        <h3 className="text-[35px] mb-2">High Quality</h3>
        <p>We served the coffee to you maintaining the best quality</p>
      </div>
      <div>
        <div className="w-[70px] h-[70px] mb-4">
          <img className="w-full h-full" src={Three} alt="" />
        </div>
        <h3 className="text-[35px] mb-2">Pure Grades</h3>
        <p>The coffee is made of the green coffee beans which you will love</p>
      </div>
      <div>
        <div className="w-[70px] h-[70px] mb-4">
          <img className="w-full h-full" src={For} alt="" />
        </div>
        <h3 className="text-[35px] mb-2">Proper Roasting</h3>
        <p>Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
    </div>
  );
}
