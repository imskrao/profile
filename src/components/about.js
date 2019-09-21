import React, {Component} from 'react'
import Classes from './../styles/about.module.css'
import { Link } from 'react-router-dom'
import AboutImage from './../images/profile.jpg';

export default class About extends Component  {
    constructor(props) {
        super(props)

        this.state = {
            about: 'My name is Santosh Rao I\'m a 21 years old Front End Developer. I describe myself as a developer who loves coding, open source, and the web platform. Currently I\'m working at a company called Ballistic Learning, as a Front End Developer. My interest in designing and developing user interfaces is what drove me to specialise in Frontend Development.',
            aboutImg: 'Santosh Kumar Rao',
            contact: 'Contact Me',
            services: 'Services'

        }
    }
    render() {
        return (
            <div className={Classes.about}>
                <div className={Classes.aboutBox}>
                    <div className={Classes.aboutDics}>
                        <p>{this.state.about}</p>
                        <div>
                            <Link to="/contact" className={Classes.aboutButton}>{this.state.contact}</Link>
                            <Link to="/services" className={[Classes.aboutButton, Classes.servicesButton].join(' ')}>{this.state.services}</Link>
                        </div>

                    </div>
                    <div className={Classes.aboutImg}>
                        <img src={AboutImage} alt={this.state.aboutImg}/>
                    </div>
                </div>
            </div>
        )
    }
}
