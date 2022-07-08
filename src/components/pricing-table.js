import React from 'react';
import { MdDoneOutline } from 'react-icons/md' 
import { ImCross } from "react-icons/im";

export class PricingTable extends React.Component {
    render() {
        const tableContainer = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "50px",
            backgroundColor: "blue"
        }
        const tables = {
            display: "grid",
            gridTemplateRows: "2fr 10fr 1fr",
            borderStyle: "solid",
            borderRadius: "15px",
            height: "50%",
            marginTop: "50px",
            marginLeft: "50px",
            marginRight: "50px",
            backgroundColor: "white"
        }
        const header = {
            fontSize: "xx-large",
        }
        const list_item = {
            listStyleType: "None",
            display: "flex",
            flexDirection: "row"
        }
        const button_style = {
            fontSize: "20px",
            backgroundColor: "blue",
            width: "90%",
            borderStyle: "solid",
            borderRadius: "15px",
            marginBottom: "10px"
        }
        function mouseEnter(className) {
            let elems = document.getElementsByClassName(className)
            elems[0].style.marginBottom = "20px"
            elems[0].style.marginTop = "30px"
        }
        function mouseLeave(className) {
            let elems = document.getElementsByClassName(className)
            elems[0].style.marginBottom = "0px"
            elems[0].style.marginTop = "50px"
        }
        return(  
            <div style={tableContainer}>
                <div className='table1' style={tables} onMouseEnter={() => mouseEnter('table1')} onMouseLeave={() => mouseLeave('table1')}>
                    <div>
                        <h5>Free</h5>
                        <div><span style={header}><strong>$0</strong></span>/month</div>
                        <hr></hr>
                    </div>
                    <div>
                        <ul>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Single User</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> 5GB Storage</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Unlimited Public Projects</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Community Access</div>
                            </li>
                            <li style={list_item}>
                                <div><ImCross/> Unlimited Private Projects</div>
                            </li>
                            <li style={list_item}>
                                <div><ImCross/> Dedicated Phone Support</div>
                            </li>
                            <li style={list_item}>
                                <div><ImCross/> Free Subdomain</div>
                            </li>
                            <li style={list_item}>
                                <div><ImCross/> Monthly Status Reports</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button style={button_style}>BUTTON</button>
                    </div>
                </div>
                <div className='table2' style={tables} onMouseEnter={() => mouseEnter('table2')} onMouseLeave={() => mouseLeave('table2')}>
                    <div>
                        <h5>Plus</h5>
                        <div><span style={header}><strong>$9</strong></span>/month</div>
                        <hr></hr>
                    </div>
                    <div>
                        <ul>
                            <li style={list_item}>
                                <div><MdDoneOutline/> 5 Users</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> 50GB Storage</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Unlimited Public Projects</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Community Access</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Unlimited Private Projects</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Dedicated Phone Support</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Free Subdomain</div>
                            </li>
                            <li style={list_item}>
                                <div><ImCross/> Monthly Status Reports</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button style={button_style}>BUTTON</button>
                    </div>
                </div>
                <div className='table3' style={tables} onMouseEnter={() => mouseEnter('table3')} onMouseLeave={() => mouseLeave('table3')}>
                    <div>
                        <h5>Pro</h5>
                        <div><span style={header}><strong>$49</strong></span>/month</div>
                        <hr></hr>
                    </div>
                    <div>
                        <ul>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Unlimited Users</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> 150GB Storage</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Unlimited Public Projects</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Community Access</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Unlimited Private Projects</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Dedicated Phone Support</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Unlimited Free Subdomains</div>
                            </li>
                            <li style={list_item}>
                                <div><MdDoneOutline/> Monthly Status Reports</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button style={button_style}>BUTTON</button>
                    </div>
                </div>
            </div>       
        )
    }
}