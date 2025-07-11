import footerContact from "../../api/footerApi.json";
import { NavLink } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <>
      <footer className="footer-section">
        <div className="container grid grid-three-cols">
          {footerContact.map((curData, index) => {
            const { icon, title, details } = curData;
            return (
              <div className="footer-contact" key={index}>
                <div className="icon">{footerIcon[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="grid grid-two-cols">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, All Right Reserved
                  <NavLink
                    to="https://github.com/karanchaurasiya-code"
                    target="_blank"
                  >
                    Karan Chaurasiya
                  </NavLink>
                </p>
              </div>

              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="https://www.instagram.com/karan.chaurasiya_/"
                      target="_blank"
                    >
                      Social
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" target="_blank">
                      Source Code
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
