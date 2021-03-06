# Channel
[View Heroku][heroku]
[heroku]: https://connect-beta.herokuapp.com/
[trello]: https://trello.com/b/R2fRBfdm/channel

## Minimum Viable Product

Channel is a web application inspired by Medium built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Stories
- [ ] Commenting
- [ ] Follows and Custom Feed
- [ ] Likes
- [ ] Infinite Scroll BONUS
- [ ] Rich Text Editing BONUS
- [ ] Topics/categories BONUS
- [ ] Bookmarks BONUS
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Stories Model, API, and components (2 days)

**Objective:** Stories can be created, read, edited and destroyed through
the API.

### Phase 3: Stories (2 days)
**Objective:** Stories can be created, read, edited and destroyed through the API.  Allow rich text editing of posts using Draft.js or another suitable library.

### Phase 4: Commenting (1 day)

**Objective:** Stories can be commented on, same CRUD interface as above.

### Phase 5: Follows and Feed (1 days, W2 Th 6pm)

**objective:** Users can follow authors or posts, thereby altering the information in their feed. Users can also like posts.

### Phase 6: - Infinite scroll for Posts Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Posts Index

### Bonus Features (TBD)
- [ ] Topics/Categories to find and follow posts by
- [ ] Bookmarks
- [ ] Inline commenting/quoting
- [ ] Email link login
