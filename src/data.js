import {
  BiHomeCircle,
  BiBookOpen,
  BiDizzy,
  BiFemale,
  BiMessage,
} from "react-icons/bi";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <BiHomeCircle />,
  },
  {
    id: 2,
    url: "/customers",
    text: "Customers",
    icon: <BiDizzy />,
  },
  {
    id: 3,
    url: "/orders",
    text: "Orders",
    icon: <BiBookOpen />,
  },
  {
    id: 4,
    url: "/analytics",
    text: "Analytics",
    icon: <BiMessage />,
  },
  {
    id: 5,
    url: "/products",
    text: "Products",
    icon: <BiFemale />,
  },
  {
    id: 6,
    url: "/add-products",
    text: "Add Products",
    icon: <BiFemale />,
  },
  {
    id: 7,
    url: "/users",
    text: "Users",
    icon: <BiFemale />,
  },

  {
    id: 8,
    url: "/inventory",
    text: "Inventory",
    icon: <BiFemale />,
  },
];
