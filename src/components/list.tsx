import React from "react";

interface props{
    people:{
        name:string
        age:number
        url:string
        note?:string
    }[]
}

const List:React.FC<props>=(props)=>{
    const renderList=():JSX.Element[]=>{
        return props.people.map((item)=>{
            return (
                <li className={'List'}>
                    <div className={'List-header'}>
                        <img src={item.url} alt="avatar" className={'List-img'}/>
                        <h2>{item.name}</h2>
                    </div>
                    <p>{item.age} years old</p>
                    <p className={'List-note'}>{item.note}</p>
                </li>
            )
        })
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

export default List