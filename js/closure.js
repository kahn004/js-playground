export const getSecret = secret => (
    {
        get: () => secret
    }
);

export const secret = msg => () => msg;

export const partialApply = (fn, ...fixedArgs) => (
    (...remainingArgs) => (
        fn.apply(this, fixedArgs.concat(remainingArgs))
    )
);
