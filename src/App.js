import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItems, deleteItem, removeAllItems } from './actions/index'

const App = () => {
  const [inputData, setInputData] = useState("")
  const items = useSelector((state) => state.todoReducer.list)
  const dispatch = useDispatch()

  return (
    <>
      <div className="container">
        <div className="todo-main">
          <h1 className='todoTitle'>ToDo List</h1>
          <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder='Add a item' />
          <button className='add-button' onClick={() => dispatch(addItems(inputData), setInputData(""))}>+</button>
          <ol>
            <div className="containers">
              {
                items.map((elem, index) => {
                  return (
                      <div className="item" key={elem.id}>
                        <span className='delete-btn' onClick={()=> dispatch(deleteItem(elem.id))}>X</span><li>{elem.data}</li>
                      </div>
                  )
                })
              }
              <div className="deleteAll" onClick={()=> dispatch(removeAllItems())}>Remove All Items</div>
            </div>

          </ol>
        </div>
      </div>
    </>
  )
}

export default App;