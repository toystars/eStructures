# eStructures

Extended data structures for JavaScript.

## Available data structures

* List

## Usage
### * List
create an empty eList object
```javascript
var list = new eList();
```
add elements to eList
```javascript
list.add(5); // element is added to the end of list
list.add(1, 'eStructures'); // element is added to the specified index and other elements pushed further
list.add({name: 'library', valid: true});

// returns new list size when successful, -1 when error occurs
```
looping through eList
```javascript
// loop through list using iterator object
var iterator = list.getIterator();
iterator.iterate(function(element, index) {
    // your code here...
});


// loop through list using forEach (internally uses iterator)
list.forEach(function(element, index) {
    // your code here...
});


// to be in control of the iteration, eList iterator object comes with useful properties that can be used to handle iteration
var iterator = list.getIterator();
while (iterator.hasNext()) {
    // access the next element in list like below:
    var item = iterator.next());
};
// don't forget to reset the iterator (this is done automatically when using the iterate method or forEach method)
iterator.reset();
```
joining eLists
```javascript
// define another eList object
var secondList = new eList();
secondList.add('Second List');
secondList.add([2, 7, 'Array', [3, 5, 7]]);

/* addAll(index, newList);
 * new list is added in the specified index
 * other elements pushed further based on number of elements in the incoming list
 */
 list.addAll(2, secondList);
 
 /* addAll(newList);
 * new list is added to the end of calling list
 */
 list.addAll(secondList);
 
 // returns new list size when successful, -1 when error occurs
```
retrieving items from eList
```javascript
/* get(index);
 * returns element at specified index, -1 if error occurs
 */
 list.get(1); // returns 'eStructures'
```
modifying element in specified index
```javascript
/* set(index, newItem);
 * returns element at specified index, -1 if error occurs
 */
 list.set(1, [1, 3]); // list.get(1) now returns [1, 3]
```
deleting item in specified index
```javascript
/* remove(index);
 * deletes item in index, subsequent items in list shift back to fill the empty space
 */
 list.remove(1); // list.get(1) now returns {name: 'library', valid: true}
```
toArray
```javascript
/* toArray()
 * return list items as an Array
 */
 list.toArray();
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Issues

Check issues for current issues.

## Credits

- Mustapha Babatunde

## License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

