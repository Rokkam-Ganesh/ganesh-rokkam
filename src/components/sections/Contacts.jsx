import React from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    { name: "Github", href: "https://github.com/Rokkam-Ganesh"},
    { name: "LinkedIn", href: "https://www.linkedin.com/in/rokkamganesh/" },
    { name: "Credly", href: "https://www.credly.com/users/rokkamganesh" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
        e.target.reset(); // Reset form fields
      })
      .catch(() => {
        alert("Failed to send message. Please try again later.");
      });
  };

  const formFields = [
    {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Enter your full name",
      autoComplete: "name",
      data: formData.name,
      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
    },
    {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter your email address",
      autoComplete: "email",
      data: formData.email,
      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
    },
    {
      type: "textarea",
      id: "message",
      name: "message",
      placeholder: "Write your message here...",
      rows: 4,
      autoComplete: "off",
      data: formData.message,
      onChange: (e) => setFormData({ ...formData, message: e.target.value }),
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-50 flex items-center justify-center relative w-full mt-10 mb-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="z-10 bg-white mx-auto rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl py-8 px-5 sm:px-8 md:px-10 w-full lg:w-[70%]">
        <h2 className="text-3xl arvo-bold font-bold mb-8 text-blue-600 text-center">
          Contact Me
        </h2>

        <div className="px-2 sm:px-4 w-full mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {formFields.map((field) =>
              field.type === "textarea" ? (
                <div key={field.id} className="relative">
                  <textarea
                    id={field.id}
                    name={field.name}
                    rows={field.rows}
                    autoComplete={field.autoComplete}
                    required
                    className="w-full bg-blue-600/5 border border-blue-400 rounded-lg px-5 py-3 text-base sm:text-lg transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none placeholder-gray-500"
                    placeholder={field.placeholder}
                  />
                </div>
              ) : (
                <div key={field.id} className="relative">
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    autoComplete={field.autoComplete}
                    required
                    className="w-full bg-blue-600/5 border border-blue-400 rounded-lg px-5 py-3 text-base sm:text-lg transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none placeholder-gray-500"
                    placeholder={field.placeholder}
                  />
                </div>
              )
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg sub font-semibold mb-4 block">
            Social Accounts:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm text-sm sm:text-base"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
