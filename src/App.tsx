import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/list";
import AddList from "./components/addList";

export interface state{
    people:{
        name:string
        age:number
        url:string
        note?:string
    }[]
}

function App() {
    const [people,setPeople]=useState<state["people"]>([
        {
            name:'Fry',
            age:26,
            url:'https://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/1/11/Fry.jpg',
            note:'123123'
        }
    ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
