const fs = require('node:fs/promises');
const path = require('node:path');

const worker = async () => {
    try {
        const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];
        const folderNames = ['folder1', 'folder1', 'folder1', 'folder1'];

        const promises = folderNames.map(async (folderName, index)=> {
            const folderPath = path.join(process.cwd(), folderName);

            await fs.mkdir(folderPath, {recursive: true});
            await fs.writeFile(path.join(folderPath, fileNames[index]), 'Hello World!!!');
        });
        const a = await Promise.allSettled(promises);
        console.log(a);

        const files = await fs.readdir(path.join(process.cwd()));

        for (const file of files) {
            const stats = await fs.stat(path.join(process.cwd(), file));
            const isFile = stats.isFile();

            if (isFile) {
                console.log('This is file: ', path.join(process.cwd(), file));
            } else {
                console.log('This is directory: ', path.join(process.cwd(), file));
            }
        }
    } catch (e) {
        console.error(e.message);
    }
}
worker().then()