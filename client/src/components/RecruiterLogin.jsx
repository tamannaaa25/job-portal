import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterAuth = () => {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [step, setStep] = useState(1); // step 1 or 2 for signup

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const { setShowRecruiterLogin } = useContext(AppContext);

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
      setLogoFile(e.target.files[0]);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setLogo(null);
    setLogoFile(null);
    setStep(1);
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "login") {
      // Login
      try {
        const res = await fetch("http://localhost:3577/api/company/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (data.success) {
          alert("Login successful!");
          resetForm();
          setShowRecruiterLogin(false);
          localStorage.setItem("companyToken", data.token);
        } else {
          alert(data.message || "Login failed");
        }
      } catch (err) {
        console.error(err);
        alert("Server error. Try again later.");
      }
    } else {
      // Signup
      if (step === 2 && !logoFile) {
        alert("Please upload a company logo");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      if (logoFile) formData.append("image", logoFile);

      try {
        const res = await fetch("http://localhost:3577/api/company/register", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (data.success) {
          alert("Company registered successfully!");
          resetForm();
          setMode("login");
        } else {
          alert(data.message || "Signup failed");
        }
      } catch (err) {
        console.error(err);
        alert("Server error. Try again later.");
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        className="relative bg-white p-10 rounded-xl text-slate-500 w-[350px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium capitalize">
          {mode === "login" ? "Recruiter Login" : "Recruiter Signup"}
        </h1>

        {/* ---------------- Login ---------------- */}
        {mode === "login" && (
          <>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-6">
              <img className="w-5" src={assets.email_icon} alt="" />
              <input
                className="outline-none text-sm w-full"
                type="email"
                placeholder="Company Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
              <img className="w-5" src={assets.lock_icon} alt="" />
              <input
                className="outline-none text-sm w-full"
                type="password"
                placeholder="Company Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              className="bg-blue-600 w-full text-white py-2 rounded-full mt-6"
              type="submit"
            >
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <span
                onClick={toggleMode}
                className="text-blue-600 cursor-pointer font-medium"
              >
                Sign Up
              </span>
            </p>
          </>
        )}

        {/* ---------------- Signup Step 1 ---------------- */}
        {mode === "signup" && step === 1 && (
          <>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-6">
              <img className="w-5" src={assets.person_icon} alt="" />
              <input
                className="outline-none text-sm w-full"
                type="text"
                placeholder="Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
              <img className="w-5" src={assets.email_icon} alt="" />
              <input
                className="outline-none text-sm w-full"
                type="email"
                placeholder="Company Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
              <img className="w-5" src={assets.lock_icon} alt="" />
              <input
                className="outline-none text-sm w-full"
                type="password"
                placeholder="Company Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              className="bg-blue-600 w-full text-white py-2 rounded-full mt-6"
              type="button"
              onClick={() => setStep(2)}
            >
              Next
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <span
                onClick={toggleMode}
                className="text-blue-600 cursor-pointer font-medium"
              >
                Login
              </span>
            </p>
          </>
        )}

        {/* ---------------- Signup Step 2 ---------------- */}
        {mode === "signup" && step === 2 && (
          <>
            <div className="mt-6 flex flex-col items-center gap-3">
              {logo ? (
                <img
                  src={logo}
                  alt="Company Logo Preview"
                  className="w-20 h-20 rounded-full object-cover border"
                />
              ) : (
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 border text-xs text-gray-400">
                  Logo
                </div>
              )}

              <label className="text-sm text-blue-600 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoChange}
                />
                Upload Company Logo
              </label>
            </div>

            <button
              className={`w-full text-white py-2 rounded-full mt-6 ${
                logo ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
              }`}
              type="submit"
              disabled={!logo}
            >
              Create Account
            </button>

            <p className="text-sm text-center mt-4">
              Back to{" "}
              <span
                onClick={() => setStep(1)}
                className="text-blue-600 cursor-pointer font-medium"
              >
                Previous Step
              </span>
            </p>
          </>
        )}

        <img
          onClick={() => setShowRecruiterLogin(false)}
          className="w-4 absolute right-5 top-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  );
};

export default RecruiterAuth;
