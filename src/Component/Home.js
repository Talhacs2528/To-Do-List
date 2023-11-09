import React, { useState } from 'react';

function Home() {

    const [inputList , setinputList] = useState("");
    const [items , setItems] = useState([]); 
    const EventItem = (event) => {
       setinputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems , inputList];
        })

        setinputList("");
    }

    const deleteItems = () => {
        console.log('deleted');
    }
    return(
        <>
        <div className='main_div'>
          <div className='center_div'>
            <br />
             <h1> ToDo List </h1>
             <br />
             <input type='text' placeholder='Add a Item' 
               value={inputList}
             onChange={EventItem}/>
             <button onClick={listOfItems}> + </button>

             <ol>
                {/* <li>{inputList}</li> */}


                {items.map((itemval , index) => {
                    return <li>{itemval}</li>
                })}
                <div className='todo_style'>
                    <i className="fa fa-times" aria-hidden="true" 
                    onClick={deleteItems}/>


                </div>
             </ol>
          </div>
        </div>
        </>
    )
}

export default Home;