function EditOrder() {
  // Форма создания задачи
  return (
    <div class="flex-direction--column formbg padding-horizontal--48">
    <span class="padding-bottom--15">Edit Work Order</span>
<form id="editOrder">
  <div class="field padding-bottom--24">
    <label for="">Edit Work Order planned quantity</label>
    <input type="number" step='0.01' name="" />
  </div>
  <div class="field padding-bottom--24">
    <div class="grid">
      <label for="promisedDate">Edit Work Order promised date</label>
    </div>
    <input type="date" name="promisedDate" />
  </div>
  <label for="productionPrioroty">Edit Production Prioroty</label>
  <p><select>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </select></p>
  <div class="field padding-bottom--24">
    <input type="submit" name="submit" value="Edit" />
  </div>
</form>
</div>
  );
}

export default EditOrder;
