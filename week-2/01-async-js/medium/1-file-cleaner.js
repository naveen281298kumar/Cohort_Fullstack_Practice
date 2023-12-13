/* File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman*/

let fs = require("fs");

function removeExtraSapces() {
  fs.readFile("abc2.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    data = data.replace(/\s+/g, " ");

    fs.writeFile("abc2.txt", data, (error) => {
      if (error) {
        console.log(error);
        return;
      }
    });
  });
}

removeExtraSapces();
