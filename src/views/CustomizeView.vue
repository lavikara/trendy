<template>
  <div id="customizeview">
    <SidebarLayout />
    <div class="container tw-h-screen tw-bg-gray-bg2">
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
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import BackBtn from '@/components/general/BackBtn.vue'
import SidebarLayout from '@/layout/customize/SidebarLayout.vue'

const store = useStore()

let dropZone = ref()
let template = ref(null)
let target = ref(null)
let position = reactive({
  x: null,
  y: null
})

const backBtnStyle = reactive({
  backgroundColor: '#FFFFFF',
  hoverColor: '#24419a',
  hoverBgColor: '#dae1f7'
})

const templateBgColor = computed(() => {
  return store.state.templateBgColor
})

onMounted(() => {
  getTemplate()
})

const startDrag = (event) => {
  position.x = event.clientX
  position.y = event.clientY
  target.value = event.target
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  // (event.dataTransfer.setData('element', element))
}

const onDrop = (event) => {
  const rect = dropZone.value.getBoundingClientRect()
  let diffX = event.clientX - position.x
  let diffY = event.clientY - position.y
  let offSet = {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  }
  let newLeft = offSet.left + diffX
  let newTop = offSet.top + diffY
  target.value.style.position = 'absolute'
  target.value.style.top = newTop + 'px'
  target.value.style.left = newLeft + 'px'
}

const getTemplate = () => {
  template.value = JSON.parse(localStorage.getItem('currentTemplate'))
  dropZone.value.insertAdjacentHTML('beforeend', template.value)
  let draggables = document.querySelectorAll('[draggable="true"]')
  let draggablesArray = Array.apply(null, draggables)
  draggablesArray.map((draggable) => {
    draggable.addEventListener('dragstart', startDrag)
    draggable.classList.add('resizable')
    console.log(draggable.classList)
  })
}

const setTemplateBgColor = (color) => {
  const templateContainer = document.getElementById('templateContainer')
  templateContainer.style.backgroundColor = color
}

watch(templateBgColor, (value) => {
  setTemplateBgColor(value)
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
    // .resizable {
    // resize: both;
    // overflow: scroll;
    // border: 1px solid black;
    // }
    .resizable {
      resize: both;
      overflow: scroll;
      border: 1px solid black;
      // position: absolute;
      // width: 96px;
      padding-left: 4px;
      // height: 100%;
      // right: 0;
      background-color: #f0f0ff;
    }

    // .resizable::after {
    // content: '';
    // background-color: #ccc;
    // position: absolute;
    // left: 0;
    // width: 4px;
    // height: 100%;
    // cursor: ew-resize;
    // }

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
