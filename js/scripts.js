let btn=document.querySelector("button"),output=document.querySelector("#output"),btnOne=document.querySelector("#btnOne"),outputOne=document.querySelector("#outputOne"),btnTwo=document.querySelector("#btnTwo"),outputTwo=document.querySelector("#outputTwo"),blaArray=[],numbersArray=[1,2,3,4,5,6,7,8,9],generatedNumbersArray=[];function getRandomNumber(e,r){r=r-e+1,r=Math.random()*r;return Math.floor(r)+e}function createArrayOfNumbers(r,t){let n=[];for(let e=r;e<=t;e++)n.push(e);return n}function createArrayOfRandomNumbers(e,r){let t=createArrayOfNumbers(1,e),n=[];for(let e=1;e<=r;e++){var u=getRandomNumber(0,t.length-1),o=t[u];t.splice(u,1),generatedNumbersArray.push(o),n=JSON.stringify(generatedNumbersArray)}return n}function handleRolling(e=outputTwo,r=25,t=15){e.innerText=createArrayOfRandomNumbers(r,t),generatedNumbersArray=[]}btn.addEventListener("click",()=>{var e,r;0!==numbersArray.length?(e=getRandomNumber(0,numbersArray.length-1),r=numbersArray[e],numbersArray.splice(e,1),blaArray.push(r),output.innerText=blaArray):output.innerText=blaArray+` 
 No More Random Numbers`}),btnTwo.addEventListener("click",()=>handleRolling()),btnOne.addEventListener("click",()=>handleRolling(outputId=outputOne,maxNumber=60,range=6));