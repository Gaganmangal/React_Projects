function customRender(reactElement, container) {
  const newElement = document.createElement(reactElement.type);
  newElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    newElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(newElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_black",
  },
  children: "click to visit google",
};

const maincontainer = document.querySelector("#root");

customRender(reactElement, maincontainer);
