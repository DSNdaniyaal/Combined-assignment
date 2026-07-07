// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
    let called = false;
    let finished = false;

    let cachedError;
    let cachedResult;

    return function (...args) {
        const callback = args.pop();

        if (!called) {
            called = true;

            fn(...args, (err, result) => {
                finished = true;
                cachedError = err;
                cachedResult = result;

                callback(err, result);
            });

            return;
        } else  callback(cachedError, cachedResult);
        
    };
}

module.exports = once;
