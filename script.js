
//Pagination functions required
let first = users[0];
let totalUsers = users.length;
let last = users[totalUsers-1];
// let totalPages = 

function showPerPage(num) {
    console.log(num);
}

// function activePage(){

// }

// function lastPage()

// function firstPage()

// let pageButtons = document.querySelector(".pagination");


//Users details region (CRUD)

function boxed(user) {
    const userbox = document.createElement("div");
    
    userbox.id = "userElement";
    userbox.innerHTML = `
        <h4 class = "user-name">Full Name: ${user.first_name} ${user.last_name}, <span class="user-gender"><i> Gender: ${user.gender}</i></span></h4>
        <p class="user-address"><strong>City</strong>: ${user.address.city}, <strong>Country</strong>: ${user.address.country}</p>
        <span class="user-other-details"> <u>${user.email}</u>
            <button class="edit-button" onclick="editUser()"> Edit </button>
            <button class="delete-button" onclick="deleteUser()"> Delete </button>
        </span>
        `;
    allUsers.append(userbox);
} 

var allUsers = document.querySelector(".users");

function getUsers() {
    // fetch("./mock_data.json")
    // .then((users) => {return users.json();})
    // .then(users => console.log(users));
    // .then((users) => {
        users.forEach((user) => boxed(user));
return users;
};

getUsers();

// function addUser()

function submitUser() {
    let fname = document.getElementById(firstName).value;
    let lname = document.getElementById(lastName).value;
    let gnd = document.getElementById(gender).value;
    let mail = document.getElementById(email).value;
    let cty = document.getElementById(city).value;
    let contry = document.getElementById(country).value;
    users.push()=`{
        "id": ${users.length+1},
        "first_name": ${fname},
        "last_name": ${lname},
        "email": ${mail},
        "gender": ${gnd},
        "address": {
            "city": ${cty},
            "state": null,
            "country": ${contry},
            "pin_code": null
        }
    },`;
    // console.log("good");
    //to show the previous last and newly added object 
    boxed(users[users.length-2]);
    refreshShowLast();
};

// function deleteUser()

// function editUser()

//input area details

function refeshShowAll(){
    allUsers.innerHTML="";
    getUsers();
}

function refreshShowLast(){
    allUsers.innerHTML="";
    boxed(last);
}
