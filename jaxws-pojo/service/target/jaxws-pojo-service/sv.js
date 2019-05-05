$(document).ready(function() {

    $('#step1_button').click(function () {
        jQuery.support.cors = true;
        var urlToCall = $('#step1_url').val().replace('{containerId}', $('#containerid').val());
        $.ajax(
            {
                type: "POST",
                url: urlToCall,
                data: $('#step1_json').val(),
                contentType: "application/json; charset=utf-8",
                headers: {
                        'Accept': 'application/json',
                        'Authorization': "Basic " + btoa($("#username").val() + ":" + $("#password").val())
                    },
                dataType: "json",
                success: function (data) {
                    $('#processInstanceId').val(data);
                    alert("Process instance created id:" + data);
                    $('#step2_json').val('');
                     $("#tabs").tabs("option", "active", 2);
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

                    var formattedData = JSON.stringify(data, null, '\t');
                    $('#step2_json').val(formattedData);
                    var s = '';
                    var firstItem;
                    jQuery.each(data["task-summary"], function(index, item) {
                        if (!firstItem && item["task-proc-inst-id"] == $('#processInstanceId').val() &&
                            item["task-name"] == 'New Order') {
                            firstItem = item["task-id"];
                            $('#currentTaskId').val(firstItem);
                        }
                        if (item["task-proc-inst-id"] == $('#processInstanceId').val() &&
                                                    item["task-name"] == 'New Order') {
                            s = s + ' ' + item["task-id"];
                        }
                    });
                    alert("These New Order tasks are available for current process :" + s);
                    if (firstItem) {
                        alert("Defaulting using task of " + firstItem );
                    }
                },
                error: function (msg, url, line) {
                    alert('error trapped msg = ' + msg + ', url = ' + url + ', line = ' + line);

                }
            });
     });

     $('#step3a_button').click(function () {
        var urlToCall = $('#step3a_url').val().replace('{containerId}', $('#containerid').val());
        urlToCall = urlToCall.replace('{taskid}', $('#currentTaskId').val());
        doPut(urlToCall,0);
     });

    $('#step3b_button').click(function () {
        var urlToCall = $('#step3b_url').val().replace('{containerId}', $('#containerid').val());
        urlToCall = urlToCall.replace('{taskid}', $('#currentTaskId').val());
        doPut(urlToCall,0);
     });

     $('#step3c_button').click(function () {
        var urlToCall = $('#step3c_url').val().replace('{containerId}', $('#containerid').val());
        urlToCall = urlToCall.replace('{taskid}', $('#currentTaskId').val());
             doPut(urlToCall,4);
          });

    $('#step4_button').click(function () {
        jQuery.support.cors = true;

        $.ajax(
            {
                type: "GET",
                url: $('#step4_url').val(),
                contentType: "application/json; charset=utf-8",
                headers: {
                        'Accept': 'application/json',
                        'Authorization': "Basic " + btoa($("#username1").val() + ":" + $("#password1").val())
                    },
                dataType: "json",
                success: function (data) {

                    var formattedData = JSON.stringify(data, null, '\t');
                    $('#step4_json').val(formattedData);
                    var s = '';
                    var firstItem;
                    jQuery.each(data["task-summary"], function(index, item) {
                        if (!firstItem && item["task-proc-inst-id"] == $('#processInstanceId').val() &&
                            item["task-name"] == 'Hoa Approval') {
                            firstItem = item["task-id"];
                            $('#currentTaskId').val(firstItem);
                        }
                        if (item["task-proc-inst-id"] == $('#processInstanceId').val() &&
                                                    item["task-name"] == 'Hoa Approval') {
                            s = s + ' ' + item["task-id"];
                        }
                    });
                    alert("These Hoa Approval tasks are available for current process :" + s);
                    if (firstItem) {
                        alert("Defaulting using task of " + firstItem );
                    }
                },
                error: function (msg, url, line) {
                    alert('error trapped msg = ' + msg + ', url = ' + url + ', line = ' + line);

                }
            });
     });



 $('#step6a_button').click(function () {
        var urlToCall = $('#step6a_url').val().replace('{containerId}', $('#containerid').val());
        urlToCall = urlToCall.replace('{taskid}', $('#currentTaskId').val());
        doPut(urlToCall,0);
     });

    $('#step6b_button').click(function () {
        var urlToCall = $('#step6b_url').val().replace('{containerId}', $('#containerid').val());
        urlToCall = urlToCall.replace('{taskid}', $('#currentTaskId').val());
        doPut(urlToCall,6);
     });


$('#step7a_button').click(function () {
        jQuery.support.cors = true;
        var urlToCall = $('#step7_url').val().replace('{containerId}', $('#containerid').val());
        urlToCall = urlToCall.replace('{processInstanceId}', $('#processInstanceId').val());
        $.ajax(
            {
                type: "GET",
                url: urlToCall,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                headers: {
                        'Accept': '*/*',
                        'Authorization': "Basic " + btoa($("#username1").val() + ":" + $("#password1").val())
                    },
                success: function (data) {
                    var formattedData = JSON.stringify(data, null, '\t');
                    $('#step7a_json').val(formattedData);
                },
                error: function (msg, url, line) {
                    alert('error trapped msg = ' + msg + ', url = ' + url + ', line = ' + line);

                }
            });
     });

    $('#step7b_button').click(function () {
        jQuery.support.cors = true;
        var urlToCall = $('#step7_url').val().replace('{containerId}', $('#containerid').val());
        urlToCall = urlToCall.replace('{processInstanceId}', $('#processInstanceId').val());
        var jsonToSend = $('#step7b_json').val();
        $.ajax(
            {
                type: "POST",
                url: urlToCall,
                data: jsonToSend,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                headers: {
                        'Accept': '*/*',
                        'Authorization': "Basic " + btoa($("#username1").val() + ":" + $("#password1").val())
                    },
                complete: function(xhr) {
                     if (xhr.readyState == 4) {
                         if (xhr.status == 201) {
                             alert("Updated");
                             $("#tabs").tabs("option", "active", 7);
                         }
                     } else {
                         alert("Failed");
                     }
                 }
            });
     });

     $('#step8_button').click(function () {
        var urlToCall = $('#step8_url').val().replace('{containerId}', $('#containerid').val());
        urlToCall = urlToCall.replace('{taskid}', $('#currentTaskId').val());
             doPut(urlToCall,8);
          });



     function doPut(urlToCall, tabid) {
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
                             if (tabid > 0) {
                                $("#tabs").tabs("option", "active", tabid);
                             }
                         }
                     } else {
                         alert("Failed");
                     }
                 }
             });

     }

});