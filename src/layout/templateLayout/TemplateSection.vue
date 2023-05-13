<template>
  <div>
    <h1 class="tw-text-lg tw-font-bold tw-text-gray tw-text-center tw-mb-12">
      Try out our free template
    </h1>
    <div class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
      <TemplateDisplay
        v-for="(template, index) in templates"
        :key="template.id"
        :template="template"
        :index="index"
        :showPreviewModal="showDefaultPreviewModal"
        :previewIndex="defaultPreviewIndex"
        @click="toggleDefaultShowModal(index)"
        @closePreviewModal="closeDefaultPreviewModal"
        @editPopup="editPopup"
      />
    </div>
    <div class="tw-mt-20">
      <h1 class="tw-text-lg tw-font-bold tw-text-gray tw-text-center tw-mb-12">Saved Template</h1>
      <div class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
        <TemplateDisplay
          v-for="(template, index) in savedTemplate"
          :key="template.id"
          :template="template"
          :index="index"
          :showPreviewModal="showSavedPreviewModal"
          :previewIndex="savedPreviewIndex"
          @click="toggleSavedShowModal(index)"
          @closePreviewModal="closeSavedPreviewModal"
          @editPopup="editPopup"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import TemplateDisplay from '@/components/template/TemplateDisplay.vue'
import { getItem, setItem } from '@/utils/storage.js'

const router = useRouter()

let showDefaultPreviewModal = ref(false)
let showSavedPreviewModal = ref(false)
let defaultPreviewIndex = ref(0)
let savedPreviewIndex = ref(0)

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

const editPopup = (emitObj) => {
  const id = emitObj.templateId < 1000 ? Date.now() : emitObj.templateId
  const template =
    emitObj.event.target.offsetParent.childNodes[0].childNodes[0].childNodes[0].childNodes[1]
  setItem('currentTemplate', template.innerHTML)
  router.push({ name: 'CustomizeView', params: { id } })
}

// const editSavedPopup = (emitObj) => {
//   const template =
//     emitObj.event.target.offsetParent.childNodes[0].childNodes[0].childNodes[0].childNodes[1]
//   setItem('currentTemplate', template.innerHTML)
//   router.push({ name: 'CustomizeView', params: { id: emitObj.templateId } })
// }

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
