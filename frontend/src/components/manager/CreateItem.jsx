function CreateItem() {
  // Форма создания продукта
  return (
    <div class="flex-direction--column formbg padding-horizontal--48" id="createItemDiv">
        <span class="padding-bottom--15">Create a new item</span>
    <form id="createItem">
       <div class="field padding-bottom--24">
        <label for="itemName">Item Name</label>
        <input type="text" name="itemName" />
      </div>
      <div class="field padding-bottom--24">
        <label for="partNumber">Part Number</label>
        <input type="text" name="partNumber" />
      </div>
      <div class="field padding-bottom--24">
        <label for="itemDescription">Item Description</label>
        <input type="text" name="itemDescription" />
      </div>
      <label for="selectCenter">Work centers selection</label>
      <div id="selectCenter">
        <p><select className="selectCenter">
        <option>Center 1</option>
        <option>Center 2</option>
        <option>Center 3</option>
       </select></p>
       <p><select className="selectCenter">
        <option>Center 1</option>
        <option>Center 2</option>
        <option>Center 3</option>
       </select></p>
       <p><select className="selectCenter">
        <option>Center 1</option>
        <option>Center 2</option>
        <option>Center 3</option>
       </select></p>
      </div>
      <div class="field padding-bottom--24">
        <input type="submit" name="submit" value="Create" />
      </div>
    </form>
    </div>
  );
}

export default CreateItem;
