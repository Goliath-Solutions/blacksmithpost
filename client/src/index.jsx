import React from 'react';
import {render} from 'react-dom';
import WeaponForm from './components/weaponForm.jsx'
import WeaponView from './components/weaponView.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import DeleteWeapon from './components/DeleteWeapon.jsx'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      weapons:[],
      deleteitem:'',
      viewState:'weaponForm',
      isLoading:false,
    }
  }

    componentDidMount(){
    this.setState({isLoading: true});

    fetch('/api/allWeapons')
    .then(response => response.json())
    .then(data => this.setState({ weapons: data, isloading:false}));
  }

  buyItem(){
    this.setState({viewState:'weaponView'});
  }

  sellItem(){
    this.setState({viewState:'weaponForm'});
  }


  render () {
    return (
      <div className="container">

        <nav className="navbar navbar-expand navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button className="btn btn-outline-primary" onClick={() => this.buyItem()}>Browse</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary" onClick={() => this.sellItem()}>Sell</button>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
        </nav>

        {this.state.viewState === 'weaponForm' && <WeaponForm />}
        {this.state.viewState === 'weaponView' && <WeaponView />}
        <Footer />
      </div>
    );
  };
};


// set up header
// set up footer
//set up router
//duplicate armor post
//set up view many item page weapon / armor
// set up single view item page weapon /armor
//setup basic login page.

//should all ajax requests be index page can they be on components?





ReactDOM.render(<App/>, document.getElementById('app'));

//routers
//conditinal rendering ,