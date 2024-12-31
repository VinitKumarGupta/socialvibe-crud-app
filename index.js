// ================================================================= //
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 5001;

app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// ================================================================= //

// Existing data for posts
let posts = [
    {
        id: uuidv4(),
        username: "TravelBug",
        content:
            "Just Landed in Bali!🌴✈️\n\nThe sunset here is absolutely breathtaking. Can't wait to explore the beaches and try some local cuisine. Any recommendations for must-visit spots?",
    },
    {
        id: uuidv4(),
        username: "TechEnthusiast",
        content:
            "Just got my hands on the new VR headset! 🤖🎮\n\nIt's incredible how immersive the experience has become. Can't wait to try out some games and see how it performs for coding environments. Any suggestions for cool apps?",
    },
    {
        id: uuidv4(),
        username: "JakePaul",
        content:
            "Training hard every day! 🥊🔥\n\nBig match coming up soon. Stay tuned, because I'm bringing my A-game to the ring. Let's prove the doubters wrong once again!",
    },
    {
        id: uuidv4(),
        username: "ChefBrown",
        content:
            "Just perfected my chocolate souffle recipe! 🍫🍴\n\nThe texture is light and fluffy, with a rich molten center. Thinking about sharing the recipe - who's interested?",
    },
];

// ========================== Setting Routes =========================== //

// MAIN page Request Receiver
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// ========================= Create Post Routes ======================== //

// Create Post Page Request Receiver (new.ejs)
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// When someone posts the newly created post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    // Commented for a reason. (Go to Reason.md)
    // res.send("Post added successfully!");
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// ========================== Edit Post Routes ========================= //

// Edit Page Request Receiver (edit.ejs)
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (post) {
        res.render("edit.ejs", { post });
    } else {
        res.status(404).send("Something went wrong from our end :(");
    }
});

// Patch is used to update information/content partially since we edited it.
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let { username, content } = req.body;
    let post = posts.find((p) => p.id === id);
    if (post) {
        post.content = content;
        post.username = username;
        console.log("Post Updated: ", post);
    }
    res.redirect("/posts");
});

// ======================== Details of Post Route ====================== //

// Details Page Request Receiver (show.ejs)
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (post) {
        res.render("show.ejs", { post });
    } else {
        res.status(404).send("Something went wrong from our end :(");
    }
});

// ======================== Delete Post Routes ========================= //

// Delete Post REQUEST RECEIVER
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((post) => post.id !== id); // Remove post from array
    res.redirect("/posts");
});

// ==================================================================== //

app.listen(port, () => {
    console.log(`The app is listening at the port ${port}`);
});

// ==================================================================== //
