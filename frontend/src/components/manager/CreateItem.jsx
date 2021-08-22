import { useDispatch } from 'react-redux';

function CreateItem() {
  // Форма создания продукта
  const dispatch = useDispatch();
  const handlerCreateItem = (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.itemName.value,
      partnumber: e.target.partNumber.value,
      description: e.target.itemDescription.value,
      workcenter1: e.target.workcenter1.value,
      descrroute1: e.target.descrroute1.value,
      cycletime1: e.target.cycletime1.value,
      workcenter2: e.target.workcenter2.value,
      descrroute2: e.target.descrroute2.value,
      cycletime2: e.target.cycletime2.value,
      workcenter3: e.target.workcenter3.value,
      descrroute3: e.target.descrroute3.value,
      cycletime3: e.target.cycletime3.value,
    };
    dispatch({ type: 'ITEM', payload });
  };

  return (
    <div className="flex-direction--column formbg padding-horizontal--48" id="createItemDiv">
        <span className="padding-bottom--15">Create a new item</span>
    <form id="createItem" onSubmit={handlerCreateItem}>
       <div className="field padding-bottom--24">
        <label for="itemName">Item Name</label>
        <input type="text" name="itemName" />
      </div>
      <div className="field padding-bottom--24">
        <label for="partNumber">Part Number</label>
        <input type="text" name="partNumber" />
      </div>
      <div className="field padding-bottom--24">
        <label for="itemDescription">Item Description</label>
        <input type="text" name="itemDescription" />
      </div>
      <div id="routingDiv">
      <div id="selectCenter">
      <label for="selectCenter">Work centers selection</label>
        <p><select className="selectCenter" name="workcenter1">
        <option>Centebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr 1</option>
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
        <div className="field padding-bottom--24">
          <label for="routingDescription">Routing Description</label>
          <input type="text" className="routingDescription" name="descrroute1"/>
        </div>
        <div className="field padding-bottom--24">
          <input type="text" className="routingDescription" name="descrroute2"/>
        </div>
        <div className="field padding-bottom--24">
          <input type="text" className="routingDescription" name="descrroute3"/>
        </div>
      </div>
      <div id="cycleTime">
        <div className="field padding-bottom--24">
          <label for="cycleTime">Cycle Time</label>
          <input type="number" step="0.1" className="cycleTime" name="cycletime1"/>
        </div>
        <div className="field padding-bottom--24">
          <input type="number" step="0.1" className="cycleTime" name="cycletime2"/>
        </div>
        <div className="field padding-bottom--24">
          <input type="number" step="0.1" className="cycleTime" name="cycletime3"/>
        </div>
      </div>
      </div>
      <div className="field padding-bottom--24">
        <input type="submit" name="submit" value="Create" />
      </div>
    </form>
    </div>
  );
}

export default CreateItem;
