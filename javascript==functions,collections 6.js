let promise = new Promise(function(resolve,reject){
    //executer (the producing code,"singer")
});

let  promise = new Promise(function(resolve,reject){
    //after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("whoopsl")),1000);
});
 let promise = new Promise(function(resolve,reject){
    resolve("done");


    reject(new Error("-"));//ignored
    setTimeout(() => resolve("-")); //ignored
 });