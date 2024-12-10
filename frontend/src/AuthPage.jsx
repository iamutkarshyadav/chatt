import PropTypes from "prop-types";
import axios from "axios";

const AuthPage = ({ onAuth }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    // Access the first input element directly
    const { value } = e.target[0];
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((response) => onAuth({ ...response.data, secret: value }))
      .catch((error) => console.error(error));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <h1 className="form-title">ProximaMidnight</h1>
        <p className="form-subtitle">Set a username to get started</p>

        <div className="auth">
          <label htmlFor="username" className="auth-label">
            Username
          </label>
          <input
            id="username"
            className="auth-input"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

// Define prop types to ensure correct usage
AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
