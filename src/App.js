import './App.css';
import Home from './component/Home' 
import MovieList from './component/MovieList' 
import RemarkList from './component/RemarkList' 
import MovieDetail from './component/MovieDetail'
import RemarkDetail from './component/RemarkDetail'
import {BrowserRouter as Router , Route, Link, NavLink} from 'react-router-dom'
function App() {
  return (
    <div className="App" key={555}>
      <Router>
        <div style={{background:'#ccc',height:'50px',display:'flex',padding:'0 15px',alignItems:'center',fontSize:'17px'}}>
          <NavLink exact to="/" activeStyle={{fontWeight: 'bold',color: 'black'}}>首页</NavLink>
          <NavLink to="/MovieList" activeStyle={{fontWeight: 'bold',color: 'black'}}>电影页</NavLink>
          <NavLink to="/RemarkList" activeStyle={{fontWeight: 'bold',color: 'black'}}>影评页</NavLink>
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/MovieList" component={MovieList} />
        <Route path="/RemarkList" component={RemarkList} />
        <Route path="/MovieDetail" component={MovieDetail} />
        <Route path="/RemarkDetail/:id" component={RemarkDetail} />
      </Router>
    </div>
  );
}

export default App;
