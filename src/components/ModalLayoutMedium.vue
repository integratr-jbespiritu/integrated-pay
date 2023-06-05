<template>
    <Transition name="modal-1-md">
        <div v-if="show">
            <div :class="`modal-1-md modal-mask-1-md modal-medium-1-md ${modalContainer}`">
                <div :class="`modal-dialog-1-md modal-dialog-1-md modal-dialog-centered modal-dialog-scrollable ${modalDialog}`">
                    <div :class="`modal-content-1-md pad-y-20p ${modalContent}`">
                        <div :class="`modal-header-1-md p-0 pad-x-20p pb-3 pt-1  ${modalHeader}`">
                            <slot name="header">
                            </slot>
                        </div>
                        <div :class="`modal-body-1-md scrollpink pad-x-20p mb-0 pb-0 ${modalBody}`">
                            <slot name="body">
                            </slot>
                        </div>
                        <div :class="`modal-footer-1-md pad-x-20p pb-0 pad-top-20p ${modalFooter}`">
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
        show: Boolean,
        modalBody: String,
        modalFooter: String,
        modalContainer: String,
        modalDialog: String,
        modalHeader: String,
        modalContent: String,
    },
}
</script>

<style>
.modal-1-md {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
}

.modal-medium-1-md {
    display: block !important;
}

.modal-dialog-1-md {
    position: relative;
    width: 672px;
    margin: 0.5rem;
    pointer-events: none;
}

.modal-content-1-md {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: 0;
}

.modal-dialog-1-md {
    overflow-y: initial !important
}

.modal-body-1-md {
    overflow-y: auto;
}

.modal-body-1-md {
    position: relative;
    flex: 1 1 auto;
    padding: .5rem;
}

.modal-mask-1-md {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    overflow-y: hidden !important;
}

.modal-header-1-md {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--vt-c-light-gray);
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}

.modal-footer-1-md {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
}

.modal-footer-1-md {
    border: none;
}


@media (min-width: 500px) {
    .modal-dialog-1-md {
        max-width: 490px;
        margin: 1.75rem auto;
    }
}

@media (min-width: 922px) {
    .modal-dialog-1-md {
        max-width: 800px;
        margin: 1.75rem auto;
    }
}

@media (min-width: 1100px) {
    .modal-dialog-1-md {
        max-width: 1000px;
        margin: 1.75rem auto;
    }
}

@media (min-width: 1400px) {
    .modal-dialog-1-md {
        max-width: 1300px;
        margin: 1.75rem auto;
    }
}

@media (min-width: 1600px) {
    .modal-dialog-1-md {
        max-width: 1500px;
        margin: 1.75rem auto;
    }
}
</style>