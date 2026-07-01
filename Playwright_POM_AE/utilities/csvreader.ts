import fs from 'fs'
import path from 'path'
import {parse} from 'csv-parse/sync'

export interface logindet{
    type:string;
    email:string;
    password:string;
}

export function readcsv():logindet[]{
    const filepath = path.resolve(__dirname,'../test_data/logindata.csv');
    const fileformat = fs.readFileSync(filepath,'utf-8');
    return parse (fileformat,{
        skip_empty_lines:true,
        columns:true,
        trim:true,
    }) as logindet[];
}