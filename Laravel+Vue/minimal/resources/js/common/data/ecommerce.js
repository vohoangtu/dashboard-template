import pImg1 from "@assets/images/products/img-1.png";
import pImg2 from "@assets/images/products/img-2.png";
import pImg3 from "@assets/images/products/img-3.png";
import pImg4 from "@assets/images/products/img-4.png";
import pImg5 from "@assets/images/products/img-5.png";
import pImg6 from "@assets/images/products/img-6.png";
import pImg7 from "@assets/images/products/img-7.png";
import pImg8 from "@assets/images/products/img-8.png";
import pImg9 from "@assets/images/products/img-9.png";
import pImg10 from "@assets/images/products/img-10.png";

import cImg1 from "@assets/images/companies/img-1.png";
import cImg2 from "@assets/images/companies/img-2.png";
import cImg3 from "@assets/images/companies/img-3.png";
import cImg4 from "@assets/images/companies/img-4.png";
import cImg5 from "@assets/images/companies/img-5.png";
import cImg6 from "@assets/images/companies/img-6.png";
import cImg7 from "@assets/images/companies/img-7.png";
import cImg8 from "@assets/images/companies/img-8.png";

// Ecommerce > Products
const productsData = [{
    id: 1,
    image: pImg1,
    name: "Half Sleeve Round Neck T-Shirts",
    category: "Clothes",
    stock: "12",
    price: "$ 115.00",
    orders: "48",
    rating: "4.2",
    publishedDate: ["12 Oct, 2021", "10:05 AM"],
},
{
    id: 2,
    image: pImg2,
    name: "Urban Ladder Pashe Chair",
    category: "Furniture",
    stock: "06",
    price: "$ 160.00",
    orders: "30",
    rating: "4.3",
    publishedDate: ["06 Jan, 2021", "01:31 PM"],
},
{
    id: 3,
    image: pImg3,
    name: "350 ml Glass Grocery Container",
    category: "Kitchen Storage & Containers",
    stock: "10",
    price: "$ 25.00",
    orders: "48",
    rating: "4.5",
    publishedDate: ["26 Mar, 2021", "11:40 AM"],
},
{
    id: 4,
    image: pImg4,
    name: "Fabric Dual Tone Living Room Chair",
    category: "Furniture",
    stock: "15",
    price: "$ 140.00",
    orders: "40",
    rating: "4.2",
    publishedDate: ["19 Apr, 2021", "02:51 PM"],
},
{
    id: 5,
    image: pImg5,
    name: "Crux Motorsports Helmet",
    category: "Bike Accessories",
    stock: "08",
    price: "$ 135.00",
    orders: "55",
    rating: "4.4",
    publishedDate: ["30 Mar, 2021", "09:42 AM"],
},
{
    id: 6,
    image: pImg6,
    name: "Half Sleeve T-Shirts (Blue)",
    category: "Clothes",
    stock: "15",
    price: "$ 125.00",
    orders: "48",
    rating: "4.2",
    publishedDate: ["12 Oct, 2021", "04:55 PM"],
},
{
    id: 7,
    image: pImg7,
    name: "Noise Evolve Smartwatch",
    category: "Watches",
    stock: "12",
    price: "$ 95.00",
    orders: "45",
    rating: "4.3",
    publishedDate: ["15 May, 2021", "03:40 PM"],
},
{
    id: 8,
    image: pImg8,
    name: "Sweatshirt for Men (Pink)",
    category: "Clothes",
    stock: "20",
    price: "$ 120.00",
    orders: "48",
    rating: "4.2",
    publishedDate: ["21 Jun, 2021", "12:18 PM"],
},
{
    id: 9,
    image: pImg9,
    name: "Reusable Ecological Coffee Cup",
    category: "Tableware & Dinnerware",
    stock: "14",
    price: "$ 125.00",
    orders: "55",
    rating: "4.3",
    publishedDate: ["15 Jan, 2021", "10:29 AM"],
},
{
    id: 10,
    image: pImg10,
    name: "Travel Carrying Pouch Bag",
    category: "Bags, Wallets and Luggage",
    stock: "20",
    price: "$ 115.00",
    orders: "60",
    rating: "4.3",
    publishedDate: ["15 Jun, 2021", "03:51 Pm"],
},
{
    id: 11,
    image: pImg1,
    name: "Half Sleeve Round Neck T-Shirts",
    category: "Clothes",
    stock: "12",
    price: "$ 115.00",
    orders: "48",
    rating: "4.2",
    publishedDate: ["12 Oct, 2021", "10:05 AM"],
},
{
    id: 12,
    image: pImg2,
    name: "Urban Ladder Pashe Chair",
    category: "Furniture",
    stock: "06",
    price: "$ 160.00",
    orders: "30",
    rating: "4.3",
    publishedDate: ["06 Jan, 2021", "01:31 PM"],
}];

