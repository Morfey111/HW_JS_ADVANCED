function foo() {
 console.log(x.id)
 x.id++
}

let x = { id: 1 };

// foo.apply(x);
// foo.apply(x);
// foo.apply(x);
// foo.apply(x);
// foo.apply(x);
// foo.apply(x);

let foo_binded = foo.bind(x)

foo_binded()
foo_binded()
foo_binded()
foo_binded()
