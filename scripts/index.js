const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const placePopup = document.querySelector('.popup_place_add');
const popupProfileEdit = document.querySelector('.popup_profile_edit');
const closePopup = document.querySelector('.popup__close-button');
const placePopupClose = document.querySelector('.popup__close-button_place_form');

function popupClose(popup) {
    popup.classList.remove('popup_opened');
};
function popupOpen(popup) {
    popup.classList.add('popup_opened');
};

editProfileButton.addEventListener('click', function () {
    popupOpen(popupProfileEdit);
});

closePopup.addEventListener('click', function () {
    popupClose(popupProfileEdit);
});

addPlaceButton.addEventListener('click', function () {
    popupOpen(placePopup);
});

placePopupClose.addEventListener('click', function () {
    popupClose(placePopup);
});

const userForm = document.querySelector('.popup__user-form');
const nameInput = document.querySelector('.popup__form_name_input');
const jobInput = document.querySelector('.popup__form_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
const saveButton = document.querySelector('.popup__save-button');
function editUserInformation(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClose(popupProfileEdit);
};
userForm.addEventListener('submit', editUserInformation);

const placeForm = document.querySelector('.popup__user-form_place_name');
const placeInput = document.querySelector('.popup__form_place-name');
const saveButtonPlace = document.querySelector('.popup__save-button_place');
const galleryElements = document.querySelector('.gallery__elements');

const addTemplate = document.querySelector('.add-template').content;
const gallery = document.querySelector('.gallery');

const popupPlaceTitle = document.querySelector('.popup__form_place-name');
const popupPlaceLink = document.querySelector('.popup__form_link');

function addCard(evt) {
    evt.preventDefault();
    showPlace({ name: popupPlaceTitle.value, link: popupPlaceLink.value });
    evt.target.reset();
    popupClose(placePopup);
};

function makeCards(dataObject) {
    const galleryTemplate = addTemplate.cloneNode(true);
    const galleryPhoto = galleryTemplate.querySelector('.gallery__photo');
    const galleryTitle = galleryTemplate.querySelector('.gallery__text');
    const galleryLike = galleryTemplate.querySelector('.gallery__like');
    const deletePlace = galleryTemplate.querySelector('.gallery__delete');

    galleryLike.addEventListener('click', function () {
        galleryLike.classList.toggle('gallery__like_active');
    });
    galleryPhoto.src = dataObject.link;
    galleryPhoto.alt = dataObject.name;
    galleryTitle.textContent = dataObject.name;

    deletePlace.addEventListener('click', function (evt) {
        evt.currentTarget.closest('.gallery__elements').remove();
    });

    galleryPhoto.addEventListener('click', function () {
        fullSizeImage.src = dataObject.link;
        fullSizeImage.alt = dataObject.name;
        photoTitle.textContent = dataObject.name;
        popupOpen(popupFullSizePhoto);
    });

    return galleryTemplate;
};
function showPlace(dataObject) {
    gallery.prepend(makeCards(dataObject));
};
initialCards.forEach(function (evt) {
    showPlace(evt);
});
placeForm.addEventListener('submit', addCard);

const popupFullSizePhoto = document.querySelector('.popup_full-size-photo_zoom');
const popupContainerPhoto = document.querySelector('.popup__container_photo');
const closeButtonPhoto = document.querySelector('.popup__close-button_photo_zoom');
const fullSizeImage = document.querySelector('.popup__full-size-image');
const photoTitle = document.querySelector('.popup__photo-title');

closeButtonPhoto.addEventListener('click', function () {
    popupClose(popupFullSizePhoto);
});
