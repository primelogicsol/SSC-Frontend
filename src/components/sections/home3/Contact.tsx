"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import apiClient from "@/lib/apiClient";

interface ContactFormInputs {
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactFormInputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("accessToken");

      await apiClient.post(
        "/contact-us",
        {
          subject: data.subject,
          message: data.message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Your message has been sent successfully!");
      reset();
    } catch (error: any) {
      console.error("Contact Us Error:", error);
      alert(error.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block relative text-lg font-semibold text-fixnix-lightpurple uppercase tracking-wider">
            CONTACT US
            <div className="absolute top-1/2 left-[-60px] w-10 h-0.5 bg-fixnix-lightpurple -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-[-60px] w-10 h-0.5 bg-fixnix-lightpurple -translate-y-1/2"></div>
          </div>
          <h2 className="text-4xl font-bold text-fixnix-lightpurple mt-4 mb-3">
            Let Us Know Or Call Us At
          </h2>
          <p className="text-gray-600 mx-auto">
            Reach out in remembrance and sincerity, every message is a thread in
            the divine tapestry.
            <br />
            Whether in yearning, curiosity, or service, your voice is part of
            the sacred unfolding.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              
              <input
                {...register("subject", { required: true })}
                type="text"
                placeholder="Subject"
                className="w-full h-14 px-5 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
              />
            </div>

            <div>
              <textarea
                {...register("message", { required: true })}
                rows={6}
                placeholder="Your Message"
                className="w-full px-5 py-4 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
