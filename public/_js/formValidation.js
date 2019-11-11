$(document).ready(function() {

  $('#renewable-survey-form').submit((e) => {
    e.preventDefault();
    $('#site-form-submit-button').attr('disabled', true);
    $('#site-form-submit-button').addClass('btn-disabled');
 
    $(".error").remove();

    $(".survey-inputs").each((index, element) => {
        const value = $(element).val();
        (!value || value.length === 0) && $(element).after('<div class="error">This field is required</div>');
    });

    if($('.error').length) {
        $('#site-form-submit-button').attr('disabled', false);
        $('#site-form-submit-button').removeClass('btn-disabled');
        return;
    }
    
    const values = $('#renewable-survey-form').serializeArray();
    
    const data = values.reduce((acc, input) => {
       acc[input.name] = input.value;
       return acc;
    }, {})

    $.ajax({
      url : '/api/renewable-energy-farms',
      type : 'POST',
      data : data,
      dataType:'json',
      success : function(data) {  
        const baseUrl = window.location.href.split('/surveys')[0];            
        window.location.replace(`${baseUrl}/thank-you?survey_id=${data.id}`);
      },
      error : function(request,error) {
          alert('There was an error when trying to submit your survey. Please check your values again.')
      }
  });
  }); 
});