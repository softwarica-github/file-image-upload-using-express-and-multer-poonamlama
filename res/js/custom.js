
// id = # class = .
$(document).ready(()=>{



  $('#form-reg').submit((e)=>{
    // this will prevent submit
    e.preventDefault()


    // set value by
    // $('#username').val('eded')
    var data ={
      username : $('#username').val(),
      password : $('#password').val(),
      userimage : $('#userimage')[0].files[0]  // multiple image will have mutiple keys
    }

    // for image file // console.log($('#userimage')[0].files[0])

//     $('#btnsubmit').click(()=>{
//        $('#btnsubmit').addClass('newnew')
//    })



  var formdata = new FormData()

  for(x in data){
    formdata.append(x,data[x])
  }

  // pass value in key and object or json // in this way image cannot be uploaded
    $.ajax(
      {
        url: 'http://localhost:3000/registration',
        method:'POST',
        contentType:false,
        processData:false, // for all type files it should be false otherwise application/json
        data: formdata,   // JSON.stringify(data)
        dataType:'json',
        statusCode:{
          200: ()=>{
            console.log('200')
          }
        },
        success: (result,status,jqxHR)=>{
          //console.log(status)
          //console.log(result)
        },
        error:(status)=>{
          //console.log(status)
        }
      }
    )




  })
})
