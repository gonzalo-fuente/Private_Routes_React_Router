import { useAuth } from "../useAuth";

const Home = () => {
  const { onLogin } = useAuth();

  return (
    <>
      <h2>Home (Public)</h2>

      <button className="btn btn-outline-success" onClick={onLogin}>
        Sign In
      </button>
    </>
  );
};

export default Home;
