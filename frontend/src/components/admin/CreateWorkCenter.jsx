function CreateWorkCenter() {
  // Форма создания отдела
  return (
    <div class="flex-direction--column formbg padding-horizontal--48">
    <span class="padding-bottom--15">Create a new department</span>
<form>
   <div class="field padding-bottom--24">
    <label for="name">Name</label>
    <input type="text" name="name" />
  </div>
  <div class="field padding-bottom--24">
    <label for="code">Code</label>
    <input type="text" name="code" />
  </div>
  <div class="field padding-bottom--24">
    <label for="capacity">Capacity</label>
    <input type="number" name="capacity" />
  </div>
  <div class="field padding-bottom--24">
    <input type="submit" name="submit" value="Create" />
  </div>
</form>
</div>
  );
}

export default CreateWorkCenter;
