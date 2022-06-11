<template>
  <div class="row center-xs about">
    <h1 class="title">Learn more about Star Wars</h1>
    <div class="video">
      <iframe
        class="vid"
        src="https://www.youtube.com/embed/S0tPMLOwyYw"
        frameBorder="0"
        allowFullScreen
        title="video"
      >
      </iframe>
    </div>
  </div>
</template>

<style lang="scss">
.video {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 40%;
}

.vid {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
