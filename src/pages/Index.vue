<template>
  <Layout>
    <img class="profile-image" src="../../static/Profile.png" />

    <h2 class="my-4 text-intro">Hi, I'm Sebastian.</h2>

    <p>
      There's not much to see here...
    </p>

    <p>
      If you want to connect, use one of the platforms linked below.
    </p>

    <p>
      Otherwise...
      <a
        href="https://www.google.com/search?q=Sebastian+Scholl"
        class="google-link"
        >Google?</a
      >
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home page | Sebastian Scholl professional site",
  },
};
</script>

<style>
* {
  text-align: center;
}

.profile-image {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid white;
}

.google-link {
  color: white;
  text-decoration: underline;
}

.text-intro {
  text-align: center;
}
</style>
