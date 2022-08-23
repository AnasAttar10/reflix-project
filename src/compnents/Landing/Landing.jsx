import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Landing extends Component {
    render() {
        const {users} = this.props
        return (
            <div>
                <h2 className='subtitle-landing'>Who's Watching ? </h2>
                <div className='users-conatiner'>
                {
                users.map(u =>(
                <div className={`user ${u.backgroundColor}`} key={Math.random()}><Link to={"/catalog"}>{u.name}</Link></div>
                ))}
                </div>
            </div>

        )
        
    }
}

export default Landing;
//users.map(u =>(<div className={`user ${u.backgroundColor}`}>{u.name}</div>}