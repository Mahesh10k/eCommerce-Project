
//navbar closing function
const navbarCollapse = document.getElementById("navbarSupportedContent");
document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("show");
  });
});


//Logout Process
let Login=document.getElementById("login")
if(localStorage.getItem("isLoggedIn") === "true"){
  Login.setAttribute("src","./images/exit.png")
  Login.id="logout"
  Login.title="Logout"
  let Logout=document.getElementById("logout")
  Logout.addEventListener("click",()=>{
    if(confirm("Do you want to Logout")){
      localStorage.setItem("isLoggedIn","false");
      setTimeout(()=>{
        alert("You are Logged Out seccesssfully")
        window.location.href="index.html"
      },3000)
      Logout.setAttribute("src","./images/login.png")
      Logout.title="Login"
    }
  })
}

let Home=document.querySelector("section")
let productsDiv=document.getElementById("productsDiv")

//home clicking function
function home() {
  Home.style.display = "block";
  productsDiv.innerHTML = "";
}

var allData=[]

// cards Display
function display(allData) {
  productsDiv.innerHTML=""
  console.log(allData)
  allData.forEach(x=>{
    let card=document.createElement("div")
    card.id="card"
    card.innerHTML=
    ` <img src="${x.Image}" style="width:95%; height:70%; display:block; margin:0px auto">
      <h3 style="margin-top:2%">${x.Brand}</h3>
      <h3><b>Price: ${x.Price}</b></h3>
      <button class="btn btn-success" id="addToCart">Add to Cart</button`
      productsDiv.appendChild(card);

      card.querySelector("#addToCart").addEventListener("click",()=>{
        addToCart(x)
      })
  })
  
}


// mobiles api
const url1 = "https://ecommerce-api3.p.rapidapi.com/mobiles";
const options1 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

let getMobilesBtn=document.querySelectorAll('[id="getMobiles"]')
let getLaptopsBtn=document.querySelectorAll('[id="getLaptops"]')
let getWatchesBtn=document.querySelectorAll('[id="getWatches"]')
let getFootwearBtn=document.querySelectorAll('[id="getFootwear"]')
let getMensWearBtn=document.querySelectorAll('[id="getMensWear"]')

async function getMobiles(event) {
  event.preventDefault;
  try {
    if(localStorage.getItem("isLoggedIn") === "true") {
      Home.style.display = "none";
     
    const response1 = await fetch(url1, options1);
    const mobiles = await response1.json();
    allData=mobiles;
    display(allData)
    // console.log(allData)
    // performSearch(allData);
     
    } else {
      alert("Please login to view products.");
      window.location.href="login.html";
    }
  } catch (error) {
    console.log(error);
  }
}
getMobilesBtn.forEach(x=>{x.addEventListener("click",getMobiles)});

// Laptops api
const url2 = "https://ecommerce-api3.p.rapidapi.com/laptops";
const options2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};


async function getLaptops(event) {
  event.preventDefault;
  try {
    if(localStorage.getItem("isLoggedIn") === "true") {
      Home.style.display = "none";
      const response2 = await fetch(url2, options2);
      const Laptops = await response2.json();
      allData=Laptops;
      // console.log(allData);
      display(allData);
      // performSearch(allData)
    } else {
      alert("Please login to view products.");
      window.location.href="login.html"
    }
  } catch (error) {
    console.log(error);
  }
}
getLaptopsBtn.forEach(x=>{x.addEventListener("click",getLaptops)});

// Watches api
const url3 = "https://ecommerce-api3.p.rapidapi.com/watches";
const options3 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getWatches(event) {
  event.preventDefault;
  try {
    if (localStorage.getItem("isLoggedIn") === "true") {
      Home.style.display = "none";
    const response3 = await fetch(url3, options3);
    const Watches = await response3.json();
    allData=Watches;
    // console.log(allData);
    display(allData);
    // performSearch(allData)
    } else {
      alert("Please login to view products.");
      window.location.href="login.html"
    }
  } catch (error) {
    console.log(error);
  }
}
getWatchesBtn.forEach(x=>{x.addEventListener("click",getWatches)});

// Footwear api
const url4 = "https://ecommerce-api3.p.rapidapi.com/malefootwear";
const options4 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getFootwear(event) {
  event.preventDefault;
  try {
    if (localStorage.getItem("isLoggedIn") === "true") {
      Home.style.display = "none";
    const response4 = await fetch(url4, options4);
    const  Footwear= await response4.json();
    allData=Footwear;
    // console.log(allData);
        display(allData);
        // performSearch(allData)
    } else {
      alert("Please login to view products.");
      window.location.href="login.html"
    }
  } catch (error) {
    console.log(error);
  }
}
getFootwearBtn.forEach(x=>{x.addEventListener("click",getFootwear)});

// MensWear api
const url5 = "https://ecommerce-api3.p.rapidapi.com/menswear";
const options5 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getMensWear(event) {
  event.preventDefault;
  try {
    if (localStorage.getItem("isLoggedIn") === "true") {
      Home.style.display = "none";
    const response5 = await fetch(url5, options5);
    const mensWear = await response5.json();
    allData=mensWear;
    // console.log(allData);
      display(allData);
    // performSearch(allData)
    } else {
      alert("Please login to view products.");
      window.location.href="login.html"
    }
  } catch (error) {
    console.log(error);
  }
}
getMensWearBtn.forEach(x=>{x.addEventListener("click",getMensWear)});

//search function
function performSearch(event) {
  event.preventDefault;
  if (localStorage.getItem("isLoggedIn") === "true") {
    let keyword = document.getElementById("search").value.toLowerCase().trim();
     Home.style.display = "none";

    if (keyword == "") {
      productsDiv.innerHTML = "Please Enter the Keyword to Search";
      return;
    }

    // Filter products of saerch keyword
    const filteredProducts = allData.filter((product) =>
        product.Brand.toLowerCase().includes(keyword) ||
        product.Description.toLowerCase().includes(keyword) )
        console.log(filteredProducts)
    if (filteredProducts.length === 0) {
      productsDiv.innerHTML = `<p>No products found for "${keyword}".</p>`;
      return;
    }
      display(filteredProducts);
  } else {
    alert("Please login to view products.");
    return;
  }
}



//add to cart process
function addToCart(item) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage
    if (cartData.indexOf(item)==-1) {
      cartData.push(item);
      alert(`${item.Brand} has been added to your cart!`);
      localStorage.setItem("cart", JSON.stringify(cartData));   // Save cart to localStorage
    }
    else {
     alert(`${item.Brand} is already in your cart!`);
   }
}


// View cart process
function viewCart() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "cart.html"; // Redirect to cart page
  } else {
    alert("Please login to view your cart.");
    window.location.href="login.html"
  }
}


