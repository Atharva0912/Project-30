class Box_1{
      constructor(x,y,w,h){
          var options={
              isStatic: false,
              restitution: 0.2
          }
          this.Visibility = 255;
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          this.box1 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
          World.add(world,this.box1);
      }
      display(){
          push()
          //console.log(this.box1.speed);
          fill("blue");
      if(this.box1.speed < 10){
        var stonepos= this.box1.position;
          push();
          translate(stonepos.x, stonepos.y);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          fill("blue");
          pop();
      }
      else{
      push(); 
      World.remove(world,this.box1); 
      this.Visibility = this.Visibility - 2;
      tint(255,this.Visibility);
      pop(); 
      }
    }
  
      }

class Box_2{
    constructor(x,y,w,h){
        var options={
            isStatic: false,
            restitution: 0.2
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.box2 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.box2);
    }
    display(){
        push()
       // console.log(this.box2.speed);
        fill("green");
      if(this.box2.speed < 10){
        var stonepos= this.box2.position;
          push();
          translate(stonepos.x, stonepos.y);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          fill("green");
          pop();
      }
      else{
      push(); 
      World.remove(world,this.box2); 
      this.Visibility = this.Visibility - 2;
      tint(255,this.Visibility);
      pop(); 
      }
    }
}

class Box_3{
    constructor(x,y,w,h){
        var options={
            isStatic: false,
            restitution: 0.2
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.box3 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.box3);
    }
    display(){
        //console.log(this.box3.speed);
        fill("pink");
      if(this.box3.speed < 10){
        var stonepos= this.box3.position;
          push();
          translate(stonepos.x, stonepos.y);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          fill("pink");
          pop();
      }
      else{
      push(); 
      World.remove(world,this.box3); 
      this.Visibility = this.Visibility - 2;
      tint(255,this.Visibility);
      pop(); 
      }
    }
    }


class Box_4{
    constructor(x,y,w,h){
        var options={
            isStatic: false,
            restitution: 0.2
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.box4 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.box4);
    }
    display(){
         //console.log(this.box4.speed);
         fill("yellow");
      if(this.box4.speed < 10){
        var stonepos= this.box4.position;
          push();
          translate(stonepos.x, stonepos.y);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          fill("yellow");
          pop();
      }
      else{
      push(); 
      World.remove(world,this.box4); 
      this.Visibility = this.Visibility - 2;
      tint(255,this.Visibility);
      pop(); 
      }
    }
}