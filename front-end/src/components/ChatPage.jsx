import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatPage = ({ user }) => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
    user.username,
    user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatPage;
