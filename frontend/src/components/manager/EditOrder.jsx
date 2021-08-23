function EditOrder() {
  // Форма создания задачи
  return (
    <div className="flex-direction--column formbg padding-horizontal--48">
    <span className="padding-bottom--15">Edit Work Order</span>
<form id="editOrder">
  <div className="field padding-bottom--24">
    <label htmlFor="">Edit Work Order planned quantity</label>
    <input type="number" step='0.01' name="" />
  </div>
  <div className="field padding-bottom--24">
    <div className="grid">
      <label htmlFor="promisedDate">Edit Work Order promised date</label>
    </div>
    <input type="date" name="promisedDate" />
  </div>
  <label htmlFor="productionPrioroty">Edit Production Prioroty</label>
  <p><select>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </select></p>
  <div className="field padding-bottom--24">
    <input type="submit" name="submit" value="Edit" />
  </div>
</form>
</div>
  );
}

export default EditOrder;
