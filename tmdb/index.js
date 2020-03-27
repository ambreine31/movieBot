
const extractEntity = (nlp, entity) =>{
  if(nlp.confidence >= 0.8){
    return nlp.entity;
  }
}

module.exports = nlpData =>{
  return new Promise(async(resolve, reject)=>{
    try{
      let intent = extractEntity(nlpData, 'intent');
      resolve(intent);
    }
    catch(error){
      reject(error);
    }
  });
}
