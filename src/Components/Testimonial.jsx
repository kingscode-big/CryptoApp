import React from "react";
import { Star } from "lucide-react";
import "../Styles/Testimonials.css";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      username: "@sarahtrades",
      text: `"The platform is incredibly user-friendly and the instant buy/sell feature has saved me so much time. Best trading experience I've had in 3 years!"`,
      rating: 4,
      image: "https://via.placeholder.com/40", 
    },
    {
      id: 2,
      name: "Michael Lee",
      username: "@mikecrypto",
      text: `"Fantastic UI and seamless transactions. Customer support is also very responsive!"`,
      rating: 5,
      image: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      name: "Aisha Patel",
      username: "@aishap",
      text: `"Super easy to use and the rates are great. Highly recommend to anyone trading crypto regularly."`,
      rating: 4,
      image: "https://via.placeholder.com/40",
    },
  ];

  return (
    <section className="testimonials-section">
      {testimonials.map((t) => (
        <div className="testimonial-card" key={t.id}>
          <div className="testimonial-header">
            <img src={t.image} alt={t.name} className="user-avatar" />
            <div>
              <p className="user-name">{t.name}</p>
              <p className="user-handle">{t.username}</p>
            </div>
            <button className="close-btn">×</button>
          </div>
          <p className="testimonial-text">{t.text}</p>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                color={i < t.rating ? "#f5a623" : "#ddd"}
                fill={i < t.rating ? "#f5a623" : "none"}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