// Ecommerce > Orders
const orders = [{
    id: 1,
    orderId: "#VZ2101",
    customer: "Frank Hook",
    product: "Puma Tshirt",
    orderDate: "20 Dec, 2021",
    amount: "$654",
    payment: "Mastercard",
    status: "Pending",
    statusClass: "warning",
},
{
    id: 2,
    orderId: "#VZ2102",
    customer: "Rickey Teran",
    product: "Adidas Sneakers",
    orderDate: "16 Dec, 2021",
    amount: "$354",
    payment: "Paypal",
    status: "Cancelled",
    statusClass: "danger",
},
{
    id: 3,
    orderId: "#VZ2103",
    customer: "James Price",
    product: "350 ml Glass Grocery Container",
    orderDate: "28 Nov, 2021",
    amount: "$829",
    payment: "Visa",
    status: "Inprogress",
    statusClass: "secondary",
},
{
    id: 4,
    orderId: "#VZ2104",
    customer: "Nettie Deloatch",
    product: "American egale outfitters Shirt",
    orderDate: "22 Nov, 2021",
    amount: "$142",
    payment: "COD",
    status: "Pending",
    statusClass: "warning",
},
{
    id: 5,
    orderId: "#VZ2105",
    customer: "Thomas Taylor",
    product: "Galaxy Watch4",
    orderDate: "12 Nov, 2021",
    amount: "$408",
    payment: "Mastercard",
    status: "Pickups",
    statusClass: "info",
},
{
    id: 6,
    orderId: "#VZ2106",
    customer: "James Price",
    product: "Apple iPhone 12",
    orderDate: "05 Nov, 2021",
    amount: "$1240",
    payment: "Visa",
    status: "Inprogress",
    statusClass: "secondary",
},
{
    id: 7,
    orderId: "#VZ2107",
    customer: "Nancy Martino",
    product: "Funky Prints T-shirt",
    orderDate: "31 Oct, 2021",
    amount: "$180",
    payment: "COD",
    status: "Returns",
    statusClass: "primary",
},
{
    id: 8,
    orderId: "#VZ2108",
    customer: "Alexis Clarke",
    product: "USB Flash Drive Personalized with 3D Print",
    orderDate: "25 Oct, 2021",
    amount: "$247",
    payment: "Paypal",
    status: "Delivered",
    statusClass: "success",
},
{
    id: 9,
    orderId: "#VZ2109",
    customer: "Donald Palmer",
    product: "Oxford Button-Down Shirt",
    orderDate: "19 Oct, 2021",
    amount: "$373",
    payment: "Visa",
    status: "Pickups",
    statusClass: "info",
},
{
    id: 10,
    orderId: "#VZ2110",
    customer: "Henry Baird",
    product: "Classic Short Sleeve Shirt",
    orderDate: "13 Oct, 2021",
    amount: "$342",
    payment: "Mastercard",
    status: "Inprogress",
    statusClass: "secondary",
},
{
    id: 11,
    orderId: "#VZ2111",
    customer: "Diana Kohler",
    product: "Half Sleeve T-Shirts (Blue)",
    orderDate: "01 Oct, 2021",
    amount: "$874",
    payment: "Visa",
    status: "Delivered",
    statusClass: "success",
},
{
    id: 12,
    orderId: "#VZ2112",
    customer: "Alexis Clarke",
    product: "Noise Evolve Smartwatch",
    orderDate: "29 Sep, 2021",
    amount: "$1021",
    payment: "Mastercard",
    status: "Cancelled",
    statusClass: "danger",
}];

// Ecommerce > Customers
const customerList = [{
    id: 1,
    customerId: "#VZ2101",
    customer: "Mary Cousar",
    email: "marycousar@velzon.com",
    phone: "580-464-4694",
    date: "06 Apr, 2021",
    status: "Active",
    statusClass: "success",
},
{
    id: 2,
    customerId: "#VZ2102",
    customer: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    phone: "863-577-5537",
    date: "15 Feb, 2021",
    status: "Active",
    statusClass: "success",
},
{
    id: 3,
    customerId: "#VZ2103",
    customer: "Robert McMahon",
    email: "robertmcmahon@velzon.com",
    phone: "786-253-9927",
    date: "12 Jan, 2021",
    status: "Active",
    statusClass: "success",
},
{
    id: 4,
    customerId: "#VZ2104",
    customer: "Michael Morris",
    email: "michaelmorris@velzon.com",
    phone: "805-447-8398",
    date: "19 May, 2021",
    status: "Block",
    statusClass: "danger",
},
{
    id: 5,
    customerId: "#VZ2105",
    customer: "Kevin Dawson",
    email: "kevindawson@velzon.com",
    phone: "213-741-4294",
    date: "14 Apr, 2021",
    status: "Active",
    statusClass: "success",
},
{
    id: 6,
    customerId: "#VZ2106",
    customer: "Carolyn Jones",
    email: "carolynjones@velzon.com",
    phone: "414-453-5725",
    date: "07 Jun, 2021",
    status: "Active",
    statusClass: "success",
},
{
    id: 7,
    customerId: "#VZ2107",
    customer: "Glen Matney",
    email: "glenmatney@velzon.com",
    phone: "515-395-1069",
    date: "02 Nov, 2021",
    status: "Active",
    statusClass: "success",
},
{
    id: 8,
    customerId: "#VZ2108",
    customer: "Charles Kubik",
    email: "charleskubik@velzon.com",
    phone: "231-480-8536",
    date: "25 Sep, 2021",
    status: "Block",
    statusClass: "danger",
},
{
    id: 9,
    customerId: "#VZ2109",
    customer: "Herbert Stokes",
    email: "herbertstokes@velzon.com",
    phone: "312-944-1448",
    date: "20 Jul, 2021",
    status: "Block",
    statusClass: "danger",
},
{
    id: 10,
    customerId: "#VZ21010",
    customer: "Timothy Smith",
    email: "timothysmith@velzon.com",
    phone: "973-277-6950",
    date: "13 Dec, 2021",
    status: "Active",
    statusClass: "success",
},
{
    id: 11,
    customerId: "#VZ21011",
    customer: "Johnny Evans",
    email: "johnnyevans@velzon.com",
    phone: "407-645-1767",
    date: "01 Oct, 2021",
    status: "Block",
    statusClass: "danger",
},
{
    id: 12,
    customerId: "#VZ21012",
    customer: "Kevin Dawson",
    email: "kevindawson@velzon.com",
    phone: "213-741-4294",
    date: "14 Apr, 2021",
    status: "Active",
    statusClass: "success",
}];

// Ecommerce > Sellers
const sellersList = [{
    id: 1,
    isTrending: true,
    img: cImg1,
    label: "Force Medicines",
    name: "David Marshall",
    stock: "452",
    balance: "$45,415",
    series: [{ data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }],
    chartcolor: "#f44336",
},
{
    id: 2,
    isTrending: false,
    img: cImg2,
    label: "Micro Design",
    name: "Katia Stapleton",
    stock: "784",
    balance: "$97,642",
    series: [{ data: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89] }],
    chartcolor: "#00bd9d",
},
{
    id: 3,
    isTrending: false,
    img: cImg3,
    label: "Nesta Technologies",
    name: "Harley Fuller",
    stock: "320",
    balance: "$27,102",
    series: [{ data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64] }],
    chartcolor: "#ffc84b",
},
{
    id: 4,
    isTrending: true,
    img: cImg4,
    series: [{ data: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50] }],
    chartcolor: "#00bd9d",
    label: "iTest Factory",
    name: "Oliver Tyler",
    stock: "159",
    balance: "$14,933",
},
{
    id: 5,
    isTrending: false,
    img: cImg5,
    series: [{ data: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16] }],
    chartcolor: "#f06548",
    label: "Meta4Systems",
    name: "Zoe Dennis",
    stock: "363",
    balance: "$73,426",
},
{
    id: 6,
    isTrending: true,
    img: cImg6,
    series: [{ data: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49] }],
    chartcolor: "#00bd9d",
    label: "Digitech Galaxy",
    name: "John Roberts",
    stock: "412",
    balance: "$34,241",
},
{
    id: 7,
    isTrending: true,
    img: cImg7,
    series: [{ data: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35] }],
    chartcolor: "#f44336",
    label: "Syntyce Solutions",
    name: "Demi Allen",
    stock: "945",
    balance: "$17,200",
},
{
    id: 8,
    isTrending: false,
    img: cImg8,
    series: [{ data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54] }],
    chartcolor: "#f06548",
    label: "Zoetic Fashion",
    name: "James Bowen",
    stock: "784",
    balance: "$97,642",
}];

export { productsData, orders, customerList, sellersList };