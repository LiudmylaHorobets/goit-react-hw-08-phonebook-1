import { Link } from "react-router-dom";


const Navigation = () => {
  const authenticated = useSelector(selectAuthUserAuthenticated);

  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>

          {authenticated ? (
            <UserMenu />
          ) : (
            <div>
              <Link to="/register">Register</Link>
              <Link to="/login">Log In</Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navigation;
