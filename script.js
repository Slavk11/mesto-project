
const popupOpened = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup')

popupOpened.addEventListener('click', function(){
  popup.classList.add('popup_opened');

});
closePopup.addEventListener('click', function(){
  popup.classList.remove('popup_opened');

})
