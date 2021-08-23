function Login() {
  // Форма авторизации
  return (
  <div className="flex-direction--column formbg padding-horizontal--48">
        <span className="padding-bottom--15">Sign in to your account</span>
        <form id="login">
          <div className="field padding-bottom--24">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="field padding-bottom--24">
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <input type="password" name="password" />
          </div>
          <div className="field padding-bottom--24">
            <input type="submit" name="submit" value="Continue" className="button"/>
          </div>
        </form>
  </div>
  );
}

export default Login;
