export class Goal {
  showDecription:boolean;
  constructor(public id:number,
  public name:string ,public description:string,public completeDate:Date){
    this.showDecription=false;
  }
}
