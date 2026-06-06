const buttons = document.querySelectorAll(".filters button");
const posts = document.querySelectorAll(".blog-post");
const welcomemsg = document.getElementById("random-welcome");


let List = ["Person", "User", "Traveller"];
let i = Math.floor(Math.random(0) * 3)

welcomemsg.innerHTML = "Hello, " + List[i];



function showPosts(category) {

    posts.forEach(function(post) {

        const postCategory = post.dataset.category;

        if(category === "all" || postCategory === category) {
            post.classList.add("show-post");
        } else {

            post.classList.remove("show-post");

        }

    });

}

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        this.classList.add("selected");

        const selectedCategory = this.dataset.category;

        showPosts(selectedCategory);

    });

});ä