import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchMylist, fetchRecommendations } from '../store/actions/index';

const Mylist = props => (
      <div className="movieDisplay__container__dropdown">
          <div className="movieDisplay__container__dropdown__img">
              <img alt="movies" width="250" height="400" src={`${props.mylist.img}`}/>
          </div>
            <div className="movieDisplay__container__dropdown__img-imgoverlay" />         
            <div className="movieDisplay__container__dropdown-content">
            <div className="movieDisplay__container__dropdown-content-a">
                <button onClick={ () => {props.removeFromMylist(props.mylist)}} className="movieDisplay__container__dropdown-content__button">REMOVE</button>&nbsp;&nbsp;&nbsp;
                {props.mylist.title}
            </div>                              
            </div>
     </div>
)

const Recommendation = props => (
        <div className="movieDisplay__container__dropdown">
            <div className="movieDisplay__container__dropdown__img">
                <img alt="movies" width="250" height="400" src={`${props.recommendations.img}`}/>
            </div>
            <div className="movieDisplay__container__dropdown__img-imgoverlay" />
            <div className="movieDisplay__container__dropdown-content">
                <div className="movieDisplay__container__dropdown-content-a">
                    <button onClick={ () => {props.addToMylist(props.recommendations)}} className="movieDisplay__container__dropdown-content__button">ADD</button>&nbsp;&nbsp;&nbsp;
                    {props.recommendations.title}
                </div>                              
            </div>
        </div>
)  

class Movies extends Component {
    constructor(props) {
        super(props)

        this.removeFromMylist = this.removeFromMylist.bind(this);
        this.addToMylist = this.addToMylist.bind(this);

        this.state = {
             mylist:[],
             recommendations:[]
        }
    }

    componentDidMount() {
            this.props.fetchMylist()
                    .then(res => {
                        this.setState({
                            mylist:res.payload
                        })
                    })
            this.props.fetchRecommendations()
                    .then(res => {
                        this.setState({
                            recommendations:res.payload
                        })
                    })     
        }
        
    removeFromMylist(list){
            let mylist_ids = this.state.mylist.map(i=>i['id']);
            let recommendations_ids = this.state.recommendations.map(i=>i['id']);
            if (!((mylist_ids.includes(list.id)) && (recommendations_ids.includes(list.id)))){
            this.setState({
                mylist: this.state.mylist.filter(el => el.id !== list.id),
                recommendations:this.state.recommendations.concat(list)
            })
        } 
    }

    addToMylist(recommendation){
            let mylist_ids = this.state.mylist.map(i=>i['id']);
            let recommendations_ids = this.state.recommendations.map(i=>i['id']);
            if (!((mylist_ids.includes(recommendation.id)) && (recommendations_ids.includes(recommendation.id)))){    
            this.setState({
                recommendations: this.state.recommendations.filter(el => el.id !== recommendation.id),
                mylist:this.state.mylist.concat(recommendation)
            }) 
        }
    }


    myList() {
        return this.state.mylist.map(currentmylist => {
          return <Mylist mylist={currentmylist} removeFromMylist={this.removeFromMylist} key={currentmylist._id}/>;
        })
      }
    
    recommendations() {
        return this.state.recommendations.map(currentRecommendations => {
            return <Recommendation recommendations={currentRecommendations} addToMylist={this.addToMylist} key={currentRecommendations._id}/>;
        })
    }

    render() {
      return (
        <div>
            <h2 className="movieDisplay__heading">My List</h2>
            <div className="movieDisplay__container">{ this.myList() }</div>
            <h2 className="movieDisplay__heading">Recommendations</h2>  
            <div className="movieDisplay__container">{ this.recommendations() }</div>                 
        </div>
      )
    }
  }


    const mapStateToProps = (state) => {
        return {mylist: state.mylist, recommendations: state.recommendations }
    }

    const mapDispatchToProps = (dispatch) => ({
        fetchMylist:()=>dispatch(fetchMylist()), 
        fetchRecommendations:()=>dispatch(fetchRecommendations())
    })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movies);