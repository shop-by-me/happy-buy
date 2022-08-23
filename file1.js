
var clothes = [

{
    category:"trousers",
    imgSrc:"./image/trousers 1.jpg",
    price:'69 dt' 
},{
    category:"trousers",
    imgSrc:"./image/trousers 2.jpg",
    price: '80 dt'
},{
    category:"trousers",
    imgSrc:"./image/trousers3.jpg",
    price:'79 dt'
},{
    category:"women",
    imgSrc:"./image/women 1.jpg",
    price: '80 dt'
},{
    category:"women",
    imgSrc:"./image/women 2.jpg",
    price :' 89 dt'
},{
    category:"women",
    imgSrc:"./image/women 3.jpeg",
    price: '79 dt'
},{
    category:"shoes",
    imgSrc:"./image/shoes man 1.jpeg",
    price: '59 dt'
},{
    category:"shoes",
    imgSrc:"./image/shoes man 2.jpg",
    price:'99 dt'
},{
    category:"shoes women",
    imgSrc:"./image/shoes women 1.jpg",
    price:'119 dt'
},{
    category:"shoes women",
    imgSrc:"./image/shoes women 3.jpg",
    price: '149 dt'
},
];

var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
} 
var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}
 function displayElement (array){
    each(array, function(e,i){
        var div=$(`<div class='grid-item'><img src="${e.imgSrc}"><p class="price">${e.price}</p></div>`)
        
          div.appendTo($('#container') )
          })
 } 
displayElement(clothes);
$('.searchButton').click(function(){
    $(".grid-item").remove()
var input = $('.searchTerm').val()
var filtred = []
console.log(filtred)
if(input==="trousers") {
 filtred=filter(clothes,function(e,i){
    return e.category=== "trousers"
}
)
}
else if (input==="women"){
     filtred=filter(clothes,function(e,i){
    return e.category=== "women"
})
}
else if (input==="shoes"){
     filtred=filter(clothes,function(e,i){
    return e.category=== "shoes"
})
}
else if (input==="shoes women"){
     filtred=filter(clothes,function(e,i){
    return e.category=== "shoes women"
})
}

else if (input===""){
     filtred=clothes
}
console.log(filtred)
displayElement(filtred)
})

$(document).ready(function(){ 
    $("img").hover(
      function(){
        $(this).next().css("visibility","visible");
       }, function(){
        $(this).next().css("visibility","hidden");
       }

    );

});





