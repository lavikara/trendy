<template>
  <div id="customizeview" class="tw-flex tw-h-full tw-bg-fixed tw-bg-no-repeat tw-bg-cover">
    <ElementSidebarLayout />
    <div class="container tw-w-full tw-bg-black">
      <div class="tw-h-screen tw-w-full">
        <main
          ref="dropZone"
          class="drop-zone tw-relative tw-h-screen tw-flex tw-justify-center tw-items-center tw-px-4 tw-py-28 lg:tw-pb-44 lg:tw-pt-32"
          @drop="onDrop"
          @dragenter="onDragEnter"
          @dragover.prevent
        >
          <BackBtn
            :btnStyle="backBtnStyle"
            class="tw-absolute tw--top-0 tw--left-0 tw-w-[80px] tw-rounded-full tw-ml-4 tw-mt-4"
          />
          <IconBtn
            :btnStyle="saveBtnStyle"
            :icon="saveicon"
            alt="save"
            class="tw-absolute tw--top-0 tw--right-0 tw-w-[80px] tw-rounded-full tw-ml-4 tw-mt-4"
            @click="saveTemplate"
          />
          <div
            v-if="showImageGallary"
            class="tw-absolute tw-top-auto tw-left-auto tw-w-2/4 tw-h-3/6 tw-overflow-scroll tw-rounded-lg tw-bg-gray-bg2 tw-shadow-md tw-z-50"
          >
            <ImageGallary
              @imageSelected="setImageElement"
              @close="showImageGallary = !showImageGallary"
            />
          </div>
        </main>
      </div>
    </div>
    <StylesSidebarLayout />
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import BackBtn from '@/components/general/BackBtn.vue'
import IconBtn from '@/components/general/IconBtn.vue'
import StylesSidebarLayout from '@/layout/customize/StylesSidebarLayout.vue'
import ElementSidebarLayout from '@/layout/customize/ElementSidebarLayout.vue'
import ImageGallary from '@/layout/customize/ImageGallary.vue'
import { getItem, setItem } from '@/utils/storage.js'
import { searchArray } from '@/utils/helpers'
import templates from '@/utils/templates.js'
import saveicon from '@/assets/img/saveicon.png'
import template1 from '@/assets/img/template.png'

const store = useStore()
const route = useRoute()

let dropZone = ref()
let template = ref(null)
let target = ref(null)
let showImageGallary = ref(false)
let deviceType = ref('')
let textElementCounter = ref(0)
let templateParentContainer = ref('')
let activeDragIcon = ref('')
let activeToolbar = ref('')
let cloneAble = ref('')
let zIndex = ref(0)
let storedTemplates = reactive([])
let initial = reactive({
  x: 0,
  y: 0
})
let newCloneable = reactive({
  x: 0,
  y: 0
})

const backBtnStyle = reactive({
  backgroundColor: '#FFFFFF',
  hoverColor: '#24419a',
  hoverBgColor: '#d7ceb6'
})

const saveBtnStyle = reactive({
  backgroundColor: '#FFFFFF',
  hoverColor: '#24419a',
  hoverBgColor: '#d7ceb6',
  width: '50px',
  height: '50px',
  padding: '12px'
})

const templateBgColor = computed(() => {
  return store.state.templateBgColor
})

const activeElement = computed(() => {
  return store.state.activeElement
})

const elementColor = computed(() => {
  return store.state.elementColor
})

const addText = computed(() => {
  return store.state.addText
})

const addImage = computed(() => {
  return store.state.addImage
})

const addButton = computed(() => {
  return store.state.addButton
})

onUnmounted(() => {
  document.removeEventListener('dragstart', startDrag)
  document.removeEventListener('click', setActiveWrapper)
})

onMounted(() => {
  isTouchDevice()
  renderTemplate()
  !getItem('editedTemplate') ? setItem('editedTemplate', []) : ''
})

const startDrag = (event) => {
  event.target.id.includes('clone') ? (cloneAble.value = event.target.id) : ''
  if (event.target.nodeName === 'IMG') return
  target.value = event.target
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  initial.x = !isTouchDevice() ? event.clientX : event.touches[0].clientX
  initial.y = !isTouchDevice() ? event.clientY : event.touches[0].clientY
  templateParentContainer.value = document.getElementById('templateParentContainer')
  templateParentContainer.value.style.border = '2px dashed #ffffff'
}

const onDragEnter = (event) => {
  newCloneable.x = !isTouchDevice() ? event.clientX : event.touches[0].clientX
  newCloneable.y = !isTouchDevice() ? event.clientY : event.touches[0].clientY
}

