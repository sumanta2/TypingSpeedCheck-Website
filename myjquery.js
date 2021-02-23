$('document').ready(function(){
  var str="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nam tempore, unde esse similique facere ex dolor non id perspiciatis aliquam in natus dignissimos rem? Ea aliquid eaque dignissimos illo ipsa minus culpa fuga in ipsum! Iste quam possimus excepturi dolorem dolores. Totam autem asperiores quae adipisci dicta quaerat maiores iusto non necessitatibus magnam! Quo eos rem incidunt deleniti magnam amet dignissimos iure sed eum. Animi commodi quae amet officia accusamus atque, quos adipisci minus fugiat necessitatibus corporis, magni reiciendis sed voluptatem beatae voluptates eveniet itaque consequuntur iusto doloribus architecto maiores incidunt. Consectetur, cupiditate veritatis, doloribus sint cum repellendus hic sunt ut adipisci vitae sapiente perspiciatis eos beatae assumenda obcaecati doloremque ducimus? Doloribus sed numquam repudiandae, deleniti placeat, pariatur, consequatur assumenda adipisci quis itaque necessitatibus voluptatem! Accusamus ipsam iste ducimus aspernatur perferendis tenetur quidem corrupti libero accusantium at repudiandae pariatur in sequi ullam deleniti reprehenderit eligendi nisi quisquam, non nihil consequatur error temporibus debitis itaque! Cumque ex doloremque laborum consequuntur aliquid nesciunt ipsam doloribus voluptates maiores corporis rem cupiditate quasi error facilis ipsa dicta quas illum perferendis sunt recusandae iusto cum, nemo aut. Repudiandae enim est aut tempora cum aspernatur id quae repellat. Laborum voluptatum officiis excepturi laboriosam soluta distinctio quo temporibus qui porro nam dolorem numquam fuga nisi delectus suscipit laudantium odit, sit provident illum non fugit eius. Vel nulla, eaque nam accusantium iusto cumque in exercitationem vitae. Eveniet beatae ipsum expedita quisquam esse quod, sed officia ullam. Nulla in nemo tempora, nobis repellat accusantium a fugiat officia soluta deleniti. Omnis, reiciendis fuga doloremque ducimus quo est exercitationem dolorum nemo vitae beatae maxime! Nesciunt, quod nostrum porro est dolores dignissimos ullam quam magni nulla necessitatibus, fugiat ipsam, rem provident debitis nihil modi itaque optio. Culpa quia nihil qui incidunt. Cumque laborum molestias nesciunt qui dolor!"
  var sec=0
  var mnt=0
  var hr=0
  var str1=''
  var id
  var pos=0
  var str2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto, modi laudantium tempora illo vero temporibus magni officia excepturi assOK"
  var str3
  var correct=0
  var wrong=0
  var unAttempt
  var wrongChar=''
  var tag1="<h6 id='st1'>"
  var tag3="<h6 id='st2'>"
  var tag2="</h6>"
  var first
  var last
  var flag=true
  var loc=$(location).attr('href')
  loc=loc.slice(-17)
  $('#CopyText').text(str2);
  $('.btn1').click(function(){
    var random=Math.floor(Math.random()*340)
    if(str[random]=="." )
    {
      random=random+2
    }
    else if(str[random]==" ")
    {
      random=random+2
    }
    str2=str.slice(random,random+150)
    $('#CopyText').text(str2);
  })
  $('.start').click(function(){
    $('#TypeText').removeAttr('readonly').focus();
    str2=str2.slice(0,148)
    str2+="OK"
    first=str2.slice(0,-(150-(pos)))
    last=str2.slice(-(149-(pos)))
    first=first+tag3+str2[pos]+tag2+last
    $('#CopyText').html(first);
    $(".start").addClass('disabled');
    id=setInterval(count,1000);
    function count()
    {
      str1=hr+':'+mnt+':'+sec
      $('.timer').text(str1);
      var speed=(pos/sec)*60
      $('.speed h5').text("Your speed(char/mnt):"+parseInt(speed))
      sec+=1
      if(sec==60)
      {
        mnt+=1
        sec=0
        if(mnt==59)
        {
          str1=hr+':'+mnt+':'+sec
          $('.timer').text(str1);
          hr+=1
        }
      }
      if (sec==58 && loc!="AccuracyTest.html")
      {
        alert("Time Complited. Plz press submit buttom")
        clearInterval(id);
        $(".stop").attr('readonly','true');
      }
    }
  });
  $('.submit').click(function(){
    clearInterval(id);
    unAttempt=(148-pos)
    correct=148-(wrong+unAttempt);
    $('.timer').text("Net Time:   "+str1);
    $('.result h5').text("Correct Charracter:   "+correct)
    $('.wrong h5').text("Wrong Charracter:   "+wrong)
    $('.unAttempt h5').text("Un Attempt:   "+unAttempt)
    $('.wrongChar h5').text(wrongChar)
  })
  $('.accuracy').click(function(){
    alert("Your Wrong Typing Charracter's is/are:"+wrongChar)
  })
  $('#TypeText').keyup(function(e){
    str3=$('#TypeText').val();
    if ((e.keyCode!=16 && e.keyCode!=20) && flag)
    {
      if(str2[pos+1]==' ')
      {
        $('#CopyText').html(str2).css("background-color","yellow");
      }
      else
      {
        first=str2.slice(0,-(150-(pos+1)))
        last=str2.slice(-(149-(pos+1)))
        first=first+tag3+str2[pos+1]+tag2+last
        $('#CopyText').html(first).css("background-color","white");
      }
      if(str3.endsWith(str2[pos]))
      {
        correct++
      }
      else
      {
        first=str2.slice(0,-(150-pos))
        last=str2.slice(-(149-pos))
        first=first+tag1+str2[pos]+tag2+last
        $('#CopyText').html(first);

        wrong++
        wrongChar+=str2[pos]+" "
        pos--
      }
      pos+=1
      console.log(pos)
      if(pos==148)
      {
        flag=false
        alert("You complete your typing")
        $("#TypeText").addClass('disabled');
      }
    }
  })
})