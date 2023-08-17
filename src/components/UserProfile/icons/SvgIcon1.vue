<template>
  <div :class="className">
    <svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
      <g id="Frame 427319089" xmlns="http://www.w3.org/2000/svg">
        <rect height="30" width="30" fill="currentColor" rx="15" x="1" y="1" />
        <path
          id="D"
          d="M15.256,11.624c0.88,0 1.652,0.172 2.316,0.516c0.672,0.344 1.188,0.836 1.548,1.476c0.368,0.632 0.552,1.368 0.552,2.208c0,0.84 -0.184,1.576 -0.552,2.208c-0.36,0.624 -0.876,1.108 -1.548,1.452c-0.664,0.344 -1.436,0.516 -2.316,0.516h-2.928v-8.376zM15.196,18.572c0.88,0 1.56,-0.24 2.04,-0.72c0.48,-0.48 0.72,-1.156 0.72,-2.028c0,-0.872 -0.24,-1.552 -0.72,-2.04c-0.48,-0.496 -1.16,-0.744 -2.04,-0.744h-1.188v5.532z"
          fill="white"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SvgIcon1',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
