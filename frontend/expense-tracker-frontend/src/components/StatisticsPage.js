import React, { useEffect, useState } from "react";
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

  let amountsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const descriptions = ['Rent', 'Mortgage', 'Transport', 'Food', 'Utilities', 'Insurance', 'Medical/Healthcare', 'Investments', 'Debt Payments', 'Gifts', 'Memberships/Subscriptions', 'Recreation/Entertainment', 'Miscellaneous', 'Grooming/Self-care', 'Fuel', 'Education', 'Pets', 'Retirement Contributions', 'Clothing', 'Household Supplies/Items', 'Charity']

  let pieDataArray = []
  let legendDataArray = []



  useEffect(() => {

    const getExpenses = async () => {
      const { data } = await axiosInstance.get()

      data.forEach(object => {

        for(let i=0; i < descriptions.length; i++) {
          if(object.description === descriptions[i]) amountsArray[i] += object.amount
        }

      });

      let sum = 0

      for(let i=0; i < amountsArray.length; i++) {
        sum += amountsArray[i]
      }

      let percentageFactor = 100/sum

      const pushtoPieDataAndLegendData = (whichAmount, categoryString) => {
        if(whichAmount > 0) {
          pieDataArray.push({
            x: pieDataArray.length + 1,
            y: whichAmount,
          })

          legendDataArray.push({
            caption: `${categoryString} - ${(percentageFactor*whichAmount).toFixed(2)}%`,
            number: pieDataArray.length,
          })
        }
      }

      for(let i=0; i < amountsArray.length; i++) {
        pushtoPieDataAndLegendData(amountsArray[i], descriptions[i])
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
            legendData.map((object, i) => {
              return (
                <div style={{ display: 'flex' }} key={i}>
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