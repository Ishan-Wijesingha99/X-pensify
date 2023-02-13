import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
import axios from "axios";



const axiosInstance = axios.create({
  baseURL: `https://api-expense-tracker.azurewebsites.net/Expenses`
})

// for all these http request, you need to send the token with it or the backend won't be able to process it, so do this
axiosInstance.interceptors.request.use(config => {
  config.headers = { authorization: `Bearer ${sessionStorage.getItem("token")}`}
  return config
})


const StatisticsPage = () => {
  const colours = [
    "#cf1357",
    "#fc911d",
    "#1a8b70",
    "#39a035",
    "#a6680c",
    "#bd280c",
    "#05c58c",
    "#fe546b",
    "#771b1e",
    "#c8d281",
    "#98875f",
    "#e112e5",
    "#ec9e93",
    "#dee51c",
    "#210099",
    "#7b7def",
    "#2ce5d2",
    "#3a016b",
    "#170c18",
    "#5a8694",
    "#808080"
  ]

  const [pieData, setPieData] = useState([])

  const getExpenses = async () => {
    const { data } = await axiosInstance.get()

    let rentAmount = 0
    let mortgageAmount = 0
    let transportAmount = 0
    let foodAmount = 0
    let utilitiesAmount = 0
    let insuranceAmount = 0
    let medicalAmount = 0
    let investmentsAmount = 0
    let debtAmount = 0
    let giftsAmount = 0
    let membershipsAmount = 0
    let recreationAmount = 0
    let miscAmount = 0
    let groomingAmount = 0
    let fuelAmount = 0
    let educationAmount = 0
    let petsAmount = 0
    let retirementAmount = 0
    let clothingAmount = 0
    let householdAmount = 0
    let charityAmount = 0

    data.forEach(object => {

      if(object.description === 'Rent') {
        rentAmount += object.amount
      } else if(object.description === 'Mortgage') {
        mortgageAmount += object.amount
      } else if(object.description === 'Transport') {
        transportAmount += object.amount
      } else if(object.description === 'Food') {
        foodAmount += object.amount
      } else if(object.description === 'Utilities') {
        utilitiesAmount += object.amount
      } else if(object.description === 'Insurance') {
        insuranceAmount += object.amount
      } else if(object.description === 'Medical/Healthcare') {
        medicalAmount += object.amount
      } else if(object.description === 'Investments') {
        investmentsAmount += object.amount
      } else if(object.description === 'Debt Payments') {
        debtAmount += object.amount
      } else if(object.description === 'Gifts') {
        giftsAmount += object.amount
      } else if(object.description === 'Memberships/Subscriptions') {
        membershipsAmount += object.amount
      } else if(object.description === 'Recreation/Entertainment') {
        recreationAmount += object.amount
      } else if(object.description === 'Miscellaneous') {
        miscAmount += object.amount
      } else if(object.description === 'Grooming/Self-care') {
        groomingAmount += object.amount
      } else if(object.description === 'Fuel') {
        fuelAmount += object.amount
      } else if(object.description === 'Education') {
        educationAmount += object.amount
      } else if(object.description === 'Pets') {
        petsAmount += object.amount
      } else if(object.description === 'Retirement Contributions') {
        retirementAmount += object.amount
      } else if(object.description === 'Clothing') {
        clothingAmount += object.amount
      } else if(object.description === 'Household Supplies/Items') {
        householdAmount += object.amount
      } else if(object.description === 'Charity') {
        charityAmount += object.amount
      }

    });
    
    // data.forEach((object, i) => {
    //   newDataArray.push({
    //     title: object.description,
    //     value: object.amount,

    //   })
    // })
    // console.log(data)
    // setPieData(data)
  }

  getExpenses()

  

  return (
    <div style={{ maxWidth: "35rem", maxHeight: "35rem", margin: "auto", textAlign: "center" }}>
      
      <h4 style={{ marginTop: "10px" }}>Expenses per Category</h4>

      <PieChart
      data={[
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' }
      ]}
      label={({ dataEntry }) => dataEntry.value}
      />

      {/* {
      pieData.length >=1 
      ? 
      (
      <PieChart

      />
      ) 
      : 
      (
        <div></div>
      )
      }
       */}

    </div>
  )
}

export default StatisticsPage