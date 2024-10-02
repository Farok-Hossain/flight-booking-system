const Navbar = () => {
  return (
    <div className="bg-blue-700 navbar justify-center">
      <ul className="lg:gap-10 md:gap-5 gap-2 lg:text-xl text-sm text-white font-semibold">
        <img src="/public/fb.png" alt="logo" className=" h-10 ml-[-200px]" />
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Booking</a>
        </li>
        <li>
          <a>Details</a>
        </li>

        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Dashboard</a>
        </li>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24"
        />
        <li>
          <a>Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
