import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const router = express.Router();
const dataSource = './data/list.txt';

router.post('/contato',async (req,res) => {

    const {name} = req.body;

    let list:string[] = [];

    try {
        const data = await readFile(dataSource,{encoding:'utf-8'});
        list = data.split('\n');
    }  catch(err) {}

    list.push(name);
    await writeFile(dataSource,list.join('\n'));

    res.status(201).json({name:name});
})

router.get('/contatos',async (req,res) => {

    let list:string[] = []

    try {
        const data = await readFile(dataSource,{encoding:'utf-8'});
        list = data.split('\n');
    }catch(err) {}

    res.status(200).json({contacts:list})

})

router.delete('/contato',async (req,res) => {

    const { name } = req.query;

    let list:string[] = []

    try {
        const data = await readFile(dataSource,{encoding:'utf-8'});
        list = data.split('\n');
    }catch(err) {}

    let newList = list.filter(item => item.toLowerCase() !== (name as string).toLowerCase());

    await writeFile(dataSource,newList.join('\n'));

    res.status(200).json({message:"Excluido com sucesso",name:name});

})



export default router;

