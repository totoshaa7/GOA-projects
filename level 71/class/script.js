const highlightedElements = document.querySelectorAll('.highlight');
console.log(highlightedElements.length);

highlightedElements[0].classList.remove('highlight');

console.log(highlightedElements[0].classList.contains('highlight'));


