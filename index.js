$(document).ready(function () {
  // Define your variables
  var data = {
    firstname: "Junaid",
    lastname: "Shaukat",
    country: "Pakistan",
    experience: new Date().getFullYear() - 2020,
    phone: "923181524864",
    email: "junaidshaukat123@gmail.com",
    fulladdress: "Arsalan Town, Islamabad, Pakistan",
    age: new Date().getFullYear() - 1997,
    projects: 50,
    clients: 15,
  };

  var service_list = [
    {
      title: "Web Design",
      popup_image: "img/service/2.jpg",
      subtitle: "Web development is the process of building,  programming...",
      descriptions: [
        `Elisc is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.`,
      ],
    },
  ];

  $.each(data, function (key, value) {
    $("body")
      .find(":contains('{" + key + "}')")
      .each(function () {
        $(this).html(
          $(this)
            .html()
            .replace(new RegExp("{" + key + "}", "g"), value)
        );
      });
  });
});
