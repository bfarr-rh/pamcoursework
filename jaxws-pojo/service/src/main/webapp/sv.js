$(document).ready(function() {

    $('#step1_button').click(function () {
        jQuery.support.cors = true;

        $.ajax(
            {
                type: "POST",
                url: $('#step1_url').val(),
                data: $('#step1_json').val(),
                contentType: "application/json; charset=utf-8",
                headers: {
                        'Accept': 'application/json',
                        'Authorization': "Basic " + btoa($("#username").val() + ":" + $("#password").val())
                    },
                dataType: "json",
                success: function (data) {
                    alert(data);
                },
                error: function (msg, url, line) {
                    alert('error trapped msg = ' + msg + ', url = ' + url + ', line = ' + line);

                }
            });
     });

     $('#step2_button').click(function () {
        jQuery.support.cors = true;

        $.ajax(
            {
                type: "GET",
                url: $('#step2_url').val(),
                contentType: "application/json; charset=utf-8",
                headers: {
                        'Accept': 'application/json',
                        'Authorization': "Basic " + btoa($("#username1").val() + ":" + $("#password1").val())
                    },
                dataType: "json",
                success: function (data) {
                    $('#step2_json').val(JSON.stringify(data));
                    var s = '';
                    jQuery.each(data["task-summary"], function(index, item) {
                        s = s + ' ' + item["task-id"];
                    });
                    alert("Tasks available :" + s);
                },
                error: function (msg, url, line) {
                    alert('error trapped msg = ' + msg + ', url = ' + url + ', line = ' + line);

                }
            });
     });

     $('#step3_button').click(function () {
        doPut($('#step3_url').val());
     });

    $('#step4_button').click(function () {
        doPut($('#step4_url').val());
     });

     $('#step5_button').click(function () {
             doPut($('#step5_url').val());
          });


     function doPut(urlToCall) {
        jQuery.support.cors = true;

         $.ajax(
             {
                 type: "PUT",
                 url: urlToCall,
                 contentType: "application/json; charset=utf-8",
                 headers: {
                         'Accept': '*/*',
                         'Authorization': "Basic " + btoa($("#username1").val() + ":" + $("#password1").val())
                     },
                 complete: function(xhr) {
                     if (xhr.readyState == 4) {
                         if (xhr.status == 201) {
                             alert("Updated");
                         }
                     } else {
                         alert("Failed");
                     }
                 }
             });

     }

});