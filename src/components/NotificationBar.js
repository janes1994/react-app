import React, { Component } from "react";

export default class NotificationBar extends Component {
    notif = () => {
        let tombol = document.querySelectorAll('.nav li')
        tombol.forEach(tbl => {
            tbl.classList.add('is-active')
        })
    }
    render(){
        return (
            <div>
                <section className="section-notification">
                    <ul onClick={this.notif} className="nav">
                        <li id="home"><i className="material-icons">home</i></li>
                        <li id="search"><i className="material-icons">search</i></li>
                        <li id="star"><i className="material-icons">star
                            <ul className="notifications">
                            <li><i className="material-icons">remove_red_eye</i><span>9</span></li>
                            <li><i className="material-icons">comment</i><span>4</span></li>
                            <li><i className="material-icons">account_circle</i><span>6</span></li>
                            </ul></i></li>
                        <li id="face"><i className="material-icons">face</i></li>
                    </ul>
                </section>
            </div>
        )
    }
}