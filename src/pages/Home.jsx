import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Flight Booking | Home</title>
      </Helmet>
      <div>
        <h1>This is home</h1>
      </div>
    </>
  );
};

export default Home;
