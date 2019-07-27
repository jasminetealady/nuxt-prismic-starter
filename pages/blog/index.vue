<template>
  <div :class="$mq" class="page">
    <article class="flex-center-column">
      <h1>Blog</h1>
      <input
        class="input margin-bottom-2"
        v-model="searchQuery"
        :keypress="filterBySearch(searchQuery)"
        placeholder="Search for a Post"
      />
      <!-- Button to edit document in dashboard -->
      <prismic-edit-button :documentId="documentId" />
      <div class="blog-avatar" :style="{ backgroundImage: 'url(' + image + ')' }"></div>

      <!-- Razelle's Blog -->
      <!-- <h1 class="blog-title">{{ $prismic.richTextAsPlain(homepageContent.headline) }}</h1>-->

      <!-- Description: "A Place I Write In"-->
      <!-- <p class="blog-description">{{ $prismic.richTextAsPlain(homepageContent.description) }}</p> -->

      <!-- Check blog posts exist -->
      <div v-if="posts.length !== 0" :class="$mq" class="blog-main">
        <!-- Template for blog posts -->
        <section
          v-for="post in posts"
          :key="post.id"
          v-bind:post="post"
          class="blog-post flex-center"
        >
          <!-- Here :post="post" passes the data to the component -->
          <blog-widget :post="post"></blog-widget>
        </section>
      </div>

      <!-- <div v-else-if="posts.length !== 0 && searchQuery" :class="$mq" class="blog-main">
        <section
          v-for="post in filterBySearch(searchQuery)"
          :key="post.id"
          v-bind:post="post"
          class="blog-post flex-center"
        >
          <blog-widget :post="post"></blog-widget>
        </section>
      </div>-->

      <!-- If no blog posts return message -->
      <div v-else-if="searchQuery" class="blog-main">
        <p>Searching ...</p>
      </div>

      <div v-else class="blog-main">
        <p>No Posts published at this time.</p>
      </div>
    </article>
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
// Importing blog posts widget
import BlogWidget from "~/components/BlogWidget.vue";

export default {
  data() {
    dataLoaded: false;
  },
  beforeMount() {
    this.$root.$forceUpdate();
  },
  updated() {
    this.$root.$forceUpdate();
  },
  components: {
    BlogWidget
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    filterBySearch(searchQuery) {
      var Prismic = require("prismic-javascript");

      Prismic.getApi("https://razelle.prismic.io/api/v2")
        .then(function(api) {
          return api.query([
            Prismic.Predicates.at("document.type", "post"),
            Prismic.Predicates.fulltext("document", searchQuery)
          ]);
        })
        .then(response => (this.posts = response.results));
    }
  },
  head() {
    return {
      title: "Prismic Nuxt.js Blog"
    };
  },
  async asyncData({ context, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      // Query to get blog home content
      const document = await api.getSingle("blog_home");
      let homepageContent = document.data;

      // Query to get posts content to preview
      const blogPosts = await api.query(
        Prismic.Predicates.at("document.type", "post"),
        { orderings: "[my.post.date desc]" }
      );

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      // Returns data to be used in template
      return {
        homepageContent,
        documentId: document.id,
        posts: blogPosts.results,
        image: homepageContent.image.url
      };
      this.dataLoaded = true;
    } catch (e) {
      // Returns error page
      error({
        statusCode: 404,
        message: "Blog posts could not be retrieved at this time."
      });
    }
  }
};
</script>

<style lang="sass" scoped>

</style>