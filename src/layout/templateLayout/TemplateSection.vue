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
                <ButtonComponent
                  title="Edit"
                  :btnStyle="editBtnStyle"
                  class="tw-max-w-[200px] tw-mx-auto tw-mt-4"
                  @click="router.push({ name: 'CustomizeView' })"
                />
              </template>
            </PopupModal>
          </Teleport>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import PopupModal from '@/components/modal/PopupModal.vue'
import ButtonComponent from '@/components/general/ButtonComponent.vue'

const router = useRouter()

let showModal = ref(false)
let previewIndex = ref(null)

const editBtnStyle = reactive({
  backgroundColor: '#24419a',
  color: '#FFFFFF',
  border: '#24419a',
  hoverColor: '#24419a',
  hoverBgColor: '#dae1f7'
})

defineProps({
  templates: {
    type: Array,
    default: () => []
  }
})

const toggleShowModal = (index) => {
  showModal.value = true
  previewIndex.value = index
}
const closeModal = () => {
  showModal.value = false
}
</script>

<style lang="scss" scoped></style>
