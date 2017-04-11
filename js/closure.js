export const getSecret = (secret) => {
    return {
        get: () => secret
    };
};

export const secret = (msg) => () => msg;

export const partialApply = (fn, ...fixedArgs) => {
    return (...remainingArgs) => {
        return fn.apply(this, fixedArgs.concat(remainingArgs));
    };
};
