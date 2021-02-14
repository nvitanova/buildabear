import React from 'react';
import Header from "./Components/Header/header";
import './App.css';
import Bears from "./Components/Bears/MyBears/bears";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Explore from "./Components/Explore/explore";
import Opinions from "./Components/Opinions/Opinions/opinions";
import BearAdd from "./Components/Bears/BearAdd/bearAdd";
import BearEdit from "./Components/Bears/BearEdit/bearEdit";
import BearRate from "./Components/Opinions/BearRate/BearRate";
import Login from "./Components/Login/login";
import HomePage from "./Components/HomePage/HomePage.js";
import Register from "./Components/HomePage/Register/register";
import BearDeleted from "./Components/Bears/BearDelete/BearDeleted";
import OpinionDelete from "./Components/Opinions/OpinionDelete/OpinionDelete";
import AdditionsAdd from "./Components/Additions/AdditionsAdd/additionsAdd";
import ClothesAdd from "./Components/Clothes/ClothesAdd"
import MakeOrder from "./Components/Order/makeOrder";
import BearsService from "./Repository/axiosRepository";
import BearOrdered from "./Components/Order/BearOrdered";
import Footer from "./Components/Footer/Footer";



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mybears: [],
            exploreBears: [],
            opinions: [],
            date: ''
        }

    }

    componentDidMount() {
        this.loadExplore();
    }

    loadMyBears = () => {
        BearsService.loadMyBears().then((res) => {
                console.log(res);
                this.setState({
                    mybears: res.data,

                });
            })
    };

    loadExplore = () => {
        BearsService.loadExplore().then((res) => {
            console.log(res);
            this.setState({
                exploreBears: res.data,

            });
        });
    };

    loadOpinions = () => {
        BearsService.loadOpinions().then((res) => {
            console.log(res);
            this.setState({
                opinions: res.data,

            });
        });
    };

    addBear = (newBear) => {
        BearsService.addBear(newBear);
    };

    editBear = (bear, bearName) => {
    BearsService.editBear(bear, bearName);
    };

    AddGrade= (newGrade, bearName) => {
    BearsService.AddGrade(newGrade, bearName);
    };

    editGrade = (newGrade, bearName) => {
        BearsService.editGrade(newGrade, bearName);
    };


    deleteBear = (bear) => {
    BearsService.deleteBear(bear);
    };

    addUser = (user) => {
        BearsService.addUser(user);
    };

    deleteOpinion = (opinion) => {
      BearsService.deleteOpinion(opinion);
    };

    addOrder = (order, date) => {
     BearsService.addOrder(order);

        this.setState({
            date: date
        })
    };


  render() {

    const routing = (
        <Router>
          <Header/>
            <Route exact path={"/"} render={()=>
                <HomePage bears={this.state.exploreBears} date = {this.state.date}/>}>
            </Route>
            <Route path={"/register"} render={(props)=>
                <Register onSave={this.addUser} {...props}/>}>
            </Route>
            <Route path={"/explore"} render={()=>
                <Explore onExploreClick={this.loadExplore} bears={this.state.exploreBears}/>}>
            </Route>
            <Route exact path={"/mybears"} render={()=>
                <Bears onMyBearsClick={this.loadMyBears} bears={this.state.mybears}/>}>

            </Route>


          <Route path={"/mybears/add"} render={()=>
              <BearAdd onSave={this.addBear} goBack={this.loadMyBears}/>}>
          </Route>
          <Route path="/mybears/:bearName/edit" render={(props)=>
              <BearEdit onSave={this.editBear} goBack={this.loadMyBears}  {...props}/>}>
          </Route>

                <Route exact path="/opinions/:bearName/delete" render={(props)=>
                    <OpinionDelete onDelete={this.deleteOpinion} {...props}/>}>
                </Route>
            <Route path="/opinions/:bearName" render={(props)=>
                <BearRate onSaveRate={this.AddGrade} onEditRate={this.editGrade} {...props} />}>
            </Route>

            <Route path="/login" render={()=>
                <Login />}>
            </Route>
            <Route exact path="/mybears/:bearName/delete" render={(props)=>
                <BearDeleted onDelete={this.deleteBear} goBack={this.loadMyBears} {...props}/>}>
            </Route>
            <Route exact path={"/opinions"} render={()=>
                <Opinions onOpinionsClick={this.loadOpinions} bears={this.state.opinions} totalPages={this.state.totalPages}/>}>
            </Route>

            <Route exact path="/clothes/add" render={()=>
                <ClothesAdd onSave={this.addClothes}/>}>
            </Route>
            <Route path={["/createOrder/:bearName", "/createOrder"]} render={(props)=>
                <MakeOrder onSave={this.addOrder} {...props}/>}>
            </Route>
            <Route path="/ordered" render={(props)=>
                <BearOrdered {...props}/>}>
            </Route>
            <Redirect to={"/"}/>
            <Footer/>
        </Router>


    );


  return(

<div className="App">
{routing}
</div>
  );
}
}


export default App;
