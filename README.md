1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
a. getElementById => used to get the element with the given unique Id
b. getElementsByClassName => used to get the all elements that have the given class
c. querySelector => gives the first matched element for a given css selector
d. querySelectorAll => gives all matched element/elements for a given css selector
2. How do you create and insert a new element into the DOM?
ans: to create new element we can use "document.createElement()", for example-
const li = document.createElement('li'); 

to insert new element, we append it to parent node, for example to add the "li" list element to an unordered list element "ulElement"-
ulElement.appendChild(li);
3. What is Event Bubbling? And how does it work?
ans: This is a concept about event behaviour in DOM. This concept explains how a triggered event on an element's event listener will sequencially climb up the DOM tree and also trigger all listeners of that element's ancestors.
4. What is Event Delegation in JavaScript? Why is it useful?
ans: Event Delegation is putting the listener on the parent node to work for all child nodes. This is usefull when child count is very high. Also when new child could be added.
5. What is the difference between preventDefault() and stopPropagation() methods?
ans:
a. preventDefault() => Stops browser default action
b. stopPropagation(): Stops event bubbling