import React, { useRef, useState } from 'react'

export default function Todo({ todo, dispatch }) {
    console.log('rend')
    const [value, setvalue] = useState("")

    const leng = todo.filter(elem => elem.check ? elem : null).length
    const ref = useRef(leng)
    ref.current = leng

    return (
        <div className="todo">
            <div className="todo__header">
                <form className='todo__header-form' onSubmit={(e) => {
                    e.preventDefault();
                    if (value) {
                        dispatch({
                            type: 'push',
                            payload: {
                                text: value
                            }
                        })
                        setvalue('')
                    }
                }}>
                    <input type="text" placeholder='search' onChange={(e) => setvalue(e.target.value)} value={value} />
                </form>
            </div>
            <div className="todo__main">
                {
                    todo.map((elem, index) => (
                        <div className="todo__main-item" key={elem.id}>

                            <input type="checkbox" onClick={(e) => {
                                dispatch({
                                    type: 'chek',
                                    payload: {
                                        id: elem.id,
                                    }
                                })
                            }} />
                            <span onClick={(e) => {
                                dispatch({
                                    type: 'delet',
                                    payload: {
                                        id: elem.id
                                    }
                                })
                            }}>X</span>
                            <p>{elem.text}</p>
                        </div>
                    ))
                }
            </div>
            <div className="todo__footer">
                <span>{`${ref.current}/${todo.length}`} Completed</span>
                <span onClick={() => dispatch({
                    type: 'clear',
                    payload: {
                        state: []
                    }
                })}>Clear All</span>
            </div>
        </div>
    )
}
