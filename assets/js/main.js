var items=document.getElementsByClassName('item');
var slideitem=document.getElementById('slide-item');
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var close=document.getElementById("close");
var slide=document.getElementById("slide");
var number=document.getElementById("number");
var lengthitems=items.length;
var index=0;
/*var: بتحتفظ باخر قيمة وصلتلها وما بتغير 
فهون رح تصير مشكلة انه كل صورة بكبس عليها بطبع الاندكس الها  6  لانه احتفظ باخر اندكس
لكن انا  بدي قيمة الاندكس  الي كبست عليه عشان اوصل للصورة الي كبست عليها
فلحل هاي المشكلة :
e.target: بترجع العنصر الي كبست عليه
e.target.src: بتجيب الصورة الي كبست عليها
*/
for(var i=0;i<lengthitems;i++){
    items[i].addEventListener('click',function(e){
      var ele=e.target.parentNode;
      var currentindex=Array.from(items).indexOf(ele);
      //سطر 18 و19 عشان يحافظ على قيمة الاندكس على الصورة الي كبست عليها(عشان يجيب الاندكس الصحيح للصورة الي بكبس عليها)
    var img=e.target.src;//بتجيب الصورة الي كبست عليها
    slideitem.childNodes[3].setAttribute('src',img);
    number.innerHTML=`${currentindex+1}/${lengthitems}`;
    //slideitem.childNodes[1].innerHtml=`${currentindex+1}/${lengthitems}`;
    slide.classList.add('active');//عشان اخلي slide تصير     display: block;(سلايد توخذ الكلاس اكتف حيث سلايد كانت في البداية مش ظاهرة ولما اخذت الاكس اكتف صارت تظهر )
index=currentindex;//عشان يمشي على الصور بشكل صحيح (عشان الاندكس ما يضل  0)(لما اكبس على صورة معينة لازم يتغير الاندكس)
    /*
    .slide{
       display: none;
    }

    .active{
    display: block;
}

slide.classList.add('active');خلت كلاس سلايد يصير  display: block;
    */

  /*childNodes رح ترجع:
 بترجع nodelist فيها كل الابناء الخاصة فيها
 0:text
    1:div.number
2:text
      3:img
4:text

هون الي بهمني رقم 1 ورقم 3 عشان من خلالهم بوصل للصورة وللرقم
  */
 /*
childNodes[3]:بترجع <img alt> 
بالتالي بقدر اضيف صورة عليه من خلال setatrubute
 */
    })
}


prev.addEventListener('click',function(){
  changeimge(index-1) 
})

next.addEventListener('click',function(){
  changeimge(index +1)
})

function changeimge(i){//بغير الصورة بناء على الاندكس 
  
  //جمل الاف عشان نعمل حلقة على الاندكس من 0 ل 5 ثم من 5 الى 0
  //5 هي:lengthitems
  //من 0 الى 5:next
  //من 5الى 0 :prev
  if(i>=lengthitems){
    index=0
  }
  else if(lengthitems<0){
index=lengthitems-1;
  }
  else{
    index=i;//عشان تتغير قيمة الاندكس كل ما اكبس على prev او next (ما تضل قيمة الاندكس صفر)
  }
  let img=items[index].childNodes[1].getAttribute('src');//بجيب الصورة الخاصة بهاد الاندكس
slideitem.childNodes[3].setAttribute('src',img);//بحط هاي الصورة بslideitem
number.innerHTML=`${index+1}/${lengthitems}`;//عشان يغير الرقم لما انتقل من صورة لاخرى

//slideitem.childNodes[1].innerHtml=`${index+1} / ${lengthitems}`;

}
//عشان لما اكبس من الكيبورد تتغير الصورة
document.onkeydown=function(e){
  var code=e.keyCode;//بترجع رقم زر الكيبورد الي بكبس عليه
  if(code==39){
    next.click();
  }
  else if(code==37){
    prev.click();
  }
  else if(code==27){
    close.click();
  }
}
