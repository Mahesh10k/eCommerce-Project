
//navbar closing function
const navbarCollapse = document.getElementById("navbarSupportedContent");
document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("show");
  });
});

//home clicking function
function home() {
  document.getElementById("home-content").style.display = "block";
  document.getElementById("productsDiv").innerHTML = "";
}

var allData=[]
let productsDiv=document.getElementById("productsDiv")

// cards Display
function display(allData) {
  productsDiv.innerHTML=""
  console.log(allData)
  allData.forEach(x=>{
    let card=document.createElement("div")
    card.id="card"
    card.innerHTML=
    ` <img src="${x.Image}" style="width:95%; height:70%; display:block; margin:0px auto">
      <h3 style="text-align:center;font-size:0.7rem;height:25%; margin-top:1%">${x.Brand}</h3>
      <h3 style="text-align:center;font-size:0.9rem;;font-weight:bold;margin-top:1%">Price: ${x.Price}</h3>
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

async function getMobiles() {
  try {
    if(localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
     
    const response1 = await fetch(url1, options1);
    const mobiles = await response1.json();
    allData=mobiles;
    display(mobiles)
    // performSearch(allData);
     
    } else {
      alert("Please login to view products.");
      window.location.href="login.html";
    }
  } catch (error) {
    console.log(error);
  }
}

// Laptops api
const url2 = "https://ecommerce-api3.p.rapidapi.com/laptops";
const options2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getLaptops() {
  try {
    if(localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
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

// Watches api
const url3 = "https://ecommerce-api3.p.rapidapi.com/watches";
const options3 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getWatches() {
  try {
    if (localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
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

// Footwear api
const url4 = "https://ecommerce-api3.p.rapidapi.com/malefootwear";
const options4 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getFootwear() {
  try {
    if (localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
    const response4 = await fetch(url4, options4);
    const  Footwear= await response4.json();
    allData=Footwear;
    console.log(allData);
      
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

// MensWear api
const url5 = "https://ecommerce-api3.p.rapidapi.com/menswear";
const options5 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f8172ac0b0msh50b38d66da7bc9dp1e6f12jsnf38548901b70",
    "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
  },
};

async function getMensWear() {
  try {
    if (localStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("home-content").style.display = "none";
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

//search function
function performSearch() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    // getMobiles();
    // getLaptops();
    // getMensWear();
    // getWatches();
    // getFootwear();
    let keyword = document.getElementById("search").value.toLowerCase().trim();
    document.getElementById("home-content").style.display = "none";

    if (keyword == "") {
      productsDiv.innerHTML = "Please Enter the Keyword to Search";
      return;
    }

    // Filter products
    const filteredProducts = allData.filter((product) =>
        product.Brand.toLowerCase().includes(keyword) ||
        product.Description.toLowerCase().includes(keyword) ||
        product.Price <= keyword);
    if (filteredProducts.length === 0) {
      productsDiv.innerHTML = `<p>No products found for "${keyword}".</p>`;
      return;
    }
    // Render filtered products
      display(filteredProducts);
  } else {
    alert("Please login to view products.");
    return;
  }
}



//add to cart process
function addToCart(item) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage
    if (!cartData.includes(item)) {
      cartData.push(item);
      alert(`${item.Brand} has been added to your cart!`);
      localStorage.setItem("cart", JSON.stringify(cartData));   // Save to localStorage
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
    // return;
  }
}

//buy Now process
function buyNow(Title, price) { 
  const cartContainer = document.getElementById("cart");
  if(confirm("Are you sure to want to Buy the item")){
    cartContainer.style.display = "none";
    alert("Order is in Progress");
    setTimeout(() => {
      alert(`You have Successfully Ordered the product of ${Title} worth of ${price}`);
      cartContainer.style.display = "flex";
    }, 3000);
  }
}
