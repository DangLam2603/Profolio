import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const links = [
  { icon: <FaGithub />, link: "https://github.com/DangLam2603" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/lamminhdang/" },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/profile.php?id=61561345090101",
  },
];
const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {links.map((link, index) => (
        <Link key={index} href={link.link} className={iconStyle}>
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
