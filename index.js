// Add your code here
document.addEventListener('DomContentLoaded', function(){
  const ulList = document.querySelector("#users-list");
  const fetchUrl = "http://localhost:3000/users";
  function submitData(userName, userEmail) {
  let users = {
    name: userName,
    email: userEmail,
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(users),
  };

  return fetch(fetchUrl, configObj)
    .then((res) => res.json())
    .then((data) => {
      ulList.insertAdjacentHTML(
        "beforebegin",
        `
       this is the id num ${data.id}
       `
      );

      console.log(data);
    })
    .catch((error) => console.log(`error: ${error}`));
}

})
