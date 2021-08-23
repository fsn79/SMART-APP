function CreateOrder() {
  // Форма создания задачи
  return (
    <div class="flex-direction--column formbg padding-horizontal--48">
    <span class="padding-bottom--15">Create a New Work Order</span>
<form id="createOrder">
  <div className='borderDiv'>
    <p>Select item name or part number</p>
   <div class="field padding-bottom--24">
    <label htmlFor="itemName">Item Name</label>
    <p><select>
    <option></option>
    <option></option>
  </select></p>
  </div>
  <div class="field padding-bottom--24">
    <label htmlFor="workOrder">Enter Work Order number or click autogenerate</label>
    <input type="text" name="workOrder" />
    </div>
    </div>
  <div class="field padding-bottom--24">
    <label htmlFor="">Enter Work Order planned quantity</label>
    <input type="number" step='0.01' name="" />
  </div>
  <div class="field padding-bottom--24">
    <div class="grid">
      <label htmlFor="promisedDate">Enter Work Order promised date</label>
    </div>
    <input type="date" name="promisedDate" />
  </div>
  <label htmlFor="productionPrioroty">Production Prioroty</label>
  <p><select>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </select></p>
  <div class="field padding-bottom--24">
    <input type="submit" name="submit" value="Create" />
  </div>
</form>
</div>
  );
}

export default CreateOrder;
