import './App.css';
import video from './video.mp4';
import { MyItems } from './MyItems';
import { useState, useEffect } from 'react'
import { getAllItems, addItem, editItem, deleteItem } from './FetchItems';

function App() {
  const [myItem, setItem] = useState([])
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [itemId, setItemId] = useState("");

  useEffect(() => {
    getAllItems(setItem)
  }, [])
  
  const updatingInInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setItemId(_id)
  }
  return (
    <div>
      <div className="container">
      <h1>ToDo List</h1>
      <input
      type="text"
      placeholder="Add an Item"
      value = {title}
      onChange = {(e) => setTitle(e.target.value)}/>

      <button disabled={!title}
      onClick=
      {editing ? () => editItem(itemId, title, setTitle, setItem, setEditing) : () => addItem(title, setTitle, setItem)}>
      {editing ? "Edit" : "Add"}</button>

      {myItem.map((item) => <MyItems text={item.title} key={item._id}
      updatingInInput={() => updatingInInput(item._id, item.title)}
      deleteItem={() => deleteItem(item._id, setItem)}/>)}
      {/*<MyItems text="we got here!!!"/>*/}

    </div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
      {/*Video from https://www.pexels.com/ Ruvim Miksanskiy*/}

    </div>
  );
}

export default App;
