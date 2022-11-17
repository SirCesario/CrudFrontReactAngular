
export const helpHttp = <T> ()=> {
    const customFetch =(endPoint:string,options:any):Promise<T> => {
        const defaultHeaders ={"content-type":"application/json", accept:"application/json"};
        const controller = new AbortController();
        options.signal = controller.signal;//Manejar si el servidor por algun motivo esta caido
        options.method = options.method || 'GET';
        options.headers = options.headers? {...defaultHeaders,...options.headers}: defaultHeaders;
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;
        console.log(options);
        setTimeout(()=>controller.abort(),3000);//Si luego de 3 segundos no responde que la cancele
        return fetch(endPoint,options).then(
            data => (data.ok?data.json():Promise.reject({
                err:true,
                status:data.status || "00",
                statusText:data.statusText || "Ocurrio Un error"    
            }))
        ).catch(error=>error);
    }
    const get = (url:string,options:any = { }):Promise<T> =>{
        return customFetch(url,options);
    }
    const post = (url:string,options:any = {}):Promise<T> =>{
        options.method = 'POST';
        return customFetch(url,options);
    }
    const put = (url:string,options:any ={}):Promise<T> =>{
        options.method = 'PUT';
        return customFetch(url,options);
    }
    const del =(url:string,options:any = {}):Promise<T> =>{
        options.method = 'DELETE';
        return customFetch(url,options);
    }
    return {
        get,post,put,del
    }
}