import PassRcvScreen from '../../view/PasswordRecovery';
import FoodDeatail from '../../view/FoodDetail/index';
import icons from './icons';
import constants from './constants';
import images from './images';

const myProfile = {
  name: 'ByProgrammers',
  profile_image: require('../../assets/images/profile.png'),
  address: 'No. 88, Jln Padungan, Kuching',
};

const categories = [
  {
    id: 1,
    name: 'Fast Food',
    icon: require('../../assets/icons/burger.png'),
  },
  {
    id: 2,
    name: 'Fruit Item',
    icon: require('../../assets/icons/cherry.png'),
  },
  {
    id: 3,
    name: 'Rice Item',
    icon: require('../../assets/icons/rice.png'),
  },
];

const hamburger = {
  id: 1,
  name: 'Hamburger',
  description: 'Chicken patty hamburger',
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require('../../assets/dummyData/hamburger.png'),
};

const hotTacos = {
  id: 2,
  name: 'Hot Tacos',
  description: 'Mexican tortilla & tacos',
  categories: [1, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require('../../assets/dummyData/hot_tacos.png'),
};

const vegBiryani = {
  id: 3,
  name: 'Veg Biryani',
  description:
    'A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.',
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../../assets/dummyData/veg_biryani.png'),
};

const wrapSandwich = {
  id: 4,
  name: 'Wrap Sandwich',
  description: 'Grilled vegetables sandwich',
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../../assets/dummyData/wrap_sandwich.png'),
};

const Foodmenu = [
  {
    id: 1,
    name: 'Hamburger',
    description: 'Chicken patty hamburger',
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require('../../assets/dummyData/hamburger.png'),
    categories: 1,
    distance: 4,
    rating: 1,
    time: '30 Mins',
  },
  {
    id: 2,
    name: 'Hot Tacos',
    description: 'Mexican tortilla & tacos',
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require('../../assets/dummyData/hot_tacos.png'),
    categories: 1,
    distance: 8,
    rating: 2,
    time: '10 Mins',
  },

  {
    id: 3,
    name: 'Veg Biryani',
    description: 'Indian Vegetable Biryani',

    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require('../../assets/dummyData/veg_biryani.png'),
    categories: 3,
    distance: 12,
    rating: 3,
    time: '30 Mins',
  },
  {
    id: 4,
    name: 'Wrap Sandwich',
    description: 'Grilled vegetables sandwich',
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require('../../assets/dummyData/wrap_sandwich.png'),
    categories: 1,
    distance: 14,
    rating: 3,
    time: '20 Mins',
  },
  {
    id: 5,
    name: 'Fruit mix Sandwich',
    description: ' vegetables sandwich',
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require('../../assets/dummyData/wrap_sandwich.png'),
    categories: 2,
    distance: 3,
    rating: 3,
    time: '10 Mins',
  },
  {
    id: 6,
    name: 'Fruit Sandwich',
    description: 'vegetables sandwich',
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require('../../assets/dummyData/wrap_sandwich.png'),
    categories: 2,
    distance: 4,
    rating: 4,
    time: '30 Mins',
  },
  {
    id: 7,
    name: 'Sandwich',
    description: 'Grilled vegetables sandwich',
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require('../../assets/dummyData/wrap_sandwich.png'),
    categories: 2,
    distance: 5,
    rating: 4,
    time: '30 Mins',
  },
];

const menu = [
  {
    id: 1,
    name: 'Featured',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: 'Nearby you',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: 'Popular',
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: 'Newest',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: 'Trending',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: 'Recommended',
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

const sizes = [
  {
    id: 1,
    label: '12"',
  },
  {
    id: 2,
    label: '14"',
  },
  {
    id: 3,
    label: '16"',
  },
  {
    id: 4,
    label: '18"',
  },
];

const myCart = [
  {
    ...hamburger,
    qty: 1,
  },
  {
    ...hotTacos,
    qty: 1,
  },
  {
    ...vegBiryani,
    qty: 1,
  },
];

const myCards = [
  {
    id: 1,
    name: 'Master Card',
    icon: require('../../assets/icons/mastercard.png'),
    card_no: '1234',
  },
  {
    id: 2,
    name: 'Google Pay',
    icon: require('../../assets/icons/google.png'),
    card_no: '1234',
  },
];

const allCards = [
  {
    id: 1,
    name: 'Apple Pay',
    icon: require('../../assets/icons/apple.png'),
  },
  {
    id: 2,
    name: 'Visa',
    icon: require('../../assets/icons/visa.png'),
  },
  {
    id: 3,
    name: 'PayPal',
    icon: require('../../assets/icons/paypal.png'),
  },
  {
    id: 4,
    name: 'Google Pay',
    icon: require('../../assets/icons/google.png'),
  },
  {
    id: 5,
    name: 'Master Card',
    icon: require('../../assets/icons/mastercard.png'),
  },
];

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
  },
];

const ScreenData = {
  signScreen: {
    title: "Let's Sign You In",
    Subtitle: "Welcome back, you've been missed",
    Donthaveanaccount: 'Dont have an account ?',
  },
  signUp: {
    title: 'Getting Started',
    subtitle: 'create an account to continue!',
    AlreadyHaveAc: 'Already have an account?',
    SignIn: 'Sign in',
  },
  otpScreen: {
    title: 'OTP Authentication',
    subtitle: 'An authentic code has been sent to byprogrammers@gmail.com',
    didntRCVcode: "Didn't receive code? ",
    SignMsg: 'By signing up you agree to our',
  },
  PswdRcvScreen: {
    title: 'Password Recovery',
    subtitle: 'Please enter your email address to recover your password',
  },
  FoodDetail: {
    t1: '78 calories',
    title: 'Hamburger',
    description:
      'A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.',
    t2: '4.5',
    t3: '30 Mins',
    t4: 'Free shipping',
    Sizes: 'Sizes:',
    ByProg: 'ByProgrammers',
    dis: '12 KM away from you',
    price: '$15.99',
  },

  NotificationScreen: {
    notifi: 'Notification',
    proNotifi: 'Promotional notification',
    youwill: 'You will recieve daily updates',
  },
  CheckoutScreen: {
    DelAdds: 'Delivery Address',
    LocDetail: '300 post Street San Francisco,',
    CA: 'CA',
    addCoupan: 'Add Coupon',
    CouponCode: 'Coupon Code',
    subTotal: 'Subtotal',
    ShipingFee: 'Shipping fee',
    Price1: '$37.97',
    Price2: '$0.00',
    Total: 'Total:',
    totPrice: '$37.97',
  },
  SuccessScreen: {
    congratulation: 'Congratulation!',
    paymentWasSucess: 'Payment was successfully mode!',
  },
  HomeScreen: {
    DELIVERYTO: 'DELIVERY TO',
    NO88JlnPodungan: 'No.88,jln Padungan,Kuching',
    PopularNearYOU: 'Popular Near You',
    ShowAll: 'Show All',
    calories: '78 Calories',
    Recommended: 'Recommended',
  },
  RiderRivewScreen: {
    title: 'RIDER REVIEW',
    name: 'William Adam',
    DeliveryMan: 'Delivery Man',
    OrderDeliverd: '. Order Delivered',
    pleaseRateService: 'Please rate Delivery service',
    addTips: 'Add Tips',
  },
  AddNewCard: {
    Byprogrammers: 'ByProgrammers',
    CardNum: '12312341234123234',
    Date: '10/25',
    cardNumber: 'Card Number',
    CardHolderName: 'Card Holder Name',
    ExpiryDate: 'Expiry Date',
    CVV: 'CVV',
    RememberThisCardDetail: 'Remember this Card details',
  },
  DeliveryStatus: {
    DeliveryStatus: 'DELIVERY STATUS',
    Estimated: 'Estimated Delivery',
    Date: '12 Sep 2020/12:30PM',
    Trackorder: 'Track Order',
    Code: 'NY02SNY',
  },
};

const SizeData = [
  {
    id: 0,
    name: '12',
  },
  {
    id: 1,
    name: '14',
  },
  {
    id: 2,
    name: '16',
  },
  {
    id: 3,
    name: '18',
  },
];

const StarData = [
  {
    id: 0,
    icon: icons.star,
  },
  {
    id: 1,
    icon: icons.star,
  },
  {
    id: 2,
    icon: icons.star,
  },
  {
    id: 3,
    icon: icons.star,
  },
  {
    id: 4,
    icon: icons.star,
  },
];
const DrawerButton = [
  {
    title: 'Home',
    icon: icons.home,
    routeName: 'Home',
  },
  {
    title: 'My Wallet',
    icon: icons.wallet,
    routeName: 'Home',
  },
  {
    title: 'Notification',
    icon: icons.notification,
    routeName: 'Home',
  },
  {
    title: 'Favourite',
    icon: icons.favourite,
    routeName: 'Home',
  },
  {
    title: 'Track Your Order',
    icon: icons.location,
    routeName: 'Home',
  },
  {
    title: 'Coupons',
    icon: icons.coupon,
    routeName: 'Home',
  },
  {
    title: 'Setting',
    icon: icons.setting,
    routeName: 'Home',
  },
  {
    title: 'invite a Friend',
    icon: icons.star,
    routeName: 'Home',
  },
  {
    title: 'Help Center',
    icon: icons.help,
    routeName: 'Home',
  },
];

const BottomTab = [
  {
    title: 'Home',
    icon: icons.home,
    routeName: 'Home',
  },
  {
    title: 'Search',
    icon: icons.search,
    routeName: 'Home',
  },
  {
    title: 'MyCart',
    icon: icons.cart,
    routeName: 'Home',
  },
  {
    title: 'Favourite',
    icon: icons.favourite,
    routeName: 'Home',
  },
  {
    title: 'Notification',
    icon: icons.notification,
    routeName: 'Home',
  },
];
const DATA = [
  {
    title: 'Today',
    data: [
      {
        title: "Domino's- Buy 1 get 1 free",
        time: 'few secoon ago',
        subtitle: 'Buy 1 get 1 free for small sizes until nov  30,2021',
        image: icons.domino,
      },
      {
        title: 'Veg Biryani - 35% sale today',
        time: '5 mins ago',
        subtitle: 'Buy 1 get 1 free for small sizes until nov  30,2021',
        image: icons.veg_biryani,
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        title: "Domino's- Buy 1 get 1 free",
        time: '1 day ago',
        subtitle: 'Buy 1 get 1 free for small sizes until nov  30,2021',
        image: icons.domino,
      },
      {
        title: 'Veg Biryani - 35% sale today',
        time: '5 mins ago',
        subtitle: 'Buy 1 get 1 free for small sizes until nov  30,2021',
        image: icons.veg_biryani,
      },
    ],
  },
];

const TipsData = [
  {
    id: 1,
    title: 'No Tips',
  },
  {
    id: 2,
    title: '$5',
  },
  {
    id: 3,
    title: '$10',
  },
  {
    id: 4,
    title: '$15',
  },
  {
    id: 5,
    title: '$20',
  },
];

const CouponData = [
  {
    id: '1',

    title: 'Burger King',

    Subtitle: '20% Off',

    coupon: false,

    icondata: icons.burgerking,
    valid: 'valid untill 01 jan 2022',
  },

  {
    id: '2',

    title: 'KFC',

    Subtitle: '30% Off',

    coupon: false,

    icondata: icons.KFC,
    valid: 'valid untill 01 jan 2022',
  },

  {
    id: '3',

    title: 'PizzaHuT',

    Subtitle: '40% Off',

    coupon: false,

    icondata: icons.pizzahut,
    valid: 'valid untill 01 jan 2022',
  },

  {
    id: '4',

    title: 'Starbucks',

    Subtitle: '50% Off',

    coupon: false,

    icondata: icons.starbucks,
    valid: 'valid untill 01 jan 2022',
  },

  {
    id: '5',

    title: 'Dominose',

    Subtitle: '20% Off',

    coupon: false,

    icondata: icons.domino,
    valid: 'valid untill 01 jan 2022',
  },

  {
    id: '6',

    title: 'Burger King',

    Subtitle: '30% Off',

    coupon: false,

    icondata: icons.burgerking,
    valid: 'valid untill 01 jan 2022',
  },

  {
    id: '7',

    title: 'KFC',

    Subtitle: '100% Off',

    coupon: true,

    icondata: icons.KFC,
    valid: 'Used on 02 sep 2021',
  },

  {
    id: '8',

    title: 'Pizza Point',

    Subtitle: '20% Off',

    coupon: true,

    icondata: icons.pizzahut,
    valid: 'Used on 02 sep 2021',
  },
];

const HistoryDATA = [
  {
    title: '19 Sep 2021',

    data: [
      {
        title: 'Pizza Hut',

        time: '19 Sep, 14:30 . 3 items',

        subtitle: 'Order Delivered',

        image: icons.pizzahut,

        price: '35.30',

        button1: constants.Button.reorder,

        button2: constants.Button.rate,
      },

      {
        title: 'KFC',

        time: '19 Sep, 12:30 . 3 items',

        subtitle: 'Order Delivered',

        image: icons.KFC,

        price: '55.00',

        button1: constants.Button.reorder,

        button2: constants.Button.rate,
      },

      {
        title: "Domino's Pizza",

        time: '19 Sep, 12:30 . 3 items',

        subtitle: 'Order Canceled',

        image: icons.domino,

        price: '15.00',

        button1: constants.Button.reorder,

        button2: constants.Button.rate,
      },
    ],
  },

  {
    title: '15 Sep 2021',

    data: [
      {
        title: "Domino's Pizza",

        time: '15 Sep, 12:30 . 3 items',

        subtitle: 'Order Delivered',

        image: icons.domino,

        price: '35.30',

        button1: constants.Button.reorder,

        button2: constants.Button.rate,
      },

      {
        title: 'Starbucks',

        time: '15 Sep, 12:30 . 3 items',

        subtitle: 'Order Delivered',

        image: icons.starbucks,

        price: '35.30',

        button1: constants.Button.reorder,

        button2: constants.Button.rate,
      },
    ],
  },
];

const UpcomingDATA = [
  {
    title: '',

    data: [
      {
        title: 'Starbucks',

        time: '19 Sep, 14:30 . 3 items',

        subtitle: 'Order Delivered',

        image: icons.starbucks,

        price: '#888',

        button1: constants.Button.Trackorder,

        button2: constants.Button.cancel,
      },

      {
        title: 'KFC',

        time: '19 Sep, 12:30 . 3 items',

        subtitle: 'Order Delivered',

        image: icons.KFC,

        price: '#888',

        button1: constants.Button.Trackorder,

        button2: constants.Button.cancel,
      },
    ],
  },

  {
    title: 'Latest Order',

    data: [
      {
        title: "Domino's Pizza",

        time: '15 Sep, 12:30 . 3 items',

        subtitle: 'Order Delivered',

        image: icons.domino,

        price: '15',

        button1: constants.Button.reorder,

        button2: constants.Button.rate,
      },

      {
        title: 'BurgerKing',

        time: '15 Sep, 12:30 . 3 items',

        subtitle: 'Order Delivered',

        image: icons.burgerking,

        price: 35.3,

        button1: constants.Button.reorder,

        button2: constants.Button.rate,
      },
    ],
  },
];

const ChangePassword = [
  {
    id: 1,
    label: 'Current Password',
  },
  {
    id: 2,
    label: 'New Password',
  },
  {
    id: 3,
    label: 'Retype New Password',
  },
];
const Settings = [
  {
    id: 1,
    title: 'Change Password',
    icon: icons.clock,
  },
  {
    id: 2,
    title: 'Preferences',
    icon: icons.filter,
  },
  {
    id: 3,
    title: 'Notification',
    icon: icons.notification,
  },
  {
    id: 4,
    title: 'Data use',
    icon: icons.map,
  },
  {
    id: 5,
    title: 'Language',
    icon: icons.globe,
  },
  {
    id: 6,
    title: 'Check Updates',
    icon: icons.help,
  },
  {
    id: 7,
    title: 'Contact Us',
    icon: icons.call,
  },
  {
    id: 8,
    title: 'Privacy Policy',
    icon: icons.location,
  },
  {
    id: 9,
    title: 'Terms & Conditions',
    icon: icons.clock,
  },
  {
    id: 10,
    title: 'Logout',
    icon: icons.logout,
  },
];

const MyCart = [
  {
    id: 1,
    title: 'Hamburger',
    icon: hamburger.image,
    price: '$15.99',
    add: icons.plus,
    minus: icons.minus,
    count: 0,
  },
  {
    id: 2,
    title: 'Hot Tacos',
    icon: hotTacos.image,
    price: '$10.99',
    add: icons.plus,
    minus: icons.minus,
    count: 1,
  },
  {
    id: 3,
    title: 'Veg Biryani',
    icon: vegBiryani.image,
    price: '$10.99',
    add: icons.plus,
    minus: icons.minus,
    count: 1,
  },
];

const DeliveryStatusData = [
  {
    id: 1,
    icon: icons.check,
    title: 'Order Confirmed',
    subtitle: 'Your Order has been received',
  },
  {
    id: 2,
    icon: icons.check,
    title: 'Order Prepared',
    subtitle: 'Your Order has been prepared',
  },
  {
    id: 3,
    icon: icons.check,

    title: 'Delivery in Progress',
    subtitle: 'Hang on! Your food is on the way',
  },
  {
    id: 4,
    icon: icons.check,

    title: 'Delivered',
    subtitle: 'Enjoy your meal!',
  },
  {
    id: 5,
    icon: icons.check,

    title: 'Delivery in Progress',
    subtitle: 'Hang on! Your food is on the way',
  },
  {
    id: 6,
    icon: icons.check,

    title: 'Rate Us',
    subtitle: 'Help us improve our service',
  },
];
const MapData = [
  {
    id: 1,
    title: 'Your delivery time',
    time: '8 minutes',
  },
  {
    id: 1,
    title: 'Your delivery time',
    time: '8 minutes',
  },
];
const MapViewData=[
  {
    id:1,
    title:"Your delivery time",
    time:"8 minutes",
    icon:icons.clock
  },
  {
    id:2,
    title:"Your address",
    time:"88, jln Podungan,Kuching",
    icon:icons.focus
  },
]

export default {
  vegBiryani,
  hamburger,
  Settings,
  myProfile,
  categories,
  UpcomingDATA,
  HistoryDATA,
  DeliveryStatusData,
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
  TipsData,
  CouponData,
  ChangePassword,
  MyCart,
  MapViewData
};
