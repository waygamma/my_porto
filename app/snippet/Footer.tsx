import React from "react";

const Footer: React.FC = () => {
  const footerLinks = [
    { name: "Docs", href: "#" },
    { name: "Book Notes", href: "#" },
    { name: "Polywork", href: "#" },
    { name: "Starter Template", href: "#" },
    { name: "Statistics", href: "#" },
  ];

  const socialLinks = [
    { icon: "ti ti-brand-github", href: "#", label: "GitHub" },
    { icon: "ti ti-brand-linkedin", href: "#", label: "LinkedIn" },
    { icon: "ti ti-brand-twitter", href: "#", label: "Twitter" },
  ];

  return (
    <footer className="p-10 mt-20 border-t border-solid border-t-gray-700">
      <nav className="flex gap-6 justify-center mb-6 max-sm:flex-wrap max-sm:justify-center">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-gray-400 cursor-pointer"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <p className="mb-4 text-center text-gray-400">Reach me out</p>

      <div className="flex gap-4 justify-center text-2xl">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            aria-label={link.label}
            className="hover:text-gray-300 transition-colors"
          >
            <i className={link.icon} aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
