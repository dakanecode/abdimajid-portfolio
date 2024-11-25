// close menu when close icon is clicked
let closeIcon = document.getElementById('close-icon');
let closeSideBar = document.getElementById('sidebar-section');
closeIcon.addEventListener("click", () => {
    closeSideBar.style.display = 'none';
    closeIcon.style.display = 'none';
    menuBars.style.display = 'block';
});


// open menu when menubars is clicked
let menuBars = document.getElementById('menubars');
menuBars.addEventListener('click', () =>{
    closeSideBar.style.display = 'block';
    closeIcon.style.display = 'block';
    menuBars.style.display = 'none';
    
})

