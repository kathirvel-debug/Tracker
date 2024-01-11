import express from 'express'
import path from 'path';
const server=express();
server.set('view engine','ejs')
server.set("views" , path.join(path.resolve(),'src','views'))
server.use(express.urlencoded());
import routerController from './src/controller.js';
import { log } from 'console';
// server.use(express.static(path.join(path.resolve(), 'public')));
const router=new routerController();
server.get('/',router.homepage)
server.get('/create',router.formPage);
server.post('/upload',router.createTask)
server.get('/recrods',router.Recrods)
server.get('/update/:id',router.Completed)
server.get('/update2/:id',router.incompleted)
server.listen(8005,()=>{
    log("Server is running")
})
