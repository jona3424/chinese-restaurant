<template>
  <div class="gallery container mt-4">
    <h2 class="text-center">Галерија</h2>
    <p class="text-center">Овде можете видети слике и видео записе нашег ресторана.</p>

    <h3 class="mt-4">Видео галерија</h3>
    <div class="video-gallery">
      <div class="video-container" v-for="video in videos" :key="video.title">
        <iframe :src="video.src" frameborder="0" allowfullscreen></iframe>
        <p>{{ video.title }}</p>
      </div>
    </div>

    <h3 class="mt-4">Галерија слика</h3>
    <div class="image-gallery">
      <div class="image-container" v-for="image in images" :key="image.alt">
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
  </div>
</template>

<script>
import rolls from '../assets/rolls.jpg';
import soup from '../assets/soup.jpg';
import salata from '../assets/salata.jpg';
import patka1 from '../assets/patka1.webp';
import ribs from '../assets/ribs.jpg';
import batak from '../assets/batak.jpg';
import sladoled from '../assets/sladoled.jpg';
import pohocoko from '../assets/pohocoko.jpg';
import banana from '../assets/banana.jpg';

export default {
  name: 'PhotoGallery',
  data() {
    return {
      videos: [
        { title: 'Видео 1', src: 'https://www.youtube.com/embed/VIDEO_ID_1' },
        { title: 'Видео 2', src: 'https://www.youtube.com/embed/VIDEO_ID_2' },
        { title: 'Видео 3', src: 'https://www.youtube.com/embed/VIDEO_ID_3' }
      ],
      images: [
        { src: rolls, alt: 'Слика 1' },
        { src: soup, alt: 'Слика 2' },
        { src: salata, alt: 'Слика 3' },
        { src: patka1, alt: 'Слика 4' },
        { src: ribs, alt: 'Слика 5' },
        { src: banana, alt: 'Слика 6' },
        { src: batak, alt: 'Слика 7' },
        { src: sladoled, alt: 'Слика 8' },
        { src: pohocoko, alt: 'Слика 9' }
      ]
    };
  }
};
</script>

<style scoped>
.gallery {
  padding: 20px;
}

.video-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.video-container {
  flex: 1 1 300px;
  max-width: 45%;
  margin-bottom: 20px;
}

.video-container iframe {
  width: 100%;
  height: 200px;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20px;
}

.image-container {
  flex: 1 1 300px;
  max-width: 45%;
  margin-bottom: 20px;
}

.image-container img {
  width: 100%;
  height: 200px; /* Set a fixed height for all images */
  object-fit: cover; /* Ensures images are scaled to fit the container */
}
</style>
