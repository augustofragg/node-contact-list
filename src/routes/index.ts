import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const router = express.Router();
const dataSource = './data/list.txt';

router.post('/contato',async (req,res) => {

    const {nome} = req.body;

    let list:string[] = [];

    try {
        const data = await readFile(dataSource,{encoding:'utf-8'});
        list = data.split('\n');
    }  catch(err) {}

    list.push(nome);
    await writeFile(dataSource,list.join('\n'));

    res.status(201).json({name:nome});
})




export default router;

