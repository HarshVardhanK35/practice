// console.log('hello world');
const user = {isAdmin : false};

function printUser(user){
  let adminAccess = false;

  if(user.isAdmin){
    adminAccess = true;
  }
  else{
    adminAccess = false
  }
  return adminAccess
}

if(printUser(user)){
  console.log('The User is Admin, Redirect ---> Admin Page ')
}
else{
  console.log('Hello, Please access the Products Page')
}