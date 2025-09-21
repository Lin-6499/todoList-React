import React from "react";
import FooterCSS from "./index.module.css"

export default class Footer extends React.Component {

    render() {
        const {deleteChecked,checkAll,checkedNum,allNum}=this.props;
        return (
            <div className={FooterCSS.sty}>
                <input className={FooterCSS.check} type='checkbox' checked={checkedNum===allNum&&allNum!==0} onChange={event => checkAll(event.target.checked)}/> 已完成{checkedNum}/全部{allNum}
                <button className={FooterCSS.btn} type='button' onClick={deleteChecked} >清除已经完成的任务</button>
            </div>

        )
    }
}