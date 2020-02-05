
const extractEntity = (nlp, entity) =>{
  if(nlp.confidence >= 0.8){
    return nlp.entity;
  }
}

module.exports = nlpData =>{
  return new Promise((resolve, reject){
    let intent = extractEntity(nlpData, 'intent');
    resolve(intent);
  });
}
