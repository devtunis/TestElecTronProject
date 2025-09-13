let updates = {
  namePiece: "",        
  imgPiece: "photo.png", 
  Exist: null,           
  price: 120,          
  desc: undefined        
};

 
updates = Object.fromEntries(
  Object.entries(updates).filter(([key, value]) => value !== "" && value !== null && value !== undefined)
);

console.log(updates);
Object.fromEntries(arr) // i lov ethis function make me so fucking gldae
