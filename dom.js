// ==========================================
// Lesson Examples
// ==========================================

// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks)


// ==========================================
// Practice: Select these elements Solutions
// ==========================================

// 1. The h1 element
const mainHeading = document.querySelector("h1");
console.log("1. h1 Element:", mainHeading);

// 2. All elements with class "content"
const allContents = document.querySelectorAll(".content");
console.log("2. All .content elements:", allContents);

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("3. Form with id contact-form:", contactForm);

// 4. The email input
const emailInput = document.getElementById("email");
console.log("4. Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav ul li");
console.log("5. All list items in nav:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("6. First .nav-link:", firstNavLink);

// 7. The last paragraph
// (We select all paragraphs inside the main container and target the last index)
const allParagraphs = document.querySelectorAll("main p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
console.log("7. Last paragraph:", lastParagraph);

/* =========================================================
 * Task 9.2: Traversing the DOM
 * ========================================================= */
{
  // 1. Select the header, then navigate to the nav inside it
  const header = document.querySelector("header");
  const nav = header ? header.querySelector("nav") : null;

  // 2. Select the first nav-link, then get its parent li
  const firstNavLink = document.querySelector(".nav-link");
  const parentLi = firstNavLink ? firstNavLink.parentElement : null;

  // 3. Select the article, then get its next sibling (section)
  const article = document.querySelector("article");
  const nextSiblingSection = article ? article.nextElementSibling : null;

  // 4. Select the ul, then get all its child li elements
  const ul = document.querySelector("ul");
  const childLis = ul ? ul.children : null;

  // 5. Start from the footer and navigate up to the body
  const footer = document.querySelector("footer");
  const body = footer ? footer.closest("body") : null;
}

/* =========================================================
 * Task 9.3 - Modifying content
 * Exercise 1 - Text content
 * ========================================================= */
{
  const h1 = document.querySelector("h1");
  if (h1) {
    console.log(h1.textContent);
    console.log(h1.innerText);
    h1.textContent = "New Title";
  }
}

/* =========================================================
 * Exercise 2 - HTML content
 * ========================================================= */
{
  const article = document.querySelector("article");
  if (article) {
    console.log(article.innerHTML);

    article.innerHTML = `
      <h2>Updated Article</h2>
      <p>This is new content.</p>
    `;

    const userInput = "<script>alert('hack!')</script>";
    article.textContent = userInput;
  }
}

/* =========================================================
 * Exercise 3 - Attributes
 * ========================================================= */
{
  const link = document.querySelector(".nav-link");
  if (link) {
    console.log(link.getAttribute("href"));
    console.log(link.href);

    link.setAttribute("href", "https://example.com");
    link.href = "https://example.com";

    console.log(link.hasAttribute("target"));
    link.removeAttribute("target");
  }

  const element = document.querySelector("[data-id]");
  if (element) {
    console.log(element.dataset.id);
    console.log(element.dataset.category);
    element.dataset.newAttr = "value";
  }
}

/* =========================================================
 * Exercise 4 - Styles
 * ========================================================= */
{
  const container = document.querySelector(".container");
  if (container) {
    container.style.backgroundColor = "#f0f0f0";
    container.style.padding = "30px";
    container.style.borderRadius = "8px";

    Object.assign(container.style, {
      backgroundColor: "#333",
      color: "white",
      padding: "20px"
    });
  }
}

/* =========================================================
 * Task 9.4 - Adding and Removing Elements
 * Exercise 1 - Creating Elements
 * ========================================================= */
{
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph!";
  newParagraph.className = "content highlight";

  const article = document.querySelector("article");
  if (article) {
    article.appendChild(newParagraph);

    const firstParagraph = article.querySelector("p");
    if (firstParagraph) {
      article.insertBefore(newParagraph, firstParagraph);
      article.prepend(newParagraph);
      article.append(newParagraph);
      firstParagraph.before(newParagraph);
      firstParagraph.after(newParagraph);
    }
  }
}

/* =========================================================
 * Exercise 2 - Removing Elements 
 * ========================================================= */
{
  const footer = document.querySelector("footer");
  if (footer) footer.remove();

  const nav = document.querySelector("nav");
  if (nav) {
    const lastLink = nav.querySelector("li:last-child");
    if (lastLink && lastLink.parentElement) {
      lastLink.parentElement.removeChild(lastLink);
    }
  }

  const article = document.querySelector("article");
  if (article) {
    while (article.firstChild) {
      article.removeChild(article.firstChild);
    }
  }
}

/* =========================================================
 * Exercise 3 & Build - Cloning Elements
 * ========================================================= */
{
  const firstLink = document.querySelector(".nav-link");
  if (firstLink && firstLink.parentElement) {
    const navItem = firstLink.parentElement;
    const clone = navItem.cloneNode(true);
    const linkInClone = clone.querySelector("a");
    if (linkInClone) linkInClone.textContent = "New Link";

    const navList = document.querySelector(".nav-list");
    if (navList) navList.appendChild(clone);
  }

  function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "nav-link";
    a.textContent = text;
    a.setAttribute("href", href);

    li.appendChild(a);

    const navList = document.querySelector("ul") || document.querySelector(".nav-list");
    if (navList) navList.appendChild(li);
  }

  addNavItem("Blog", "/blog");
  addNavItem("Portfolio", "/portfolio");
}

/* =========================================================
   TASK 10.1: Event Listeners
   EXERCISE 1: Basic Events
   ========================================================= */

const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
  console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
  console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);

