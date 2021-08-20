function Login() {
  // Форма авторизации
  return (
  <div class="flex-direction--column formbg padding-horizontal--48">
        <span class="padding-bottom--15">Sign in to your account</span>
        <form id="login">
          <div class="field padding-bottom--24">
            <label for="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div class="field padding-bottom--24">
            <div>
              <label for="password">Password</label>
            </div>
            <input type="password" name="password" />
          </div>
          <div class="field padding-bottom--24">
            <input type="submit" name="submit" value="Continue" className="button"/>
          </div>
        </form>
  </div>
  );
}

export default Login;
