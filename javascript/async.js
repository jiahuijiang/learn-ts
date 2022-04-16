// Best practice is 'promise'
// when execution is done, execute the next

// Essentially, a promise is a returned object to which you attach callbacks
// instead of passing callbacks into a function

// resolve and reject are callbacks
// To implement a promise, our obligation is to
//    call 'resolve' once the operation succeeds
//    call 'reject' once the operation fails
// const promise = new Promise((resolve, reject) => {
//     // calls resolve after 1000
//     resolve("name");
// });
//
// promise
//     .then((response) => {
//     console.log("1st promise");
//     console.log(response)
// }).then(() => {
//     console.log("2nd promise");
//     return Promise.resolve(10);
// }).then((response) => console.log(response))
//     .then(() => {
//     throw "exception";
// }).then(() => console.log("shouldn't reach here"))
//     .catch(() => console.log("catching exception"));



// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
//
// wait(0)
//     .then(() => console.log(4));
// Promise.resolve()
//     .then(() => console.log(2))
//     .then(() => console.log(3));
// new Promise(resolve => setTimeout(resolve, 0))
//     .then(() => console.log(5));
// console.log(1); // 1, 2, 3, 4, 5



// async function resolve() {
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("result")
//             console.log("promise itself");
//         }, 1000);
//     })
// }
//
// resolve().then((response) => {
//     console.log(response);
//     console.log("then");
// })




async function resolveAfterOneSecond() {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast")
            console.log("done fast promise");
        }, 1000);
    })
}

async function resolveAfterTwoSeconds() {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow")
            console.log("done slow promise");
        }, 1000);
    })
}

async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
    const slow = await resolveAfterTwoSeconds();
    console.log(slow) // 2s, prints after slow resolves
    const fast = await resolveAfterOneSecond();
    console.log(fast) // 3s, prints after slow resolved, console.log runs, then fast resolved
}
// sequentialStart(); // sequentially execute

async function concurrentStart() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfterTwoSeconds(); // start execution
    const fast = resolveAfterOneSecond(); // start execution

    console.log(await slow); // 2s, prints after slow resolves
    console.log(await fast); // 2s, at this point fast is already resolved
}
function concurrentPromise() {
    return Promise.all([resolveAfterTwoSeconds(), resolveAfterOneSecond()])
        .then((messages) => {
            console.log(messages[0]); // slow
            console.log(messages[1]); // fast
        })
}
// These two are equivalent
// concurrentStart();
// concurrentPromise();

async function parallel() {
    console.log('==PARALLEL with await Promise.all==')

    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        new Promise(resolve => {
            resolveAfterOneSecond();
        }).then(response => console.log(response)),
        new Promise(resolve => {
            resolveAfterTwoSeconds();
        }).then(response => console.log(response))
    ])
}

// Async function => syntax
// const foo = async function() {
//     // do something
//     // await something
// }
// const foo = async () => {
//     // do something
//     // await something
// }


async function parallelSyntax() {
    console.log('==PARALLEL with await Promise.all==')

    // Start 2 "jobs" in parallel and wait for both of them to complete
    const syncFunction1 = async function() {
        console.log(await resolveAfterOneSecond());
    }
    await Promise.all([
        syncFunction1(),
        (async () => console.log(await resolveAfterTwoSeconds()))()
    ])
}
// truly parallel
parallel();
