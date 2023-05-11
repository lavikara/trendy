<template>
  <div class="tw-cursor-pointer">
    <img :src="template.templateImage" class="md:tw-h-full" alt="template" />
    <div v-if="showPreviewModal && previewIndex === index">
      <Teleport to="#teleport-modal">
        <PopupModal class="" @close="closePreviewModal">
          <template v-slot:content>
            <div v-html="template.previewHTML"></div>
            <div class="tw-flex tw-justify-center tw-mt-4">
              <IconBtn
                :btnStyle="btnStyle"
                :icon="editicon"
                alt="save"
                @click="editPopup($event, template.id)"
              />
              <IconBtn
                :btnStyle="btnStyle"
                :icon="closeicon"
                class="tw-ml-4"
                alt="save"
                @click="closePreviewModal"
              />
            </div>
          </template>
        </PopupModal>
      </Teleport>
    </div>
  </div>
</template>

<!-- .wrapper .right::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background-color: #001140;
    left: -0px;
    top: 23%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  } -->

<script setup>
import { reactive } from 'vue'
import PopupModal from '@/components/modal/PopupModal.vue'
import IconBtn from '@/components/general/IconBtn.vue'
import editicon from '@/assets/img/edit.png'
import closeicon from '@/assets/img/close.png'

defineProps({
  template: { type: Object, default: () => {}, required: true },
  index: { type: Number, required: true },
  showPreviewModal: { type: Boolean, default: () => false, required: true },
  previewIndex: { type: Number, required: true }
})

const emit = defineEmits(['closePreviewModal', 'editPopup'])

const btnStyle = reactive({
  backgroundColor: '#FAF9F6',
  hoverColor: '#24419a',
  hoverBgColor: '#d7ceb6',
  width: '50px',
  height: '50px',
  padding: '12px'
})

const closePreviewModal = () => {
  emit('closePreviewModal')
}

const editPopup = (event, templateId) => {
  emit('editPopup', { event, templateId })
}
</script>

<style lang="scss" scoped></style>
