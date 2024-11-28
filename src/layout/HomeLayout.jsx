import Coffees from "../component/home/Coffees";
import Banner from "./../component/headers/Banner";
import Header from "./../component/headers/Header";
import Follow from "./../component/home/Follow";

export default function HomeLayout() {
  return (
    <>
      <Banner />
      <Header />
      <Coffees />
      <Follow />
    </>
  );
}
