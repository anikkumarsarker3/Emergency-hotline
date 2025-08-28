1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById:
    i) Finds one element with the given id.
    ii) Return type a single element object.
getElementsByClassName:
    i)Finds all elements that have the given class.
    ii)Return type HTMLCollection
    
    querySelectorAll:
    i) Finds all elements that match the CSS selector.
    ii)Return type NodeList
    
2) How do you create and insert a new element into the DOM?
Answer: 
   Create element:(div)
   let newDiv = document.createElement("div");
   Insert a new element into body:
   document.body.appendChild(newDiv);
it is added to the last chaild.

3) What is Event Bubbling and how does it work?
Answer:

Event Bubbling is a concept in the Document Object Model. It happens when an element receives an event, and that event bubbles up.
Works: (Example)
i) Suppose you click a button inside a div which is inside the body.
ii) The event first triggers on the button.
iii) Then it moves up to the div, then to the body, then document, and finally window

5) What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event Delegation is a technique where you attach a single event listener to a parent element to manage events on its child elements, using event bubbling.
Useful:
i) Efficiency (Better Performance)
ii) Dynamic Elements
iii) Cleaner Code

6) What is the difference between preventDefault() and stopPropagation() methods?
Answer:
Event preventDefault():
Stops the default browser action from happening.
Does not stop the event from bubbling up.

Event stopPropagation():
Stops the event from bubblingto parent elements.
Does not stop the default browser action.
