import { Link } from "react-router-dom";

const Missig = () => {
  return (
    <article className="container h-screen mx-auto">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto my-auto max-w-[520px] w-full text-center"
        style={{ lineHeight: "1.4" }}
      >
        <div className="relative h-[240px]">
          <h3
            className="text-[16px] font-bold uppercase"
            style={{
              fontFamily: "Cabin, sans-serif",
              color: "#262626",
              margin: 0,
              letterSpacing: "3px",
              paddingLeft: "6px",
            }}
          >
            Oops! Page Not Found
          </h3>
          <h1
            className="absolute text-[252px] font-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase ml-[-20px]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#262626",
              letterSpacing: "-40px",
            }}
          >
            <span style={{ textShadow: "-8px 0 0 #fff" }}>4</span>
            <span style={{ textShadow: "-8px 0 0 #fff" }}>0</span>
            <span style={{ textShadow: "-8px 0 0 #fff" }}>4</span>
          </h1>
        </div>
        <h2
          className="text-[20px] font-normal uppercase"
          style={{
            fontFamily: "Cabin, sans-serif",
            color: "#000",
            marginTop: "0",
            marginBottom: "25px",
          }}
        >
          we are sorry, but the page you requested was not found
        </h2>
        <h2
          className="text[20px] font-formal uppercase"
          style={{
            fontFamily: "Cabin, sans-serif",
            color: "#262626",
          }}
        >
          <Link to="/">Visit Our Homepage</Link>
        </h2>
      </div>
    </article>
  );
};

export default Missig;
