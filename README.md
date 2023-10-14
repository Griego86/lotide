# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @griego86/lotide`

**Require it:**

`const _ = require('@griego86/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Takes in two arrays and console.log an appropriate message to the console.
* `assertEqual`: Compares two values it takes in and prints out a message telling if they match or not.
* `assertObjectsEqual`: Takes in two objects and console.log an appropriate message to the console if they are equal.
* `countLetters`: Takes in a sentence as a string and returns a count of each of the letters in that sentence.
* `countOnly`: Takes in a collection of items and return counts for a specific subset of those items.
* `eqArrays`: Takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: Takes in two objects and returns true or false, based on a perfect match.
* `findKey`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue`: Scans object and returns the first key which contains the given value. If no key with that    given value is found, then it should return undefined.
* `flatten`: Takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array.
* `head`: Returns the first item in the array.
* `letterPosition`: Returns all the indices (zero-based positions) in the string where each character is found.
* `map`: Own version of the JS map() function.
* `middle`: Takes in an array and returns the middle-most element(s) of the given array.
* `tail`: Returns the last item in the array
* `takeUntil`: Will return a "slice of the array with elements taken from the beginning."
* `without`: Returna a subset of a given array, removing unwanted elements.