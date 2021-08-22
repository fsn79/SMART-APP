import { useDispatch } from 'react-redux';

function CreateWorkCenter() {
  const dispatch = useDispatch();
  const handleSubmitCenter = (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.centerName.value,
      code: e.target.code.value,
      capacity: e.target.capacity.value,
    };
    dispatch({ type: 'WORK_CENTER_EDIT', payload });
  };
  // Форма создания отдела
  return (
    <div class="flex-direction--column formbg padding-horizontal--48">
    <span class="padding-bottom--15">Create a New Work Center</span>
<form onSubmit={handleSubmitCenter}>
   <div class="field padding-bottom--24">
    <label for="centerName">Work Center Name</label>
    <input type="text" name="centerName" />
  </div>
  <div class="field padding-bottom--24">
    <label for="code">Work Center code</label>
    <input type="text" name="code" />
  </div>
  <div class="field padding-bottom--24">
    <label for="capacity">Work Center capacity</label>
    <input type="number" step='0.01' name="capacity" />
  </div>
  <div class="field padding-bottom--24">
    <input type="submit" name="submit" value="Create" />
  </div>
</form>
</div>
  );
}

export default CreateWorkCenter;
