import express from 'express';
import { creatContact, deleteContact, getContact } from '../service/contacts';

const router = express.Router();

router.post('/contato',async (req,res)=> {

    const {name} = req.body;

    if(!name || name.length < 2) {
        res.status(400).json({error:"O campo 'nome' deve conter pelo menos 2 caracteres."});
        return
    }

    await creatContact(name);
    
    res.status(201).json({name:name});
})

router.get('/contatos',async (req,res) => {

    let list:string[] = []

    list = await getContact();

    res.status(200).json({contacts:list})

})

router.delete('/contato',async (req,res)=> {

    const { name } = req.query;

    if(!name) {
        res.status(400).json({error:"O campo 'nome' deve conter pelo menos 2 caracteres."});
        return
    }

    await deleteContact(name);

    res.status(200).json({message:"Excluido com sucesso",name:name});

})



export default router;

