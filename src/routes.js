import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Flights from "views/UserProfile/Flights.js";
import TableList from "views/TableList/TableList.js";

import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import { AirlineSeatFlat, AirplanemodeActive } from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard / Admin",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Check In / Stuff",
    icon: Person,
    component: Flights,
    layout: "/admin"
  },

  {
    path: "/table",
    name: "In Flight / Stuff",
    icon: AirplanemodeActive,
    component: TableList,
    layout: "/admin"
  },

];

export default dashboardRoutes;