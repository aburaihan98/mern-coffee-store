import Cap2 from "../../assets/images/cups/Rectangle10.png";
import Cap3 from "../../assets/images/cups/Rectangle11.png";
import Cap4 from "../../assets/images/cups/Rectangle12.png";
import Cap5 from "../../assets/images/cups/Rectangle13.png";
import Cap6 from "../../assets/images/cups/Rectangle14.png";
import Cap7 from "../../assets/images/cups/Rectangle15.png";
import Cap8 from "../../assets/images/cups/Rectangle16.png";
import Cap1 from "../../assets/images/cups/Rectangle9.png";

export default function Follow() {
  return (
    <div className="my-12 px-12 lg:px-24">
      <h3 className=" text-xl mb-2 text-center ">Follow Us Now</h3>
      <h2 className="text-3xl lg:text-5xl text-center mb-6 lg:mb-12 ">
        Follow on Instagram
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <img src={Cap1} alt="cap" />
        </div>
        <div>
          <img src={Cap2} alt="cap" />
        </div>
        <div>
          <img src={Cap3} alt="cap" />
        </div>
        <div>
          <img src={Cap4} alt="cap" />
        </div>
        <div>
          <img src={Cap5} alt="cap" />
        </div>
        <div>
          <img src={Cap6} alt="cap" />
        </div>
        <div>
          <img src={Cap7} alt="cap" />
        </div>
        <div>
          <img src={Cap8} alt="cap" />
        </div>
      </div>
    </div>
  );
}
