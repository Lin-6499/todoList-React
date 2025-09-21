import React from "react";
import HeaderCSS from "./index.module.css";
import PropTypes from "prop-types";
export default class Header extends React.Component {
    static propTypes = {
        add: PropTypes.func.isRequired,
        value:PropTypes.string,
    }
    handlerInput=(event)=>{
        let {add}=this.props;
        let {value}=event.target;
        if(event.keyCode === 13){
            if(value.trim()===""){
                alert("输入不能为空！！！")
                return;
            }
            console.log(value);
            add(value);
            event.target.value="";
        }
    }

    render() {
        return(
            <>
                <input onKeyDown={this.handlerInput} type='text' name='input' className={HeaderCSS.input} placeholder='请输入您的任务名称，按回车确认！'/>
            </>
        )
    }
}