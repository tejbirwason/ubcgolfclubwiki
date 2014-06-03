
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["readme.html#about"] = "About";
index.add({
    url: "readme.html#about",
    title: "About",
    body: "# About    "
});

documentTitles["readme.html#membership"] = "Membership";
index.add({
    url: "readme.html#membership",
    title: "Membership",
    body: "# Membership    "
});

documentTitles["readme.html#practices"] = "Practices";
index.add({
    url: "readme.html#practices",
    title: "Practices",
    body: "# Practices  "
});

documentTitles["readme.html#tee-times"] = "Tee Times";
index.add({
    url: "readme.html#tee-times",
    title: "Tee Times",
    body: "# Tee Times    "
});

documentTitles["readme.html#discounts"] = "Discounts";
index.add({
    url: "readme.html#discounts",
    title: "Discounts",
    body: "# Discounts    "
});

documentTitles["readme.html#sub-office"] = "SUB Office";
index.add({
    url: "readme.html#sub-office",
    title: "SUB Office",
    body: "# SUB Office    "
});

documentTitles["readme.html#rentals"] = "Rentals";
index.add({
    url: "readme.html#rentals",
    title: "Rentals",
    body: "# Rentals    "
});

documentTitles["readme.html#trips"] = "Trips";
index.add({
    url: "readme.html#trips",
    title: "Trips",
    body: "# Trips "
});

documentTitles["readme.html#whistler"] = "Whistler";
index.add({
    url: "readme.html#whistler",
    title: "Whistler",
    body: "## Whistler "
});

documentTitles["readme.html#seattle"] = "Seattle";
index.add({
    url: "readme.html#seattle",
    title: "Seattle",
    body: "## Seattle "
});

documentTitles["readme.html#victoria"] = "Victoria";
index.add({
    url: "readme.html#victoria",
    title: "Victoria",
    body: "## Victoria  "
});

documentTitles["readme.html#socials"] = "Socials";
index.add({
    url: "readme.html#socials",
    title: "Socials",
    body: "# Socials "
});

documentTitles["readme.html#boozing"] = "Boozing";
index.add({
    url: "readme.html#boozing",
    title: "Boozing",
    body: "## Boozing"
});


