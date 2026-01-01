import { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Abinav Mugunt",
    company: "ABC LTD",
    role: "CEO - ABC",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    name: "Sri Lekha",
    company: "MNC",
    role: "CEO - MNC",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    name: "Albert Hai",
    company: "BCA",
    role: "CEO - BCA",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4,
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    name: "John Smith",
    company: "XYZ",
    role: "Founder",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
    text: "Amazing experience with the platform.",
  },
  {
    id: 5,
    name: "Emma Watson",
    company: "QRS",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "The UI and experience are extremely smooth and intuitive.",
  },
];

export default function TestimonialSection() {
  // ⭐ Middle card active on page load
  const middleIndex = Math.floor(testimonials.length / 2);
  const [active, setActive] = useState(middleIndex);

  return (
    <section className="bg-[#1d1f1e] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-semibold text-white">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          provident magni.
        </p>

        {/* Slider */}
        <div className="relative mt-16">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${(active + 0.5) * 300}px))`,
            }}
          >
            {testimonials.map((item, index) => {
              const isActive = index === active;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActive(index)}
                  className={`w-[260px] sm:w-[280px] lg:w-[300px]
                  shrink-0 rounded-2xl p-6 cursor-pointer
                  transition-all duration-500
                  ${
                    isActive
                      ? "bg-[#293231] scale-105 border border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.35)]"
                      : "bg-[#252c2b] opacity-50 scale-95"
                  }`}
                >
                  {/* Avatar */}
                  <div className="flex justify-center -mt-14">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 rounded-full border-4 border-[#1d1f1e]"
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < item.rating ? "" : "opacity-30"}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                    {item.text}
                  </p>

                  {/* Footer */}
                  <div className="mt-6">
                    <h4 className="text-white font-semibold uppercase text-sm">
                      {item.company}
                    </h4>
                    <p className="text-green-400 text-xs">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all
                ${
                  active === i
                    ? "bg-green-400 scale-125"
                    : "bg-gray-500 opacity-40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
