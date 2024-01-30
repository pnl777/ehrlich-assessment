import {useAuth0} from "@auth0/auth0-react";

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
      <div>2</div>
    </section>
  );
};

export default DashboardPage;
