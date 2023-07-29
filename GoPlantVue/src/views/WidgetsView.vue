<template>
  <div class="widgets-page">
    <section class="search-section">
      <h2>Search</h2>
      <div class="search">
        <img src="../assets/search.svg" />
        <input type="text" placeholder="Search for a friend, a post, a group..." />
      </div>
    </section>
    <section class="my-widgets">
      <h4>My Widgets</h4>
      <div class="widgets">
        <div class="widget friends-bg-color">
          <h3>Friends</h3>
          <img src="../assets/friends.svg" />
        </div>
        <div class="widget groups-bg-color">
          <h3>Groups</h3>
          <img src="../assets/groups.svg" />
        </div>
        <div class="widget chats-bg-color">
          <h3>Chats</h3>
          <img src="../assets/chat.svg" />
        </div>
        <div class="widget posts-bg-color">
          <h3 class="text-dark-green">Posts</h3>
          <img src="../assets/posts.svg" />
        </div>
        <div class="widget recipes-bg-color">
          <h3 class="text-dark-green">Recipes</h3>
          <img src="../assets/recipes.svg" />
        </div>
        <div class="widget trades-bg-color">
          <h3 class="text-dark-green">Trades</h3>
          <img src="../assets/trade.svg" />
        </div>
        <div class="widget tutorials-bg-color">
          <h3 class="text-dark-green">Tutorials</h3>
          <img src="../assets/tutorials.svg" />
        </div>
        <div class="widget events-bg-color">
          <h3>Events</h3>
          <img src="../assets/events.svg" />
        </div>
        <div class="widget likes-bg-color">
          <h3>Likes</h3>
          <img src="../assets/likes.svg" />
        </div>
      </div>
    </section>
    <section class="more-widgets">
      <h4>My Widgets</h4>
      <div class="widgets">
        <div class="widget friends-bg-color">
          <h3>Add Friends</h3>
          <img src="../assets/friends.svg" />
        </div>
        <div class="widget groups-bg-color">
          <h3>Join Groups</h3>
          <img src="../assets/groups.svg" />
        </div>
        <div class="widget chats-bg-color">
          <h3>New Chats</h3>
          <img src="../assets/chat.svg" />
        </div>
        <div class="widget posts-bg-color">
          <h3 class="text-dark-green">New Posts</h3>
          <img src="../assets/posts.svg" />
        </div>
        <div class="widget recipes-bg-color">
          <h3 class="text-dark-green">Explore Recipes</h3>
          <img src="../assets/recipes.svg" />
        </div>
        <div class="widget trades-bg-color">
          <h3 class="text-dark-green">Find Items</h3>
          <img src="../assets/trade.svg" />
        </div>
        <div class="widget tutorials-bg-color">
          <h3 class="text-dark-green">Explore Tutorials</h3>
          <img src="../assets/tutorials.svg" />
        </div>
        <div class="widget events-bg-color">
          <h3>Explore Events</h3>
          <img src="../assets/events.svg" />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.widgets-page {
  width: 77%;
  margin: 0 auto;
}

/* ---- search ---- */
.widgets-page .search-section {
  padding: 38px 0 15px;
  position: fixed;
  z-index: 1;
  background-color: var(--gradient-top-color);
  width: 77%;
}

.widgets-page .search-section h2 {
  color: #000;
  font-family: Andika;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.1%; /* 16.016px */
  letter-spacing: 0.8px;
}

.widgets-page .search-section .search {
  display: flex;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  padding: 0 10px;
  gap: 10px;
  border-radius: 10px;
  background-color: #fff;
}

.widgets-page .search-section .search input {
  width: inherit;
  border: none;
  color: #818181;
  font-family: Andika;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.1%; /* 12.012px */
  letter-spacing: 0.6px;
}
.widgets-page .search-section .search img {
  width: 24px;
}

/* ---- widgets ---- */
.widgets-page .my-widgets {
  margin-top: 108px;
}

.widgets-page .more-widgets {
  margin-top: 15px;
}

.widgets-page h4 {
  color: #000;
  font-family: Andika;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 195.633%; /* 27.389px */
  letter-spacing: 1.4px;
}

.widgets-page .widgets {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 10px;
}

.widgets-page .widgets .widget {
  min-width: 151px;
  height: 85px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
}

.widgets-page .widgets .widget h3 {
  color: #fff;
  font-family: Andika;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.1%; /* 16.016px */
  letter-spacing: 0.8px;
}

.widgets-page .widgets .widget img {
  width: 52px;
  position: absolute;
  right: 10px;
  bottom: 5px;
}
</style>
