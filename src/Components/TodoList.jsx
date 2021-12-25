import React, { Component } from 'react'

export class TodoList extends Component {

    constructor(){
        super(); // used to call the constructor of parent class...
        this.state = {
            input : '',
            listArr : []
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }
    changeHandler(e){
        const data = e.target.value
        this.setState({
            input : data
        })
    }
    addTodo(){
        this.setState({
            listArr : [...this.state.listArr, this.state.input]
        })
    }


    deleteTodo(id){
        const newArr = this.state.listArr.filter((item, index)=>{
            return id !== index;
        })
        console.log(newArr);
        this.setState({
            listArr : [...newArr]
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        
        if(prevState.listArr !== this.state.listArr){
            this.setState({
                input : ''
            })
        }
       
        
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.changeHandler} type="text" placeholder="Enter your task to add..."></input>
                <button onClick={this.addTodo}>Add Todo</button>
                <div>
                    {this.state.listArr.map((item, index)=>{
                        return (
                            <li style={{listStyle: 'none'}} key={index}>
                                <div style={{display: 'flex', width: '50%',justifyContent:'space-between', padding: '10px', margin:'10px 0', backgroundColor: 'purple', color:'white'}}>
                                <div>{item}</div>
                                <div>
                                    <button onClick={()=>{this.deleteTodo(index)}}>Delete</button>
                                </div>
                                </div>
                            </li>
                        )   
                    })}

                </div>
            </div>
        )
    }
}

export default TodoList
