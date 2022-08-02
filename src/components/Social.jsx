import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaGithub,
} from "react-icons/fa";



const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/Emmy-Britt-100609751574382/" },
  { Social: <FaTwitter />, link: "https://twitter.com/EmmyBritt2" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/emmanuel-berit-8163ab210" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
  { Social: <FaGithub />, link: "https://github.com/Emmybritt/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;