import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-5 py-10 text-xs text-center border-t-2 border-solid border-t-green-500">
      <p>© 2023 Ghost Protocol Private Limited. All rights reserved.</p>
      <p className="mt-2.5 text-stone-500">
        🔒 All communications are end-to-end encrypted. SSL/TLS Protected.
      </p>
    </footer>
  );
};

export default Footer;
