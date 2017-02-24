$('#search-input-text').bind('keyup',function(){
    var searchText=$('#search-input-text').val();
   $.get('http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='
          searchText,function(d){
              var d =d.AS.Results[0].Suggests;
          },'json');
    $('#search-suggest').show();
})