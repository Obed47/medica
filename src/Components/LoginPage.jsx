import "./loginPage.css";
import BotMessage from "./botMessage";
import FormLogin from "./formLogin";
const LoginPage = () => {
  return (
    <div className="login">
      <BotMessage />
      <FormLogin />
    </div>
  );
};

export default LoginPage;
