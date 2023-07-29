

<template>
    <section class="posts_container">
        <div class="posts_creation_header">
            <div class="posts_container_picture_posting">
                <div class="profile_pic_header">
                    <img src="../../assets/user.png">
                </div>
            </div>
            <div class="container_header_input">
                <input class="header_input" type="text" placeholder="Hi Alex, tell us something">
            </div>
        </div>
    </section>
</template>

<style scoped>

.header_input{
    width: 100%;
    border: none;
    position: relative;
    height: 100%;
    padding: 15px;
    border-radius: 10px;
}

.container_header_input{
    position: relative;
    width: 100%;
}
.container_header_input::after{
    width: 25px;
    height: 25px;
    content: "";
    background-image: url("../../assets/fluent-mdl2_blog.svg");
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    right: 5px;
    top: 10px;
    z-index: 5;
}
.posts_creation_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.posts_container_picture_posting {
  width: 30px;
  height: 30px;
}

.posts_container_picture_posting img{
  width: 100%;
  height: 100%;
}

.profile_pic_header{
    align-items: center;
    display: flex;
}

.profile_pic_header img {
  margin-top: auto;
  margin-bottom: auto;

}

</style>