import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {Component} from 'react';

const linkStyle = {
    marginRight: 15
}

class Header extends Component {
    componentWillMount(){
        console.log('Header run');
        this.getInfo();
    }

    getInfo = async () => {
        const url = 'http://api.tvmaze.com/search/shows?q=girls';
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
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