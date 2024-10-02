import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-700 navbar justify-center">
      <ul className="lg:gap-10 md:gap-5 gap-2 lg:text-xl text-sm text-white font-semibold">
        <img src="/public/fb.png" alt="logo" className=" h-10 ml-[-200px]" />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24"
        />
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
