/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          from_name: "Website Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Message Sent Successfully!",
          text: "Grateful for the opportunity to connect. Let's create something amazing together!",
          icon: "success",
          customClass: {
            popup: "bg-gray-700 text-white rounded-lg shadow-lg",
            title: "text-2xl font-bold text-green-400",
            content: "text-base text-gray-300",
            confirmButton:
              "bg-[#ffd700] text-black hover:bg-green-600 hover:text-white font-medium py-2 px-10 rounded mt-4",
          },
        });

        setName("");
        setEmail("");
        setMessage("");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-full my-8 py-2">
      <div className="container mx-auto px-4 md:px-8">
        <div className="rounded-xl shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] p-6 xl:p-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Let's Connect!!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ascent "
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full border text-black border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-[#ffd700] focus:border-[#ffd700]"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 text-black w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-yellow focus:border-[#ffd700]"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full border text-black border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-[#ffd700] focus:border-[#ffd700] h-32"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-[#ffd700] text-black py-3 px-4 rounded-lg font-semibold shadow-md 
              border-2 border-transparent hover:bg-transparent hover:border-[#ffd700] 
              hover:text-[#ffd700] transition duration-200 ease-in-out 
              disabled:opacity-50 disabled:cursor-not-allowed`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
