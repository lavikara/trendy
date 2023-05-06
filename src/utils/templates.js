const templates = {
  textTemplate: `<div draggable="true" class="tw-absolute tw-top-[20px] tw-left-[20px] tw-z-30">
                  <div id="active-wrapper">
                    <div class="tw-relative tw-h-full tw-min-w-[200px]">
                      <div id="newElement" contentEditable="false" class="tw-relative tw-h-full tw-text-white tw-text-lg xs:tw-text-2xl tw-font-bold tw-text-center tw-z-30">
                      Edit text here
                      </div>
                      <div id="newDrag" class="tw-invisible tw-flex tw-justify-end tw--mt-[30px] tw--mr-[28px]">
                        <div class="tw-relative tw-flex tw-items-center tw-w-[30px] tw-h-[30px] tw-bg-white tw-rounded-lg tw-border tw-border-[#d7ceb6] tw-cursor-move tw-z-50">
                          <svg class="tw-m-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z" fill="#222222"/>
                            <path d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z" fill="#222222"/>
                            <path d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z" fill="#222222"/>
                            <path d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z" fill="#222222"/>
                          </svg>                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`,
  imageTemplate: `<div draggable="true" class="tw-absolute tw-top-[60px] tw-z-30">
                    <img id="newImage" class="tw-h-[100px]"/>                 
                    <div id="newDrag" class="tw-invisible tw-flex tw-justify-end tw--mt-[30px] tw--mr-[28px]">
                      <div class="tw-relative tw-flex tw-items-center tw-w-[30px] tw-h-[30px] tw-bg-white tw-rounded-lg tw-border tw-border-[#d7ceb6] tw-cursor-move tw-z-50">
                        <svg class="tw-m-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z" fill="#222222"/>
                          <path d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z" fill="#222222"/>
                          <path d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z" fill="#222222"/>
                          <path d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z" fill="#222222"/>
                        </svg>                       
                      </div>
                    </div> 
                  </div>`,
  buttonTemplate: `<div draggable="true" class="tw-absolute tw-top-[60px] tw-h-[55px] tw-min-w-[200px] tw-cursor-move tw-z-30">                      
                    <button
                        id="newElement"
                        contentEditable="false"
                        type="reset"
                        class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-bg-black tw-rounded-lg tw-font-semibold tw-text-white hover:tw-bg-black-bg1"
                    >
                        Signup Now
                    </button>
                    <div id="newDrag" class="tw-invisible tw-flex tw-justify-end tw--mt-[30px] tw--mr-[28px]">
                      <div class="tw-relative tw-flex tw-items-center tw-w-[30px] tw-h-[30px] tw-bg-white tw-rounded-lg tw-border tw-border-[#d7ceb6] tw-cursor-move tw-z-50">
                        <svg class="tw-m-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z" fill="#222222"/>
                          <path d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z" fill="#222222"/>
                          <path d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z" fill="#222222"/>
                          <path d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z" fill="#222222"/>
                        </svg>                       
                      </div>
                    </div>
                  </div>`
}

export default templates