const onDrop = (event) => {
  textElementCounter.value = Date.now()
  templateParentContainer.value.style.border = '0px solid #ffffff'
  if (cloneAble.value !== '') {
    const element = document.getElementById(cloneAble.value)
    element.cloneNode(true)
    const addElement = document.getElementById('add-element')
    addElement.insertAdjacentHTML('beforeend', element.outerHTML)
    element.remove()
    if (element.id === 'cloneText') setElement(templates.textTemplate)
    if (element.id === 'cloneButton') setElement(templates.buttonTemplate)
    if (element.id === 'cloneImage') {
      showImageGallary.value = !showImageGallary.value
      target.value = null
      cloneAble.value = ''
      return
    }

    const newDragTemplate = (document.getElementById('newDragTemplate').id =
      'newDragTemplate' + textElementCounter.value)
    const updatedTemplateId = document.getElementById(newDragTemplate)
    let newX = !isTouchDevice() ? event.clientX : event.touches[0].clientX
    let newY = !isTouchDevice() ? event.clientY : event.touches[0].clientY
    updatedTemplateId.style.position = 'absolute'
    updatedTemplateId.style.top = target.value.offsetTop - (initial.y - newY) + 'px'
    updatedTemplateId.style.left = target.value.offsetLeft - (initial.x - newX) + 'px'
    target.value = null
    cloneAble.value = ''
    return
  }
  let newX = !isTouchDevice() ? event.clientX : event.touches[0].clientX
  let newY = !isTouchDevice() ? event.clientY : event.touches[0].clientY
  if (!target.value) return
  target.value.style.position = 'absolute'
  target.value.style.top = target.value.offsetTop - (initial.y - newY) + 'px'
  target.value.style.left = target.value.offsetLeft - (initial.x - newX) + 'px'
  target.value = null
}

const renderTemplate = () => {
  template.value = getItem('currentTemplate')
  dropZone.value.insertAdjacentHTML('beforeend', template.value)
  addEvents()
}

const saveTemplate = () => {
  let newArray = []
  let tempArray = []
  let payload = {}
  let id = route.params.id
  storedTemplates = getItem('editedTemplate')
  removeActiveWrapper(activeElement.value, activeDragIcon.value, activeToolbar.value)
  const templateContainer = document.getElementById('templateContainer')
  payload.id = id
  payload.templateImage = template1
  payload.previewHTML = templateContainer.outerHTML
  const searchResult = searchArray(id, storedTemplates)
  if (searchResult) {
    tempArray.push(payload)
    newArray = storedTemplates.map(
      (template) => tempArray.find((temp) => temp.id === template.id) || template
    )
    setItem('editedTemplate', newArray)
  } else {
    storedTemplates.push(payload)
    setItem('editedTemplate', storedTemplates)
  }
  alert('Template saved')
}

const setImageElement = (image) => {
  textElementCounter.value = Date.now()
  const templateContainer = document.getElementById('templateParentContainer')
  templateContainer.insertAdjacentHTML('beforeend', templates.imageTemplate)
  const img = document.getElementById('newImage')
  img.src = image
  document.getElementById('newImage').id === 'newImage'
    ? (document.getElementById('newImage').id = 'newImage' + textElementCounter.value)
    : ''
  document.getElementById('newDrag').id === 'newDrag'
    ? (document.getElementById('newDrag').id = 'newDrag' + textElementCounter.value)
    : ''
  document.getElementById('newToolbar').id === 'newToolbar'
    ? (document.getElementById('newToolbar').id = 'newToolbar' + textElementCounter.value)
    : ''
  showImageGallary.value = !showImageGallary.value
  if (cloneAble.value === 'cloneImage') {
    const newDragTemplate = (document.getElementById('newDragTemplate').id =
      'newDragTemplate' + textElementCounter.value)
    const updatedTemplateId = document.getElementById(newDragTemplate)
    let newX = !isTouchDevice() ? event.clientX : event.touches[0].clientX
    let newY = !isTouchDevice() ? event.clientY : event.touches[0].clientY
    updatedTemplateId.style.position = 'absolute'
    updatedTemplateId.style.top = target.value.offsetTop - (initial.y - newY) + 'px'
    updatedTemplateId.style.left = target.value.offsetLeft - (initial.x - newX) + 'px'
    target.value = null
    cloneAble.value = ''
    return
  }
  addEvents()
}

const setStyle = (color) => {
  const templateContainer = document.getElementById('templateContainer')
  templateContainer.style.backgroundColor = color
}

