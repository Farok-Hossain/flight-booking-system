import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <>
      <Helmet>
        <title>Flight Booking | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="ml-10 text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold text-green-600">
              Login now<span className="text-pink-600">!</span>
            </h1>
            <p className="py-6">
              click here and please order some super delicious food
            </p>
          </div>
          <div className="card md:w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link text-sm link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* TODO: apply disabled for re captcha */}
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className=" px-6">
              <small>
                New Here?{" "}
                <Link className=" text-blue-600" to="/signup">
                  Create an account
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
