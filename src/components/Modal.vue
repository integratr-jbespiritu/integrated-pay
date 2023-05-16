<template>
  <Transition name="modal2">
    <div>
      <div class="modal modal-mask-2 modal-large-2">
        <div class="modal-dialog modal-dialog-2 modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content pad-y-20p">
            <div class="modal-header modal-header-2 p-0 pad-x-20p pb-3 pt-1">
              <slot name="header">
              </slot>
            </div>
            <div class="modal-body modal-body-2 scrollpink pad-x-20p mb-0 pb-0">
              <slot name="body">
              </slot>
            </div>
            <div class="modal-footer modal-footer-2 pad-x-20p pb-0 pad-top-20p">
              <slot name="footer">
                            
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>          
  </Transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
  }
}
</script>