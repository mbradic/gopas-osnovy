const { spawn, exec } = require("child_process");

describe("list", () => {
  it("should list all courses when provided no params or switches.", () => {
    // const list = spawn("node", ["../../.", "list"]);
    // list.stdout.on('data', data => actual.push(data))
    // list.on('close', ()=>{
    //     expect(actual).toBe("abc");
    // })
    //expect(actual).toBe("abc");
    const actual = [];
    exec("node . list", (err, stdout, stderr) => {
        expect(err).toBe(null)
        expect(stdout).toBe('Osnovy - list .\n' +
      'Filtering for language: CZ\n' +
      '┌─────────┐\n' +
      '│ (index) │\n' +
      '├─────────┤\n' +
      '└─────────┘\n' +
      'Finished listing .\n')   
      expect(stderr).toBe('')   
    });
    
  });
});
