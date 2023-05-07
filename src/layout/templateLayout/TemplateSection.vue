<template>
  <div>
    <h1 class="tw-text-lg tw-font-bold tw-text-gray tw-text-center tw-mb-12">
      Try out our free template
    </h1>
    <div class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
      <div
        v-for="(template, index) in templates"
        :key="index + template.templateImage"
        @click="toggleDefaultShowModal(index)"
        class="tw-cursor-pointer"
      >
        <img :src="template.templateImage" class="md:tw-h-full" alt="template" />
        <div v-if="showDefaultPreviewModal && defaultPreviewIndex === index">
          <Teleport to="#teleport-modal">
            <PopupModal class="" @close="closeDefaultPreviewModal">
              <template v-slot:content>
                <div v-html="template.previewHTML"></div>
                <div class="tw-flex tw-justify-center tw-mt-4">
                  <IconBtn
                    :btnStyle="backBtnStyle"
                    :icon="editicon"
                    alt="save"
                    @click="editDefaultPopup($event)"
                  />
                  <IconBtn
                    :btnStyle="backBtnStyle"
                    :icon="closeicon"
                    class="tw-ml-4"
                    alt="save"
                    @click="closeDefaultPreviewModal"
                  />
                </div>
              </template>
            </PopupModal>
          </Teleport>
        </div>
      </div>
    </div>
    <div class="tw-mt-20">
      <h1 class="tw-text-lg tw-font-bold tw-text-gray tw-text-center tw-mb-12">Saved Template</h1>
      <!-- <div ref="savedTemplatesRef" class="tw-grid tw-grid-cols-2 tw-gap-4"></div> -->
      <div class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
        <div
          v-for="(template, index) in savedTemplate"
          :key="index + template.templateImage"
          @click="toggleSavedShowModal(index)"
          class="tw-cursor-pointer"
        >
          <img :src="template.templateImage" class="md:tw-h-full" alt="template" />
          <div v-if="showSavedPreviewModal && savedPreviewIndex === index">
            <Teleport to="#teleport-modal">
              <PopupModal class="" @close="closeSavedPreviewModal">
                <template v-slot:content>
                  <div v-html="template.previewHTML"></div>
                  <div class="tw-relative tw-flex tw-justify-center tw-mt-4 tw-z-50">
                    <IconBtn
                      :btnStyle="backBtnStyle"
                      :icon="editicon"
                      alt="save"
                      @click="editSavedPopup($event, template.id)"
                    />
                    <IconBtn
                      :btnStyle="backBtnStyle"
                      :icon="closeicon"
                      class="tw-ml-4"
                      alt="save"
                      @click="closeSavedPreviewModal"
                    />
                  </div>
                </template>
              </PopupModal>
            </Teleport>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import PopupModal from '@/components/modal/PopupModal.vue'
import IconBtn from '@/components/general/IconBtn.vue'
import editicon from '@/assets/img/edit.png'
import closeicon from '@/assets/img/close.png'
import { getItem, setItem } from '@/utils/storage.js'

const router = useRouter()

let showDefaultPreviewModal = ref(false)
let showSavedPreviewModal = ref(false)
let defaultPreviewIndex = ref(null)
let savedPreviewIndex = ref(null)

const backBtnStyle = reactive({
  backgroundColor: '#FAF9F6',
  hoverColor: '#24419a',
  hoverBgColor: '#d7ceb6',
  width: '50px',
  height: '50px',
  padding: '12px'
})

defineProps({
  templates: {
    type: Array,
    default: () => []
  }
})

const savedTemplate = computed(() => {
  return getItem('editedTemplate')
})

onMounted(() => {
  !getItem('editedTemplate') ? setItem('editedTemplate', []) : ''
})

const editDefaultPopup = (event) => {
  const id = Date.now()
  const template = event.target.offsetParent.childNodes[0].childNodes[0].childNodes[0].childNodes[1]
  setItem('currentTemplate', template.innerHTML)
  router.push({ name: 'CustomizeView', params: { id } })
}

const editSavedPopup = (event, id) => {
  const template =
    event.target.offsetParent.offsetParent.childNodes[0].childNodes[0].childNodes[0].childNodes[1]
  setItem('currentTemplate', template.innerHTML)
  router.push({ name: 'CustomizeView', params: { id } })
}

const toggleDefaultShowModal = (index) => {
  showDefaultPreviewModal.value = true
  defaultPreviewIndex.value = index
}

const toggleSavedShowModal = (index) => {
  showSavedPreviewModal.value = true
  savedPreviewIndex.value = index
}

const closeDefaultPreviewModal = () => {
  showDefaultPreviewModal.value = false
}

const closeSavedPreviewModal = () => {
  showSavedPreviewModal.value = false
}
</script>

<style lang="scss" scoped></style>
