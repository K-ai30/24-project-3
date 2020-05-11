import React, { Component } from 'react';
import './style.css';
import Chart from '../Charts';
import API from '../../utils/API';


// const testData = {
//   labels: [
//     "Red",
//     "Green",
//     "Yellow"
//   ],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//     }
//   ]
// }
// write download pdf code into class component

class ReportPage extends Component {

    state ={
      
        chartData: {
          labels: [],
          datasets: [
            {
              label: [],
              data: [],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#6610f2", "#fd7e14", "#28a745", "#6f42c1"]
            }
          ]

        },
        formData:[]
      

    }
  

  componentDidMount() {
    // this.GetChartByID();
    // this.GetAllUsers();
  }

  GetChartByID = (id) => {
    
    API.Chart(id)
      .then((res) => {
        // console.log('This is Chart result from Database', res.data);
        // console.log('This is DATA from Database:', res.data.data);

        // this.setState(
        //   {chartData: {
        //     labels: [res.data.category],
        //     datasets: [
        //       {
        //         label: res.data.category,
        //         data: res.data.data,
        //         backgroundColor:this.state.chartData.datasets[0].backgroundColor
        //         // ["#FF6384", "#36A2EB", "#FFCE56", "#6610f2", "#fd7e14", "#28a745", "#6f42c1"]
        //       }
        //     ]

        //   }
        //   });

      })
      .catch(err => console.log("This is the ERR", err));
  };
  GetAllUsers = () => {
    
    API.AllUsers()
      .then((res) => {
        console.log('This is--ALL USER-- result from api call', res.data);
        let results=0;
        const gender=res.data.map(user=>{
          if (user.isAdmin!= true){
            results+=1
           
          }
          
          // console.log("GENDER INSIDE",gender)
        })
        this.setState(
          {chartData: {
            labels: ["all User is Admin"],
            datasets: [
              {
                label: ["Gender"],
                data: [results],
                backgroundColor:this.state.chartData.datasets[0].backgroundColor
               
              }
            ]

          }
          });
        console.log("Results --->>",results);
        console.log("SATate --->>",this.state);
       




        // const newFormData = res.data.map(function(chart) {
        //   return ({
        //           community:{
        //             name: chart.communityID.name,
        //             id: chart.communityID._id
        //           },
        //           category:chart.category
        //       });
        // });
        // console.log("This is The  All FORM data",newFormData)

        // this.setState({formData: newFormData});
          
          


      })
      .catch(err => console.log("This is the ERR", err));
  }
  HandleReportBtn(e){
    e.preventDefault()
    this.GetAllUsers();
    // this.GetChartByID("5eb4cd8b3a9fa112d4754f2a");

  }
  
  render() {
    console.log("state", this.state)
    // const values = Object.values(fruits)

   
    return (
      <form className="wrapper mx-auto align-middle">
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Community</label>
          <select className="form-control" id="exampleFormControlSelect1" >
            <option>All Communities</option>
            {this.state.formData.map((community,index)=>{
              // console.log("Comm name :",community.community.name)
              return <option key={index} name= "community" value={community.community.id}>{community.community.name}</option>
            })}
           
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <select className="form-control" id="exampleFormControlSelect1">
          {this.state.formData.map((category,index)=>{
              
              return <option key={index} name= "category" value={category.category}>{category.category}</option>
            })}
            
          </select>
        </div>
        <button className="generate" onClick={(e)=>this.HandleReportBtn(e)}>Generate Report</button>

        <div className="wrapperTwo">
          <h2>Report</h2>
          <Chart type="pie" data={this.state.chartData} />
          {/* <canvas id="myChart" width="300" height="300"> */}
          {/* <Chart/> */}
          {/* </canvas> */}
        </div>
      </form>
    )
  }
}

export default ReportPage;

// how to get our data into this chart
// make a call to database to get info we need
// make data look like out testData
