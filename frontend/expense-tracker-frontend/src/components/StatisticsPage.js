import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { VictoryPie } from 'victory'



const axiosInstance = axios.create({
  baseURL: `https://api-expense-tracker.azurewebsites.net/Expenses`
})

// for all these http request, you need to send the token with it or the backend won't be able to process it, so do this
axiosInstance.interceptors.request.use(config => {
  config.headers = { authorization: `Bearer ${sessionStorage.getItem("token")}`}
  return config
})



const StatisticsPage = () => {
  const [pieData, setPieData] = useState([])
  const [legendData, setLegendData] = useState([])

  let [rentAmount, mortgageAmount, transportAmount, foodAmount, utilitiesAmount, insuranceAmount, medicalAmount, investmentsAmount, debtAmount, giftsAmount, membershipsAmount, recreationAmount, miscAmount, groomingAmount, fuelAmount, educationAmount, petsAmount, retirementAmount, clothingAmount, householdAmount, charityAmount] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  let pieDataArray = []
  let legendDataArray = []



  useEffect(() => {

    const getExpenses = async () => {
      const { data } = await axiosInstance.get()

      data.forEach(object => {

        if(object.description === 'Rent') {
          rentAmount += object.amount
        }
        if(object.description === 'Mortgage') {
          mortgageAmount += object.amount
        }
        if(object.description === 'Transport') {
          transportAmount += object.amount
        }
        if(object.description === 'Food') {
          foodAmount += object.amount
        }
        if(object.description === 'Utilities') {
          utilitiesAmount += object.amount
        }
        if(object.description === 'Insurance') {
          insuranceAmount += object.amount
        }
        if(object.description === 'Medical/Healthcare') {
          medicalAmount += object.amount
        }
        if(object.description === 'Investments') {
          investmentsAmount += object.amount
        }
        if(object.description === 'Debt Payments') {
          debtAmount += object.amount
        }
        if(object.description === 'Gifts') {
          giftsAmount += object.amount
        }
        if(object.description === 'Memberships/Subscriptions') {
          membershipsAmount += object.amount
        }
        if(object.description === 'Recreation/Entertainment') {
          recreationAmount += object.amount
        }
        if(object.description === 'Miscellaneous') {
          miscAmount += object.amount
        }
        if(object.description === 'Grooming/Self-care') {
          groomingAmount += object.amount
        }
        if(object.description === 'Fuel') {
          fuelAmount += object.amount
        }
        if(object.description === 'Education') {
          educationAmount += object.amount
        }
        if(object.description === 'Pets') {
          petsAmount += object.amount
        }
        if(object.description === 'Retirement Contributions') {
          retirementAmount += object.amount
        }
        if(object.description === 'Clothing') {
          clothingAmount += object.amount
        }
        if(object.description === 'Household Supplies/Items') {
          householdAmount += object.amount
        }
        if(object.description === 'Charity') {
          charityAmount += object.amount
        }

      });

      let percentageFactor = 100/(rentAmount + mortgageAmount + transportAmount + foodAmount + utilitiesAmount + insuranceAmount + medicalAmount + investmentsAmount + debtAmount + giftsAmount + membershipsAmount + recreationAmount + miscAmount + groomingAmount + fuelAmount + educationAmount + petsAmount + retirementAmount + clothingAmount + householdAmount + charityAmount)

      if(rentAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: rentAmount,
        })

        legendDataArray.push({
          caption: `Rent - ${(percentageFactor*rentAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#cf1357"
        })
      }
      if(mortgageAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: mortgageAmount
        })

        legendDataArray.push({
          caption: `Mortgage - ${(percentageFactor*mortgageAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#fc911d"
        })
      }
      if(transportAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: transportAmount
        })

        legendDataArray.push({
          caption: `Transport - ${(percentageFactor*transportAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#1a8b70"
        })
      }
      if(foodAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: foodAmount
        })

        legendDataArray.push({
          caption: `Food - ${(percentageFactor*foodAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#39a035"
        })
      }
      if(utilitiesAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: utilitiesAmount
        })

        legendDataArray.push({
          caption: `Utilities - ${(percentageFactor*utilitiesAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#a6680c"
        })
      }
      if(insuranceAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: insuranceAmount
        })

        legendDataArray.push({
          caption: `Insurance - ${(percentageFactor*insuranceAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#bd280c"
        })
      }
      if(medicalAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: medicalAmount
        })

        legendDataArray.push({
          caption: `Medical/Healthcare - ${(percentageFactor*medicalAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#05c58c"
        })
      }
      if(investmentsAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: investmentsAmount
        })

        legendDataArray.push({
          caption: `Investments - ${(percentageFactor*investmentsAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#fe546b"
        })
      }
      if(debtAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: debtAmount
        })

        legendDataArray.push({
          caption: `Debt Payments - ${(percentageFactor*debtAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#771b1e"
        })
      }
      if(giftsAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: giftsAmount
        })

        legendDataArray.push({
          caption: `Gifts - ${(percentageFactor*giftsAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#c8d281"
        })
      }
      if(membershipsAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: membershipsAmount
        })

        legendDataArray.push({
          caption: `Memberships/Subscriptions - ${(percentageFactor*membershipsAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#98875f"
        })
      }
      if(recreationAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: recreationAmount
        })

        legendDataArray.push({
          caption: `Recreation/Entertainment - ${(percentageFactor*recreationAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#e112e5"
        })
      }
      if(miscAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: miscAmount
        })

        legendDataArray.push({
          caption: `Miscellaneous - ${(percentageFactor*miscAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#ec9e93"
        })
      }
      if(groomingAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: groomingAmount
        })

        legendDataArray.push({
          caption: `Grooming/Self-care - ${(percentageFactor*groomingAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#dee51c"
        })
      }
      if(fuelAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: fuelAmount
        })

        legendDataArray.push({
          caption: `Fuel - ${(percentageFactor*fuelAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#210099"
        })
      }
      if(educationAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: educationAmount
        })

        legendDataArray.push({
          caption: `Education - ${(percentageFactor*educationAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#7b7def"
        })
      }
      if(petsAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: petsAmount
        })

        legendDataArray.push({
          caption: `Pets - ${(percentageFactor*petsAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#2ce5d2"
        })
      }
      if(retirementAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: retirementAmount
        })

        legendDataArray.push({
          caption: `Retirement Contributions - ${(percentageFactor*retirementAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#3a016b"
        })
      }
      if(clothingAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: clothingAmount
        })

        legendDataArray.push({
          caption: `Clothing - ${(percentageFactor*clothingAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#170c18"
        })
      }
      if(householdAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: householdAmount,
        })

        legendDataArray.push({
          caption: `Household Supplies/Items - ${(percentageFactor*householdAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#5a8694"
        })
      }
      if(charityAmount > 0) {
        pieDataArray.push({
          x: pieDataArray.length + 1,
          y: charityAmount
        })

        legendDataArray.push({
          caption: `Charity - ${(percentageFactor*charityAmount).toFixed(2)}%`,
          number: pieDataArray.length,
          colour: "#808080"
        })
      }

      setPieData(pieDataArray)
      setLegendData(legendDataArray)
    }

    getExpenses()

  }, [])



  return (
    <>
      <div style={{ maxWidth: "35rem", maxHeight: "35rem", margin: "auto", textAlign: "center" }}>
        
        <h4 style={{ marginTop: "10px" }}>Expenses per Category</h4>

        {/* the pie chart */}
        <VictoryPie 
        colorScale={["#cf1357", "#fc911d", "#1a8b70", "#39a035", "#a6680c", "#bd280c", "#05c58c", "#fe546b", "#771b1e", "#c8d281", "#98875f", "#e112e5", "#ec9e93", "#dee51c", "#210099", "#7b7def", "#2ce5d2", "#3a016b", "#170c18", "#5a8694", "#808080"]}
        data={pieData}
        />

      </div>

      {/* the legend */}
      <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '12px', marginRight: 'auto', marginLeft: 'auto'}}>
          {
            legendData.map(object => {
              return (
                <div style={{ display: 'flex' }}>
                  <p style={{ marginRight: '20px' }}>{object.number}: {object.caption}</p>
                </div>
              )
            })
          }
      </div>
    </>
  )
}

export default StatisticsPage