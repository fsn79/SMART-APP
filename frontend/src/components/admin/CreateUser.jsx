import { useDispatch } from 'react-redux';

function CreateUser() {
  // Форма создания пользователя
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
    };

    dispatch({ type: 'USER', data });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <input type="submit" name="submit" value="Continue" />
      </div>
    </form>
  );
}

export default CreateUser;
