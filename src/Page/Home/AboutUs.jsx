import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full  text-gray-900 dark:text-gray-100 p-6">
      <header className="text-5xl font-extrabold">About Us</header>
      <div className="w-full md:w-11/12 mx-auto mt-10 space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
          <p className="text-lg">
            At <strong>TaskFlow</strong>, we aim to provide a seamless and
            efficient way for users to manage their tasks with an intuitive
            drag-and-drop interface. Our platform ensures that task organization
            is effortless and real-time, helping individuals and teams stay
            productive and focused.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-3">Who We Are</h2>
          <p className="text-lg">
            We are a team of passionate developers committed to creating a
            modern task management solution that is both user-friendly and
            powerful. With an emphasis on simplicity, real-time updates, and
            responsive design, our application ensures that users can manage
            their workload efficiently from any device.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-3">Key Features</h2>
          <ul className="pl-5 space-y-2 text-lg">
            <li>
              <strong>Seamless Task Management</strong> – Add, edit, delete, and
              reorder tasks effortlessly.
            </li>
            <li>
              <strong>Drag-and-Drop Interface</strong> – Move tasks across
              different categories easily.
            </li>
            <li>
              <strong>Real-Time Synchronization</strong> – Instantly save
              changes to the database.
            </li>
            <li>
              <strong>User Authentication</strong> – Secure login with Firebase
              Authentication.
            </li>
            <li>
              <strong>Clean & Minimalistic UI</strong> – Designed for clarity
              and ease of use.
            </li>
            <li>
              <strong>Responsive Design</strong> – Optimized for both desktop
              and mobile users.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-3">Technologies We Use</h2>
          <ul className="pl-5 space-y-2 text-lg">
            <li>
              <strong>Frontend:</strong> React (Vite.js), Tailwind CSS
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js
            </li>
            <li>
              <strong>Database:</strong> MongoDB
            </li>
            <li>
              <strong>Authentication:</strong> Firebase Authentication
            </li>
            <li>
              <strong>State Management:</strong> Context API
            </li>
            <li>
              <strong>Drag-and-Drop:</strong> react-beautiful-dnd
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-3">Get in Touch</h2>
          <p className="text-lg">
            We value user feedback and strive to improve the experience
            continuously. If you have any questions, suggestions, or need
            support, feel free to reach out to us!
          </p>
          <div className="mt-4">
            <p>
              📧 Email:{" "}
              <a href="mailto:dsr102.purnendu@gmail.com" className="text-blue-500">
                support@gmail.com
              </a>
            </p>
            <p>
              🌐 Website:{" "}
              <a href="https://my-portfolio-two-beta-40.vercel.app" className="text-blue-500">
                TaskFlow
              </a>
            </p>
            <p>
              📱 Follow us:{" "}
              <a href="https://github.com/Purnendu-sarkar" className="text-blue-500">
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/purnendusarkar"
                className="text-blue-500"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
