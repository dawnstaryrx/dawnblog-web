<template>
    <div class="container content-field">
        <div class="card mb-3 mx-auto" style="max-width: 80%; height: 500px;">
            <div class="row g-0">
                <div class="col-md-6">
                <img src="@/assets/loginLeftPic.jpg" class="img-fluid rounded-start" style="width: 100%; height: 500px;">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <slot></slot>
                    </div>
                </div>
        </div>
</div>
    </div>

</template>

<script>
export default {};
</script>

<style scoped>
.content-field{
    margin-top: 80px;
}
</style>