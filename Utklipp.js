<div>
  <Person
    style={style}
    name={this.state.persons[0].name}
    age={this.state.persons[0].age} />
  <Person
    name={this.state.persons[1].name}
    age={this.state.persons[1].age}
    click={this.switchNameHandler.bind(this, "Max!")}
    changed={this.nameChangeHandler} >My Hobbies: Racing</Person>
  <Person
    name={this.state.persons[2].name}
    age={this.state.persons[2].age} />
</div >