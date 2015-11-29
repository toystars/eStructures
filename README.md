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

## Documentation
See the [Wiki](https://github.com/toystars/eStructures/wiki) for documentation.

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
