/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import NextDayPlan from "views/NextDayPlan.js";
import DiscussionForum from "views/DiscussionForum.js";
import MyEnquiries from "views/MyEnquiries.js";
import AddNewCorporate from "views/AddNewCorporate.js";
import EditCorporateConfigurations from "views/EditCorporateConfigurations.js";
import ModifyProfile from "views/ModifyProfile.js";
import CreateBatch from "views/CreateBatch.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/next-day-plan",
    name: "Next Day Plan",
    icon: "nc-icon nc-spaceship",
    component: NextDayPlan,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/discussion-forum",
    name: "Discussion Forum",
    icon: "nc-icon nc-spaceship",
    component: DiscussionForum,
    layout: "/admin",
  },
  {
    path: "/my-enquiries",
    name: "My Enquiries",
    icon: "nc-icon nc-bank",
    component: MyEnquiries,
    layout: "/admin",
  },

  {
    path: "/add-new-corporate",
    name: "Add New Corporate",
    icon: "nc-icon nc-bank",
    component: AddNewCorporate,
    layout: "/admin",
  },

  {
    path: "/edit-corporate-configurations",
    name: "Edit Corporate Configurations",
    icon: "nc-icon nc-bank",
    component: EditCorporateConfigurations,
    layout: "/admin",
  },

  {
    path: "/modify-profile",
    name: "Edit Corporate",
    icon: "nc-icon nc-bank",
    component: ModifyProfile,
    layout: "/admin",
  },

  {
    path: "/create-batch",
    name: "Create Batch",
    icon: "nc-icon nc-bank",
    component: CreateBatch,
    layout: "/admin",
  },
  
];
export default routes;
