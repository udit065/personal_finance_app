// import { Navigate } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import '../css/sidebar.css';
import { House, ArrowUpDown, Goal, ReceiptIndianRupee, ReceiptText } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar_heading'>
                <h2><Link to={`/`}>finance</Link></h2>
            </div>
            <div className='content'>
                <ul>

                    <li>
                        <div>
                            <House color="#ffffff" strokeWidth={2} />
                        </div>
                        <div>
                            <Link to={`/overview`}>Overview</Link>

                        </div>
                    </li>
                    <li>
                        <div>
                            <ArrowUpDown color="#ffffff" strokeWidth={2} />
                        </div>
                        <div>
                            <Link to={`/transactions`}>Transactions</Link>

                        </div>
                    </li>
                    <li>
                        <div>
                            <Goal color="#ffffff" strokeWidth={2} />
                        </div>
                        <div>
                            Budget
                        </div>
                    </li>
                    <li>
                        <div>
                            <ReceiptIndianRupee color="#ffffff" />
                        </div>
                        <div>
                            Pots
                        </div>
                    </li>
                    <li>
                        <div>
                            <ReceiptText color="#ffffff" />
                        </div>
                        <div>
                            Recurring Bills
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
