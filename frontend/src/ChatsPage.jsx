import PropTypes from "prop-types";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = ({ user }) => {
  // Use the useMultiChatLogic hook to manage the multi-chat session
  const chatProps = useMultiChatLogic(
    "f98f9a4e-f4b7-4617-897c-4318e4342bbd",
    user.username,
    user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      {/* Pass the correct props to MultiChatSocket */}
      <MultiChatSocket {...chatProps} />
      {/* Pass the correct props to MultiChatWindow */}
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

// Define PropTypes to ensure correct usage
ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;
