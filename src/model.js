var data=[];

export default class controllerModel{
    
constructor(_taskname,_type,_taskTime,_daysDue){
this.id=Date.now();
this.status=false;
this.days=[];
this.count=0;
this.d=0;
this.taskname=_taskname;
this.type=_type;
this.taskTime=_taskTime;
this.daysDue=_daysDue;
}
 static get(){
    return data
 }
 
 static add(taskName,type,taskTime,daysDue){
    let task=new controllerModel(taskName,type,taskTime,daysDue)
    data.push(task)
 }
 static update(id){
    const index=data.findIndex((x)=>x.id==id)
    
    if(data[index].count<data[index].daysDue){
        data[index].status=true
        data[index].count++;
        data[index].days.push(true)
        // days.push({completed: true })
        return data
    }
    else{
        let newarr=data.filter((values)=>{
            return values.id!=id
         })
         return data=newarr
    }
    
 }
 static update2(id){
    const index=data.findIndex((x)=>x.id==id)
    if(data[index].count<data[index].daysDue){
        data[index].status=false
        data[index].days.push(false)
        data[index].count++;
        //days.push({ id,  false })
        return data

    }
    else{
        let newarr=data.filter((values)=>{
            return values.id!=id
         })
         return data=newarr
    }
    
 }

}

