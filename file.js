const fetchData = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data Fetched");
    console.log("Data Fetched");
  } else {
    reject("Data Not Found");
  }
});

fetchData.catch((error) => {
  console.log("🚀 ~ error: ", error);
});

const login = () => {
  return Promise.resolve("Login success");
};

const getUser = () => {
  return Promise.resolve("User Found");
};

const getUserName = () => {
  return Promise.resolve("User Name Found");
};

// CALLBACK HELL
// login().then(() => {
//   getUser().then(() => {
//     getUserName().then(() => {
//       console.log("callback hell");
//     });
//   });
// });

// CHAINING instead CALLBACK

login()
  .then(getUser)
  .then(getUserName)
  .then(console.log("Chaining"))
  .catch((err) => {
    console.log(err);
  });


// Promise.resolve(10)
//   .then((x) => {
//     return x+10;
//   })
//   .then((x) => {
//     return x+20;
//   })
//   .then(console.log);


const sample = async() => {
  console.log("sample started....");

  await fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

  console.log("sample ended.......");
};

console.log("sample started .....1")
sample();
console.log("sample started .....2")
