import Quote from "../components/Quote";
import Auth from "../components/Auth";

const Signin = () => {

  
  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex justify-center items-center h-screen">
        <Auth type="signin"/>
      </div>
      <div className="flex-1 hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
