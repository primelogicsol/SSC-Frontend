"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../components/layout/Layout";
import { useForm } from "react-hook-form";

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export default function Profile() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserProfile>();

  // Check authentication and load profile
  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (!isLoggedIn) {
        localStorage.setItem("returnUrl", "/profile");
        router.push("/login");
        return;
      }

      // Load dummy profile data - Replace with actual API call
      const dummyProfile = {
        fullName: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        address: "123 Sufi Street",
        city: "Mystic City",
        state: "Spiritual State",
        zipCode: "12345",
        country: "United States",
      };

      setProfile(dummyProfile);
      reset(dummyProfile);
      setIsLoading(false);
    };

    checkAuth();
  }, [reset]);

  const onSubmit = async (data: UserProfile) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Update profile
      setProfile(data);
      setIsEditing(false);
      
      // Show success message
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="My Profile">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fixnix-lightpurple"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="My Profile">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-fixnix-darkpurple">My Profile</h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 text-sm font-medium text-white bg-fixnix-lightpurple rounded-md hover:bg-fixnix-darkpurple transition-colors"
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      {...register("fullName", { required: "Full name is required" })}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-fixnix-lightpurple focus:border-fixnix-lightpurple"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-fixnix-lightpurple focus:border-fixnix-lightpurple"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      {...register("phone", { required: "Phone number is required" })}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-fixnix-lightpurple focus:border-fixnix-lightpurple"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      {...register("address", { required: "Address is required" })}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-fixnix-lightpurple focus:border-fixnix-lightpurple"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      {...register("city", { required: "City is required" })}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-fixnix-lightpurple focus:border-fixnix-lightpurple"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                    )}
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      {...register("state", { required: "State is required" })}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-fixnix-lightpurple focus:border-fixnix-lightpurple"
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                    )}
                  </div>

                  {/* Zip Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      {...register("zipCode", { required: "ZIP code is required" })}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-fixnix-lightpurple focus:border-fixnix-lightpurple"
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      {...register("country", { required: "Country is required" })}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-fixnix-lightpurple focus:border-fixnix-lightpurple"
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      reset(profile || undefined);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-fixnix-lightpurple rounded-md hover:bg-fixnix-darkpurple transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {profile && Object.entries(profile).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <h3 className="text-sm font-medium text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <p className="text-base text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 