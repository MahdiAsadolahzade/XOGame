import ThemeIcons from "../assets/Icons/ThemeIcons";
import Switch from "react-switch";
import "./Theme.css";

function Theme(props) {
  const { handleTheme, themeMode } = props;

  return (
    <div className="theme-button flex justify-center items-center">
      <Switch
        onChange={handleTheme}
        checked={themeMode}
        onColor="#007bff"
        onHandleColor="#ffffff"
        offColor="#ff9800"
        offHandleColor="#ffffff"
        uncheckedIcon={ThemeIcons.darkmode}
        checkedIcon={ThemeIcons.lightmode}
        height={30}
        width={60}
      />
    </div>
  );
}

export default Theme;
