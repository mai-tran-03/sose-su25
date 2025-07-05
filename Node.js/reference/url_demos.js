const url = require('url');

const myUrl = new URL('http://mysite.com/hello.html?id=100&status=active');

// Serialized URL
// console.log(myUrl);
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (no port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Iterate params
myUrl.searchParams.forEach((val, name) => console.log(`${name}: ${val}`));