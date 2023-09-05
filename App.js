const heading1 = React.createElement(
    "h1",
    {id: "heading1"},
    "I am heading one"
)

const heading2 = React.createElement(
    "h2",
    {id: "heading2"},
    "I am heading two"
)

const parent = React.createElement(
    "div",
    {id: "parent"},
    [heading1, heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);