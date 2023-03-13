type Handler = {
    pending: () => Promise<JSONValue>,   
    error: () => Promise<JSONValue>,
    default: () => JSONValue
}
type Result = {
  read: () => JSONValue | Promise<JSONValue>
}

export type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;


export function suspensePromise(promise:Promise<JSONValue>) : Result {
    let status = 'pending';
    let response: JSONValue | string;
  
    const suspender = promise.then(
      res => {
        status = 'success';
        response = res;
      },
      err => {
        status = 'error';
        response = err;
      },
    );
  
    const handler : Handler = {
      pending: () => {
        throw suspender;
      },
      error: () => {
        throw response;
      },
      default: () => response,
    };
  
    const read = () => {
      const result = handler[status as keyof Handler] ? handler[status as keyof Handler]() :
      handler.default();
      return result;
    };
  
    return { read };
  }
  
  export default suspensePromise;