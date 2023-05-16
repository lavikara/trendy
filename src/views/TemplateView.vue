<template>
  <div id="templateview">
    <nav>
      <TopNavbar />
    </nav>
    <main class="container tw-px-4 tw-py-28 lg:tw-pb-44 lg:tw-pt-32">
      <TemplateSection :templates="templates" />
    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import TopNavbar from '@/layout/navigation/TopNavbar.vue'
import TemplateSection from '@/layout/templateLayout/TemplateSection.vue'
import template1 from '@/assets/img/template.png'
// import template2 from '@/assets/img/template2.png'

const templates = reactive([
  {
    id: 1,
    templateImage: template1,
    previewHTML: `<div id="templateParentContainer">
                    <form id="templateContainer" class="tw-relative tw-h-[450px] tw-w-[450px] tw-bg-orange-bg2 tw-rounded-full  tw-py-[5px]">
                      <div class="tw-h-[440px] tw-w-[440px] tw-bg-orange-white tw-rounded-full tw-border-2 tw-border-white tw-px-10 tw-mx-[5px]">
                        <div draggable="true" class="tw-absolute tw-left-[155px] tw-top-[20px] tw-cursor-move">
                          <div class="tw-relative">
                            <div id="image" class="tw-flex tw-justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" class="tw-pointer-events-none tw-mt-4" width="50" height="30" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star">
                                <path d="M21.9189453,10.1265259c0.0802612-0.546814-0.2979736-1.0551147-0.8447266-1.135376L15.4228516,8.164978l-2.5253906-5.1464844c-0.0909424-0.1569824-0.2214355-0.2873535-0.37854-0.3781128c-0.4960327-0.2866821-1.1306152-0.1170044-1.4173584,0.3790894L8.5771484,8.164978L2.9257812,8.9912109C2.7097168,9.0228882,2.5100098,9.1244507,2.3569946,9.2802734c-0.387146,0.3943481-0.3812256,1.0278931,0.0131226,1.4150391l4.0927734,4.0126953l-0.9658203,5.6640625c-0.0091553,0.0541992-0.013855,0.1090698-0.0139771,0.1641235c-0.0015259,0.5534058,0.4458618,1.0032959,0.9993286,1.0048218c0.163147-0.0002441,0.3237915-0.0404663,0.4677734-0.1171875L12,18.7539062l5.0488281,2.6689453c0.1951294,0.1035767,0.4190063,0.1396484,0.6367798,0.1025391c0.5441895-0.0928345,0.9100952-0.6091309,0.8173218-1.1533203l-0.9658203-5.6640625l4.09375-4.0137329C21.7861328,10.5414429,21.8872681,10.3421021,21.9189453,10.1265259z M16.6503906,14.1766968c-0.1170654,0.1148682-0.1706543,0.2796631-0.1435547,0.4414062l1.0097656,5.9208984l-5.2832031-2.7930298c-0.1463013-0.0761719-0.3204956-0.0761719-0.4667969,0L6.4833984,20.539978l1.0097046-5.921814c0.0271606-0.1617432-0.0264282-0.3265381-0.1435547-0.4414062L3.0702515,9.9814453l5.9121094-0.8642578C9.1456299,9.0927734,9.286499,8.9898682,9.359375,8.8417969L12,3.460022l2.640564,5.3817139c0.072876,0.1480713,0.2138062,0.2509766,0.3770142,0.2753906l5.9130859,0.8632812L16.6503906,14.1766968z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" class="tw-pointer-events-none" width="50" height="40" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star">
                                <path d="M21.9189453,10.1265259c0.0802612-0.546814-0.2979736-1.0551147-0.8447266-1.135376L15.4228516,8.164978l-2.5253906-5.1464844c-0.0909424-0.1569824-0.2214355-0.2873535-0.37854-0.3781128c-0.4960327-0.2866821-1.1306152-0.1170044-1.4173584,0.3790894L8.5771484,8.164978L2.9257812,8.9912109C2.7097168,9.0228882,2.5100098,9.1244507,2.3569946,9.2802734c-0.387146,0.3943481-0.3812256,1.0278931,0.0131226,1.4150391l4.0927734,4.0126953l-0.9658203,5.6640625c-0.0091553,0.0541992-0.013855,0.1090698-0.0139771,0.1641235c-0.0015259,0.5534058,0.4458618,1.0032959,0.9993286,1.0048218c0.163147-0.0002441,0.3237915-0.0404663,0.4677734-0.1171875L12,18.7539062l5.0488281,2.6689453c0.1951294,0.1035767,0.4190063,0.1396484,0.6367798,0.1025391c0.5441895-0.0928345,0.9100952-0.6091309,0.8173218-1.1533203l-0.9658203-5.6640625l4.09375-4.0137329C21.7861328,10.5414429,21.8872681,10.3421021,21.9189453,10.1265259z M16.6503906,14.1766968c-0.1170654,0.1148682-0.1706543,0.2796631-0.1435547,0.4414062l1.0097656,5.9208984l-5.2832031-2.7930298c-0.1463013-0.0761719-0.3204956-0.0761719-0.4667969,0L6.4833984,20.539978l1.0097046-5.921814c0.0271606-0.1617432-0.0264282-0.3265381-0.1435547-0.4414062L3.0702515,9.9814453l5.9121094-0.8642578C9.1456299,9.0927734,9.286499,8.9898682,9.359375,8.8417969L12,3.460022l2.640564,5.3817139c0.072876,0.1480713,0.2138062,0.2509766,0.3770142,0.2753906l5.9130859,0.8632812L16.6503906,14.1766968z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" class="tw-pointer-events-none tw-mt-4" width="50" height="30" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="star">
                                <path d="M21.9189453,10.1265259c0.0802612-0.546814-0.2979736-1.0551147-0.8447266-1.135376L15.4228516,8.164978l-2.5253906-5.1464844c-0.0909424-0.1569824-0.2214355-0.2873535-0.37854-0.3781128c-0.4960327-0.2866821-1.1306152-0.1170044-1.4173584,0.3790894L8.5771484,8.164978L2.9257812,8.9912109C2.7097168,9.0228882,2.5100098,9.1244507,2.3569946,9.2802734c-0.387146,0.3943481-0.3812256,1.0278931,0.0131226,1.4150391l4.0927734,4.0126953l-0.9658203,5.6640625c-0.0091553,0.0541992-0.013855,0.1090698-0.0139771,0.1641235c-0.0015259,0.5534058,0.4458618,1.0032959,0.9993286,1.0048218c0.163147-0.0002441,0.3237915-0.0404663,0.4677734-0.1171875L12,18.7539062l5.0488281,2.6689453c0.1951294,0.1035767,0.4190063,0.1396484,0.6367798,0.1025391c0.5441895-0.0928345,0.9100952-0.6091309,0.8173218-1.1533203l-0.9658203-5.6640625l4.09375-4.0137329C21.7861328,10.5414429,21.8872681,10.3421021,21.9189453,10.1265259z M16.6503906,14.1766968c-0.1170654,0.1148682-0.1706543,0.2796631-0.1435547,0.4414062l1.0097656,5.9208984l-5.2832031-2.7930298c-0.1463013-0.0761719-0.3204956-0.0761719-0.4667969,0L6.4833984,20.539978l1.0097046-5.921814c0.0271606-0.1617432-0.0264282-0.3265381-0.1435547-0.4414062L3.0702515,9.9814453l5.9121094-0.8642578C9.1456299,9.0927734,9.286499,8.9898682,9.359375,8.8417969L12,3.460022l2.640564,5.3817139c0.072876,0.1480713,0.2138062,0.2509766,0.3770142,0.2753906l5.9130859,0.8632812L16.6503906,14.1766968z"></path>
                              </svg>
                            </div>
                            <div id="dragicon0" class="tw-invisible tw-flex tw-justify-end tw--mt-[30px] tw--mr-[28px]">
                              <div class="tw-relative tw-flex tw-items-center tw-w-[30px] tw-h-[30px] tw-bg-white tw-rounded-lg tw-border tw-border-[#d7ceb6] tw-cursor-move">
                                <svg class="tw-m-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z" fill="#222222"/>
                                  <path d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z" fill="#222222"/>
                                  <path d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z" fill="#222222"/>
                                  <path d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z" fill="#222222"/>
                                </svg>                       
                              </div>
                            </div>
                            <div id="toolbar0" class="before:tw-absolute before:tw-left-4 before:tw--top-[4px] before:tw-h-[8px] before:tw-w-[8px] before:tw-origin-center before:tw-rotate-45 before:tw-bg-white before:tw-border-2 before:tw-border-s-yellow-bg3 before:tw-border-t-yellow-bg3 before:tw-border-e-transparent before:tw-border-b-transparent tw-invisible tw-absolute tw--bottom-12 tw-flex tw-w-min-[50px] tw-w-max-[300px] tw-bg-gray-bg2 tw-border-t-2 tw-border-t-yellow-bg3 tw-cursor-default tw-shadow-lg tw-p-2">
                              <div id="delete" class="tw-relative tw-flex tw-justify-center">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div class="overlay tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-cursor-pointer"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div draggable="true" class="tw-absolute tw-top-[85px]">
                          <div class="tw-relative tw-h-full tw-w-[355px]">
                            <div id="headerText" contentEditable="false" class="tw-relative tw-h-full tw-w-[355px] tw-text-white tw-text-lg xs:tw-text-2xl tw-font-bold tw-text-center">
                              All the text and elements in this popup should be editable and draggable
                            </div>
                            <div id="dragicon1" class="tw-invisible tw-flex tw-justify-end tw--mt-[30px] tw--mr-[28px]">
                              <div class="tw-relative tw-flex tw-items-center tw-w-[30px] tw-h-[30px] tw-bg-white tw-rounded-lg tw-border tw-border-[#d7ceb6] tw-cursor-move">
                                <svg class="tw-m-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z" fill="#222222"/>
                                  <path d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z" fill="#222222"/>
                                  <path d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z" fill="#222222"/>
                                  <path d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z" fill="#222222"/>
                                </svg>                       
                              </div>
                            </div>
                            <div id="toolbar1" class="before:tw-absolute before:tw-left-4 before:tw--top-[4px] before:tw-h-[8px] before:tw-w-[8px] before:tw-origin-center before:tw-rotate-45 before:tw-bg-white before:tw-border-2 before:tw-border-s-yellow-bg3 before:tw-border-t-yellow-bg3 before:tw-border-e-transparent before:tw-border-b-transparent tw-invisible tw-absolute tw--bottom-12 tw-flex tw-w-min-[50px] tw-w-max-[300px] tw-bg-gray-bg2 tw-border-t-2 tw-border-t-yellow-bg3 tw-cursor-default tw-shadow-lg tw-p-2">
                              <div id="delete" class="tw-relative tw-flex tw-justify-center">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div class="overlay tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-cursor-pointer"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div draggable="true" class="tw-absolute tw-top-[200px] tw-h-min tw-w-[355px] tw-cursor-move">                      
                          <div class="tw-relative">
                            <input
                              class="tw-w-full tw-h-full tw-bg-white tw-rounded-lg tw-p-4"
                              placeholder="E-mail"
                              name="email"
                              id="email"
                            />
                            <div id="dragicon2" class="tw-invisible tw-flex tw-justify-end tw--mt-[30px] tw--mr-[28px]">
                              <div class="tw-relative tw-flex tw-items-center tw-w-[30px] tw-h-[30px] tw-bg-white tw-rounded-lg tw-border tw-border-[#d7ceb6] tw-cursor-move">
                                <svg class="tw-m-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z" fill="#222222"/>
                                  <path d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z" fill="#222222"/>
                                  <path d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z" fill="#222222"/>
                                  <path d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z" fill="#222222"/>
                                </svg>                       
                              </div>
                            </div>
                            <div id="toolbar2" class="before:tw-absolute before:tw-left-4 before:tw--top-[4px] before:tw-h-[8px] before:tw-w-[8px] before:tw-origin-center before:tw-rotate-45 before:tw-bg-white before:tw-border-2 before:tw-border-s-yellow-bg3 before:tw-border-t-yellow-bg3 before:tw-border-e-transparent before:tw-border-b-transparent tw-invisible tw-absolute tw--bottom-12 tw-flex tw-w-min-[50px] tw-w-max-[300px] tw-bg-gray-bg2 tw-border-t-2 tw-border-t-yellow-bg3 tw-cursor-default tw-shadow-lg tw-p-2">
                              <div id="delete" class="tw-relative tw-flex tw-justify-center">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div class="overlay tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-cursor-pointer"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div draggable="true" class="tw-absolute tw-top-[270px] tw-cursor-move">                      
                          <div class="tw-relative tw-h-[55px] tw-min-w-[355px]">
                            <button
                                id="submitBtn"
                                contentEditable="false"
                                type="reset"
                                class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-bg-black tw-rounded-lg tw-font-semibold tw-text-white tw-cursor-move hover:tw-bg-black-bg1"
                            >
                              Signup Now
                            </button>
                            <div id="dragicon3" class="tw-invisible tw-flex tw-justify-end tw--mt-[30px] tw--mr-[28px]">
                              <div class="tw-relative tw-flex tw-items-center tw-w-[30px] tw-h-[30px] tw-bg-white tw-rounded-lg tw-border tw-border-[#d7ceb6] tw-cursor-move">
                                <svg class="tw-m-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z" fill="#222222"/>
                                  <path d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z" fill="#222222"/>
                                  <path d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z" fill="#222222"/>
                                  <path d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z" fill="#222222"/>
                                </svg>                       
                              </div>
                            </div>
                            <div id="toolbar3" class="before:tw-absolute before:tw-left-4 before:tw--top-[4px] before:tw-h-[8px] before:tw-w-[8px] before:tw-origin-center before:tw-rotate-45 before:tw-bg-white before:tw-border-2 before:tw-border-s-yellow-bg3 before:tw-border-t-yellow-bg3 before:tw-border-e-transparent before:tw-border-b-transparent tw-invisible tw-absolute tw--bottom-12 tw-flex tw-w-min-[50px] tw-w-max-[300px] tw-bg-gray-bg2 tw-border-t-2 tw-border-t-yellow-bg3 tw-cursor-default tw-shadow-lg tw-p-2">
                              <div id="delete" class="tw-relative tw-flex tw-justify-center">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div class="overlay tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-cursor-pointer"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div draggable="true" class="tw-absolute tw-top-[320px] tw-h-min tw-w-[355px] tw-text-white tw-text-center tw-text-sm tw-mt-2">
                          <div class="tw-relative">
                            <p id="textPara" contentEditable="false">
                              No credit card required. No surprises
                            </p>
                            <div id="dragicon4" class="tw-invisible tw-flex tw-justify-end tw--mt-[30px] tw--mr-[28px]">
                              <div class="tw-relative tw-flex tw-items-center tw-w-[30px] tw-h-[30px] tw-bg-white tw-rounded-lg tw-border tw-border-[#d7ceb6] tw-cursor-move">
                                <svg class="tw-m-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z" fill="#222222"/>
                                  <path d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z" fill="#222222"/>
                                  <path d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z" fill="#222222"/>
                                  <path d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z" fill="#222222"/>
                                </svg>                       
                              </div>
                            </div>
                            <div id="toolbar4" class="before:tw-absolute before:tw-left-4 before:tw--top-[4px] before:tw-h-[8px] before:tw-w-[8px] before:tw-origin-center before:tw-rotate-45 before:tw-bg-white before:tw-border-2 before:tw-border-s-yellow-bg3 before:tw-border-t-yellow-bg3 before:tw-border-e-transparent before:tw-border-b-transparent tw-invisible tw-absolute tw--bottom-12 tw-flex tw-w-min-[50px] tw-w-max-[300px] tw-bg-gray-bg2 tw-border-t-2 tw-border-t-yellow-bg3 tw-cursor-default tw-shadow-lg tw-p-2">
                              <div id="delete" class="tw-relative tw-flex tw-justify-center">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div class="overlay tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-cursor-pointer"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>`
  }
  // {
  //   id: 2,
  //   templateImage: template2,
  //   previewHTML: `<form">
  //                   <div class="tw-flex tw-flex-col tw-items-center tw-bg-white tw-py-1">
  //                     <div class="tw-h-12 tw-w-12 tw-border tw-rounded-full tw-bg-gray tw-py-1.5 tw--mt-3">
  //                       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 32 32" id="profile" class="tw--ml-0.5">
  //                         <g data-name="Layer 2">
  //                           <circle cx="16" cy="6.96" r="6"></circle>
  //                           <path
  //                             d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
  //                           ></path>
  //                         </g>
  //                       </svg>
  //                     </div>
  //                     <p draggable="true" contentEditable="false" class="tw-text-sm tw-font-bold tw-text-gray">Temi Kara</p>
  //                   </div>
  //                   <div class="tw-max-w-[450px] tw-h-[450px] tw-bg-red tw-px-8 sm:tw-px-20 tw-py-32">
  //                     <div class="tw-flex tw-flex-col">
  //                       <h1 draggable="true" contentEditable="false" class="tw-text-white tw-text-xl tw-font-bold tw-text-center tw-m-auto">
  //                         We're excited to announce we're now doing XYZ
  //                       </h1>
  //                       <p draggable="true" contentEditable="false" class="tw-text-white tw-text-md tw-text-center tw-mt-6">
  //                         Click below to get the full story
  //                       </p>
  //                     </div>
  //                     <button
  //                         type="reset"
  //                         draggable="true"
  //                         contentEditable="false"
  //                         class="tw-w-full tw-flex tw-justify-center tw-bg-white tw-rounded-lg tw-font-semibold tw-text-red hover:tw-text-red hover:tw-bg-red-bg1 tw-p-4 tw-mt-4"
  //                     >
  //                         <span>Show More</span>
  //                     </button>
  //                   </div>
  //                 </form>`
  // }
])
</script>

<style lang="scss" scoped>
#templateview {
  @include fadeIn;

  .container {
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
