import { AiFillEdit, AiFillDelete } from "react-icons/ai";
export const MyItems = ({text, deleteItem, updatingInInput}) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}/>
            <AiFillDelete onClick={deleteItem}/>
        </div>
    )
}
