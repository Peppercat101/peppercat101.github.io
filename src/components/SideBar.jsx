import "../styles/sidebar.css";
import ProfilePicture from "./ProfilePicture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div className="side-bar">
      <ProfilePicture />
      <div className="general-info">
        <hr width="100%" />
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          Ontario, Canada
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          +1 647 326 3252
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          contact@melissapeters.me
        </div>
      </div>
    </div>
  );
}
