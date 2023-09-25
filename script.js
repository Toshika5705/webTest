const attractionList = document.getElementById("attraction-list");
const description = document.getElementById("description");

// 定义景点信息
const attractions = [
    {
        name: "Sun Moon Lake",
        description: "A beautiful lake surrounded by lush green mountains.",
    },
    {
        name: "Taroko Gorge",
        description: "A stunning marble gorge with hiking trails.",
    },
    {
        name: "Alishan",
        description: "Famous for its sunrise and sea of clouds.",
    },
    {
        name: "Elephant Mountain",
        description: "A popular spot for hiking and city views.",
    },
    {
        name: "Leofoo Village",
        description: "An amusement park with a safari zoo.",
    },
];

// 为每个景点创建点击事件
attractionList.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const attractionIndex = Array.from(attractionList.children).indexOf(event.target.parentElement);
        const selectedAttraction = attractions[attractionIndex];
        description.innerHTML = `<h3>${selectedAttraction.name}</h3><p>${selectedAttraction.description}</p>`;
    }
});
