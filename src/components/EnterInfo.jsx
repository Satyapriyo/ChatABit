import { useNavigate } from "react-router-dom";
import "../App.css"
const EnterInfo = () => {
  const navigate = useNavigate();
  const showChatBot = () => {
    navigate("/chat");
  };
  return (
    <div className="info">
      <div>Enter Student Info</div>
      <button className="enroll_button" onClick={() => showChatBot()}>Enroll Now</button>
    </div>
  );
};

export default EnterInfo;
