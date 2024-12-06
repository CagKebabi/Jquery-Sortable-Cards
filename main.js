/************************************************************************************
      Sortable functions for Drag & Drop Interface
      *************************************************************************************/
    const draggableContainers = Array.from(document.querySelectorAll(".draggableContainer"))
    //console.log("normal",draggableContainers);
    
    // let draggableContainersIds = []

    // draggableContainers.forEach((element) => {
    //     draggableContainersIds.push(element.id)
    // })    

    // let arr = []
    $( function() {
      $( "#sortable" ).sortable();
      $( "#sortable" ).disableSelection();
    } );

    draggableContainers.forEach((element,index) => {
        //console.log(draggableContainersIds.filter(e => e !== element.id));
            //console.log(draggableContainersIds.filter(e => e !== element.id));
            //arr.push(draggableContainersIds.filter(e => e !== element.id))
            
            $(element).sortable({
                connectWith: ".draggableContainer",
                //connectWith: ["#new-jobs-list","#in-progress-list", "#waiting-jobs-list", "#complete-jobs-list", "#rework-jobs-list", "#feedback-jobs-list"],
                over: function( event, ui ) { //triggered when sortable element hovers sortable list
                  $(element.parentElement).css('background-color', 'rgba(0,0,0,.1)')
                },
                out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
                  $(element.parentElement).css('background-color', 'rgba(0,0,0,.0)')
                },
                receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
                  $(element.parentElement).css('background-color', 'rgba(0,0,0,.0)')
                },
                revert: 100,
                start: function( event, ui ) { //event is triggered when sorting starts.
                    var elementId = (ui.item[0].firstChild.id)
                    $('#'+elementId).css('transform', 'rotate(4deg)');
                    //console.log("start event");
                },
                stop: function( event, ui ) { //event is triggered when sorting has stopped.
                    var elementId = (ui.item[0].firstChild.id)
                    $('#'+elementId).css('transform', 'rotate(0deg)');
                    console.log(ui.item.parentElement);
                }
            });
    });

    //   $( function() {
    //     $( "#new-jobs-list" ).sortable({
    //       connectWith: ["#in-progress-list", "#waiting-jobs-list", "#complete-jobs-list", "#rework-jobs-list", "#feedback-jobs-list"],
    //       over: function( event, ui ) { //triggered when sortable element hovers sortable list
    //         $('#new-jobs').css('background-color', 'rgba(0,0,0,.1)')
    //       },
    //       out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
    //         $('#new-jobs').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
    //         $('#new-jobs').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       revert: 100,
    //       start: function( event, ui ) { //event is triggered when sorting starts.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(4deg)');
    //       },
    //       stop: function( event, ui ) { //event is triggered when sorting has stopped.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(0deg)');
    //       }
    //     });
    //   });

    //   $( function() {
    //     $( "#in-progress-list" ).sortable({
    //       connectWith: ["#new-jobs-list","#waiting-jobs-list", "#complete-jobs-list", "#rework-jobs-list", "#feedback-jobs-list"],
    //       over: function( event, ui ) { //triggered when sortable element hovers sortable list
    //         $('#in-progress').css('background-color', 'rgba(0,0,0,.1)')
    //       },
    //       out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
    //         $('#in-progress').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
    //         $('#in-progress').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       revert: 100,
    //       start: function( event, ui ) { //event is triggered when sorting starts.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(4deg)');
    //       },
    //       stop: function( event, ui ) { //event is triggered when sorting has stopped.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(0deg)');
    //       }
    //     });
    //   });

    //   $( function() {
    //     $( "#waiting-jobs-list" ).sortable({
    //       connectWith: ["#new-jobs-list","#in-progress-list", "#complete-jobs-list", "#rework-jobs-list", "#feedback-jobs-list"],
    //       over: function( event, ui ) { //triggered when sortable element hovers sortable list
    //         $('#waiting').css('background-color', 'rgba(0,0,0,.1)')
    //       },
    //       out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
    //         $('#waiting').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
    //         $('#waiting').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       revert: 100,
    //       start: function( event, ui ) { //event is triggered when sorting starts.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(4deg)');
    //       },
    //       stop: function( event, ui ) { //event is triggered when sorting has stopped.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(0deg)');
    //       }
    //     });
    //   });

    //   $( function() {
    //     $( "#complete-jobs-list" ).sortable({
    //       connectWith: ["#new-jobs-list","#in-progress-list", "#waiting-jobs-list", "#rework-jobs-list", "#feedback-jobs-list"],
    //       over: function( event, ui ) { //triggered when sortable element hovers sortable list
    //         $('#complete').css('background-color', 'rgba(0,0,0,.1)')
    //       },
    //       out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
    //         $('#complete').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
    //         $('#complete').css('background-color', 'rgba(0,0,0,.0)')
    //         var status = 'Complete';
    //         var orderId = ui.item["0"].firstChild.id;
    //       },
    //       revert: 100,
    //       start: function( event, ui ) { //event is triggered when sorting starts.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(4deg)');
    //       },
    //       stop: function( event, ui ) { //event is triggered when sorting has stopped.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(0deg)');
    //       }
    //     });
    //   });

    //   $( function() {
    //     $( "#feedback-jobs-list" ).sortable({
    //       connectWith: ["#new-jobs-list","#in-progress-list", "#waiting-jobs-list", "#complete-jobs-list", "#rework-jobs-list"],
    //       over: function( event, ui ) { //triggered when sortable element hovers sortable list
    //         $('#feedback').css('background-color', 'rgba(0,0,0,.1)')
    //       },
    //       out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
    //         $('#feedback').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
    //         $('#feedback').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       revert: 100,
    //       start: function( event, ui ) { //event is triggered when sorting starts.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(4deg)');
    //       },
    //       stop: function( event, ui ) { //event is triggered when sorting has stopped.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(0deg)');
    //       }
    //     });
    //   });

    //   $( function() {
    //     $( "#rework-jobs-list" ).sortable({
    //       connectWith: ["#new-jobs-list","#in-progress-list", "#waiting-jobs-list", "#complete-jobs-list", "#feedback-jobs-list"],
    //       over: function( event, ui ) { //triggered when sortable element hovers sortable list
    //         $('#rework').css('background-color', 'rgba(0,0,0,.1)')
    //       },
    //       out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
    //         $('#rework').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
    //         $('#rework').css('background-color', 'rgba(0,0,0,.0)')
    //       },
    //       revert: 100,
    //       start: function( event, ui ) { //event is triggered when sorting starts.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(4deg)');
    //       },
    //       stop: function( event, ui ) { //event is triggered when sorting has stopped.
    //         var elementId = (ui.item[0].firstChild.id)
    //         $('#'+elementId).css('transform', 'rotate(0deg)');
    //       }
    //     });
    //   });  
