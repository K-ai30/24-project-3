import React, { Component } from "react";
import { Pie, Bar } from "react-chartjs-2";
import html2canvas from "html2canvas";
const pdfConverter = require("jspdf");

class Chart extends Component {

    renderChart(chartType, data) {
       
        switch(chartType) {
            case "pie": 
                return <div className="div2PDF"><Pie data={data} width={100} height={50}/></div>;
            case "bar": 
                return <div className="div2PDF"><Bar data={data} width={100} height={50}/></div>;
            default: 
                return <div className="div2PDF"></div>;

        }
    }

    // div2PDF = e => {
    //     // const but = e.target;
    //     // but.style.display = "none";
    //     let input = window.document.getElementsByClassName("div2PDF")[0];

    //     html2canvas(input).then(canvas => {
    //         const img = canvas.toDataURL("image/png");
    //         const pdf = new pdfConverter("1", "pt");
    //         pdf.addImage(
    //             img,
    //             "png",
    //             input.offsetLeft,
    //             input.offsetTop,
    //             input.clientWidth,
    //             input.clientHeight
    //         );
    //         pdf.save("chart.pdf");
    //         // but.style.display = "block";
    //     });
    // };

    render() {
        return this.renderChart(this.props.type, this.props.data);
        }
    }
    
    export default Chart;
      