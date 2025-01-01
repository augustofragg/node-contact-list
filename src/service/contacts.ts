import { readFile, writeFile } from "fs/promises";
const dataSource = './data/list.txt';

export const getContact = async () => {
     let list:string[] = [];
    
     try {
        const data = await readFile(dataSource,{encoding:'utf-8'});
        list = data.split('\n');
     }  catch(err) {}   

    return list;
}

export const creatContact = async (name) => {
    
    let list:string[] = [];
    try {
        const data = await readFile(dataSource,{encoding:'utf-8'});
        list = data.split('\n');
    }  catch(err) {}

    list.push(name);
    await writeFile(dataSource,list.join('\n'));

    return list
}

export const deleteContact = async (name) => {
    
    let list:string[] = []

    try {
        const data = await readFile(dataSource,{encoding:'utf-8'});
        list = data.split('\n');
    }catch(err) {}

    let newList = list.filter(item => item.toLowerCase() !== (name as string).toLowerCase());

    await writeFile(dataSource,newList.join('\n'));
}