const chunk = (arr:[], size:number,ret=[]) =>{   
    let temp = [...arr];
    const numOfChild = Math.ceil(temp.length / size); 
    for (let i = 0; i < numOfChild; i++) {
        ret.push(temp.splice(0, size));
    }
    return ret;

}
  

  let sum = (arr : []) => arr.reduce((total, n) => total + n,0);

  let filter = (arr : []) => arr.filter(n => n <=2 );  

  let reduce = (arr: []) => arr.reduce((total, n) => total + n ,0);  

  let find =(arr:[]) => arr.filter(ele => ele<4);
  
  