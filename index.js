// Add your code here
let ulList;
   ulList = document.querySelector("#users-list")

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
      console.log(ulList)

      ulList.insertAdjacentHTML(
        "beforebegin",
        `
       <li>this is the id num ${data.id}</li>
       `
      );

      console.log(data);
    })
    .catch((error) => {
      ulList.insertAdjacentHTML ('afterend' , `
      <p>error${error}
      
      `)
    })
}