/* =========================================================
   TASK 10.1: Event Listeners
   EXERCISE 2: Event Types
   ========================================================= */

// Mouse events
//element.addEventListener("click", handler);
//element.addEventListener("dblclick", handler);
//element.addEventListener("mouseenter", handler);
//element.addEventListener("mouseleave", handler);
//element.addEventListener("mousemove", handler);

// Keyboard events
// input.addEventListener("keydown", handler);
// input.addEventListener("keyup", handler);
// input.addEventListener("keypress", handler); // Deprecated

// // Form events
// form.addEventListener("submit", handler);
// input.addEventListener("focus", handler);
// input.addEventListener("blur", handler);
// input.addEventListener("input", handler); // Real-time
// input.addEventListener("change", handler); // On blur/select

// // Window events
// window.addEventListener("load", handler);
// window.addEventListener("resize", handler);
// window.addEventListener("scroll", handler);

/* =========================================================
   TASK 10.1: Event Listeners
   BUILD: Click Counter
   ========================================================= */

// Create a counter display and buttons
// + button increases count
// - button decreases count
// Reset button sets to 0
// Count cannot go below 0

let count = 0;

const countDisplay = document.createElement("h2");
countDisplay.textContent = count;

const incrementBtn = document.createElement("button");
incrementBtn.textContent = "+";

const decrementBtn = document.createElement("button");
decrementBtn.textContent = "-";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

document.body.append(countDisplay, incrementBtn, decrementBtn, resetBtn);

incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

/* =========================================================
   TASK 10.2: The Event Object
   EXERCISE: Using Event Properties
   ========================================================= */

document.addEventListener("click", function(event) {
  // The element that was clicked
  console.log("Target:", event.target);

  // The element the listener is attached to
  console.log("Current Target:", event.currentTarget);

  // Event type
  console.log("Type:", event.type);

  // Mouse position
  console.log("Position:", event.clientX, event.clientY);

  // Prevent default behavior
  event.preventDefault();

  // Stop propagation (bubbling)
  event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
  console.log("Key:", event.key); // "a", "Enter"
  console.log("Code:", event.code); // "KeyA", "Enter"
  console.log("Shift:", event.shiftKey);
  console.log("Ctrl:", event.ctrlKey);
  console.log("Alt:", event.altKey);
});

/* =========================================================
   TASK 10.2: The Event Object
   BUILD: Keyboard Shortcuts
   ========================================================= */

// Implement these shortcuts:
// Ctrl+S: Show "Saved!" alert (prevent actual save dialog)
// Escape: Clear all form inputs
// Ctrl+Enter: Submit form

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    alert("Saved!");
  }

  if (event.key === "Escape") {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
  }

  if (event.ctrlKey && event.key === "Enter") {
    const form = document.querySelector("form");
    if (form) form.requestSubmit();
  }
});


/* =========================================================
   TASK 10.3: Event Bubbling & Delegation
   EXERCISE 1: Understanding Bubbling (JavaScript)
   ========================================================= */

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
// Answer: Child -> Parent -> Grandparent (bubbling up)

/* =========================================================
   TASK 10.3: Event Bubbling & Delegation
   EXERCISE 2: Event Delegation
   ========================================================= */

// BAD: Adding listeners to each item
const items = document.querySelectorAll("li");
items.forEach(item => {
  item.addEventListener("click", handleClick);
});
// Problem: New items won't have the listener!

// GOOD: Delegate to parent
document.querySelector("ul").addEventListener("click", function(event) {
  // Check if clicked element is an li
  if (event.target.matches("li")) {
    handleClick(event);
  }

  // Or check for a class
  if (event.target.classList.contains("item")) {
    handleClick(event);
  }
});

/* =========================================================
   TASK 10.3: Event Bubbling & Delegation
   BUILD: Delegated Task List
   ========================================================= */

const ul = document.querySelector("ul");

ul.addEventListener("click", (event) => {
  // Toggle completed state on click
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }

  // Delete item on delete button click
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});

/* =========================================================
   TASK 10.4: Form Handling
   EXERCISE: Complete Form Validation
   ========================================================= */

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const todoemailInput = document.getElementById("email")

// Populated with your details
nameInput.value = "Mercy Muiruri";
emailInput.value = "mercy.muiruri@example.com";

// Real-time validation
nameInput.addEventListener("input", function(event) {
  const value = event.target.value;

  if (value.length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
  } else {
    clearError(nameInput);
  }
});

emailInput.addEventListener("input", function(event) {
  const value = event.target.value;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!emailRegex.test(value)) {
    showError(emailInput, "Please enter a valid email");
  } else {
    clearError(emailInput);
  }
});

// Form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  // Get all form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log("Form data:", data);

  // Validate all fields
  if (isValid(data)) {
    showSuccess("Form submitted successfully!");
    form.reset();
  }
});

function showError(input, message) {
  input.classList.add("error");
}

function clearError(input) {
  input.classList.remove("error");
}


 