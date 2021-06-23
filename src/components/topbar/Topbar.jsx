import "./topbar.scss";
import { Person, Mail, } from "@material-ui/icons";
import AddBoxIcon from '@material-ui/icons/AddBox';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Dev.
          </a>
          <div className="itemContainerToShow">
            <AddBoxIcon className="icon" />
            <a href="./assets/Resume.pdf" download><span>Download Resume</span></a>
          </div>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 90563-37020</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>gaurav13021997@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
