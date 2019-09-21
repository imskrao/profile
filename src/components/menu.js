import React, { Component } from 'react'
import Classes from './../styles/menu.module.css';
import { Link, NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import profilePic from './../images/profile.jpg'

export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    icon: 'home',
                    text: 'Home',
                    link: '/'
                },
                {
                    icon: 'user',
                    text: 'About Me',
                    link: '/about-me'
                },
                {
                    icon: 'cog',
                    text: 'Services',
                    link: '/services'
                },
                {
                    icon: 'code',
                    text: 'skills',
                    link: '/skills'
                },
                {
                    icon: 'graduation-cap',
                    text: 'Education',
                    link: '/eduction'
                },
                {
                    icon: 'paper-plane',
                    text: 'Projects',
                    link: '/projects'
                },
                {
                    icon: 'phone',
                    text: 'Contact',
                    link: '/contact'
                }
            ],
            userName: 'Santosh Rao',
            role: 'Front-End Developer'
        }
    }

    showNav = () => {
        return this.state.items.map((item, i) => {
            return (
                <div className={Classes.option} key={i}>
                    <NavLink to={item.link} exact={true} activeClassName={Classes.isActive}><FontAwesome name={item.icon} /> {item.text}</NavLink>
                </div>
            )
        })
    }

    render() {
        return (
            <div className={Classes.menu}>
                <div className={Classes.userName}>
                    <img src={profilePic}/>
                    <h3>{this.state.userName}</h3>
                    <p>{this.state.role}</p>
                </div>
                {this.showNav()}
            </div>
        )
    }
}
