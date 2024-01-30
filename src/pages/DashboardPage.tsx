import {useAuth0} from "@auth0/auth0-react";
import InputCity from "../components/InputCity";

const DashboardPage = () => {
  const {user} = useAuth0();
  return (
    <section className="main-container-blk dashboard">
      <div>
        <img src={user?.picture} alt="" />
        <label>
          <b>Name:</b>
          {user?.name}
        </label>
        <label>
          <b>Username:</b>
          https://github.com/{user?.nickname}
        </label>
      </div>
      <div>
        <h2>Search for a city to discover its current weather conditions. </h2>
        <InputCity />
      </div>
    </section>
  );
};

export default DashboardPage;
