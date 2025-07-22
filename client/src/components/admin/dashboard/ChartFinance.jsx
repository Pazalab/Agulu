import { LiaFilterSolid } from "react-icons/lia";
import { char_data } from "../../../data/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartFinance = () => {
  return (
         <div className="chart-row-column">
                  <div className="chart-header">
                         <h3>Money Flow</h3>
                         <div className="filter">
                                  <h4>Monthly</h4>
                                  <span><LiaFilterSolid /></span>
                         </div>
                 </div>
    
                <div className="chart-body">
                         <ResponsiveContainer width="100%" height="100%">
                                   <LineChart
                                        width={500}
                                        height={300}
                                        data={char_data}
                                       margin={{
                                             top: 5,
                                             right: 30,
                                             left: 20,
                                             bottom: 5,
                                       }}
                                 >
                                      <CartesianGrid horizontal={false} vertical={false} />
                                      <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={13} />
                                      <YAxis axisLine={false} tickLine={false} fontSize={13} />
                                      <Tooltip />
                                      {/* <Legend /> */}
                                      <Line type="monotone" dataKey="MonthInflow" stroke="#82ca9d" activeDot={{ r: 6 }} />
                                      <Line type="monotone" dataKey="CreditGiven" stroke="#F8D453" activeDot={{ r: 6 }} />
                            </LineChart>
                       </ResponsiveContainer>
              </div>
    </div>
  )
}

export default ChartFinance