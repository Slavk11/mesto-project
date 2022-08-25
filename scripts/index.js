const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const placePopup = document.querySelector('.popup_name_place_add');
const popupProfileEdit = document.querySelector('.popup_name_profile_edit');
const profileCloseButton = popupProfileEdit.querySelector('.popup__close-button_place_profile');
const placePopupClose = placePopup.querySelector('.popup__close-button_place_form');

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

editProfileButton.addEventListener('click', function () {
    openPopup(popupProfileEdit);
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
});

profileCloseButton.addEventListener('click', function () {
    closePopup(popupProfileEdit);
});

addPlaceButton.addEventListener('click', function () {
    openPopup(placePopup);
});

placePopupClose.addEventListener('click', function () {
    closePopup(placePopup);
});

const userForm = document.querySelector('.popup__user-form');
const nameInput = document.querySelector('.popup__form_type_name-input');
const jobInput = document.querySelector('.popup__form_type_job-input');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
function editUserInformation(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfileEdit);
}
userForm.addEventListener('submit', editUserInformation);

const placeForm = document.querySelector('.popup__user-form_place_name');
const placeInput = document.querySelector('.popup__form_type_place-name');
const saveButtonPlace = document.querySelector('.popup__save-button_place');
const galleryElements = document.querySelector('.gallery__elements');
const addTemplate = document.querySelector('.add-template').content;
const gallery = document.querySelector('.gallery');
const popupPlaceLink = document.querySelector('.popup__form_type_link');

function addCard(evt) {
    evt.preventDefault();
    showPlace({ name: placeInput.value, link: popupPlaceLink.value });
    evt.target.reset();
    closePopup(placePopup);
}

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
        openPopup(popupFullSizePhoto);
    });

    return galleryTemplate;
}
function showPlace(dataObject) {
    gallery.prepend(makeCards(dataObject));
}
initialCards.forEach(function (evt) {
    showPlace(evt);
});
placeForm.addEventListener('submit', addCard);

const popupFullSizePhoto = document.querySelector('.popup_name_full-image');
const popupContainerPhoto = document.querySelector('.popup__container_photo');
const closeButtonPhoto = document.querySelector('.popup__close-button_photo_zoom');
const fullSizeImage = document.querySelector('.popup__full-size-image');
const photoTitle = document.querySelector('.popup__photo-title');

closeButtonPhoto.addEventListener('click', function () {
    closePopup(popupFullSizePhoto);
});
