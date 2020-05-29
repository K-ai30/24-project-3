import React, { Component } from 'react';
import "./style.css";
import API from '../../utils/API';
import Chart from '../Charts';


export default class ChartHistory extends Component {
    state={
        formInfo:{
            category:"",
            date:''
        },
        dataChart:{

        },
        allCharts:[
            {date:'',
            id:''
            }
        ]
    };
    // get all charts date from database and set to state 
    componentDidMount(){
        API.AllCharts()
        .then((res)=>{
          const allChartsDate= res.data.map(chart => {
                // console.log("chart date :",chart.creationDate);
                return ({date:chart.creationDate,id:chart._id})
             
            });
            this.setState({allCharts:allChartsDate});
            console.log("STATE :",this.state)
        })
        .catch(err => console.log("This is the ERR", err));

    }

    // set staet with chosen field
    HandleOnChangeForm(e,name) {

        // e.preventDefault();
        let newUserObj = Object.assign({}, this.state.formInfo);  // creating copy of state variable jasper
        newUserObj[e.target.name] = e.target.value;
        this.setState({ formInfo: newUserObj })

        console.log("State inside the handle change form ",this.state)

    };
    
    // craete a chart with chosen field
    HandleChart(e){
        e.preventDefault();
        const chartID=e.target[0].value;
        API.ChartById(chartID)
        .then((res)=>{
            this.setState(
                {dataChart: {
                  labels: res.data.labels,
                  datasets: [
                    {
                      label: res.data.category,
                      data: res.data.data,
                      backgroundColor:res.data.backgroundColor
                    }
                  ]
      
                }
                });
            let title=document.getElementById("title");
            title.innerHTML=this.state.dataChart.datasets[0].label;
            

        }).catch(err => console.log("This is the ERR", err));
      

    };
    
    render () {

    
        return (
            <div className="wrapper mx-auto align-middle">
                <form  onSubmit={(e)=>{this.HandleChart(e)}}>
                <div className="form-group">
               
                <label for="date" id="date">Date: </label>
                        <select className="form-control" id="inputGroupSelect01" name="date" type="date" onChange={(e) => { this.HandleOnChangeForm(e) }}>
                                <option selected disabled>Choose...</option>
                                {this.state.allCharts.map((item, index) => {
                                    
                                    return <option key={index} value={item.id}>{item.date}</option>
                                })}
                        </select>
                </div>
                    <button className="generate" >Generate</button>
                <div className="wrapperThree">Chart History
                </div>
                <div className="wrapperTwo">
                    <h5>Category : <span id="title"></span></h5>
                    <Chart type="pie" data={this.state.dataChart} />
                </div>
            </form>
            </div>
        )
    }
}