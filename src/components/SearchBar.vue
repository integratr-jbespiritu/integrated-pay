<template>
    <div class="header">
        <div class="search-box input-group flex-nowrap position-absolute top-50 start-0 translate-middle-y" style="width: 28rem; padding-left: 18rem; height: 2rem;">
            <span class="input-group-text" id="addon-wrapping">
                <i class="icon-search isax isax-search-status-1 position-absolute top-50 translate-middle"></i>
            </span>
            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping">
        </div>
        <div class="header-icons">
            <i class="isax isax-notification5 icon-notification5 position-absolute bottom-0 end-0 ms-1 m-1"></i>
        </div>
    </div>

</template>


<script>
    export default {
        name: "SearchBar",
    };
</script>