//inside module.js
export{
    function1,
    function2
};

//when you want to use the module
//import in the required file with different name

import { function as newName1,function as newName2}from'./module.js';


class ZipCodeValidator implements StringValidator{
    isAcceptable(s: string){
        return s.length===5 && numberRegexp.test(s);

    }
}
export { ZipCodeValidator };
export { ZipCodeVAlidator as mainValidator};