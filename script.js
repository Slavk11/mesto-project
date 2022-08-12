
const popupOpened = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup')
const page = document.querySelector('.page');
popupOpened.addEventListener('click', function(){
  popup.classList.add('popup_opened');

});
closePopup.addEventListener('click', function(){
  popup.classList.remove('popup_opened');

});
const formElement = document.querySelector('.popup__user-form');
const nameInput = document.querySelector('.popup__form_name');
const jobInput = document.querySelector('.popup__form_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
};
formElement.addEventListener('submit', formSubmitHandler); 