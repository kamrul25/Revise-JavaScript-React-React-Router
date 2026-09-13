# React goal
#### Render HTML in a Web page as many ways as possible

# The Container and Function createRoot()

React uses a container to render HTML in a web page. Typically <div id="root"></div> element in the index.html file. The createRoot function is located in the *main.jsx* file in the *src* folder, and is a built-in function that is used to create a root node for a React application.

## The createRoot() function takes one argument, an HTML element.

### The render method: defines what to render in the HTML container

# The Root Node
 The root node is the HTML element where you want to display the result. It is like a container for content, managed by React. It does *not* have to be a *<div>* element and have to have the *id='root'*