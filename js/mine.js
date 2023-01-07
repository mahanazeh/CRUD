
// All Inputs
var input1 = document.getElementById("pNId");
var input2 = document.getElementById("pPId");
var input3 = document.getElementById("pCId");
var input4 = document.getElementById("pDId");
var currentIndex ;


// regular expression

var regex = /^[A-Z][a-z]{3,7}$/


var cartona ;

// string --> Array

if( localStorage.getItem("ourStore") == null  )
{
    cartona = [];
}
else
{
    cartona =  JSON.parse(  localStorage.getItem("ourStore") )  ;

    displayProducts();

}




function addProduct()
{

        if(  regex.test(  input1.value  )   )
        {
             //1- object --> Dell Kolha
    var oneProduct = {

        pName : input1.value ,
        pPrice : input2.value ,
        pCat : input3.value,
        pDesc : input4.value
    }

    //2- push --> Array
    cartona.push( oneProduct ); // Dell

    localStorage.setItem("ourStore" ,  JSON.stringify(cartona)   );


    // 3- call Display
    displayProducts();


    // 4- call Clear
    clearInputs();

        }
        else
        {
            alert("Please enter valid product name")
        }



   
}


function displayProducts()
{
    var hasalah = ``;

    for(var i =0 ; i < cartona.length ; i++ )
    {
        hasalah += `<tr>
                <td>${i}</td>
                <td> ${ cartona[i].pName }  </td>
                <td> ${ cartona[i].pPrice } </td>
                <td> ${ cartona[i].pCat } </td>
                <td>${ cartona[i].pDesc }</td>

                <td>
                    <button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button>
                </td>

                <td>
                    <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
                </td>

            
    
        </tr>`
    }

    document.getElementById("tBody").innerHTML = hasalah;

}



function clearInputs()
{
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    
}










// userWord = "t"
function searchProductName( userWord )
{
    var hasalah = "";

    for( var i =0 ; i < cartona.length ; i++ )
    {
        if(  cartona[i].pName.toLowerCase().includes( userWord.toLowerCase() )  )
        {
            hasalah += `<tr>
                    <td>${i}</td>
                    <td> ${ cartona[i].pName }  </td>
                    <td> ${ cartona[i].pPrice } </td>
                    <td> ${ cartona[i].pCat } </td>
                    <td>${ cartona[i].pDesc }</td>

                    <td>
                    <button class="btn btn-outline-warning">Update</button>
                </td>

                <td>
                    <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
                </td>
    
                </tr>`
        }
    }

    document.getElementById("tBody").innerHTML = hasalah

}   


// 3 --> Samasung
function deleteProduct( pIndex  )
{

    cartona.splice( pIndex , 1  );
    displayProducts();
    localStorage.setItem("ourStore" , JSON.stringify( cartona ));
}

 // pIndex = 2
function updateProduct( pIndex )


{
    currentIndex=pIndex

    //1- retrive ll data fo2
    input1.value = cartona[pIndex].pName ;
    input2.value = cartona[pIndex].pPrice ;
    input3.value = cartona[pIndex].pCat ;
    input4.value = cartona[pIndex].pDesc ;

    //2- t5fi el Add product button
    document.getElementById("addBtn").style.display = "none";

    // 3- azhir el save chnages
    document.getElementById("saveBtn").style.display = "block"
    
}







function saveChanges(){
   cartona[currentIndex].pName= input1.value;
   cartona[currentIndex].pPrice=  input2.value;
   cartona[currentIndex].pCat=  input3.value;
   cartona[currentIndex].pDesc=  input4.value;

   displayProducts();
   clearInputs();
   localStorage.setItem("ourStore" ,JSON.stringify(cartona));
   document.getElementById("saveBtn").style.display="none"
   
   document.getElementById("addBtn").style.display="block"
}

























