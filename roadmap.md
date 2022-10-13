Oct 9:

- Most static CSS is done now and it's possible to navigate between Home, Listings, and user profiles
- There's some reviews feature, but not all populated on each user page, this requires backend to be more cleaned up as dummy data was used to get going.

--

- Final features to add before moving on:

0. To Do List
1. Book a stay, i.e. choose date and total will calculate nights + any service or booking fees, choose number of guests. All dates will be assumed to be available for now.
2. Check availability button will turn into reserve once dates are inputted
3. Clicking reserve will take user to a page that states the trip details with a final "confirm and pay" reservation button
4. Search bar functionality (just pop up modal for now)

---

---

0. Done
1. Animate skeleton loading, pulse gray
2. Close Modal when click away useRef? : https://www.youtube.com/watch?v=IF6k0uZuypA
3. Register and sign in: use firebase auth services: https://www.youtube.com/watch?v=j9IT0E835B8

---

---

Launch Notes below:

Page types:

1. Home page
2. Listing

Home Page Components:

1. Sticky header:

- Left: logo
- Middle: Search button / bar/ filter: Where, Check in, Check out, Who,
- Right: Login area, Become a host, Choose language
- Bottom (header): Stay feature types side scroll with icons
- Filter Button: Pops a modal to filter: price, type of place, bedrooms etc..

2. Sticky footer:

- Left: Copyright, Legal Pages (Privacy, terms, sitemap) Destinations
- Right: Choose Language, currency, support & resources tab

3.  Main:

- Bottom: Fixed Show map button (links to new page that searches by map)
- Stay cards: Pics (has side arrows to flip through), Title, Rating, miles away, duration, $/night, favorite button to save stay
- Infinite scroll for different listings

Listing Page Components:

1. Title
2. Gallery display
3. Booking input field: Dates, Guests
4. Reviews: Regular UI and pop up modal
5. Map
6. About the Host
7. Various text sectoins
8. Footer: Support, Community, Hosting, Airbnb

Animations needed:

- Infinite scrolls for main
- Hovering
- Slide up
- drop down menu
- mini to max + opacity (looks like a drop down menu) for search bar / button area

Backend stuff:

- Firebase Auth
- Listings Data: set up clone data.js file so site can work off firebase documents or the file (due to firebase call limits)

How to proceed:

- Build out the static pages first
- Create faux data: determine which data points will be kept, at most 3 data points per field for simplicity
- Potentially skip animations in this first draft, as I believe there are advanace animation lessons

Main Features to cover:

- Register and sign in
- View and browse listings
- Book a stay
- View a host / user page
- Create listings
- Data Example for user and listing (root/exampleData.js)
- Map (use GoogleMaps)

What to work on (in order):

- Home Page
- Listing Page
- User Page
- Header / Nav
- Footer

Oct 9: Adding Features
