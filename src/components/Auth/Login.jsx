import {  useState } from "react";
import { ValidateEmail } from "../../Libs/Helper/helper";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFieldMissing, setIsFieldMissing] = useState({
    isEmail: false,
    isPassword: false,
  });

  const toggleShowPasswordHandler = () => setIsShowPassword(!isShowPassword);

  const onChangeHandler = (setState) => (e) =>
    setState(e.target.value);

  const onBlurHandler = () => {
    if (!email) {
      setIsValidEmail(false);
      return;
    }

    if (!ValidateEmail(email)) {
      // setErrorMessage("We couldn't find an account with this email address.");
      setIsValidEmail(true);
      return;
    }

    setIsValidEmail(false);
  };

  const loginUser = async () => {
    try {
    } catch (error) {}
  };

  const _submit = (e) => {
    e.preventDefault();

    if (!password || !email) {
      setErrorMessage("Required field");
      setIsFieldMissing({
        isEmail: email ? false : true,
        isPassword: password ? false : true,
      });
      return;
    }

    setIsFieldMissing({
      isEmail: false,
      isPassword: false,
    });

    if (!ValidateEmail(email)) {
      setErrorMessage("Required field");
      setIsValidEmail(true);
      return;
    }

    setIsValidEmail(false);
    alert("Login successfully");

    loginUser();
  };

  // JSX part
  const renderInputFields = () => (
    <>
      {/* Email field */}
      <div className="inputField">
        <label htmlFor="email">Email Address</label>
        <div>
          <input
            name="email"
            id="email"
            type="text"
            onChange={onChangeHandler(setEmail)}
            onBlur={onBlurHandler}
          />
        </div>

        <span
          className={`${
            isValidEmail || isFieldMissing?.isEmail ? "visible" : "invisible"
          } error_span`}
        >
          <i className="fa-solid fa-circle-info"></i>
          {isFieldMissing?.isEmail ? errorMessage : "Invalid email"}
        </span>
      </div>

      {/* Password field */}
      <div className="inputField">
        <label htmlFor="password">Password</label>
        <div>
          <input
            name="password"
            id="password"
            type={isShowPassword ? "text" : "password"}
            onChange={onChangeHandler(setPassword)}
          />
          <i
            onClick={toggleShowPasswordHandler}
            className={
              isShowPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
            }
          ></i>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <span
            className={`${
              isFieldMissing?.isPassword ? "visible" : "invisible"
            } error_span`}
          >
            <i className="fa-solid fa-circle-info"></i>
            {errorMessage}
          </span>
          <p className="text-end forget">Forgot password?</p>
        </div>
      </div>
    </>
  );

  const renderLogo = () => (
    <div className="container verticalSpace">
      <div className="row">
        <div className="col-lg-10 col-xl-7 mx-auto">
          <img src="/assets/images/corrsy_logo.png" alt="login" />
        </div>
      </div>
    </div>
  );

  const renderRightBlock = () => (
    <div className="col-md-6 d-none d-md-flex login-right">
      <img src="/assets/images/login.png" alt="login" />
    </div>
  );

  const renderLeftBlock = () => (
    <div className="col-md-6 login-left">
      <div className="login d-flex flex-column align-items-center">
        {renderLogo()}
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 mx-auto">
              <h1 className="title">
                Hello, <br /> Welcome Teacher
              </h1>
              <form onSubmit={_submit}>
                {renderInputFields()}

                <button type="submit" className="submitBtn">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="login container-fluid">
      <div className="row no-gutter">
        {renderRightBlock()}
        {renderLeftBlock()}
      </div>
    </div>
  );
};

export default Login;
