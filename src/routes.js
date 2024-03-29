// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Users from "layouts/users";
import Product from "layouts/product/list/index";
import EditProduct from "layouts/product/update/index";
import AddProduct from "layouts/product/add/index";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import SignOut from "layouts/authentication/sign-out";
import SignupForm from "layouts/form-builder/signup";
import ProductForm from "layouts/form-builder/product";
import FormBuilder from "layouts/form-builder";
import AddForm from "layouts/form-builder/add";
import Chat from "layouts/chat";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/users",
    component: <Users />,
  },
  {
    type: "collapse",
    name: "Product",
    key: "product",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/product",
    component: <Product />,
  },
  {
    key: "update-product",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/product/update/:id",
    component: <EditProduct />,
  },
  {
    key: "update-product",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/product/add",
    component: <AddProduct />,
  },
  {
    // type: "collapse",
    // name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    // type: "collapse",
    // name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    // type: "collapse",
    // name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">register</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-out",
    component: <SignOut />,
  },
  {
    type: "collapse",
    name: "Form Builder",
    key: "form-builder",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/form-builder",
    component: <FormBuilder />,
  },
  {
    key: "form-builder",
    route: "/form-builder/:id",
    component: <AddForm />,
  },
  {
    type: "collapse",
    name: "SignUp-Form",
    key: "sign-up-form",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/signupForm",
    component: <SignupForm />,
  },
  {
    type: "collapse",
    name: "Product-Form",
    key: "product-form",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/productForm",
    component: <ProductForm />,
  },
  // {
  //   type: "collapse",
  //   name: "Chat",
  //   key: "chat",
  //   icon: <Icon fontSize="small">chat</Icon>,
  //   route: "/chat",
  //   component: <Chat />,
  // },
];

export default routes;
