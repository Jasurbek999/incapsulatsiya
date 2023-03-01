 'use srict'


function Car(name, color, bonus){
  this.name=name
  this.color=color

  let extraBonus = bonus

  this.info= function (){
    console.log(`Name of car ${this.name} , color is ${this.color}, There is some bonus ${extraBonus}`)
  }

  this.getBonus = function () {
    return extraBonus
  }

  this.setBonus= function (bonus) {
    if(typeof bonus === 'number'&& bonus >0 && bonus<100){
      extraBonus=bonus
    }else{
      console.log('Something went wrong'  )
    }
  }

}

const bmw=new Car('bmw', 'black', 10)

console.log(bmw.getBonus())

bmw.setBonus(120 )

bmw.info()