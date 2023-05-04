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
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
import { useStore } from 'vuex'
import BackBtn from '@/components/general/BackBtn.vue'
import IconBtn from '@/components/general/IconBtn.vue'
import SidebarLayout from '@/layout/customize/SidebarLayout.vue'
import ImageGallary from '@/layout/customize/ImageGallary.vue'
import storage from '@/utils/storage.js'
import templates from '@/utils/templates.js'
import saveicon from '@/assets/img/saveicon.png'

const store = useStore()

let dropZone = ref()
let template = ref(null)
let target = ref(null)
let showImageGallary = ref(false)
let moveElement = ref(false)
let deviceType = ref('')
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

onUnmounted(() => document.removeEventListener('dragstart', startDrag))

onMounted(() => {
  isTouchDevice()
  renderTemplate()
})

const startDrag = (event) => {
  target.value = event.target
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  initial.x = !isTouchDevice() ? event.clientX : event.touches[0].clientX
  initial.y = !isTouchDevice() ? event.clientY : event.touches[0].clientY
  moveElement.value = true
}

const onDrop = (event) => {
  let newX = !isTouchDevice() ? event.clientX : event.touches[0].clientX
  let newY = !isTouchDevice() ? event.clientY : event.touches[0].clientY
  target.value.style.position = 'absolute'
  target.value.style.top = target.value.offsetTop - (initial.y - newY) + 'px'
  target.value.style.left = target.value.offsetLeft - (initial.x - newX) + 'px'
  initial.x = newX
  initial.y = newY
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
  const templateContainer = document.getElementById('templateContainer')
  storage.setItem('editedTemplate', templateContainer.outerHTML)
  alert('Template saved')
}

const setImageElement = (image) => {
  const templateContainer = document.getElementById('templateContainer')
  templateContainer.insertAdjacentHTML('beforeend', templates.imageTemplate)
  const img = document.getElementById('image')
  img.src = image
  showImageGallary.value = !showImageGallary.value
  addEvents()
}

const setStyle = (color) => {
  const templateContainer = document.getElementById('templateContainer')
  templateContainer.style.backgroundColor = color
}

const setElement = (template) => {
  const templateContainer = document.getElementById('templateContainer')
  templateContainer.insertAdjacentHTML('beforeend', template)
  addEvents()
}

const addEvents = () => {
  let draggables = document.querySelectorAll('[draggable="true"]')
  let editableContents = document.querySelectorAll('[contentEditable="false"]')
  let editableContentArray = Array.apply(null, editableContents)
  let draggablesArray = Array.apply(null, draggables)
  draggablesArray.map((draggable) => {
    draggable.addEventListener('dragstart', startDrag)
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
