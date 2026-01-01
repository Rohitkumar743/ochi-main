import { useState } from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.message.trim())
      newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="bg-[#1d1f1e] min-h-screen py-20">
        
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            Reach Out to Us
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have questions about JEE or NEET preparation? We’re here to help you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#293231] rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="mt-2 w-full bg-transparent border border-gray-600
                           rounded-lg px-4 py-3 text-white
                           focus:outline-none focus:border-green-400
                           transition"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="mt-2 w-full bg-transparent border border-gray-600
                           rounded-lg px-4 py-3 text-white
                           focus:outline-none focus:border-green-400
                           transition"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="5"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="mt-2 w-full bg-transparent border border-gray-600
                           rounded-lg px-4 py-3 text-white
                           focus:outline-none focus:border-green-400
                           transition resize-none"
                placeholder="Write your message..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#004D43] text-white py-3 rounded-lg
                         hover:bg-green-500 hover:text-black
                         transition-all duration-300"
            >
              Send Message
            </button>
          </form>


              
          <div className="flex flex-col gap-8">

                    {/* Contact Card */}
                    <div className="bg-[#293231] rounded-2xl p-8 space-y-6
                                    hover:scale-[1.02] transition-all duration-300">

                        {/* Email */}
                        <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-full bg-[#004D43]
                                    flex items-center justify-center text-green-300"
                        >
                            <FaEnvelope />
                        </div>

                        <div>
                            <p className="text-gray-400 text-sm">Email us</p>
                            <p className="text-white font-medium">
                            support@mentoringplatform.com
                            </p>
                        </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-zinc-700"></div>

                        {/* Social Links */}
                        <div>
                        <p className="text-gray-400 mb-4">Follow us</p>

                        <div className="flex gap-4">
                            {[FaInstagram, FaLinkedin, FaTwitter].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="group w-12 h-12 rounded-full bg-[#1d1f1e]
                                        flex items-center justify-center text-gray-400
                                        hover:bg-green-500 hover:text-black
                                        hover:scale-110 transition-all duration-300"
                            >
                                <Icon />
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>

          </div>

         
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
