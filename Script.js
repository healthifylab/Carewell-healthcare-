const doctors = [
  { name: "Dr. Amit Sharma", specialty: "General Physician", exp: "10 yrs", fee: "₹499" },
  { name: "Dr. Neha Patil", specialty: "Gynecologist", exp: "8 yrs", fee: "₹599" },
  { name: "Dr. Rahul Mehta", specialty: "Cardiologist", exp: "12 yrs", fee: "₹799" }
];

const doctorList = document.getElementById("doctorList");

doctors.forEach(doc => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${doc.name}</h3>
    <p>${doc.specialty}</p>
    <p>Experience: ${doc.exp}</p>
    <p>Fee: ${doc.fee}</p>
    <button onclick="alert('Booking coming soon. Call +91 88303 04637')">
      Consult Now
    </button>
  `;
  doctorList.appendChild(div);
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});
