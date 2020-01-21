import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {Component} from 'react';

const linkStyle = {
    marginRight: 15
}

class Header extends Component {
    componentWillMount(){
    let a = 1
    }

    render() {
        return <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </div>
    }
}


export default Header