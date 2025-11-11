/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        let auxiliar = cache;

        for(let arg of args) {
            if(!auxiliar.has(arg)) {
                auxiliar.set(arg, new Map());
            }

            auxiliar = auxiliar.get(arg);
        }

        if(auxiliar.has('value')) {
            return auxiliar.get('value');
        }else {
            const value = fn(...args);
            auxiliar.set('value', value);

            return value;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */