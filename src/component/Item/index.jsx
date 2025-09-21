import React from "react";
import ItemCSS from './index.module.css'
import PropTypes from "prop-types"

export default class Item extends React.Component {

    static propTypes = {
        id:PropTypes.string,
        name:PropTypes.string,
        done:PropTypes.bool.isRequired,
        updateTask:PropTypes.func.isRequired,
        deleteTask:PropTypes.func.isRequired
    }
    render() {
        const {id,name,done,updateTask,deleteTask}=this.props;
        return (
            <>
                <tr >
                    <td  className={ItemCSS.content} id={id}>
                        <input className={ItemCSS.check} name='taskName'  type='checkbox' checked={done} onChange={event => updateTask(id,event.target.checked)}/>{name}
                        <button className={ItemCSS.btn} onClick={()=>deleteTask(id)}>删除</button>
                    </td>
                </tr>
            </>
        )
    }
}