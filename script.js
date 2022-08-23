const popupOpened = document.querySelector('.profile__edit-button');
const placePopupOpened = document.querySelector('.profile__add-button');
const placePopup = document.querySelector('.popup_place-add');
const closePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const page = document.querySelector('.page');
const placePopupClose = document.querySelector('.popup__close-button_place_form');
const popupProfile = document.querySelector('.popup_profile-edit');
popupOpened.addEventListener('click', function () {
    popup.classList.add('popup_opened');
});
closePopup.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});
placePopupOpened.addEventListener('click', function () {
    placePopup.classList.add('popup_opened');
});

placePopupClose.addEventListener('click', function () {
    placePopup.classList.remove('popup_opened');
});

///
///

function closeePopup (popup) {
    popup.classList.remove('popup_opened');
};

    function closePopupAddPlace() {
        closeePopup(placePopup);

}
const formElement = document.querySelector('.popup__user-form');
const nameInput = document.querySelector('.popup__form_name_input');
const jobInput = document.querySelector('.popup__form_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
const saveButton = document.querySelector('.popup__save-button');
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
saveButton.addEventListener('click', function () {
    popupProfile.classList.remove('popup_opened');
});

const initialCards = [
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1615225150799-524453b31447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    },
    {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80',
    },
    {
        name: 'Курильские острова',
        link: 'https://images.unsplash.com/photo-1638190654337-9e52a621a6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
    {
        name: 'Владивосток',
        link: 'https://images.unsplash.com/photo-1615092193942-0bb817ba2f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
        name: 'Байкал',
        link: 'https://images.unsplash.com/photo-1501675423372-9bfa95849e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
        name: 'Сахалин',
        link: 'https://images.unsplash.com/photo-1660725484622-1452f3ce585a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    },
];
const placeForm = document.querySelector('.popup__user-form_place_name');
const placeLink = document.querySelector('.gallery__photo');
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
        closeePopup(placePopup)
}

function openPopup(elem) {
    elem.classList.add('popup_opened');
};
function makeCards(evt) {
    const galleryTemplate = addTemplate.cloneNode(true);
    const galleryPhoto = galleryTemplate.querySelector('.gallery__photo');
    const galleryTitle = galleryTemplate.querySelector('.gallery__text');
    const galleryLike = galleryTemplate.querySelector('.gallery__like');
    const deletePlace = galleryTemplate.querySelector('.gallery__delete');

    galleryLike.addEventListener('click', function () {
    galleryLike.classList.toggle('gallery__like_active');
    });
    galleryPhoto.src = evt.link;
    galleryTitle.textContent = evt.name;
    ///
    

    deletePlace.addEventListener('click', function (evt) {
        evt.currentTarget.closest('.gallery__elements').remove();
    });

    galleryPhoto.addEventListener('click',function () {
        fullSizeImage.src = evt.link;
        photoTitle.textContent = evt.name;
        popupFullSizePhoto.classList.add('popup_opened')
    }
    );

    return galleryTemplate;
}
function showPlace(evt) {
    gallery.prepend(makeCards(evt));
}
initialCards.forEach(function (evt) {
    showPlace(evt);
});
placeForm.addEventListener('submit', addCard);

const popupFullSizePhoto = document.querySelector('.popup_full-size-photo_zoom');
const popupContainerPhoto = document.querySelector('.popup__container_photo');
const closeButtonPhoto = document.querySelector('.popup__close-button_photo');
const fullSizeImage = document.querySelector('.popup__full-size-image');
const photoTitle = document.querySelector('.popup__photo-title');

closeButtonPhoto.addEventListener('click',function () {
    popupFullSizePhoto.classList.remove('popup_opened');
});