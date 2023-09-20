import Theme from "./Theme";
import GameTitle from "./GameTitle";
import Form from "./Form";
import "./Menu.css";

function Menu(props) {
  const { handleTheme, themeMode } = props;
  return (
    <div className="Menu flex items-center justify-between m-[5px] p-[5px]">
      <div className="project-name">
        <GameTitle themeMode={themeMode}></GameTitle>
      </div>
      <div className="flex items-center">
        <div className="theme">
          <Theme handleTheme={handleTheme} themeMode={themeMode}></Theme>
        </div>
        <div className="form ">
          <Form themeMode={themeMode}></Form>
        </div>
      </div>
    </div>
  );
}

export default Menu;
