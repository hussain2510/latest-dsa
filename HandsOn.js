/*function showAddress(street,city,zipCode){
    return{
        address: {
        street,
        city,
        zipCode
    }
} 
  }
   
  
  const showAdd=showAddress('j','lk',08);
  console.log(showAdd);

  function Constt(street,city,zipCode){
    
        this.street = street,
        this.city=city,
        this.zipCode= zipCode  
   
  }

const f = new Constt('j','k',897);
console.log(f);

function ifequal(showAddress,showAddres){
    return Constt===showAddress;
}

ifequal(showAddress,Constt)

function Con(a,b){
    this.a= a;
    this.b=b;
    this.sum =function(){
    console.log(a+b);
   }

}

Con.apply({},[2,4]);
const result = new Con(1,2);
console.log(result.sum());


const s=[
    8,
   8,
    
]

for(let i of s){
    console.log(i);
}


const bookInfo={
    title:'hj',
    body: 'jlh',
    auther:'iuj',
    view:'nb',
    comment: [
        {body:'hgg',
        auther:'uiyi'}
        , {body:'hgg',
        auther:'uiyi'}
    ]
    ,
    live: true
}

for(let i in bookInfo){
    console.log(bookInfo[i]);
}


function Bookinfo(title,body, auther,view){
    this.title = title;
    this.body=body;
    this.auther= auther;
    this.view=view;
    this.comment =[];
    title.isLive= true;
}

const book = new Bookinfo('a','m','kj');
console.log(book);*/

let a =['k','j','jk'
        ];
let b =['k','j','jk'
        ];

/*let found = a.findIndex(function(element){
    return element.name === 'v';
})

//let found = a.find(b => b.name === 'd');

//console.log(found);
console.log(a);
let p=a.pop();
console.log(p + ' pop op');
let i=a.shift();
console.log('shift ' +p);
console.log(a + ' after operation');*/

//a.splice(2,1);

//a.slice(0,a.length)
let res = [...a,...b];
console.log(res);

res.forEach(element => {
    console.log(element)

});
    