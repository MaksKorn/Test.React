import React from 'react';
import './App.css';
import { UserList } from "./UserList";

    
const userInfo = {
    firstName: 'Michael',
    lastName: 'Jackson',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Nezalezhnosti, 1',
      postIndex: '76000'
    }
  };
  
  const userInfoList = [{
    firstName: 'Maks',
    lastName: 'Korniienko',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Lenkavskogo, 34',
      postIndex: '76001'
    },
    active: true
  },
  {
    firstName: 'Martha',
    lastName: 'Korniienko',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Lenkavskogo, 34',
      postIndex: '76001'
    },
    active: false
  },
  {
    firstName: 'Mups',
    lastName: 'Makarun',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Lenkavskogo, 34',
      postIndex: '76001'
    },
    active: true
  }];

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.filterUsers = this.filterUsers.bind(this);
      this.state = {
        deleteInactive: false,
        users: userInfoList
      }
    }
  
    filterUsers(e) {
      this.setState({
        deleteInactive: e.target.checked,
        users: (e.target.checked) ? userInfoList.filter(user => user.active === true) : userInfoList
      });
    }
  
    render() {
      return (
        <div>
          <div>
            <input type="checkbox" onClick={this.filterUsers} />
            <label>Показувати тільки активних користувачів</label>
          </div>
          <div>
            <UserList users={this.state.users} />
          </div>
        </div >
      );
    }
  }
  

  export default App;