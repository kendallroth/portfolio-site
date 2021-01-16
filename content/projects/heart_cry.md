---
date: 2020-04-30
image: ./images/heart_cry_site.png
name: Heart Cry Ensemble
link: https://www.heartcryensemble.ca
pinned: true
published: true
slug: heart-cry
status: Active
tags: [web, gridsome, vuejs, scss, sanity.io, netlify]
type: Website
---

The Heart Cry Ensemble website was primarily created to serve as a landing page for people making inquiries about the group.

> Heart Cry is a small mixed ensemble dedicated to preserving the quality of our spiritual musical heritage by impacting our community through the heart cry of music.

The website intially used Wordpress but we wanted a site that was purely static/frontend to minimize costs, so the search began. This was my first project using Gridsome (Vue SPA framework) and I was pleasantly surprised by how easy it was to setup. I found the developer experience more appealing than Gatsby, and was happy to trade off the larger community that Gatsby supports. Additionally, I have enjoyed working with Vue in several small projects (both work and personal).

It was important that the site's content could be edited by non-developers, so a CRM was needed. Initially the content was provided by Strapi, but I soon abandoned that in favour of Sanity.io. Sanity was easier to customize and setup, especially since it didn't require an additional server. After a bit of tweaking and data entry, the "backend" was ready to go! After copying our initial landing page, I quickly templated a few other pages and used the Sanity data source to grab the data for the static pages. After that it was just a manner of configuring two Netlify sites (one for the app and one for the admin panel) and the site was deployed!
