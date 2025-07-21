export function api(Number){
    return new Promise((res,rej)=> {
        const data = JSON.parse(localStorage.getItem('orders')) || [];
        const check = data.find(e=> e.tracking === Number);

        setTimeout(() => {
            if(check){
                res(check);
            } else {
                rej(new Error("Tracking number not found"))
            }
        }, 500);
    })
}