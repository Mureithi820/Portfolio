// import React, { useState } from "react";
// import "./contact.css";
// import { MdOutlineEmail } from "react-icons/md";
// // import emailjs from "emailjs-com";

// const Contact = () => {
//   const [emailIsSent, setEmailIsSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const { name, message } = e.target.elements;

//     const mailtoLink = `mailto:victormureithig@gmail.com?subject=New Contact Form Submission&body=Name: ${name.value}%0AMessage: ${message.value}`;

//     window.location.href = mailtoLink;

//     // If you want to set emailIsSent to true after sending the email, uncomment the next line
//     setTimeout(() => {
//       setEmailIsSent(true);
//     }, 10000);
//   };

//   return (
//     <section id="contact">
//       <h5>Get In Touch</h5>
//       <h2>Contact Me</h2>
//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <MdOutlineEmail className="contact__option-icon" />
//             <h4>Email</h4>
//             <h5>victormureithig@gmail.com</h5>
//             <a href="mailto:victormureithig@gmail.com">Send a message</a>
//           </article>
//           <article className="contact__option">
//             <MdOutlineEmail className="contact__option-icon" />
//             <h4>LinkedIn</h4>
//             <h5>Victor Mureithi</h5>
//             <a href="https://www.linkedin.com/in/victor-mureithi-97b469294/">
//               Send a message
//             </a>
//           </article>
//         </div>
//         {/* END OF CONTACT OPTIONS */}
//         {emailIsSent ? (
//           <h2 id="Contact__sent-message">
//             Your Message was successfully sent!
//           </h2>
//         ) : (
//           <form onSubmit={sendEmail}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Full Name"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//             />
//             <textarea
//               name="message"
//               rows="7"
//               placeholder="Your Message"
//             ></textarea>
//             <button type="submit" className="btn btn-primary">
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [messageIsSent, setMessageIsSent] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();

    const { name, message } = e.target.elements;

    const whatsappLink = `https://wa.me/254113445466?text=Name:%20${name.value}%0AMessage:%20${message.value}`;

    const whatsappWindow = window.open(whatsappLink, "_blank");

    const checkWindowClosed = setInterval(() => {
      if (whatsappWindow.closed) {
        clearInterval(checkWindowClosed);
        setMessageIsSent(true);
      }
    }, 1000);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>victormureithig@gmail.com</h5>
            <a href="mailto:victormureithig@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Victor Mureithi</h5>
            <a href="https://www.linkedin.com/in/victor-mureithi-97b469294/">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {messageIsSent ? (
          <h2 id="Contact__sent-message">
            Your Message was successfully sent!
          </h2>
        ) : (
          <form onSubmit={sendMessage}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
