import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
//stateeeeee
  state={ 
    persons: [
    {id: "1", name: "Avitul", age: 23},
    {id: "2", name: "Nava", age: 17},
    {id: "3", name: "Maoz", age: 14}
  ],
  showPerson: false
}
  swichNameHandler = (newName) => {
    //console.log("click");
    //this is not true this way!!!!!!!!!! this.state.persons[0].name= "Avital Israeli";
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: "Nava", age: 17},
        {name: "Maoz", age: 120}
      ]

    })
  }

  changeNameHandler = (event, id) => {
   const personIndex =  this.state.persons.findIndex( p => {
    return p.id ===id;
   });

   const myPerson = {
     ...this.state.persons[personIndex]
   }
   myPerson.name = event.target.value;
   
   const myPersons = [...this.state.persons];
   myPersons[personIndex] = myPerson;
   
    this.setState({persons: myPersons })
  }

  changeShowPerson = () =>{
    const helper = this.state.showPerson;
    this.setState({showPerson: !helper});
  }

  deletePersonHandler = (personIndex) =>{
    const myPersons = this.state.persons;
    myPersons.splice(personIndex, 1);
    this.setState({persons: myPersons})
  }




  render() {
    const style ={
      width: '20%',
      font: 'initial',
      padding: '8px',
      backgroundColor: 'green',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    ':hover':{
      backgroundColor:'lightgreen'
    }
      
    }

    let persons = null;
     if(this.state.showPerson){
       persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
          click= {() => this.deletePersonHandler(index)}
          name= {person.name}
          age= {person.age}
          change = {(event) => this.changeNameHandler(event, person.id)}
          key= {person.id}/>
        })}
       {/* <Person 
       name= {this.state.persons[0].name} 
       age= {this.state.persons[0].age} 
       click= {this.swichNameHandler.bind(this, "avitul")}/>
       <Person 
       name= {this.state.persons[1].name} 
       age= {this.state.persons[1].age} 
       change= {this.changeNameHandler}> live in Hispin </Person>
       <Person 
       name= {this.state.persons[2].name} 
       age= {this.state.persons[2].age} > live in Jerusalem </Person> */}
     </div>
       );

       style.backgroundColor='red';
       style[':hover']={
        backgroundColor:'pink'
      }
        
     }

     let clases= [];
     if(this.state.persons.length <3){
       clases.push("blue") ;
     }
     if(this.state.persons.length <2){
      clases.push("bold");
    }

    return (
      <StyleRoot>
      <div className="App">
      <p className= {clases.join(' ')}>react project</p>
       <button 
       style={style}
       onClick={this.changeShowPerson}>Click here</button>
       
       {persons}
      
      
      </div>
      </StyleRoot>
    );
   // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi to everyone'),React.createElement('h2', null, 'my name is avital'));
  }
}

export default Radium(App);
