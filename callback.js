console.log ('Amita');
// console.log ('Nilesh');
User(101,(u)=>{
    console.log(u);
    GitUser(u.id,(item)=>{
        console.log(item);
    })
});

console.log('Priyank');

function User(id,callback){
    setTimeout(()=>{
        console.log('Dimaag out hai');
        callback( {id:id,name:'Seema'});
    },2000
    )
}
function GitUser(gitId,callback){
    setTimeout(()=>{
        console.log('Loading');
     callback({gitId:gitId,uNAme:'this is gituser name Seems'})
    },4000);

}