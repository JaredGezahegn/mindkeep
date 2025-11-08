import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
    };

    setStatus("Sending message...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        params,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Your message has been sent successfully!");
        e.target.reset();
      })
      .catch((err) => {
        console.error("❌ Failed to send message:", err);
        setStatus("⚠️ Oops! Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 max-w-md mx-auto">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white dark:bg-gray-800 p-6 rounded shadow max-w-md h-96 mx-auto "
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white h-80"
          required
        />
        <button
          type="submit"
          className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-black dark:text-white">{status}</p>}
    </div>
  );
}

export default Contact;
