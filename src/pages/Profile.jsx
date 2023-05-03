import { motion } from "framer-motion";
import Logo from "../assets/logo.webp";
const Profile = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-12 w-12" src={Logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ورود و ثبت نام
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                شماره همراه
              </label>
              <div className="mt-2">
                <input
                  placeholder="09123456789"
                  type="tel"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary outline-primary"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary p-2 font-semibold leading-6 text-white shadow-sm"
              >
                ورود / ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
