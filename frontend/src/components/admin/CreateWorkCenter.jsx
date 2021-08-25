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
    dispatch({ type: 'WORK_CENTER', payload });
  };
  // Форма создания отдела
  return (
    <div className="flex-direction--column formbg padding-horizontal--48">
      <span id="header" className="padding-bottom--15">Create a New Work Center</span>
      <form onSubmit={handleSubmitCenter}>
        <div className="field padding-bottom--24">
          <label htmlFor="centerName">Work Center Name</label>
          <input type="text" name="centerName" autoFocus/>
        </div>
        <div className="field padding-bottom--24">
          <label htmlFor="code">Work Center code</label>
          <input type="text" name="code" />
        </div>
        <div className="field padding-bottom--24">
          <label htmlFor="capacity">Work Center capacity</label>
          <input type="number" step='1' name="capacity" />
        </div>
        <div className="field padding-bottom--24">
          <input type="submit" name="submit" value="Create" />
        </div>
      </form>
</div>
  );
}

export default CreateWorkCenter;
