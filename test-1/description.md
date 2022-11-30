DESCRIPTION:
- A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
- Within that sequence, he chooses two numbers, a and b.
- He says that the product of multiply a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
- Given a number n, could you tell me the numbers he excluded from the sequence?

The function takes the parameter: n (n is always strictly greater than 0) and returns an array of the form:

```js
[[a, b], ...]

```
with all `(a, b)` which are the possible removed numbers in the sequence 1 to n.

`[(a, b), ...]`  will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array if no possible numbers are found which will prove that my friend has not told the truth!.

Examples:
```js
removNb(26) should return [(15, 21), (21, 15)]
```

 you can run the test of this with
 ```
 npm run test-1
 ```