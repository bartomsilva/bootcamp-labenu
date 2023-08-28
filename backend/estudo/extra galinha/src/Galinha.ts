//cria uma galinha que pôe ovos
export class Galinha {

  private numEgg
  private totalEggs
  private eggs:any
  private newEgg:any

  constructor(private nomeGalinha: string) {
    this.numEgg = 0
    this.totalEggs = 0
    this.nomeGalinha = nomeGalinha
    console.log(`galinha ${nomeGalinha} criada`)
  }

  infoGalinha(){
    const iGalinha = {
      nomeGaiinha: this.nomeGalinha,
      numEggs: this.totalEggs,
      eggs: this.eggs 
    }
    console.log(iGalinha)
    return iGalinha
  }
  //poem um ovo
  botarOvo = async () => {
    console.log("botei um ovo") 
    this.numEgg++
    this.totalEggs++  // esse total é por cada galinha 
    this.newEgg = await this.Ovo(this.numEgg, this.nomeGalinha)
    this.eggs.push(this.newEgg)   
  }

  private Ovo(numOvo:number, minhaGalinha:string) {
    const newEgg = {
      white: "65%",             // clara: "65%"
      yolk:  "35%",               // gema: "35%"
      nomeGalinha: minhaGalinha,  // nomeGalinha: minhaGalinha
      numEgg: numOvo,              // numOvo: numOvo 
      nameEgg: "ovo" + "-" + numOvo + "-" + minhaGalinha  // nomeDoOvo: "ovo"+"-"+numOvo+"-"+minhaGalinha
    }
    return newEgg
  }

}
