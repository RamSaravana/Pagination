
//Pagination functions required
let count =document.querySelector("#perPage").getAttribute("value");

function showPerPage() {
    console.log(count);
}

// function activePage()

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

function addUser(){

}

// function submitUser()

// function deleteUser()

// function editUser()

//input area details

function refeshShowAll(){
    allUsers.innerHTML="";
    getUsers();
}

function refreshShowLast(){
    allUsers.innerHTML="";
    let last = users[users.length-1];
    boxed(last);
}
