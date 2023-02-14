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
  const descriptions = ['Rent', 'Mortgage', 'Transport', 'Food', 'Utilities', 'Insurance', 'Medical/Healthcare', 'Investments', 'Debt Payments', 'Gifts', 'Subscriptions', 'Recreation/Entertainment', 'Miscellaneous', 'Grooming/Self-care', 'Fuel', 'Education', 'Pets', 'Retirement Contributions', 'Clothing', 'Household Supplies/Items', 'Charity']

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
      <div className="stats-page-div">
        
        <h4 className="stats-page-title">Expenses Pie Chart</h4>

        {/* the pie chart */}
        <VictoryPie 
        colorScale={["#E8421F", "#2136FF", "#5DE71A", "#FCE313", "#e112e5", "#A016EB", "#FF8D39", "#ec9e93", "#c8d281", "#00EEFF", "#cf1357", "#4BA122", "#828585", "#771b1e", "#9DF2B0", "#22DFCA", "#1a8b70", "#F423C5", "#a6680c", "#8B94EB", "#856D13"]}
        data={pieData}
        style={{
          data: {
            strokeWidth: 1,
            stroke: "rgb(221, 221, 221)"
          },
          labels: {
            fill: "rgb(221, 221, 221)"
          }
        }}
        />

      </div>

      {/* the legend */}
      <div className="legend">
          {
            legendData.map((object, i) => {
              return (
                <div style={{ display: 'flex' }} key={i}>
                  <p style={{ marginRight: '1rem', marginLeft: '1rem' }}>{object.number}: {object.caption}</p>
                </div>
              )
            })
          }
      </div>
    </>
  )
}

export default StatisticsPage