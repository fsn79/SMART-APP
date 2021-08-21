function CreateUser() {
  // Форма создания пользователя
  return (
    <div class="flex-direction--column formbg padding-horizontal--48">
        <span class="padding-bottom--15">Create a new employee</span>
    <form id="createUser">
       <div class="field padding-bottom--24">
        <label for="lastname">Lastname</label>
        <input type="text" name="lastname" />
      </div>
      <div class="field padding-bottom--24">
        <label for="firstname">Firstname</label>
        <input type="text" name="firstname" />
      </div>
      <div class="field padding-bottom--24">
        <label for="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div class="field padding-bottom--24">
        <div class="grid--50-50">
          <label for="password">Password</label>
        </div>
        <input type="password" name="password" />
      </div>
      <p><select>
        <option>Manager</option>
        <option>Worker</option>
      </select></p>
      <p><select>
        <option>Manager</option>
        <option>Worker</option>
      </select></p>
      <div class="field padding-bottom--24">
        <input type="submit" name="submit" value="Create" />
      </div>
    </form>
    </div>
  );
}

export default CreateUser;
