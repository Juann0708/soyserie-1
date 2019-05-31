import React, {Component} from 'react'
import M from "materialize-css"


class Header extends Component {

  componentDidMount() {
      // Auto initialize all the things!
      M.AutoInit();
  }

render(){
    return (
        <div className="header">
             <nav>
                <nav className="blue-grey darken-3">
                   <a href="/" class="brand-logo">Logo</a>
                   <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                   </ul>
                 </nav>
              </nav>
          </div>
    );
  }
} 


export default Header;