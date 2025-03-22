/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDropzone } from "react-dropzone";
import ProfilePic from "../assets/profileIcon.svg"

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  userName: yup.string().required("User Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters"),
  dob: yup.date().required("Date of Birth is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  postcode: yup.string().required("Postcode is required"),
  country: yup.string().required("Country is required"),
  notifications: yup.boolean(),
  darkMode: yup.boolean(),
  twoFactorAuth: yup.boolean(),
});


const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profilePic, setProfilePic] = useState<string | ArrayBuffer | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle Profile Picture Upload
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  const onSubmit = async (data: any) => {
    console.log("Submitting:", data, "Profile Picture:", profilePic);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Settings updated successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  return (
    <div className="p-7 md:p-10 bg-white rounded-2xl shadow-md  my-10 mx-12">
      {/* Tab Navigation */}
      <div className="flex border-b mb-6">
        {["profile", "preferences", "security"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-black font-semibold" : "text-gray-600"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "profile" ? "Edit Profile" : tab === "preferences" ? "Preferences" : "Security"}
          </button>
        ))}
      </div>

      {/* Form Container */}
      <div className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
          {activeTab === "profile" && (
            <div className="flex flex-col md:flex-row">
              {/* Profile Picture Upload */}
              <div className="flex flex-col items-center md:mr-6">
                <div className="w-24 h-24 mb-2 border-2 border-gray-300 rounded-full overflow-hidden">
                  <img
                    src={typeof profilePic === "string" ? profilePic : ProfilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  {...getRootProps()}
                  className="cursor-pointer px-4 py-2 bg-gray-200 rounded-md text-sm text-gray-700"
                >
                  <input {...getInputProps()} />
                  Click to Upload New Picture
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Charlene Reed"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.fullName?.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">User Name</label>
                  <input
                    type="text"
                    {...register("userName")}
                    placeholder="Charlene Reed"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.userName?.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="charlenereed@gmail.com"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.email?.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="**********"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.password?.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Date of Birth</label>
                  <input
                    type="date"
                    {...register("dob")}
                    placeholder="25 January 1990"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.dob?.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Present Address</label>
                  <input
                    type="text"
                    {...register("address")}
                    placeholder="San Jose, California, USA"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.address?.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Permanent Address</label>
                  <input
                    type="text"
                    {...register("address")}
                    placeholder="San Jose, California, USA"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.address?.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    {...register("city")}
                    placeholder="San Jose"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.city?.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Postal Code</label>
                  <input
                    type="text"
                    {...register("postcode")}
                    placeholder="45962"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.postcode?.message}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <input
                    type="text"
                    {...register("country")}
                    placeholder="USA"
                    className="w-full p-3 border rounded-lg"
                  />
                  <p className="text-red-500 mt-1">{errors.country?.message}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "preferences" && (
            <>
              <div className="flex items-center">
                <input type="checkbox" {...register("notifications")} className="mr-2" />
                <label className="text-sm font-medium">Enable Notifications</label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" {...register("darkMode")} className="mr-2" />
                <label className="text-sm font-medium">Enable Dark Mode</label>
              </div>
            </>
          )}

          {activeTab === "security" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">New Password</label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="**********"
                  className="w-full p-3 border rounded-lg"
                />
                <p className="text-red-500 mt-1">{errors.password?.message}</p>
              </div>

              <div className="flex items-center">
                <input type="checkbox" {...register("twoFactorAuth")} className="mr-2" />
                <label className="text-sm font-medium">Enable Two-Factor Authentication</label>
              </div>
            </>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-lg w-full md:w-auto"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
