class now{

  constructor(temp_serialno){
    this.events = [];
    this.date = createP(schedule.get(0, temp_serialno));
    this.day = createP(schedule.get(1, temp_serialno));
  }

  display(){
    this.date.position(100, 100);
    this.day.position(100, 120);
  }

}
