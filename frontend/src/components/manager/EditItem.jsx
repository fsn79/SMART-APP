// import { useDispatch } from 'react-redux';

function EditItem() {
  // const dispatch = useDispatch();
  // function handleSubmitEditItem(e) {
  //   e.preventDefault();
  //   const payload = {
  //   }
  // }
  // Форма редактирования продукта
  return (
    <div class="flex-direction--column formbg padding-horizontal--48" id="editItemDiv">
        <span class="padding-bottom--15">Edit item</span>
    <form id="editItem">
       <div class="field padding-bottom--24">
        <label for="itemName">Edit Item Name</label>
        <input type="text" name="itemName" />
      </div>
      <div class="field padding-bottom--24">
        <label for="partNumber">Edit Part Number</label>
        <input type="text" name="partNumber" />
      </div>
      <div class="field padding-bottom--24">
        <label for="itemDescription">Edit Item Description</label>
        <input type="text" name="itemDescription" />
      </div>
      <div id="routingDiv">
      <div id="selectCenter">
      <label for="selectCenter">Edit Work centers selection</label>
        <p><select className="selectCenter" name="workcenter1">
        <option>Center 1</option>
        <option>Center 2</option>
        <option>Center 3</option>
       </select></p>
       <p><select className="selectCenter" name="workcenter2">
        <option>Center 1</option>
        <option>Center 2</option>
        <option>Center 3</option>
       </select></p>
       <p><select className="selectCenter" name="workcenter3">
        <option>Center 1</option>
        <option>Center 2</option>
        <option>Center 3</option>
       </select></p>
      </div>
      <div id="centerDescription">
        <div class="field padding-bottom--24">
          <label for="routingDescription">Edit Routing Description</label>
          <input type="text" className="routingDescription" name="descrroute1"/>
        </div>
        <div class="field padding-bottom--24">
          <input type="text" className="routingDescription" name="descrroute2"/>
        </div>
        <div class="field padding-bottom--24">
          <input type="text" className="routingDescription" name="descrroute3"/>
        </div>
      </div>
      <div id="cycleTime">
        <div class="field padding-bottom--24">
          <label for="cycleTime">Edit Cycle Time</label>
          <input type="number" step="0.01" className="cycleTime" name="cycletime1"/>
        </div>
        <div class="field padding-bottom--24">
          <input type="number" step="0.01" className="cycleTime" name="cycletime2"/>
        </div>
        <div class="field padding-bottom--24">
          <input type="number" step="0.01" className="cycleTime" name="cycletime3"/>
        </div>
      </div>
      </div>
      <label for="status">Edit Status</label>
      <p><select name="status" className="selectStatus">
        <option>Active</option>
        <option>Disabled</option>
       </select></p>
      <div class="field padding-bottom--24">
        <input type="submit" name="submit" value="Edit" />
      </div>
    </form>
    </div>
  );
}

export default EditItem;
