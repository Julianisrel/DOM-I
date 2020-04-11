const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Services",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };
  
  // Example: Update the img src for the logo
  let logo = document.querySelector("#logo-img");
  logo.src = "img/logo.png";
  logo.alt = 'Great Idea! Company logo.';
  
  // Nav-Bar
  
  let menuItems = document.querySelectorAll("a");
  //gives us acces to .foreach so dont need to use arrayfrom
  
  
  menuItems.forEach( (nav) => {
    menuItems[0].textContent = "Services";
    menuItems[1].textContent = "Product";
    menuItems[2].textContent = "Vision";
    menuItems[3].textContent = "Features";
    menuItems[4].textContent = "About";
    menuItems[5].textContent = "Contact";
   })
  
  const nav = Array.from(document.querySelectorAll("nav a"));
  for (i = 0; i < nav.length; i++ ) {
    const navItem =`nav-Item-${i + 1}`;
    nav[i].style.color = "green";
  };
  // cta button 
  document.querySelector("#cta-img").src = 'img/header-img.png';
  document.querySelector('button').innerText = "Get Started";
  document.querySelector('.middle-img').src = 'img/mid-page-accent.jpg'
  // middle-section 
  const feat = [
    ["Features",
    "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."],
    ["About",
    "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."],
    ["Services",
    "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."],
    ["Product",
    "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."],
    ["Vision",
    "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."],
  ]
  const textContainers = document.querySelectorAll('.text-content');
  
  Array.from(textContainers).forEach((container, idx) => {
    const children = container.children
    children[0].innerText = feat[idx][0]
    children[0].style.color = 'red'
    children[1].innerText = feat[idx][1]
  });
  // need 
  document.querySelector('.services').style.color = 'black'
  document.querySelector('.contact').style.color = 'black'


  //footer 
  
