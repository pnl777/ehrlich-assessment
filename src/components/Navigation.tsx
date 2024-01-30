import LogoutButton from "./LogoutButton";

const Navigation = () => {
  return (
    <div className="navigation-blk">
      <div className="brand-blk">
        <i className="fa-solid fa-sun"></i>
        <p>The Weather Forecast</p>
      </div>
      <div>
        <span className="layout-shift-blk"></span>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Navigation;
