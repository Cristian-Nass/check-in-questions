import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

interface HeaderProps {
  message: string;
}
const Header = ({ message }: HeaderProps) => {
  return (
    <header style={{ display: "flex", alignItems: "center" }}>
      <RocketLaunchOutlinedIcon fontSize='large' />
      <h4 style={{ padding: "0px 10px" }}>{message}</h4>
    </header>
  );
};

export default Header;
