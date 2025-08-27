1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
    getElementById:
        i) Finds one element with the given id.
        ii) Return type a single element object
    getElementsByClassName:
        i)Finds all elements that have the given class.
        ii)Return type HTMLCollection
    querySelectorAll:
        i) Finds all elements that match the CSS selector.
        ii)Return type NodeList
    
2) How do you create and insert a new element into the DOM?

Answer: let newDiv = document.createElement("div");

3) What is Event Bubbling and how does it work?
4) What is Event Delegation in JavaScript? Why is it useful?
5) What is the difference between preventDefault() and stopPropagation() methods?