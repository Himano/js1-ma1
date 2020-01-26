//Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
};

cat.complain();

//Question 2

const heading = document.querySelector("h3");

//Question 3

heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");
// console.dir(heading.classList);

//Question 5
const paragraph = document.querySelectorAll("p");

//Question 6
const resultsContainer = document.querySelector("div");
resultsContainer.innerHTML = "<p>New paragraph</p>";

//Question 7
const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold"
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catNames(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

catNames(cats);


//Question 8

function catNames(catArray) {

    let nameHTMLTag = "";

    for (let i = 0; i < catArray.length; i++) {
        nameHTMLTag += "<h5>" + (catArray[i].name) + "</h5>";
    }

    return nameHTMLTag;

}

catNames(cats)

//Question 9

resultsContainer.innerHTML = catNames(cats);

//Question 10

function catNames(catArray) {
    let catAge = "";

    for (let i = 0; i < catArray.length; i++) {

        if (catArray[i].age) {
            catArray[i].age = catArray[i].age;
        } else {
            catArray[i].age = "Age Unknown";
        }

        catAge += "<div>" +
            "<h5>" + catArray[i].name + "</h5>\n" +
            "<p>" + catArray[i].age + "</p>" +
            "</div>";
    }
    return catAge;
}
