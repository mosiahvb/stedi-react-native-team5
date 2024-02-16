import hello from "../util/hello.mosiah";

it("should say hello",()=>{
    const saysHello = hello();
    console.log(saysHello)

    expect(saysHello).toBe("hello Mosiah");
})