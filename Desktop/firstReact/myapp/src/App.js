import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Addtodo from "./components/Addtodo"
import Todos from "./components/Todos";
import About from "./components/Pages/About";
import {v4 as uuid} from "uuid";

class App extends React.Component {
    
    state = {
        todos: [
            {
                id: uuid(),
                title: "Mastering JavaScript",
                completed: false
            },
            {
                id:  uuid(),
                title: "Taking Node.js Class",
                completed: false
            },
            {
                id:  uuid(),
                title: "Visiting Dad",
                completed: false
            },
            {
                id:  uuid(),
                title: "Going To Church",
                completed: false
            },
            {
                id:  uuid(),
                title: "Dinner With Wife",
                completed: false
            },
        ]
    }
    
    //toggle complete
    markComplete = (id) => {
       this.setState({ todos: this.state.todos.map(todo => {
           if(todo.id === id) {
               todo.completed = !todo.completed
           }
           return todo;
       } )});
    }

    //delete todo 

    delTodo = (id) => {
       this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    // add todo
    addTodo = (title) => {
        const newTodo = {
            id:  uuid(),
            title,
            complete: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }


    render () {
        return(
            <Router>
              <div>
                 <div className="container">
                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                           <Addtodo addTodo={this.addTodo} />
                           <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About} />
                 </div>
              </div>
            </Router>
        );
    }
}

export default App;