const setElementColor = () => {
  if (activeElement.value) {
    const element = document.getElementById(activeElement.value)
    element.style.color = elementColor.value
  }
}

const setElement = (template) => {
  textElementCounter.value = Date.now()
  const templateContainer = document.getElementById('templateContainer')
  templateContainer.insertAdjacentHTML('beforeend', template)
  document.getElementById('newTextElement')?.id === 'newTextElement'
    ? (document.getElementById('newTextElement').id = 'newTextElement' + textElementCounter.value)
    : ''
  document.getElementById('newButtonElement')?.id === 'newButtonElement'
    ? (document.getElementById('newButtonElement').id =
        'newButtonElement' + textElementCounter.value)
    : ''
  document.getElementById('newDrag').id === 'newDrag'
    ? (document.getElementById('newDrag').id = 'newDrag' + textElementCounter.value)
    : ''
  document.getElementById('newToolbar').id === 'newToolbar'
    ? (document.getElementById('newToolbar').id = 'newToolbar' + textElementCounter.value)
    : ''
  addEvents()
}

const setActiveWrapper = (event) => {
  zIndex.value++
  if (event.target.id === 'textSvg' && event.type === 'click') return
  if (event.target.id === 'buttonSvg' && event.type === 'click') return
  if (event.target.id === 'imageSvg' && event.type === 'click') return
  if (event.target.parentNode.id === 'cloneable') return
  if (
    event.target.id.includes('toolbar') ||
    event.target.id.includes('dragicon') ||
    event.target.nodeName === 'path'
  ) {
    return
  }
  if (event.target.parentNode.id === 'delete') {
    const element = event.target.parentNode.parentNode.parentNode.parentNode
    element.remove()
    return
  }
  if (activeElement.value !== '') {
    removeActiveWrapper(activeElement.value, activeDragIcon.value, activeToolbar.value)
  }
  // activeElement.value = event.target.id
  store.dispatch('setActiveElement', event.target.id)
  if (!event.target.nextElementSibling) return
  activeDragIcon.value = event.target.nextElementSibling.id
  activeToolbar.value = event.target.nextElementSibling.nextElementSibling.id
  const dragicon = document.getElementById(activeDragIcon.value)
  const toolbar = document.getElementById(activeToolbar.value)
  event.target.style.outline = 'none'
  event.target.style.border = '2px solid #d7ceb6'
  event.target.parentNode.parentNode.style.zIndex = zIndex.value.toString()
  dragicon.style.visibility = 'visible'
  toolbar.style.visibility = 'visible'
}

const removeActiveWrapper = (element, dragIcon, toolbar) => {
  const activeDragIcon = document.getElementById(dragIcon)
  const activeElement = document.getElementById(element)
  const activeToolbar = document.getElementById(toolbar)
  if (!activeElement) return
  activeElement.style.border = '0px dashed #d7ceb6'
  activeDragIcon.style.visibility = 'hidden'
  activeToolbar.style.visibility = 'hidden'
}

const addEvents = () => {
  let draggables = document.querySelectorAll('[draggable="true"]')
  let editableContents = document.querySelectorAll('[contentEditable="false"]')
  let editableContentArray = Array.apply(null, editableContents)
  let draggablesArray = Array.apply(null, draggables)
  draggablesArray.map((draggable) => {
    draggable.addEventListener('dragstart', startDrag)
    draggable.addEventListener('click', setActiveWrapper, true)
  })
  editableContentArray.map((editableContent) => {
    editableContent.contentEditable = 'true'
  })
}

const isTouchDevice = () => {
  try {
    document.createEvent('TouchEvent')
    deviceType.value = 'touch'
    return true
  } catch (e) {
    deviceType.value = 'mouse'
    return false
  }
}

watch(templateBgColor, (value) => {
  if (templateBgColor.value) setStyle(value)
})

watch(addText, () => {
  if (addText.value) setElement(templates.textTemplate)
})

watch(addImage, () => {
  if (addImage.value) showImageGallary.value = !showImageGallary.value
})

watch(addButton, () => {
  if (addButton.value) setElement(templates.buttonTemplate)
})
watch(elementColor, (newVal, oldVal) => {
  if (newVal !== oldVal && oldVal !== '') setElementColor()
})
</script>

<style lang="scss" scoped>
#customizeview {
  @include fadeIn;
  background: url(@/assets/img/background.avif);
  .container {
    background-color: $opaque-bg;

    @media screen and (min-width: 1280px) {
      width: calc(100% - #{$side-bar-width});
    }
  }

  .drop-zone {
    @media (min-width: 1024px) {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
