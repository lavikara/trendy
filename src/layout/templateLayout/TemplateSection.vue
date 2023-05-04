<template>
  <div>
    <h1 class="tw-text-lg tw-font-bold tw-text-gray tw-text-center tw-mb-12">
      Try out our free template
    </h1>
    <div class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
      <div
        v-for="(template, index) in templates"
        :key="index + template.templateImage"
        @click="toggleShowModal(index)"
        class="tw-cursor-pointer"
      >
        <img :src="template.templateImage" class="md:tw-h-full" alt="template" />
        <div v-if="showModal && previewIndex === index">
          <Teleport to="#teleport-modal">
            <PopupModal class="" @close="closeModal">
              <template v-slot:content>
                <div v-html="template.previewHTML"></div>
                <div class="tw-flex tw-justify-center tw-mt-4">
                  <IconBtn
                    :btnStyle="backBtnStyle"
                    :icon="editicon"
                    alt="save"
                    @click="editPopup($event)"
                  />
                  <IconBtn
                    :btnStyle="backBtnStyle"
                    :icon="closeicon"
                    class="tw-ml-4"
                    alt="save"
                    @click="closeModal"
                  />
                </div>
              </template>
            </PopupModal>
          </Teleport>
        </div>
      </div>
    </div>
    <div v-if="savedTemplate" class="tw-mt-20">
      <h1 class="tw-text-lg tw-font-bold tw-text-gray tw-text-center tw-mb-12">Saved Template</h1>
      <div v-html="savedTemplate"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PopupModal from '@/components/modal/PopupModal.vue'
import IconBtn from '@/components/general/IconBtn.vue'
import editicon from '@/assets/img/edit.png'
import closeicon from '@/assets/img/close.png'
import storage from '@/utils/storage.js'

const router = useRouter()

let showModal = ref(false)
let previewIndex = ref(null)
const savedTemplate = ref(null)

const backBtnStyle = reactive({
  backgroundColor: '#FAF9F6',
  hoverColor: '#24419a',
  hoverBgColor: '#d7ceb6'
})

defineProps({
  templates: {
    type: Array,
    default: () => []
  }
})

onMounted(() => {
  renderSavedTemplate()
})

const renderSavedTemplate = () => {
  savedTemplate.value = storage.getItem('editedTemplate')
}

const editPopup = (event) => {
  const template = event.target.offsetParent.childNodes[0].childNodes[0].childNodes[0].childNodes[1]
  storage.setItem('currentTemplate', template.innerHTML)
  router.push({ name: 'CustomizeView' })
}

const toggleShowModal = (index) => {
  showModal.value = true
  previewIndex.value = index
}
const closeModal = () => {
  showModal.value = false
}
</script>

<style lang="scss" scoped></style>

<!-- let draggableElem = document.getElementById("draggable-elem");
let initialX = 0,
  initialY = 0;
let moveElement = false;
//Events Object
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};
let deviceType = "";
//Detech touch device
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};
isTouchDevice();
//Start (mouse down / touch start)
draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  //initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  //Start movement
  moveElement = true;
});
//Move
draggableElem.addEventListener(events[deviceType].move, (e) => {
  //if movement == true then set top and left to new X andY while removing any offset
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});
//mouse up / touch end
draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);
draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
}); -->
