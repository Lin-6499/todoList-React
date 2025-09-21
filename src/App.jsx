import React from "react";
import  Header from "./component/Header";
import  List from "./component/List";
import  Foot from "./component/Footer";
import  Cs from "./App.module.css"
import {nanoid} from "nanoid";

export default class App extends React.Component {
    state = {
        taskList:[
            {id:"1",name:"吃饭",done:false},
            {id:"2",name:"睡觉",done:true},
            {id:"3",name:"打代码",done:false}
        ]
    }

    returnNewTask = (name) => {
        const {taskList} = this.state;
        let exist=false;
        taskList.map(item => {
            if (item.name === name) {
                alert("当前已存在相同任务！")
                exist=true;
            }
        })
        return exist?null:this.setState({taskList:[{id:nanoid(),name:name,done:false},...taskList]});
    }

    updateTask = (id,done) => {
        const {taskList} = this.state;
        const arr=taskList.map(item=>{
            if(item.id===id){
                item.done=done;
                return {...item,done};
            }else{
                return item;
            }
        })
        this.setState({taskList:arr});
    }

    deleteChecked = ()=>{
        const {taskList} = this.state;
        if(!confirm("您确定要删除么？"))
            return;
        const arr=taskList.filter(item=>item.done===false);
        this.setState({taskList:arr});
    }

    deleteTask = (id) => {
        const {taskList} = this.state;
        if(!confirm("您确定要删除么？"))
            return;
        const arr=taskList.filter(item=>item.id!==id);
        this.setState({taskList:arr});
    }

    checkAll = (check) => {
        const {taskList} = this.state;
        const arr=taskList.map(item=>{
            item.done=check;
            return item;
        })
        this.setState({taskList:arr});
    }



    render() {
        const {taskList} = this.state;
        const sum=taskList.reduce((pre,current)=>{return pre+(current.done?1:0)},0)
        return (
            <div className={Cs.app}>
                <Header add={this.returnNewTask}/>
                <List taskList={taskList} updateTask={this.updateTask} deleteTask={this.deleteTask}/>
                <Foot deleteChecked={this.deleteChecked} checkAll={this.checkAll} checkedNum={sum} allNum={taskList.length}/>
            </div>

        )
    }
}