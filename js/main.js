function ShowSearchBox() {
    const SearchBox = document.querySelector('.search-bar');
    const computedStyle = window.getComputedStyle(SearchBox);
    const displayValue = computedStyle.getPropertyValue("display");

    if (displayValue === "none") {
        SearchBox.style.display = "flex";
    } else {
        SearchBox.style.display = "none";
    }
}

function ClearInput() {
    const input = document.getElementById('search-box');

   input.value = "";
}

function toggleMenu() {

    /* Findout What are htmlcollections */
    /* Show Menu */
    const MenuContent = document.getElementsByClassName('menu')[0];
const getMenuContentStyle = window.getComputedStyle(MenuContent);
const MenuContentStyle = getMenuContentStyle.getPropertyValue('display');

const MainContents = document.getElementsByClassName('main-content');

// Convert the HTMLCollection to a regular array using Array.from()
const mainContentArray = Array.from(MainContents);

mainContentArray.forEach((MainContent) => {
  const getMainContentStyle = window.getComputedStyle(MainContent);
  const MainContentStyle = getMainContentStyle.getPropertyValue('display');

  if (MainContentStyle === "block" || MenuContentStyle === "none") {
    MainContent.style.display = "none";
    MenuContent.style.display = "grid";
  } else {
    MainContent.style.display = "block";
    MenuContent.style.display = "none";
  }
});

    /* start background color change */
    const Header = document.getElementById('header')
    const headerStyle = window.getComputedStyle(Header)
    const backgroundColor = headerStyle.getPropertyValue("--Main-color");
    const color = headerStyle.getPropertyValue("--White-color")

    
    
    if(backgroundColor == "rgb(24, 24, 24)" || color == "white" ) {
        document.documentElement.style.setProperty("--Main-color", "white");

        document.documentElement.style.setProperty("--White-color", "black");


    } else {
        document.documentElement.style.setProperty("--Main-color", "rgb(24, 24, 24)");
        document.documentElement.style.setProperty("--White-color", "White");
    }

    /* background color change end */

    /* Show and hide search bar */
    const SearchBox = document.querySelector('.search-bar');
    
    const computedStyle = window.getComputedStyle(SearchBox);
    const displayValue = computedStyle.getPropertyValue("display");

    const Input = document.getElementById('search-box');
    const InputStyle = window.getComputedStyle(Input);
    const InputColor = InputStyle.getPropertyValue("background-color");

    const Color = window.getComputedStyle(Input);
    const ColorStyle = Color.getPropertyValue("color")

    if (displayValue === "none" || InputColor === "rgb(24, 24, 24)" || ColorStyle === "antiquewhite") {
        SearchBox.style.display = "flex";
        Input.style.backgroundColor = "White";

        Input.style.color = "black"
    } else {
        SearchBox.style.display = "none";
        Input.style.backgroundColor = "rgb(24, 24, 24)";

        Input.style.color = "antiquewhite";
    }


    
}