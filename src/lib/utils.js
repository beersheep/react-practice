export const partial = (func, ...arg) => ( func.bind(null, ...arg) )

const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...funcs) => funcs.reduce(_pipe)

