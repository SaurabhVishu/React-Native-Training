import PassRcvScreen from "../../view/PasswordRecovery"
import FoodDeatail from '../../view/FoodDetail/index';
import icons from "./icons";

const myProfile = {
    name: "ByProgrammers",
    profile_image: require("../../assets/images/profile.png"),
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: require("../../assets/icons/burger.png")
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: require("../../assets/icons/cherry.png")
    },
    {
        id: 3,
        name: "Rice Item",
        icon: require("../../assets/icons/rice.png")
    }
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../../assets/dummyData/wrap_sandwich.png")
}


const Foodmenu= [
    {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",   
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../../assets/dummyData/hamburger.png"),
    categories: 1,
    distance:4,
    rating:1, 
    time: "30 Mins",



},
 {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../../assets/dummyData/hot_tacos.png"),
    categories: 1,
    distance:8,
    rating:2, 
    time: "10 Mins",

},

{
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
  
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../../assets/dummyData/veg_biryani.png"),
    categories:3,
    distance:12,
    rating:3, 
    time: "30 Mins",

},
{
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../../assets/dummyData/wrap_sandwich.png"),
    categories: 1,
    distance:14,
    rating:3, 
    time: "20 Mins",

},
{
    id: 5,
    name: "Fruit mix Sandwich",
    description: " vegetables sandwich",
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../../assets/dummyData/wrap_sandwich.png"),
    categories:2,
    distance:3,
    rating:3, 
    time: "10 Mins",
},
{
    id: 6,
    name: "Fruit Sandwich",
    description: "vegetables sandwich",
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../../assets/dummyData/wrap_sandwich.png"),
    categories:2,
    distance:4,
    rating:4, 
    time: "30 Mins",
},
{
    id: 7,
    name: "Sandwich",
    description: "Grilled vegetables sandwich",
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../../assets/dummyData/wrap_sandwich.png"),
    categories:2,
    distance:5,
    rating:4, 
    time: "30 Mins",
}
]


const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]

const sizes = [
    {
        id: 1,
        label: '12"'
    },
    {
        id: 2,
        label: '14"'
    },
    {
        id: 3,
        label: '16"'
    },
    {
        id: 4,
        label: '18"'
    }
]

const myCart = [
    {
        ...hamburger,
        qty: 1
    },
    {
        ...hotTacos,
        qty: 1
    },
    {
        ...vegBiryani,
        qty: 1
    }
]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../../assets/icons/mastercard.png"),
    },
]


const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]


const ScreenData = {
    signScreen: {
        title: "Let's Sign You In",
        Subtitle: "Welcome back, you've been missed",
        Donthaveanaccount: "Dont have an account ?",

    },
    signUp: {
        title: "Getting Started",
        subtitle: "create an account to continue!",
        AlreadyHaveAc:"Already have an account?",
        SignIn:"Sign in",
    },
    otpScreen:{
        title:"OTP Authentication",
        subtitle:"An authentic code has been sent to byprogrammers@gmail.com",
        didntRCVcode:"Didn't receive code? ",
        SignMsg:"By signing up you agree to our",
    },
    PswdRcvScreen:{
        title:"Password Recovery",
        subtitle:"Please enter your email address to recover your password",


    },
    FoodDetail:{
          t1:"78 calories",
          title:"Hamburger",
          description: "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.",
          t2:"4.5" ,
          t3:"30 Mins",
          t4:"Free shipping",
          Sizes:"Sizes:",
          ByProg:"ByProgrammers",
          dis:"12 KM away from you",
          price:"$15.99",

    },

    NotificationScreen:{
            notifi:"Notification",
            proNotifi:"Promotional notification",
            youwill:"You will recieve daily updates",

    },
    CheckoutScreen:{
        DelAdds:"Delivery Address",
        LocDetail:"300 post Street San Francisco,",
        CA:"CA",
        addCoupan:"Add Coupon",
        CouponCode:"Coupon Code",
        subTotal:"Subtotal",
        ShipingFee:"Shipping fee",
        Price1:"$37.97",
        Price2:"$0.00",
        Total:"Total:",
        totPrice:"$37.97"
    },
    SuccessScreen:{
        congratulation:"Congratulation!",
        paymentWasSucess:"Payment was successfully mode!",
    },
    HomeScreen:{
           DELIVERYTO:"DELIVERY TO",
           NO88JlnPodungan:"No.88,jln Padungan,Kuching",
           PopularNearYOU:"Popular Near You",
           ShowAll:"Show All",
           calories:"78 Calories",
           Recommended:"Recommended",

    },


}

const SizeData=[
    {
        id:0,
        name:"12"
    },
    {
        id:1,
        name:"14"
    },
    {
        id:2,
        name:"16"
    },
    {
        id:3,
        name:"18"
    }
]

const StarData=[
    {
        id:0,
        icon:icons.star,
    },
    {
        id:1,
        icon:icons.star,
    },
    {
        id:2,
        icon:icons.star,
    },
    {
        id:3,
        icon:icons.star,
    },
    {
        id:4,
        icon:icons.star,
    },
]
const DrawerButton=[
    {
        title:"Home",
        icon:icons.home,
        routeName:'Home'
    },
    {
        title:"My Wallet",
        icon:icons.wallet,
        routeName:'Home'

    },
    {
        title:"Notification",
        icon:icons.notification,
        routeName:'Home'

    },
    {
        title:"Favourite",
        icon:icons.favourite,
        routeName:'Home'

    },
    {
        title:"Track Your Order",
        icon:icons.location,
        routeName:'Home'

    },
    {
        title:"Coupons",
        icon:icons.coupon,
        routeName:'Home'

    },
    {
        title:"Setting",
        icon:icons.setting,
        routeName:'Home'

    },
    {
        title:"invite a Friend",
        icon:icons.star,
        routeName:'Home'

    },
    {
        title:"Help Center",
        icon:icons.help,
        routeName:'Home'

    }

]


const BottomTab=[
    {
        title:"Home",
        icon:icons.home,
        routeName:'Home'  
    },
    {
        title:"Search",
        icon:icons.search,
        routeName:'Home'  
    },
    {
        title:"MyCart",
        icon:icons.cart,
        routeName:'Home'  
    },
    {
        title:"Favourite",
        icon:icons.favourite,
        routeName:'Home'  
    },
    {
        title:"Notification",
        icon:icons.notification,
        routeName:'Home'  
    },
]
const DATA = [
    {
        title: "Today",
        data: [
            {
                title: "Domino's- Buy 1 get 1 free",
                time: "few secoon ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icons.domino

            },
            {
                title: "Veg Biryani - 35% sale today",
                time: "5 mins ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icons.veg_biryani
            },
            ]
    },
    {
        title: "Yesterday",
        data: [
            {
                title: "Domino's- Buy 1 get 1 free",
                time: "1 day ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icons.domino

            },
            {
                title: "Veg Biryani - 35% sale today",
                time: "5 mins ago",
                subtitle:"Buy 1 get 1 free for small sizes until nov  30,2021",
                image:icons.veg_biryani
            },
           
            ]
    },
];



export default {
    vegBiryani,
    hamburger,
    myProfile,
    categories,
    menu,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
    ScreenData,
    SizeData,
    StarData,
    DATA,
    DrawerButton,
    Foodmenu,
    BottomTab,
}