import { LayoutDashboard, Logs, ShoppingBasket } from "lucide-react"

export const registerFormControl = [
    {
        name:"userName", 
        label:"UserName",
        placeholder:"Enter Your Name",
        componentType:"input",
        type:"input",
    },
    {
        name:"email", 
        label:"Email",
        placeholder:"Enter Your Email",
        componentType:"input",
        type:"email",
    },
    {
        name:"password", 
        label:"Password",
        placeholder:"Enter Your Password",
        componentType:"password",
        type:"password",
    },
    
]


export const loginFormControl = [
 
    {
        name:"email", 
        label:"Email",
        placeholder:"Enter Your Email",
        componentType:"input",
        type:"email",
    },
    {
        name:"password", 
        label:"Password",
        placeholder:"Enter Your Password",
        componentType:"password",
        type:"password",
    },
    
]









//  Create Product Config



export const createProductFormItems = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter Product Title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter Product Description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "men", label: "Men" },
        { id: "women", label: "Women" },
        { id: "kids", label: "Kids" },
        { id: "accessories", label: "Accessories" },
        { id: "footwear", label: "Footwear" },
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "nike", label: "Nike" },
        { id: "adidas", label: "Adidas" },
        { id: "puma", label: "Puma" },
        { id: "levi", label: "Levi's" },
        { id: "zara", label: "Zara" },
        { id: "h&m", label: "H&M" },
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter Product Price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter Sale Price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter Total Stock",
    },
  ];



