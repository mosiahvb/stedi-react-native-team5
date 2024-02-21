import hello from "../util/hello.ian.js";

it ("should say Ian",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Ian")
    

})