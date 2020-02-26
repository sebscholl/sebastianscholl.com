<template>
  <Layout>
    <img class="profile-image" src="../../uploads/Profile.png" />

    <h2 class="mb-4 text-intro">Hi, I'm Sebastian.</h2>
    
    <p>
      This is a starter project for Gridsome that comes with many features out
      of the box. It utilizes Bootstrap that is well known for powerful styling
      and layout. Ready to be deployed, automagically imports data to CMS and
      sets up your /admin page for easy access to edit your content.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home page | Sebastian Scholl professional site"
  }
};
</script>

<style>
.profile-image {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid white;
}

.text-intro {
  text-align: center;
}
</style>
