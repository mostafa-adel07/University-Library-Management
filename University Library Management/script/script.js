//Login ajax function
function login()
{
 
    var clicker = new XMLHttpRequest();

    clicker.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status === 200 )
        {
            document.getElementById("second").innerHTML = this.responseText;
        }


    };
    
    clicker.open("GET","login.html",true);

    clicker.send();
   
}
//Sign up ajax function
function signUp()
{
 
    var clicker = new XMLHttpRequest();

    clicker.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status === 200 )
        {
            document.getElementById("second").innerHTML = this.responseText;
        }


    };
    
    clicker.open("GET","signup.html",true);

    clicker.send();
   
}

//login role ajax function
function loginRole()
{
 
    var clicker = new XMLHttpRequest();

    clicker.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status === 200 )
        {
            document.getElementById("second").innerHTML = this.responseText;
        }


    };
    
    clicker.open("GET","role-choice.html",true);

    clicker.send();
   
}

function updatestudent()
{
 
    var clicker = new XMLHttpRequest();

    clicker.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status === 200 )
        {
            document.getElementById("second").innerHTML = this.responseText;
        }


    };
    
    clicker.open("GET","update-user.html",true);

    clicker.send();
   
}

function updateadmin()
{
 
    var clicker = new XMLHttpRequest();

    clicker.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status === 200 )
        {
            document.getElementById("second").innerHTML = this.responseText;
        }


    };
    
    clicker.open("GET","update-admin.html",true);

    clicker.send();
   
}
function updateBook()
{
 
    var clicker = new XMLHttpRequest();

    clicker.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status === 200 )
        {
            document.getElementById("second").innerHTML = this.responseText;
        }


    };
    
    clicker.open("GET","update-book.html",true);

    clicker.send();
   
}
function addBook()
{
 
    var clicker = new XMLHttpRequest();

    clicker.onreadystatechange = function()
    {
        if(this.readyState === 4 && this.status === 200 )
        {
            document.getElementById("second").innerHTML = this.responseText;
        }


    };
    
    clicker.open("GET","addbook.html",true);

    clicker.send();
   
}
//function of the dropdown button
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


