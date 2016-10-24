(function(){
	var app = {
		init: function(){
			$(".recup").on('click', this.start.bind(this));
		}

		start: function(){
			var url = 'http://192.168.1.21:3000/places';
			var data = $.ajax(url)
						.done()
						.fail()
						.always();
		}

		ajaxDone: function(places){
			var listplaces = places.places;
			for(i = 0; i < listplaces.length; i++){
			}
		}
	}