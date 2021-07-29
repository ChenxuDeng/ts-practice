import React,{useState} from "react";
import {state as Iprops} from '../App'

export interface props{
    people:Iprops['people'],
    setPeople: React.Dispatch<React.SetStateAction<Iprops['people']>>
}

const AddList:React.FC<props>=(props)=>{
    const [input,setInput]=useState({
        name:'',
        age:'',
        note:'',
        img:''
    })

    const changeHandler:React.ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement>=(event):void=>{
        setInput({
            ...input,
            [event.target.name]:event.target.value
        })
    }

    const clickHandler=():void=>{
        if(!input.name || !input.img || !input.age){
            return
        }
        props.setPeople([
            ...props.people,
            {
                name:input.name,
                age:parseInt(input.age),
                url:input.img,
                note:input.note
            }
        ])
        setInput({
            name:'',
            age:'',
            note:'',
            img:''
        })
    }

    return (
        <div className={'AddToList'}>
            <input type="text"
                   placeholder={'Name'}
                   className={'AddToList-input'}
                   value={input.name}
                   onChange={changeHandler}
                   name={'name'}
            />
            <input type="text"
                   placeholder={'Age'}
                   className={'AddToList-input'}
                   value={input.age}
                   onChange={changeHandler}
                   name={'age'}
            />
            <input type="text"
                   placeholder={'Image Url'}
                   className={'AddToList-input'}
                   value={input.img}
                   onChange={changeHandler}
                   name={'img'}
            />
            <textarea
                   placeholder={'Note'}
                   className={'AddToList-input'}
                   value={input.note}
                   onChange={changeHandler}
                   name={'note'}
            />
            <button className={'AddToList-btn'} onClick={clickHandler}>
                Add to List
            </button>
        </div>
    )
}

export default AddList