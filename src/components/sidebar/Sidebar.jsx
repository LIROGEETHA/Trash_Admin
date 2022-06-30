import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Volunteers</h3>
          <ul className="sidebarList">
            <Link to="/newUser" className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Add Volunteers
            </li>
            </Link>
            <Link to="/users" className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              manage volunteers
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Investors</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Manage investors
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Orders</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Manage Orders
            </li>
            </Link>
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Products</h3>
          <ul className="sidebarList">
            <Link to="/newproduct" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Add Products
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Manage Products
            </li>
            
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tasks</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Assign Tasks
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Manage Tasks
            </li>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Validate Garbage Collection
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
  
          <h3 className="sidebarTitle">Transactions</h3>
          <ul className="sidebarList">
    
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
