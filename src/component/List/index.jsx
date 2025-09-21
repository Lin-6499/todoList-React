import React from "react";
import Item from "../Item/index.jsx";
import ListCSS from "./index.module.css";
import PropTypes from "prop-types";


export default class List extends React.Component {
    static propTypes = {
        taskList: PropTypes.array.isRequired,
        updateTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
    }

    render() {
        const {taskList,updateTask,deleteTask} = this.props;
        return (
            <>
                <table className={ListCSS.table}>
                    <thead>
                    </thead>
                    <tbody>
                    {taskList.map(item => {
                        return <Item key={item.id} {...item} updateTask={updateTask} deleteTask={deleteTask}/>
                    })}
                    </tbody>
                </table>
            </>
        )
    }
}