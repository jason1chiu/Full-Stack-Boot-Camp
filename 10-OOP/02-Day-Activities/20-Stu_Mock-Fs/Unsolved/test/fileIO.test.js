const FileIO = require('../fileIO');
const fs = require('fs');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const file = new FileIO();
      const path = '../message.txt';

      const content = file.read(path);

      expect(content).toEqual(`Hello, world!`);
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
      const file = new FileIO();
      const path = '../message.txt';
      const data = 'Goodbye, world!';

      file.write(path, data);

      const content = fs.readFileSync(path, 'utf8');

      expect(content).toEqual(data);
    });
  });
});
