/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((element) => {
    if (element.profession === "developer") {
      console.log(element);    }
  });

  /*
      const array = [1, 2, 3, 4, 5];

      const result = array.map((element) => {
        // Transform the element and return the desired data
        return element * 2;
      });

      console.log(result); // Output: [2, 4, 6, 8, 10]
  */
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  arr.forEach((element) => {

    if (element.profession === "developer") {
      console.log(element);
    }

  });
}

function addData() {
  //Write your code here, just console.log

  // {id:4,name:"susan",age:"20",profession:"intern"} 

  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr[3]);
}

function removeAdmin() {
  //Write your code here, just console.log
 
  const newArr = [];

  arr.forEach((element) => {

    if (element.profession !== "admin") {
      newArr.push(element);
    }

  });
  
  console.log(newArr);
}

function concatenateArray() {
  //Write your code here, just console.log

  let newArr = [
    {id:4,name:"yusuf",age:"25",profession:"backend-developer"},
    {id:5,name:"suboor",age:"28",profession:"frontend-developer"},
    {id:6,name:"saim",age:"23",profession:"intern"}
  ];

  // now concat it with arr

  const concatArr = [...arr, ...newArr];

  console.log(concatArr);
}
