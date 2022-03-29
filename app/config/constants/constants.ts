const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../../assets/images/background_01.png"),
        bannerImage: require("../../assets/images/favourite_food.png"),
        title: "Choose a Favourite Food",
        description: "When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards"
    },
    {
        id: 2,
        backgroundImage: require("../../assets/images/background_02.png"),
        bannerImage: require("../../assets/images/hot_delivery.png"),
        title: "Hot Delivery to Home",
        description: "We make food ordering fasr, simple and free-no matter if you order online or cash"
    },
    {
        id: 3,
        backgroundImage: require("../../assets/images/background_01.png"),
        bannerImage: require("../../assets/images/great_food.png"),
        title: "Receive the Great Food",
        description: "You’ll receive the great food within a hour. And get free delivery credits for every order."
    }
]

const screens = {
    main_layout: "MainLayout",
    home: "Home",
    search: "Search",
    cart: "Cart",
    favourite: "Favourite",
    notification: "Notification",
    my_wallet: "My Wallet",
    deatil:"DETAIL",
    notifi:"NOTIFICATION",
    MY_CARD:"MY CARD",
    MY_CART:"MY CART",
    AddCard:"Add new card",
    Checkout:"CHECKOUT",
    CouponCode:"Coupon Code",
    RIDERRIVIEW:"RIDER REVIEW",
    Mycoupon:"MY COUPON",
    MyOrders:"My ORDERS",
    ChangePassword:"CHANGE PASSWORD",
    Settings:"SETTINGS",
    addNewCard:"ADD NEW CARD",

    
}
const Form = {
    Email: "Email",
    Username:"Username",
    Uplaceholder:"Enter the Username",

    EmailPlaceholder: "Enter the EmailId",
    Password: "Password",
    PasswordPlaceholder: "Enter the Password",
    SaveMe: "Save me"
}
const DrawerText={
       ByProgrammer:"ByProgrammers",
       ViewYourProfile:"View your profile",
}

const Button = {
    Sign: "Sign in",
    Signup: "Sign up",
    ForgetPassword: "Forget Password?",
    FbBtn:"Continue With Facebook",
    GglBtn:"Continue With Google",
    Resend:"Resend (69s)",
    continue:"Continue",
    Terms:"Terms and Conditions",
    SendEmail:"Send Email",
    buynow:"Buy Now",
    Add:"Add",
    placeYourOrder:"Place your Order",
    Done:"Done",
    logout:"logout",
    SubmitReview:"Submit Review",
    Available:"Available",
    Used:"Used",
    reorder:"Re-order",
    rate:"Rate",
    Trackorder:"Trackorder",
    cancel:"cancel",
    History:"History",
    Upcoming:"Upcoming",
    ChangePassword:"Change password",
    AddCard:"Add Card"


}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]

const track_order_status = [
    {
        id: 1,
        title: "Order Confirmed",
        sub_title: "Your order has been received"
    },
    {
        id: 2,
        title: "Order Prepared",
        sub_title: "Your order has been prepared"
    },
    {
        id: 3,
        title: "Delivery in Progress",
        sub_title: "Hang on! Your food is on the way"
    },
    {
        id: 4,
        title: "Delivered",
        sub_title: "Enjoy your meal!"
    },
    {
        id: 5,
        title: "Rate Us",
        sub_title: "Help us improve our service"
    }
]

const GOOGLE_MAP_API_KEY = ""

export default {
    onboarding_screens,
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
    track_order_status,
    GOOGLE_MAP_API_KEY,
    Form,
    Button,
    DrawerText,
}