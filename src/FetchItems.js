import axios from 'axios';

const getAllItems = (setItem) => {
    axios.get('https://todo-list-backend-d6q1.onrender.com')
    .then(({data}) => {console.log(data)
    setItem(data);
})
}
const addItem = (title, setTitle, setItem) => {
    axios.post('ttps://todo-list-backend-d6q1.onrender.com/saveItems', { title })
    .then((data) => {console.log(data)
    setTitle("")
    getAllItems(setItem)
})
}
const editItem = (itemId, title, setTitle, setItem, setEditing) => {
    axios.put('ttps://todo-list-backend-d6q1.onrender.com/editItem', { _id: itemId, title })
    .then((data) => {console.log(data)
    setTitle("")
    setEditing(false)
    getAllItems(setItem)
})
}
const deleteItem = (_id, setItem) => {
    axios.post('ttps://todo-list-backend-d6q1.onrender.com/deleteItem', { _id })
    .then((data) => {console.log(data)
    getAllItems(setItem)
})
}

export {getAllItems, addItem, editItem, deleteItem};
