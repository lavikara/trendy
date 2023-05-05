const templates = {
  textTemplate: `<div id="textElement" draggable="true" class="tw-absolute tw-top-[20px] tw-left-[20px] tw-cursor-move">
                  <div id="headerText" class="tw-relative tw-h-full tw-min-w-[200px]">
                    <p contentEditable="false" class="tw-h-full tw-text-white tw-text-lg xs:tw-text-2xl tw-font-bold tw-text-center">
                      Edit text here
                    </p>
                  </div>
                </div>`,
  imageTemplate: `<div draggable="true" class="tw-absolute tw-top-[60px] tw-left-20px tw-h-full tw-w-full tw-cursor-move">
                    <img id="image"/>                 
                  </div>`,
  buttonTemplate: `<div id="buttonElement" draggable="true" class="tw-absolute tw-top-[60px] tw-left-20px tw-h-[55px] tw-w-[200px] tw-cursor-move">                      
                    <button
                        contentEditable="false"
                        type="reset"
                        class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-bg-black tw-rounded-lg tw-font-semibold tw-text-white hover:tw-bg-black-bg1"
                    >
                        <span>Button Title</span>
                    </button>
                  </div>`
}

export default templates
