import React from 'react';

const FooterComponent = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content text-dark">
          <span>© 2023 Aleksandar Radivojevic</span>
          <span className="contact-info">
            Email adress: 
            <a href="mailto:aleksandar.radivojevic.201@singimail.rs"> aleksandar.radivojevic.201@singimail.rs</a>
            <span> | </span>
            Phone: <span>061/1234/567</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
