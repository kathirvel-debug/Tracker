import { log } from "console";
import controllerModel from "./model.js";

export default class routerController{
    homepage(req,res){
        res.render("index");
    }
    formPage(req,res){
        res.render("createTask");
    }
    createTask(req,res){
        const{taskName,type,taskTime,daysDue}=req.body
        controllerModel.add(taskName,type,taskTime,daysDue)
        const values=controllerModel.get();
        res.render("index",{data:values})
    }
    Completed(req,res){
        log(req.params.id)
        const values=controllerModel.update(req.params.id)
        res.render("index",{data:values})
    }
    incompleted(req,res){
        const values=controllerModel.update2(req.params.id)
        res.render("index",{data:values})
    }
    Recrods(req,res){
        const values=controllerModel.get();
        res.render("recrods",{data:values});
    }
}