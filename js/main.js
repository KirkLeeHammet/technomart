var deliveryLeft = document.querySelector('.delivery-btn');
var garanteeLeft = document.querySelector('.garantee-btn');
var creditLeft = document.querySelector('.credit-btn');
var deliveryRight = document.querySelector('.delivery-content-item');
var garanteeRight = document.querySelector('.garantee-content-item');
var creditRight = document.querySelector('.credit-content-item');

	// services
if (deliveryLeft != null) {
	deliveryLeft.addEventListener('click', function (evt) {
		evt.preventDefault();
		deliveryLeft.classList.add('tabs-list-btn-active');
		garanteeLeft.classList.remove('tabs-list-btn-active');
		creditLeft.classList.remove('tabs-list-btn-active');
		deliveryRight.classList.add('tabs-content-item-show')
		garanteeRight.classList.remove('tabs-content-item-show');
		creditRight.classList.remove('tabs-content-item-show');
	});

	garanteeLeft.addEventListener('click', function (evt) {
		evt.preventDefault();
		deliveryLeft.classList.remove('tabs-list-btn-active');
		garanteeLeft.classList.add('tabs-list-btn-active');
		creditLeft.classList.remove('tabs-list-btn-active');
		deliveryRight.classList.remove('tabs-content-item-show');
		garanteeRight.classList.add('tabs-content-item-show');
		creditRight.classList.remove('tabs-content-item-show');
	});

	creditLeft.addEventListener('click', function (evt) {
		evt.preventDefault();
		deliveryLeft.classList.remove('tabs-list-btn-active');
		garanteeLeft.classList.remove('tabs-list-btn-active');
		creditLeft.classList.add('tabs-list-btn-active');
		deliveryRight.classList.remove('tabs-content-item-show');
		garanteeRight.classList.remove('tabs-content-item-show');
		creditRight.classList.add('tabs-content-item-show');
	});
}