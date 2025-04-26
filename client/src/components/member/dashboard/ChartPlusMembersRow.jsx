import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LiaFilterSolid } from "react-icons/lia";
import { char_data } from '../../../data/utils';
import { IoSearchOutline, IoCloseOutline  } from "react-icons/io5";
import member1 from "../../../assets/portrait1.jpg"
import member2 from "../../../assets/portrait2.jpg"
import member3 from "../../../assets/portrait3.jpg"
import member4 from "../../../assets/portrait4.jpg"
import member5 from "../../../assets/dum1.jpg"
import member6 from "../../../assets/dummy3.jpg"
import member7 from "../../../assets/auth2.jpg"
import member8 from "../../../assets/hero1.jpg"
import { Link } from 'react-router-dom';
import { RxArrowTopRight } from "react-icons/rx";
import { useState } from 'react';

const ChartPlusMembersRow = () => {
    const [ searchStatus, setSearchStatus ] = useState(false)
  return (
    <div className="chart-member-row">
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
                                          <BarChart
                                                   width={500}
                                                   height={300}
                                                   data={char_data}
                                                   margin={{
                                                          top: 20,
                                                          right: 30,
                                                           left: 0,
                                                           bottom: 5,
                                                   }}
                                           >
                                                        <CartesianGrid horizontal={false} vertical={false} />
                                                        <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={13} />
                                                        <YAxis axisLine={false} tickLine={false} fontSize={13}  />
                                                        <Tooltip cursor={false} wrapperStyle={{ outline: "none" }}  />
                                                        <Legend />
                                                        <Bar dataKey="MonthInflow" stackId="a"  fill="#157E3E" radius={[5, 5, 5, 5]} />
                                                        <Bar dataKey="CreditGiven" stackId="a" fill="#F8D453" radius={[5, 5, 5, 5]} />              
                                                </BarChart>
                                   </ResponsiveContainer>
                          </div>
                </div>
                <div className="members-row-column">
                            <div className="members-header">
                                       <h3>Agulu Members</h3>
                                      <div onClick={() => setSearchStatus(!searchStatus)}>
                                               { searchStatus ? <span><IoCloseOutline /></span> : <span><IoSearchOutline /></span>}
                                      </div>
                            </div>
                            { searchStatus ?
                                 <div className="members-search">
                                          <input type="text" placeholder='Enter name' />
                                 </div>
                              : ""}
                            <div className="members-flex">
                                     <img src={member1} alt="" />
                                     <img src={member2} alt="" />
                                     <img src={member3} alt="" />
                                     <img src={member4} alt="" />
                                     <img src={member5} alt="" />
                                     <img src={member6} alt="" />
                                     <img src={member7} alt="" />
                                     <img src={member8} alt="" />
                                     <img src={member1} alt="" />
                                     <img src={member2} alt="" />
                                     <img src={member3} alt="" />
                                     <img src={member4} alt="" />
                                     <img src={member5} alt="" />
                                     <img src={member6} alt="" />
                                     <img src={member7} alt="" />
                                     <img src={member3} alt="" />
                                     <img src={member4} alt="" />
                                     <img src={member5} alt="" />
                                     <img src={member6} alt="" />
                                      <Link to="">More <span><RxArrowTopRight /></span></Link>
                            </div>
                </div>
    </div>
  )
}

export default ChartPlusMembersRow