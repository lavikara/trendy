<template>
  <div id="customizeview">
    <SidebarLayout />
    <div class="container tw-h-screen">
      <main
        ref="dropZone"
        class="drop-zone tw-relative tw-h-screen tw-flex tw-justify-center tw-items-center tw-px-4 tw-py-28 lg:tw-pb-44 lg:tw-pt-32"
        @drop="onDrop($event)"
        @dragenter.prevent
        @dragover.prevent
      >
        <BackBtn
          :btnStyle="backBtnStyle"
          class="tw-absolute tw--top-0 tw--left-0 tw-w-[80px] tw-rounded-full tw-ml-4 tw-mt-4"
        />
        <IconBtn
          :btnStyle="backBtnStyle"
          :icon="saveicon"
          alt="save"
          class="tw-absolute tw--top-0 tw--right-0 tw-w-[80px] tw-rounded-full tw-ml-4 tw-mt-4"
          @click="saveTemplate"
        />
        <div
          v-if="showImageGallary"
          class="tw-absolute tw-top-auto tw-left-auto tw-h-3/6 tw-overflow-scroll tw-rounded-lg tw-bg-gray-bg2 tw-shadow-md tw-p-4 tw-mx-28 tw-z-50"
        >
          <ImageGallary @imageSelected="setImageElement" />
        </div>
        <div v-if="vShow" id="canvas"></div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import BackBtn from '@/components/general/BackBtn.vue'
import IconBtn from '@/components/general/IconBtn.vue'
import SidebarLayout from '@/layout/customize/SidebarLayout.vue'
import ImageGallary from '@/layout/customize/ImageGallary.vue'
import storage from '@/utils/storage.js'
import templates from '@/utils/templates.js'
import saveicon from '@/assets/img/saveicon.png'
import template1 from '@/assets/img/template.png'

const store = useStore()
const route = useRoute()

let dropZone = ref()
let template = ref(null)
let target = ref(null)
let vShow = ref(true)
let showImageGallary = ref(false)
let deviceType = ref('')
let textElementCounter = ref(0)
let activeElement = ref('')
let activeDragIcon = ref('')
let storedTemplates = reactive([])
let initial = reactive({
  x: 0,
  y: 0
})

const backBtnStyle = reactive({
  backgroundColor: '#FAF9F6',
  hoverColor: '#24419a',
  hoverBgColor: '#d7ceb6'
})

const templateBgColor = computed(() => {
  return store.state.templateBgColor
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
  document.removeEventListener('focus', setActiveWrapper, true)
})

onMounted(() => {
  isTouchDevice()
  renderTemplate()
  !storage.getItem('editedTemplate') ? storage.setItem('editedTemplate', []) : ''
})

const startDrag = (event) => {
  if (event.target.nodeName === 'IMG') return
  target.value = event.target
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  initial.x = !isTouchDevice() ? event.clientX : event.touches[0].clientX
  initial.y = !isTouchDevice() ? event.clientY : event.touches[0].clientY
}

const onDrop = (event) => {
  let newX = !isTouchDevice() ? event.clientX : event.touches[0].clientX
  let newY = !isTouchDevice() ? event.clientY : event.touches[0].clientY
  if (!target.value) return
  target.value.style.position = 'absolute'
  target.value.style.top = target.value.offsetTop - (initial.y - newY) + 'px'
  target.value.style.left = target.value.offsetLeft - (initial.x - newX) + 'px'
  initial.x = newX
  initial.y = newY
  target.value = null
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

const renderTemplate = () => {
  template.value = storage.getItem('currentTemplate')
  dropZone.value.insertAdjacentHTML('beforeend', template.value)
  addEvents()
}

const saveTemplate = () => {
  let newArray = []
  let tempArray = []
  let payload = {}
  let id = route.params.id
  storedTemplates = storage.getItem('editedTemplate')
  removeActiveWrapper(activeElement.value, activeDragIcon.value)
  const templateContainer = document.getElementById('templateContainer')
  payload.id = id
  payload.templateImage = template1
  payload.previewHTML = templateContainer.outerHTML
  const searchResult = search(id, storedTemplates)
  if (searchResult) {
    tempArray.push(payload)
    newArray = storedTemplates.map(
      (template) => tempArray.find((temp) => temp.id === template.id) || template
    )
    storage.setItem('editedTemplate', newArray)
  } else {
    storedTemplates.push(payload)
    storage.setItem('editedTemplate', storedTemplates)
  }
  alert('Template saved')
}

const setImageElement = (image) => {
  textElementCounter.value = Date.now()
  const templateContainer = document.getElementById('templateContainer')
  templateContainer.insertAdjacentHTML('beforeend', templates.imageTemplate)
  const img = document.getElementById('newImage')
  img.src = image
  document.getElementById('newImage').id === 'newImage'
    ? (document.getElementById('newImage').id = 'newImage' + textElementCounter.value)
    : ''
  document.getElementById('newDrag').id === 'newDrag'
    ? (document.getElementById('newDrag').id = 'newDrag' + textElementCounter.value)
    : ''
  showImageGallary.value = !showImageGallary.value
  addEvents()
}

const setStyle = (color) => {
  const templateContainer = document.getElementById('templateContainer')
  templateContainer.style.backgroundColor = color
}

const setElement = (template) => {
  textElementCounter.value = Date.now()
  const templateContainer = document.getElementById('templateContainer')
  templateContainer.insertAdjacentHTML('beforeend', template)
  document.getElementById('newElement').id === 'newElement'
    ? (document.getElementById('newElement').id = 'newElement' + textElementCounter.value)
    : ''
  document.getElementById('newDrag').id === 'newDrag'
    ? (document.getElementById('newDrag').id = 'newDrag' + textElementCounter.value)
    : ''
  addEvents()
}

const setActiveWrapper = (event) => {
  if (activeElement.value !== '') removeActiveWrapper(activeElement.value, activeDragIcon.value)
  activeElement.value = event.target.id
  if (!event.target.nextElementSibling) return
  activeDragIcon.value = event.target.nextElementSibling.id
  const dragicon = document.getElementById(activeDragIcon.value)
  event.target.style.outline = 'none'
  event.target.style.border = '2px solid #d7ceb6'
  dragicon.style.visibility = 'visible'
}

let search = (idKey, myArray) => {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].id === idKey) {
      return myArray[i]
    }
  }
}

const removeActiveWrapper = (element, dragIcon) => {
  const drag = document.getElementById(dragIcon)
  const activeElement = document.getElementById(element)
  if (!activeElement) return
  activeElement.style.border = '0px dashed #d7ceb6'
  drag.style.visibility = 'hidden'
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
</script>

<style lang="scss" scoped>
#customizeview {
  @include fadeIn;
  height: 100%;
  display: flex;
  .container {
    width: 100%;

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
